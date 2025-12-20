"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function QuickStartPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Quick Start</h1>

      <p className="text-xl text-text-secondary mb-8">
        Get up and running with sqaull in 5 minutes. Write your first query and connect to a database.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Import sqaull</h2>

      <p className="text-text-secondary mb-4">
        Start by importing the template literal function:
      </p>

      <CodeBlock
        og={`import { gull } from 'sqaull';

// That's it! You're ready to write queries`}
        genalpha={`import { gull } from 'sqaull';

// That's it! You're ready to write queries`}
        title="app.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Write Your First Query</h2>

      <p className="text-text-secondary mb-4">
        Use the <code className="text-neon-lime">gull</code> template literal to write a query:
      </p>

      <CodeBlock
        og={`const users = gull\`from:users sel:id,name,email whr:active=true lim:10\`;

// Get the SQL string
console.log(users.toSQL());
// → SELECT id, name, email FROM users WHERE active = $1 LIMIT $2

// Get SQL with params for safe execution
const { sql, params } = users.toParams();
// → { sql: "SELECT ... WHERE active = $1 LIMIT $2", params: [true, 10] }`}
        genalpha={`const users = gull\`main:users slay:id,name,email sus:active=true bet:10\`;

// Get the SQL string
console.log(users.toSQL());
// → SELECT id, name, email FROM users WHERE active = $1 LIMIT $2

// Get SQL with params for safe execution
const { sql, params } = users.toParams();
// → { sql: "SELECT ... WHERE active = $1 LIMIT $2", params: [true, 10] }`}
        title="query.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Connect to a Database</h2>

      <p className="text-text-secondary mb-4">
        To actually run queries, create a client with your database connection:
      </p>

      <CodeBlock
        og={`import { createClient } from 'sqaull';
import { Pool } from 'pg';

// Create a PostgreSQL pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Create a sqaull client
const db = createClient({
  dialect: 'postgres',
  pool
});

// Now you can run queries!
const users = await db.query(
  gull\`from:users sel:* whr:role=admin\`
);`}
        genalpha={`import { createClient } from 'sqaull';
import { Pool } from 'pg';

// Create a PostgreSQL pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Create a sqaull client
const db = createClient({
  dialect: 'postgres',
  pool
});

// Now you can run queries!
const users = await db.query(
  gull\`main:users slay:* sus:role=admin\`
);`}
        title="db.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Add Type Safety (Optional)</h2>

      <p className="text-text-secondary mb-4">
        For compile-time validation, define your schema:
      </p>

      <CodeBlock
        og={`import { defineSchema, gull } from 'sqaull';

const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text',
    role: 'text',
    created_at: 'timestamp'
  }
});

// TypeScript will catch errors!
const query = gull\`from:users sel:name,email,nonexistent\`;
//                                        ^^^^^^^^^^^
// Error: Column 'nonexistent' does not exist on table 'users'`}
        genalpha={`import { defineSchema, gull } from 'sqaull';

const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text',
    role: 'text',
    created_at: 'timestamp'
  }
});

// TypeScript will catch errors!
const query = gull\`main:users slay:name,email,nonexistent\`;
//                                           ^^^^^^^^^^^
// Error: Column 'nonexistent' does not exist on table 'users'`}
        title="schema.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">You&apos;re Ready!</h3>
        <p className="text-text-secondary text-sm">
          You now know the basics of sqaull. Explore the{" "}
          <a href="/docs/syntax" className="text-neon-lime hover:underline">Syntax Reference</a>{" "}
          for all available utilities, or check out{" "}
          <a href="/docs/type-safety" className="text-neon-lime hover:underline">Type Safety</a>{" "}
          for advanced TypeScript integration.
        </p>
      </div>
    </article>
  );
}
