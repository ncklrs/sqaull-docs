"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function DialectsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Dialects</h1>

      <p className="text-xl text-text-secondary mb-8">
        Write once, deploy anywhere. genaql supports PostgreSQL, MySQL, and SQLite with automatic syntax conversion.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Supported Databases</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">PostgreSQL</h3>
          <p className="text-text-secondary text-sm mb-2">Full support with JSONB, arrays, and advanced features.</p>
          <code className="text-xs text-text-muted">dialect: &apos;postgres&apos;</code>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">MySQL</h3>
          <p className="text-text-secondary text-sm mb-2">Compatible with MySQL 5.7+ and MariaDB.</p>
          <code className="text-xs text-text-muted">dialect: &apos;mysql&apos;</code>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-cyan">SQLite</h3>
          <p className="text-text-secondary text-sm mb-2">Perfect for local development and embedded apps.</p>
          <code className="text-xs text-text-muted">dialect: &apos;sqlite&apos;</code>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Configuring a Dialect</h2>

      <CodeBlock
        code={`import { createClient } from 'genaql';

// PostgreSQL
const pgClient = createClient({
  dialect: 'postgres',
  pool: pgPool
});

// MySQL
const mysqlClient = createClient({
  dialect: 'mysql',
  pool: mysqlPool
});

// SQLite
const sqliteClient = createClient({
  dialect: 'sqlite',
  database: './data.db'
});`}
        title="config.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Placeholder Syntax</h2>

      <p className="text-text-secondary mb-4">
        genaql automatically converts placeholders to match each database&apos;s syntax:
      </p>

      <CodeBlock
        code={`const query = cook\`main:users slay:* sus:id=1 sus:role=admin\`;

// PostgreSQL: WHERE id = $1 AND role = $2
// MySQL:      WHERE id = ? AND role = ?
// SQLite:     WHERE id = ? AND role = ?`}
        title="placeholders.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Dialect Differences</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Feature</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">PostgreSQL</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">MySQL</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">SQLite</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4 text-text-secondary">RETURNING</td>
              <td className="py-3 px-4 text-neon-lime">✓</td>
              <td className="py-3 px-4 text-neon-pink">✗</td>
              <td className="py-3 px-4 text-neon-lime">✓ (3.35+)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-text-secondary">UPSERT</td>
              <td className="py-3 px-4 text-neon-lime">ON CONFLICT</td>
              <td className="py-3 px-4 text-neon-lime">ON DUPLICATE KEY</td>
              <td className="py-3 px-4 text-neon-lime">ON CONFLICT</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-text-secondary">JSONB</td>
              <td className="py-3 px-4 text-neon-lime">✓</td>
              <td className="py-3 px-4 text-neon-lime">JSON (5.7+)</td>
              <td className="py-3 px-4 text-neon-pink">✗</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-text-secondary">Arrays</td>
              <td className="py-3 px-4 text-neon-lime">✓</td>
              <td className="py-3 px-4 text-neon-pink">✗</td>
              <td className="py-3 px-4 text-neon-pink">✗</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-text-secondary">FULL OUTER JOIN</td>
              <td className="py-3 px-4 text-neon-lime">✓</td>
              <td className="py-3 px-4 text-neon-pink">✗</td>
              <td className="py-3 px-4 text-neon-lime">✓</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Cross-Database Testing</h2>

      <p className="text-text-secondary mb-4">
        Use SQLite for fast tests, PostgreSQL for production:
      </p>

      <CodeBlock
        code={`// test.ts
const testDb = createClient({
  dialect: 'sqlite',
  database: ':memory:'  // In-memory for speed
});

// production.ts
const prodDb = createClient({
  dialect: 'postgres',
  pool: pgPool
});

// Same queries work in both!
const query = cook\`main:users slay:* sus:active=true\`;`}
        title="testing.ts"
      />

      <div className="feature-card bg-neon-cyan/5 border-neon-cyan/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-cyan">Dialect Detection</h3>
        <p className="text-text-secondary text-sm">
          genaql will warn you at compile time if you use a feature that isn&apos;t supported
          by your configured dialect, preventing runtime surprises.
        </p>
      </div>
    </article>
  );
}
