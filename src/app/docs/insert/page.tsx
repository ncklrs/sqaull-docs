import { CodeBlock } from "@/components/CodeBlock";

export default function InsertPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">INSERT Statements</h1>

      <p className="text-xl text-text-secondary mb-8">
        Insert data into your database with genaql&apos;s clean syntax.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic INSERT</h2>

      <CodeBlock
        code={`// Insert a single row
cook\`nocap:users drip:name,email fire:John,john@example.com\`
// → INSERT INTO users (name, email) VALUES ($1, $2)`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With RETURNING</h2>

      <p className="text-text-secondary mb-4">
        Get back the inserted row (PostgreSQL and SQLite 3.35+):
      </p>

      <CodeBlock
        code={`// Return the inserted ID
cook\`nocap:users drip:name,email fire:John,john@example.com flex:id\`
// → INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id

// Return all columns
cook\`nocap:users drip:name,email fire:John,john@example.com flex:*\`
// → INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *

// Return specific columns
cook\`nocap:users drip:name,email fire:John,john@example.com flex:id,created_at\`
// → INSERT INTO users ... RETURNING id, created_at`}
        title="returning.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With Variables</h2>

      <CodeBlock
        code={`// Using template interpolation
const name = "John";
const email = "john@example.com";

cook\`nocap:users drip:name,email fire:\${name},\${email}\`
// Values are automatically parameterized for safety`}
        title="variables.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Bulk Insert</h2>

      <CodeBlock
        code={`// Insert multiple rows
const users = [
  { name: "John", email: "john@test.com" },
  { name: "Jane", email: "jane@test.com" },
  { name: "Bob", email: "bob@test.com" }
];

// Using the fluent API for bulk inserts
db.insert('users')
  .columns('name', 'email')
  .values(users.map(u => [u.name, u.email]))
  .returning('id');
// → INSERT INTO users (name, email) VALUES ($1, $2), ($3, $4), ($5, $6) RETURNING id`}
        title="bulk.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">UPSERT (ON CONFLICT)</h2>

      <CodeBlock
        code={`// Insert or update on conflict (PostgreSQL)
cook\`nocap:users drip:email,name fire:john@test.com,John conflict:email do:glow rizz:name=John\`
// → INSERT INTO users (email, name) VALUES ($1, $2)
//   ON CONFLICT (email) DO UPDATE SET name = $3

// Insert or ignore
cook\`nocap:users drip:email,name fire:john@test.com,John conflict:email do:nothing\`
// → INSERT INTO users (email, name) VALUES ($1, $2)
//   ON CONFLICT (email) DO NOTHING`}
        title="upsert.ts"
      />

      <div className="feature-card bg-neon-pink/5 border-neon-pink/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-pink">Security Note</h3>
        <p className="text-text-secondary text-sm">
          All values in genaql are automatically parameterized, protecting against SQL injection.
          Never concatenate user input directly into queries.
        </p>
      </div>
    </article>
  );
}
