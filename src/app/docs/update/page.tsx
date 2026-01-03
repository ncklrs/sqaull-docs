import { CodeBlock } from "@/components/CodeBlock";

export default function UpdatePage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">UPDATE Statements</h1>

      <p className="text-xl text-text-secondary mb-8">
        Update existing records with precision and safety.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic UPDATE</h2>

      <CodeBlock
        code={`// Update a single column
cook\`glow:users rizz:status=active sus:id=1\`
// → UPDATE users SET status = $1 WHERE id = $2

// Update multiple columns
cook\`glow:users rizz:status=active,verified=true sus:id=1\`
// → UPDATE users SET status = $1, verified = $2 WHERE id = $3`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With RETURNING</h2>

      <CodeBlock
        code={`// Return updated row
cook\`glow:users rizz:status=active sus:id=1 flex:*\`
// → UPDATE users SET status = $1 WHERE id = $2 RETURNING *

// Return specific columns
cook\`glow:users rizz:status=active sus:id=1 flex:id,status,updated_at\`
// → UPDATE users SET status = $1 WHERE id = $2 RETURNING id, status, updated_at`}
        title="returning.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Conditional Updates</h2>

      <CodeBlock
        code={`// Update with multiple conditions
cook\`glow:users rizz:role=admin sus:email=boss@company.com sus:verified=true\`
// → UPDATE users SET role = $1 WHERE email = $2 AND verified = $3

// Update with OR conditions
cook\`glow:posts rizz:status=archived sus:published=false|views<10\`
// → UPDATE posts SET status = $1 WHERE published = $2 OR views < $3`}
        title="conditional.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Increment/Decrement</h2>

      <CodeBlock
        code={`// Increment a counter
cook\`glow:posts rizz:views=views+1 sus:id=42\`
// → UPDATE posts SET views = views + 1 WHERE id = $1

// Decrement with variable
const amount = 5;
cook\`glow:accounts rizz:balance=balance-\${amount} sus:user_id=1\`
// → UPDATE accounts SET balance = balance - $1 WHERE user_id = $2`}
        title="increment.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Timestamp Updates</h2>

      <CodeBlock
        code={`// Set to current timestamp
cook\`glow:users rizz:last_login=now() sus:id=1\`
// → UPDATE users SET last_login = NOW() WHERE id = $1

// Set updated_at automatically (with schema config)
cook\`glow:posts rizz:title=New Title sus:id=1\`
// → UPDATE posts SET title = $1, updated_at = NOW() WHERE id = $2`}
        title="timestamps.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Bulk Updates</h2>

      <CodeBlock
        code={`// Update multiple rows matching a condition
cook\`glow:users rizz:newsletter=false sus:last_login<2024-01-01\`
// → UPDATE users SET newsletter = $1 WHERE last_login < $2

// Update all rows (use with caution!)
cook\`glow:settings rizz:cache_version=2\`
// → UPDATE settings SET cache_version = $1`}
        title="bulk.ts"
      />

      <div className="feature-card bg-neon-orange/5 border-neon-orange/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-orange">Warning</h3>
        <p className="text-text-secondary text-sm">
          Always include a WHERE clause in UPDATE statements unless you intentionally want to
          update all rows. genaql can be configured to require WHERE clauses for safety.
        </p>
      </div>
    </article>
  );
}
