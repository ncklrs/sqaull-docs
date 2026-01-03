"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function DefineSchemaApiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">defineSchema</h1>

      <p className="text-xl text-text-secondary mb-8">
        Define your database schema for type-safe queries, validation, and migrations.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Import</h2>

      <CodeBlock
        og={`import { defineSchema } from 'genaql';`}
        genalpha={`import { defineSchema } from 'genaql';`}
        title="import.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Usage</h2>

      <CodeBlock
        og={`const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text',
    created_at: 'timestamp'
  },
  posts: {
    id: 'serial',
    user_id: 'integer',
    title: 'text',
    content: 'text',
    published: 'boolean'
  }
});`}
        genalpha={`const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text',
    created_at: 'timestamp'
  },
  posts: {
    id: 'serial',
    user_id: 'integer',
    title: 'text',
    content: 'text',
    published: 'boolean'
  }
});`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Column Types</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">Type</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">TypeScript</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code>&apos;text&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">string</td>
              <td className="py-3 px-4 text-text-secondary">Variable-length string</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;integer&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">number</td>
              <td className="py-3 px-4 text-text-secondary">32-bit integer</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;serial&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">number</td>
              <td className="py-3 px-4 text-text-secondary">Auto-incrementing integer</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;bigint&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">bigint</td>
              <td className="py-3 px-4 text-text-secondary">64-bit integer</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;boolean&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">boolean</td>
              <td className="py-3 px-4 text-text-secondary">True/false</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;timestamp&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">Date</td>
              <td className="py-3 px-4 text-text-secondary">Date and time</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;date&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">Date</td>
              <td className="py-3 px-4 text-text-secondary">Date only</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;json&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">unknown</td>
              <td className="py-3 px-4 text-text-secondary">JSON/JSONB</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;uuid&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">string</td>
              <td className="py-3 px-4 text-text-secondary">UUID string</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code>&apos;decimal&apos;</code></td>
              <td className="py-3 px-4 text-text-muted">string</td>
              <td className="py-3 px-4 text-text-secondary">Precise decimal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Column Options</h2>

      <CodeBlock
        og={`const schema = defineSchema({
  users: {
    // Simple type
    id: 'serial',

    // With options
    name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true, unique: true },
    role: { type: 'text', default: 'user' },
    bio: { type: 'text', nullable: true },  // or 'text?'
    created_at: { type: 'timestamp', default: 'now()' },

    // Foreign key
    organization_id: {
      type: 'integer',
      references: 'organizations.id',
      onDelete: 'cascade'
    },

    // Custom TypeScript type
    metadata: { type: 'json', tsType: 'UserMetadata' }
  }
});`}
        genalpha={`const schema = defineSchema({
  users: {
    // Simple type
    id: 'serial',

    // With options
    name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true, unique: true },
    role: { type: 'text', default: 'user' },
    bio: { type: 'text', nullable: true },  // or 'text?'
    created_at: { type: 'timestamp', default: 'now()' },

    // Foreign key
    organization_id: {
      type: 'integer',
      references: 'organizations.id',
      onDelete: 'cascade'
    },

    // Custom TypeScript type
    metadata: { type: 'json', tsType: 'UserMetadata' }
  }
});`}
        title="options.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Relations</h2>

      <CodeBlock
        og={`import { defineSchema, hasOne, hasMany, belongsTo, manyToMany } from 'genaql';

const schema = defineSchema({
  users: { /* ... */ },
  profiles: { /* ... */ },
  posts: { /* ... */ },
  tags: { /* ... */ },
  post_tags: { /* ... */ }
}, {
  relations: {
    users: {
      profile: hasOne('profiles', 'user_id'),
      posts: hasMany('posts', 'user_id')
    },
    posts: {
      author: belongsTo('users', 'user_id'),
      tags: manyToMany('tags', 'post_tags', 'post_id', 'tag_id')
    }
  }
});`}
        genalpha={`import { defineSchema, got, stacked, simps, linked } from 'genaql';

const schema = defineSchema({
  users: { /* ... */ },
  profiles: { /* ... */ },
  posts: { /* ... */ },
  tags: { /* ... */ },
  post_tags: { /* ... */ }
}, {
  relations: {
    users: {
      profile: got('profiles', 'user_id'),
      posts: stacked('posts', 'user_id')
    },
    posts: {
      author: simps('users', 'user_id'),
      tags: linked('tags', 'post_tags', 'post_id', 'tag_id')
    }
  }
});`}
        title="relations.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Schema Options</h2>

      <CodeBlock
        og={`const schema = defineSchema(tables, {
  // Relations (see above)
  relations: { /* ... */ },

  // Soft delete configuration
  softDelete: {
    column: 'deleted_at',
    tables: ['users', 'posts']
  },

  // Auto timestamps
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tables: ['users', 'posts', 'comments']
  },

  // Table name transformations
  tableNames: {
    style: 'snake_case',  // or 'camelCase', 'PascalCase'
    pluralize: true
  }
});`}
        genalpha={`const schema = defineSchema(tables, {
  // Relations (see above)
  relations: { /* ... */ },

  // Soft delete configuration
  softDelete: {
    column: 'deleted_at',
    tables: ['users', 'posts']
  },

  // Auto timestamps
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tables: ['users', 'posts', 'comments']
  },

  // Table name transformations
  tableNames: {
    style: 'snake_case',  // or 'camelCase', 'PascalCase'
    pluralize: true
  }
});`}
        title="schema-options.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Type Inference</h2>

      <CodeBlock
        og={`import { InferTable, InferInsert, InferUpdate } from 'genaql';

// Infer types from schema
type User = InferTable<typeof schema, 'users'>;
// { id: number; name: string; email: string; created_at: Date }

type NewUser = InferInsert<typeof schema, 'users'>;
// { name: string; email: string; created_at?: Date }  (id is auto)

type UserUpdate = InferUpdate<typeof schema, 'users'>;
// { name?: string; email?: string; created_at?: Date }`}
        genalpha={`import { InferTable, InferInsert, InferUpdate } from 'genaql';

// Infer types from schema
type User = InferTable<typeof schema, 'users'>;
// { id: number; name: string; email: string; created_at: Date }

type NewUser = InferInsert<typeof schema, 'users'>;
// { name: string; email: string; created_at?: Date }  (id is auto)

type UserUpdate = InferUpdate<typeof schema, 'users'>;
// { name?: string; email?: string; created_at?: Date }`}
        title="inference.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Best Practice</h3>
        <p className="text-text-secondary text-sm">
          Define your schema in a separate file and export it. Import it wherever you need
          type-safe queries or database operations. This ensures consistency across your codebase.
        </p>
      </div>
    </article>
  );
}
