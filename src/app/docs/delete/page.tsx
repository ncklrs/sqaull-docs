"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function DeletePage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">DELETE Statements</h1>

      <p className="text-xl text-text-secondary mb-8">
        Remove records from your database safely and precisely.
        {isGenAlpha && " Yeet that data into the void 🕳️"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic DELETE</h2>

      <CodeBlock
        og={`// Delete by ID
cook\`del:users whr:id=1\`
// → DELETE FROM users WHERE id = $1

// Delete by condition
cook\`del:sessions whr:expired=true\`
// → DELETE FROM sessions WHERE expired = $1`}
        genalpha={`// Delete by ID
cook\`yeet:users sus:id=1\`
// → DELETE FROM users WHERE id = $1

// Delete by condition
cook\`yeet:sessions sus:expired=true\`
// → DELETE FROM sessions WHERE expired = $1`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With RETURNING</h2>

      <CodeBlock
        og={`// Return deleted row
cook\`del:users whr:id=1 ret:*\`
// → DELETE FROM users WHERE id = $1 RETURNING *

// Return specific columns
cook\`del:users whr:id=1 ret:id,email\`
// → DELETE FROM users WHERE id = $1 RETURNING id, email`}
        genalpha={`// Return deleted row
cook\`yeet:users sus:id=1 flex:*\`
// → DELETE FROM users WHERE id = $1 RETURNING *

// Return specific columns
cook\`yeet:users sus:id=1 flex:id,email\`
// → DELETE FROM users WHERE id = $1 RETURNING id, email`}
        title="returning.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Conditional Deletes</h2>

      <CodeBlock
        og={`// Multiple conditions
cook\`del:posts whr:status=draft whr:created_at<2024-01-01\`
// → DELETE FROM posts WHERE status = $1 AND created_at < $2

// OR conditions
cook\`del:notifications whr:read=true|created_at<2024-01-01\`
// → DELETE FROM notifications WHERE read = $1 OR created_at < $2

// Using IN
cook\`del:users whr:id.in(1,2,3,4,5)\`
// → DELETE FROM users WHERE id IN ($1, $2, $3, $4, $5)`}
        genalpha={`// Multiple conditions
cook\`yeet:posts sus:status=draft sus:created_at<2024-01-01\`
// → DELETE FROM posts WHERE status = $1 AND created_at < $2

// OR conditions
cook\`yeet:notifications sus:read=true|created_at<2024-01-01\`
// → DELETE FROM notifications WHERE read = $1 OR created_at < $2

// Using IN
cook\`yeet:users sus:id.in(1,2,3,4,5)\`
// → DELETE FROM users WHERE id IN ($1, $2, $3, $4, $5)`}
        title="conditional.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Soft Deletes</h2>

      <p className="text-text-secondary mb-4">
        Instead of hard deletes, mark records as deleted:
      </p>

      <CodeBlock
        og={`// Configure soft deletes in schema
const schema = defineSchema({
  users: {
    // ... columns
    deleted_at: 'timestamp?'
  }
}, {
  softDelete: {
    column: 'deleted_at',
    tables: ['users', 'posts']
  }
});

// This becomes an UPDATE instead of DELETE
cook\`del:users whr:id=1\`
// → UPDATE users SET deleted_at = NOW() WHERE id = $1

// Force hard delete when needed
cook\`del:users whr:id=1 hard:true\`
// → DELETE FROM users WHERE id = $1`}
        genalpha={`// Configure soft deletes in schema
const schema = defineSchema({
  users: {
    // ... columns
    deleted_at: 'timestamp?'
  }
}, {
  softDelete: {
    column: 'deleted_at',
    tables: ['users', 'posts']
  }
});

// This becomes an UPDATE instead of DELETE
cook\`yeet:users sus:id=1\`
// → UPDATE users SET deleted_at = NOW() WHERE id = $1

// Force hard delete when needed
cook\`yeet:users sus:id=1 hard:true\`
// → DELETE FROM users WHERE id = $1`}
        title="soft-delete.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Cascade Deletes</h2>

      <CodeBlock
        og={`// With relations defined, cascade deletes child records
await db.delete(
  cook\`del:users whr:id=1\`,
  { cascade: ['posts', 'comments'] }
);
// Deletes user and all their posts and comments`}
        genalpha={`// With relations defined, cascade deletes child records
await db.delete(
  cook\`yeet:users sus:id=1\`,
  { cascade: ['posts', 'comments'] }
);
// Deletes user and all their posts and comments`}
        title="cascade.ts"
      />

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="feature-card bg-red-500/5 border-red-500/20">
          <h3 className="text-lg font-semibold mb-2 text-red-400">Danger Zone</h3>
          <p className="text-text-secondary text-sm">
            DELETE without WHERE will remove all rows. genaql requires explicit confirmation
            or can be configured to always require WHERE clauses.
          </p>
        </div>
        <div className="feature-card bg-neon-lime/5 border-neon-lime/20">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">Best Practice</h3>
          <p className="text-text-secondary text-sm">
            Use soft deletes for user data, transactions within deletes for consistency,
            and always test delete queries with SELECT first.
          </p>
        </div>
      </div>
    </article>
  );
}
