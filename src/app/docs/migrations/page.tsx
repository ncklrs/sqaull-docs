"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function MigrationsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Migrations</h1>

      <p className="text-xl text-text-secondary mb-8">
        Version control your database schema with genaql&apos;s migration system.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Creating Migrations</h2>

      <CodeBlock
        og={`# Create a new migration
npx genaql migrate:create add_users_table

# Creates: migrations/20240115120000_add_users_table.ts`}
        genalpha={`# Create a new migration
npx genaql migrate:create add_users_table

# Creates: migrations/20240115120000_add_users_table.ts`}
        title="terminal"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Migration Structure</h2>

      <CodeBlock
        og={`import { Migration } from 'genaql';

export const migration: Migration = {
  up: async (db) => {
    await db.schema.createTable('users', (table) => {
      table.serial('id').primary();
      table.text('name').notNull();
      table.text('email').notNull().unique();
      table.text('password_hash').notNull();
      table.text('role').default('user');
      table.timestamp('created_at').default('now()');
      table.timestamp('updated_at');
    });

    // Create index
    await db.schema.createIndex('users', 'email');
  },

  down: async (db) => {
    await db.schema.dropTable('users');
  }
};`}
        genalpha={`import { Migration } from 'genaql';

export const migration: Migration = {
  up: async (db) => {
    await db.schema.createTable('users', (table) => {
      table.serial('id').primary();
      table.text('name').notNull();
      table.text('email').notNull().unique();
      table.text('password_hash').notNull();
      table.text('role').default('user');
      table.timestamp('created_at').default('now()');
      table.timestamp('updated_at');
    });

    // Create index
    await db.schema.createIndex('users', 'email');
  },

  down: async (db) => {
    await db.schema.dropTable('users');
  }
};`}
        title="20240115120000_add_users_table.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Running Migrations</h2>

      <CodeBlock
        og={`# Run all pending migrations
npx genaql migrate

# Run migrations up to a specific version
npx genaql migrate --to 20240115120000

# Rollback last migration
npx genaql migrate:rollback

# Rollback all migrations
npx genaql migrate:rollback --all

# Check migration status
npx genaql migrate:status`}
        genalpha={`# Run all pending migrations
npx genaql migrate

# Run migrations up to a specific version
npx genaql migrate --to 20240115120000

# Rollback last migration
npx genaql migrate:rollback

# Rollback all migrations
npx genaql migrate:rollback --all

# Check migration status
npx genaql migrate:status`}
        title="terminal"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Schema Builder API</h2>

      <CodeBlock
        og={`// Create table
await db.schema.createTable('posts', (table) => {
  table.serial('id').primary();
  table.integer('user_id').references('users.id').onDelete('cascade');
  table.text('title').notNull();
  table.text('content');
  table.boolean('published').default(false);
  table.json('metadata');
  table.timestamps();  // created_at + updated_at
});

// Alter table
await db.schema.alterTable('posts', (table) => {
  table.text('slug').notNull().unique();
  table.dropColumn('metadata');
  table.renameColumn('content', 'body');
});

// Add index
await db.schema.createIndex('posts', ['user_id', 'published']);
await db.schema.createIndex('posts', 'slug', { unique: true });

// Drop table
await db.schema.dropTable('posts');
await db.schema.dropTableIfExists('posts');`}
        genalpha={`// Create table
await db.schema.createTable('posts', (table) => {
  table.serial('id').primary();
  table.integer('user_id').references('users.id').onDelete('cascade');
  table.text('title').notNull();
  table.text('content');
  table.boolean('published').default(false);
  table.json('metadata');
  table.timestamps();  // created_at + updated_at
});

// Alter table
await db.schema.alterTable('posts', (table) => {
  table.text('slug').notNull().unique();
  table.dropColumn('metadata');
  table.renameColumn('content', 'body');
});

// Add index
await db.schema.createIndex('posts', ['user_id', 'published']);
await db.schema.createIndex('posts', 'slug', { unique: true });

// Drop table
await db.schema.dropTable('posts');
await db.schema.dropTableIfExists('posts');`}
        title="schema-builder.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Column Types</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Method</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">PostgreSQL</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">MySQL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code>serial()</code></td>
              <td className="py-3 px-4 text-text-muted">SERIAL</td>
              <td className="py-3 px-4 text-text-muted">INT AUTO_INCREMENT</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>integer()</code></td>
              <td className="py-3 px-4 text-text-muted">INTEGER</td>
              <td className="py-3 px-4 text-text-muted">INT</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>text()</code></td>
              <td className="py-3 px-4 text-text-muted">TEXT</td>
              <td className="py-3 px-4 text-text-muted">TEXT</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>varchar(n)</code></td>
              <td className="py-3 px-4 text-text-muted">VARCHAR(n)</td>
              <td className="py-3 px-4 text-text-muted">VARCHAR(n)</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>boolean()</code></td>
              <td className="py-3 px-4 text-text-muted">BOOLEAN</td>
              <td className="py-3 px-4 text-text-muted">TINYINT(1)</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>timestamp()</code></td>
              <td className="py-3 px-4 text-text-muted">TIMESTAMP</td>
              <td className="py-3 px-4 text-text-muted">TIMESTAMP</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>json()</code></td>
              <td className="py-3 px-4 text-text-muted">JSONB</td>
              <td className="py-3 px-4 text-text-muted">JSON</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>uuid()</code></td>
              <td className="py-3 px-4 text-text-muted">UUID</td>
              <td className="py-3 px-4 text-text-muted">CHAR(36)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="feature-card bg-neon-orange/5 border-neon-orange/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-orange">Important</h3>
        <p className="text-text-secondary text-sm">
          Always write both <code>up</code> and <code>down</code> migrations.
          This ensures you can safely rollback if something goes wrong in production.
        </p>
      </div>
    </article>
  );
}
