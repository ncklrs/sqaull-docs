"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function SqwApiPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">gull Template</h1>

      <p className="text-xl text-text-secondary mb-8">
        The <code className="text-neon-lime">gull</code> tagged template literal is the primary way to write sqaull queries.
        {isGenAlpha && " The main character of the whole library fr 👑"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Import</h2>

      <CodeBlock
        og={`import { gull } from 'sqaull';`}
        genalpha={`import { gull } from 'sqaull';`}
        title="import.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Usage</h2>

      <CodeBlock
        og={`// Create a query
const query = gull\`from:users sel:id,name,email whr:active=true\`;

// Get SQL string
const sql = query.toSQL();
// → "SELECT id, name, email FROM users WHERE active = $1"

// Get SQL with parameters
const { sql, params } = query.toParams();
// → { sql: "SELECT ... WHERE active = $1", params: [true] }`}
        genalpha={`// Create a query
const query = gull\`main:users slay:id,name,email sus:active=true\`;

// Get SQL string
const sql = query.toSQL();
// → "SELECT id, name, email FROM users WHERE active = $1"

// Get SQL with parameters
const { sql, params } = query.toParams();
// → { sql: "SELECT ... WHERE active = $1", params: [true] }`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Template Interpolation</h2>

      <CodeBlock
        og={`// Variables are automatically parameterized
const userId = 42;
const status = 'active';

const query = gull\`from:users sel:* whr:id=\${userId} whr:status=\${status}\`;
// → { sql: "... WHERE id = $1 AND status = $2", params: [42, 'active'] }

// Arrays for IN clauses
const ids = [1, 2, 3];
const query = gull\`from:users sel:* whr:id.in(\${ids})\`;
// → { sql: "... WHERE id IN ($1, $2, $3)", params: [1, 2, 3] }`}
        genalpha={`// Variables are automatically parameterized
const userId = 42;
const status = 'active';

const query = gull\`main:users slay:* sus:id=\${userId} sus:status=\${status}\`;
// → { sql: "... WHERE id = $1 AND status = $2", params: [42, 'active'] }

// Arrays for IN clauses
const ids = [1, 2, 3];
const query = gull\`main:users slay:* sus:id.in(\${ids})\`;
// → { sql: "... WHERE id IN ($1, $2, $3)", params: [1, 2, 3] }`}
        title="interpolation.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Query Methods</h2>

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
              <td className="py-3 px-4"><code>.toSQL()</code></td>
              <td className="py-3 px-4 text-text-muted">string</td>
              <td className="py-3 px-4 text-text-secondary">Raw SQL string with placeholders</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.toParams()</code></td>
              <td className="py-3 px-4 text-text-muted">{`{ sql, params }`}</td>
              <td className="py-3 px-4 text-text-secondary">SQL with parameter array</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.toString()</code></td>
              <td className="py-3 px-4 text-text-muted">string</td>
              <td className="py-3 px-4 text-text-secondary">Alias for toSQL()</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.clone()</code></td>
              <td className="py-3 px-4 text-text-muted">Query</td>
              <td className="py-3 px-4 text-text-secondary">Create a copy of the query</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.extend(str)</code></td>
              <td className="py-3 px-4 text-text-muted">Query</td>
              <td className="py-3 px-4 text-text-secondary">Append additional clauses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Query Composition</h2>

      <CodeBlock
        og={`// Base query
const baseQuery = gull\`from:users sel:*\`;

// Extend with conditions
const activeUsers = baseQuery.extend(gull\`whr:active=true\`);
const adminUsers = baseQuery.extend(gull\`whr:role=admin\`);

// Clone and modify
const paginatedQuery = baseQuery
  .clone()
  .extend(gull\`ord:created_at/desc lim:10 off:20\`);`}
        genalpha={`// Base query
const baseQuery = gull\`main:users slay:*\`;

// Extend with conditions
const activeUsers = baseQuery.extend(gull\`sus:active=true\`);
const adminUsers = baseQuery.extend(gull\`sus:role=admin\`);

// Clone and modify
const paginatedQuery = baseQuery
  .clone()
  .extend(gull\`vibe:created_at/desc bet:10 skip:20\`);`}
        title="composition.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Raw SQL</h2>

      <CodeBlock
        og={`import { gull, raw } from 'sqaull';

// Insert raw SQL (use with caution!)
const query = gull\`from:users sel:\${raw('COUNT(*)')} whr:created_at>\${raw("NOW() - INTERVAL '7 days'")}\`;
// → SELECT COUNT(*) FROM users WHERE created_at > NOW() - INTERVAL '7 days'

// Raw is NOT parameterized - only use for trusted values`}
        genalpha={`import { gull, raw } from 'sqaull';

// Insert raw SQL (use with caution!)
const query = gull\`main:users slay:\${raw('COUNT(*)')} sus:created_at>\${raw("NOW() - INTERVAL '7 days'")}\`;
// → SELECT COUNT(*) FROM users WHERE created_at > NOW() - INTERVAL '7 days'

// Raw is NOT parameterized - only use for trusted values`}
        title="raw.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">With Database Client</h2>

      <CodeBlock
        og={`// Execute query directly
const users = await db.query(gull\`from:users sel:* whr:active=true\`);

// Query returns typed results when schema is provided
// users: Array<{ id: number, name: string, email: string, ... }>`}
        genalpha={`// Execute query directly
const users = await db.query(gull\`main:users slay:* sus:active=true\`);

// Query returns typed results when schema is provided
// users: Array<{ id: number, name: string, email: string, ... }>`}
        title="with-client.ts"
      />

      <div className="feature-card bg-neon-pink/5 border-neon-pink/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-pink">Security</h3>
        <p className="text-text-secondary text-sm">
          All interpolated values are automatically parameterized to prevent SQL injection.
          Only use <code>raw()</code> for trusted, static SQL fragments - never with user input.
        </p>
      </div>
    </article>
  );
}
