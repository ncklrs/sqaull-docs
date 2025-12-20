"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function BuilderApiPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Fluent Builder</h1>

      <p className="text-xl text-text-secondary mb-8">
        Build queries programmatically with the fluent API for dynamic query construction.
        {isGenAlpha && " Chain those methods like a boss 💪"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">When to Use</h2>

      <p className="text-text-secondary mb-4">
        Use the fluent builder when you need to construct queries dynamically based on runtime conditions.
        For static queries, prefer the <code className="text-neon-lime">gull</code> template literal.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">SELECT Builder</h2>

      <CodeBlock
        og={`import { select } from 'sqaull';

const query = select('users')
  .columns('id', 'name', 'email')
  .where('active', '=', true)
  .where('role', 'in', ['admin', 'moderator'])
  .orderBy('created_at', 'desc')
  .limit(10)
  .offset(20);

const { sql, params } = query.toParams();`}
        genalpha={`import { select } from 'sqaull';

const query = select('users')
  .columns('id', 'name', 'email')
  .where('active', '=', true)
  .where('role', 'in', ['admin', 'moderator'])
  .orderBy('created_at', 'desc')
  .limit(10)
  .offset(20);

const { sql, params } = query.toParams();`}
        title="select.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Dynamic Conditions</h2>

      <CodeBlock
        og={`// Build query based on filters
function searchUsers(filters: UserFilters) {
  let query = select('users').columns('*');

  if (filters.name) {
    query = query.where('name', 'like', \`%\${filters.name}%\`);
  }

  if (filters.role) {
    query = query.where('role', '=', filters.role);
  }

  if (filters.minAge) {
    query = query.where('age', '>=', filters.minAge);
  }

  if (filters.sortBy) {
    query = query.orderBy(filters.sortBy, filters.sortDir || 'asc');
  }

  return query.limit(filters.limit || 20);
}`}
        genalpha={`// Build query based on filters
function searchUsers(filters: UserFilters) {
  let query = select('users').columns('*');

  if (filters.name) {
    query = query.where('name', 'like', \`%\${filters.name}%\`);
  }

  if (filters.role) {
    query = query.where('role', '=', filters.role);
  }

  if (filters.minAge) {
    query = query.where('age', '>=', filters.minAge);
  }

  if (filters.sortBy) {
    query = query.orderBy(filters.sortBy, filters.sortDir || 'asc');
  }

  return query.limit(filters.limit || 20);
}`}
        title="dynamic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">INSERT Builder</h2>

      <CodeBlock
        og={`import { insert } from 'sqaull';

// Single row
const query = insert('users')
  .columns('name', 'email')
  .values(['John', 'john@test.com'])
  .returning('id');

// Multiple rows
const bulkQuery = insert('users')
  .columns('name', 'email')
  .values([
    ['John', 'john@test.com'],
    ['Jane', 'jane@test.com'],
    ['Bob', 'bob@test.com']
  ])
  .returning('id');

// With conflict handling (upsert)
const upsertQuery = insert('users')
  .columns('email', 'name')
  .values(['john@test.com', 'John'])
  .onConflict('email')
  .doUpdate({ name: 'John Updated' })
  .returning('*');`}
        genalpha={`import { insert } from 'sqaull';

// Single row
const query = insert('users')
  .columns('name', 'email')
  .values(['John', 'john@test.com'])
  .returning('id');

// Multiple rows
const bulkQuery = insert('users')
  .columns('name', 'email')
  .values([
    ['John', 'john@test.com'],
    ['Jane', 'jane@test.com'],
    ['Bob', 'bob@test.com']
  ])
  .returning('id');

// With conflict handling (upsert)
const upsertQuery = insert('users')
  .columns('email', 'name')
  .values(['john@test.com', 'John'])
  .onConflict('email')
  .doUpdate({ name: 'John Updated' })
  .returning('*');`}
        title="insert.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">UPDATE Builder</h2>

      <CodeBlock
        og={`import { update } from 'sqaull';

const query = update('users')
  .set({ status: 'active', verified: true })
  .where('id', '=', 1)
  .returning('*');

// Increment/decrement
const incrementQuery = update('posts')
  .set({ views: raw('views + 1') })
  .where('id', '=', 42);`}
        genalpha={`import { update } from 'sqaull';

const query = update('users')
  .set({ status: 'active', verified: true })
  .where('id', '=', 1)
  .returning('*');

// Increment/decrement
const incrementQuery = update('posts')
  .set({ views: raw('views + 1') })
  .where('id', '=', 42);`}
        title="update.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">DELETE Builder</h2>

      <CodeBlock
        og={`import { deleteFrom } from 'sqaull';

const query = deleteFrom('users')
  .where('id', '=', 1)
  .returning('id', 'email');

// Delete with multiple conditions
const bulkDelete = deleteFrom('sessions')
  .where('expired', '=', true)
  .orWhere('created_at', '<', '2024-01-01');`}
        genalpha={`import { deleteFrom } from 'sqaull';

const query = deleteFrom('users')
  .where('id', '=', 1)
  .returning('id', 'email');

// Delete with multiple conditions
const bulkDelete = deleteFrom('sessions')
  .where('expired', '=', true)
  .orWhere('created_at', '<', '2024-01-01');`}
        title="delete.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Builder Methods</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Method</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code>.columns(...cols)</code></td>
              <td className="py-3 px-4 text-text-secondary">Specify columns to select/insert</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.where(col, op, val)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add AND condition</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.orWhere(col, op, val)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add OR condition</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.whereIn(col, vals)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add IN condition</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.whereNull(col)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add IS NULL condition</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.join(table, on)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add INNER JOIN</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.leftJoin(table, on)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add LEFT JOIN</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.orderBy(col, dir)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add ORDER BY</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.groupBy(...cols)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add GROUP BY</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.having(col, op, val)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add HAVING</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.limit(n)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add LIMIT</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.offset(n)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add OFFSET</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>.returning(...cols)</code></td>
              <td className="py-3 px-4 text-text-secondary">Add RETURNING</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Immutability</h3>
        <p className="text-text-secondary text-sm">
          All builder methods return a new query object, leaving the original unchanged.
          This makes it safe to create variations from a base query.
        </p>
      </div>
    </article>
  );
}
