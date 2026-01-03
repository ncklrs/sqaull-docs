import { CodeBlock } from "@/components/CodeBlock";

export default function TransactionsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Transactions</h1>

      <p className="text-xl text-text-secondary mb-8">
        Execute multiple operations atomically with database transactions.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Transactions</h2>

      <CodeBlock
        code={`// Automatic transaction with callback
await db.transaction(async (trx) => {
  // All queries use the transaction
  const user = await trx.query(
    cook\`nocap:users drip:name,email fire:John,john@test.com flex:id\`
  );

  await trx.query(
    cook\`nocap:profiles drip:user_id,bio fire:\${user.id},New user\`
  );

  // If any query fails, all changes are rolled back
});`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Manual Transactions</h2>

      <CodeBlock
        code={`// Manual control over commit/rollback
const trx = await db.beginTransaction();

try {
  await trx.query(cook\`glow:accounts rizz:balance=balance-100 sus:id=1\`);
  await trx.query(cook\`glow:accounts rizz:balance=balance+100 sus:id=2\`);

  // Commit if all successful
  await trx.commit();
} catch (error) {
  // Rollback on any error
  await trx.rollback();
  throw error;
}`}
        title="manual.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Nested Transactions (Savepoints)</h2>

      <CodeBlock
        code={`await db.transaction(async (trx) => {
  await trx.query(cook\`nocap:orders drip:user_id,total fire:1,100\`);

  // Create a savepoint
  await trx.transaction(async (nested) => {
    await nested.query(cook\`nocap:order_items drip:order_id,product_id fire:1,42\`);

    // This inner transaction can be rolled back independently
    if (outOfStock) {
      throw new Error('Out of stock');
      // Only rolls back to savepoint, outer transaction continues
    }
  }).catch(() => {
    // Handle nested transaction failure
    console.log('Order item failed, continuing without it');
  });

  // Outer transaction still commits
});`}
        title="savepoints.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Isolation Levels</h2>

      <CodeBlock
        code={`// Set isolation level
await db.transaction(
  async (trx) => {
    // Queries here see a consistent snapshot
    const balance = await trx.query(cook\`main:accounts slay:balance sus:id=1\`);
  },
  { isolation: 'serializable' }
);

// Available levels:
// - 'read uncommitted'
// - 'read committed' (default)
// - 'repeatable read'
// - 'serializable'`}
        title="isolation.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Retry Logic</h2>

      <CodeBlock
        code={`// Automatic retry on serialization failures
await db.transaction(
  async (trx) => {
    const account = await trx.query(
      cook\`main:accounts slay:* sus:id=1\`
    );

    await trx.query(
      cook\`glow:accounts rizz:balance=\${account.balance - 100} sus:id=1\`
    );
  },
  {
    isolation: 'serializable',
    retry: {
      times: 3,
      delay: 100,  // ms between retries
      onRetry: (attempt, error) => {
        console.log(\`Retry \${attempt}: \${error.message}\`);
      }
    }
  }
);`}
        title="retry.ts"
      />

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="feature-card bg-neon-lime/5 border-neon-lime/20">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">When to Use</h3>
          <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
            <li>Money transfers between accounts</li>
            <li>Creating related records together</li>
            <li>Inventory updates with orders</li>
            <li>Any multi-step data changes</li>
          </ul>
        </div>
        <div className="feature-card bg-neon-pink/5 border-neon-pink/20">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">Best Practices</h3>
          <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
            <li>Keep transactions short</li>
            <li>Don&apos;t do I/O inside transactions</li>
            <li>Use appropriate isolation levels</li>
            <li>Handle deadlocks with retries</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
