"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function TypeSafetyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Type Safety</h1>

      <p className="text-xl text-text-secondary mb-8">
        Get compile-time validation, autocomplete, and runtime checks with genaql&apos;s TypeScript integration.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Defining Your Schema</h2>

      <p className="text-text-secondary mb-4">
        Use <code className="text-neon-lime">defineSchema</code> to declare your database structure:
      </p>

      <CodeBlock
        code={`import { defineSchema } from 'genaql';

export const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text',
    role: { type: 'text', default: 'user' },
    created_at: { type: 'timestamp', default: 'now()' },
    updated_at: 'timestamp?'  // nullable
  },
  posts: {
    id: 'serial',
    title: 'text',
    content: 'text',
    user_id: 'integer',
    published: { type: 'boolean', default: false }
  }
});`}
        title="schema.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Column Types</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">genaql Type</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">TypeScript</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">PostgreSQL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">text</code></td>
              <td className="py-3 px-4 text-text-secondary">string</td>
              <td className="py-3 px-4 text-text-muted">TEXT / VARCHAR</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">integer</code></td>
              <td className="py-3 px-4 text-text-secondary">number</td>
              <td className="py-3 px-4 text-text-muted">INTEGER</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">serial</code></td>
              <td className="py-3 px-4 text-text-secondary">number</td>
              <td className="py-3 px-4 text-text-muted">SERIAL</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">boolean</code></td>
              <td className="py-3 px-4 text-text-secondary">boolean</td>
              <td className="py-3 px-4 text-text-muted">BOOLEAN</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">timestamp</code></td>
              <td className="py-3 px-4 text-text-secondary">Date</td>
              <td className="py-3 px-4 text-text-muted">TIMESTAMP</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">json</code></td>
              <td className="py-3 px-4 text-text-secondary">unknown</td>
              <td className="py-3 px-4 text-text-muted">JSONB</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-keyword">uuid</code></td>
              <td className="py-3 px-4 text-text-secondary">string</td>
              <td className="py-3 px-4 text-text-muted">UUID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Compile-Time Validation</h2>

      <p className="text-text-secondary mb-4">
        TypeScript catches errors before your code runs:
      </p>

      <CodeBlock
        code={`// ✓ Valid - all columns exist
cook\`main:users slay:id,name,email\`

// ✗ Error - column doesn't exist
cook\`main:users slay:id,name,nonexistent\`
//                          ^^^^^^^^^^^
// Type Error: Column 'nonexistent' does not exist

// ✗ Error - table doesn't exist
cook\`main:invalid_table slay:*\`
//        ^^^^^^^^^^^^^
// Type Error: Table 'invalid_table' does not exist`}
        title="validation.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Inferred Return Types</h2>

      <p className="text-text-secondary mb-4">
        Query results are automatically typed based on your selection:
      </p>

      <CodeBlock
        code={`const users = await db.query(
  cook\`main:users slay:id,name,email sus:active=true\`
);

// TypeScript knows the shape:
// users: Array<{ id: number; name: string; email: string }>

users.forEach(user => {
  console.log(user.name);    // ✓ OK
  console.log(user.invalid); // ✗ Error: Property 'invalid' does not exist
});`}
        title="inferred.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Runtime Validation</h2>

      <p className="text-text-secondary mb-4">
        Enable runtime checks for additional safety in development:
      </p>

      <CodeBlock
        code={`import { createClient } from 'genaql';

const db = createClient({
  dialect: 'postgres',
  pool,
  schema,
  validate: process.env.NODE_ENV === 'development'
});

// In development, invalid queries throw helpful errors
// In production, validation is skipped for performance`}
        title="runtime.ts"
      />

      <div className="feature-card bg-neon-pink/5 border-neon-pink/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-pink">Best Practice</h3>
        <p className="text-text-secondary text-sm">
          Define your schema in a separate file and import it wherever you use genaql.
          This ensures consistent type checking across your entire codebase.
        </p>
      </div>
    </article>
  );
}
