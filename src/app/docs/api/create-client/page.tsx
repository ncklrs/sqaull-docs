"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function CreateClientApiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">createClient</h1>

      <p className="text-xl text-text-secondary mb-8">
        Create a database client for executing queries with connection pooling and type safety.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Import</h2>

      <CodeBlock
        code={`import { createClient } from 'genaql';`}
        title="import.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Usage</h2>

      <CodeBlock
        code={`import { createClient, cook } from 'genaql';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const db = createClient({
  dialect: 'postgres',
  pool
});

// Execute queries
const users = await db.query(cook\`main:users slay:*\`);`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Configuration Options</h2>

      <CodeBlock
        code={`const db = createClient({
  // Required: Database dialect
  dialect: 'postgres' | 'mysql' | 'sqlite',

  // Connection (one of these)
  pool: Pool,               // pg or mysql2 pool
  connection: Connection,   // Single connection
  database: string,         // SQLite file path

  // Optional: Schema for type safety
  schema: Schema,

  // Optional: Query logging
  logging: true,  // or custom function
  // logging: (sql, params, duration) => console.log(sql)

  // Optional: Runtime validation
  validate: process.env.NODE_ENV === 'development',

  // Optional: Soft delete behavior
  softDelete: true,  // Uses schema config

  // Optional: Auto-timestamps
  timestamps: true,  // Uses schema config
});`}
        title="options.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Client Methods</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Method</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Returns</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code>.query(q)</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;T[]&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Execute SELECT query, return rows</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.queryOne(q)</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;T | null&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Execute query, return first row</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.execute(q)</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;Result&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Execute INSERT/UPDATE/DELETE</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.raw(sql, params)</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;any&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Execute raw SQL</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.transaction(fn)</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;T&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Execute in transaction</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.beginTransaction()</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;Trx&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Start manual transaction</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.close()</code></td>
              <td className="py-3 px-4 text-text-muted">Promise&lt;void&gt;</td>
              <td className="py-3 px-4 text-text-secondary">Close connection pool</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Query Methods</h2>

      <CodeBlock
        code={`// Select multiple rows
const users = await db.query(cook\`main:users slay:* sus:active=true\`);
// users: User[]

// Select single row
const user = await db.queryOne(cook\`main:users slay:* sus:id=1\`);
// user: User | null

// Insert and return
const result = await db.execute(
  cook\`nocap:users drip:name,email fire:John,john@test.com flex:id\`
);
// result: { id: 1 }

// Update
const updated = await db.execute(
  cook\`glow:users rizz:status=active sus:id=1 flex:*\`
);
// updated: { id: 1, status: 'active', ... }

// Delete
const deleted = await db.execute(
  cook\`yeet:users sus:id=1 flex:id\`
);
// deleted: { id: 1 }`}
        title="methods.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With Schema (Type Safe)</h2>

      <CodeBlock
        code={`import { createClient, cook, defineSchema } from 'genaql';

const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text'
  }
});

const db = createClient({
  dialect: 'postgres',
  pool,
  schema
});

// TypeScript knows the return type!
const users = await db.query(cook\`main:users slay:id,name\`);
// users: Array<{ id: number; name: string }>

// Errors on invalid columns
const bad = await db.query(cook\`main:users slay:invalid\`);
//                                              ^^^^^^^
// Type Error: Column 'invalid' does not exist`}
        title="type-safe.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Lifecycle</h2>

      <CodeBlock
        code={`// Create client at app startup
const db = createClient({ /* ... */ });

// Use throughout your app
export { db };

// Close on shutdown
process.on('SIGTERM', async () => {
  await db.close();
  process.exit(0);
});`}
        title="lifecycle.ts"
      />

      <div className="feature-card bg-neon-orange/5 border-neon-orange/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-orange">Important</h3>
        <p className="text-text-secondary text-sm">
          Create the client once at application startup and reuse it.
          Don&apos;t create new clients per request — this wastes connections and hurts performance.
        </p>
      </div>
    </article>
  );
}
