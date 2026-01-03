"use client";

import { CodeBlock } from "@/components/CodeBlock";

export default function AdaptersPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Database Adapters</h1>

      <p className="text-xl text-text-secondary mb-8">
        Connect genaql to any supported database with the appropriate adapter.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">PostgreSQL</h2>

      <CodeBlock
        og={`import { createClient } from 'genaql';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  user: 'postgres',
  password: 'secret',
  // Or use connection string
  // connectionString: process.env.DATABASE_URL
});

const db = createClient({
  dialect: 'postgres',
  pool,
  // Optional: log all queries
  logging: process.env.NODE_ENV === 'development'
});

// Test connection
await db.raw('SELECT NOW()');`}
        genalpha={`import { createClient } from 'genaql';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  user: 'postgres',
  password: 'secret',
  // Or use connection string
  // connectionString: process.env.DATABASE_URL
});

const db = createClient({
  dialect: 'postgres',
  pool,
  // Optional: log all queries
  logging: process.env.NODE_ENV === 'development'
});

// Test connection
await db.raw('SELECT NOW()');`}
        title="postgres.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">MySQL</h2>

      <CodeBlock
        og={`import { createClient } from 'genaql';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'myapp',
  user: 'root',
  password: 'secret',
  waitForConnections: true,
  connectionLimit: 10
});

const db = createClient({
  dialect: 'mysql',
  pool
});`}
        genalpha={`import { createClient } from 'genaql';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'myapp',
  user: 'root',
  password: 'secret',
  waitForConnections: true,
  connectionLimit: 10
});

const db = createClient({
  dialect: 'mysql',
  pool
});`}
        title="mysql.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">SQLite</h2>

      <CodeBlock
        og={`import { createClient } from 'genaql';
import Database from 'better-sqlite3';

// File-based database
const db = createClient({
  dialect: 'sqlite',
  database: './data/app.db'
});

// In-memory database (great for testing)
const testDb = createClient({
  dialect: 'sqlite',
  database: ':memory:'
});

// With better-sqlite3 instance
const sqlite = new Database('./data/app.db');
const db = createClient({
  dialect: 'sqlite',
  connection: sqlite
});`}
        genalpha={`import { createClient } from 'genaql';
import Database from 'better-sqlite3';

// File-based database
const db = createClient({
  dialect: 'sqlite',
  database: './data/app.db'
});

// In-memory database (great for testing)
const testDb = createClient({
  dialect: 'sqlite',
  database: ':memory:'
});

// With better-sqlite3 instance
const sqlite = new Database('./data/app.db');
const db = createClient({
  dialect: 'sqlite',
  connection: sqlite
});`}
        title="sqlite.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Connection Options</h2>

      <CodeBlock
        og={`const db = createClient({
  // Required
  dialect: 'postgres' | 'mysql' | 'sqlite',

  // Database connection (one of these)
  pool: Pool,              // pg or mysql2 pool
  connection: Connection,  // Single connection
  database: string,        // SQLite file path

  // Optional
  schema: Schema,          // For type safety
  logging: boolean | ((sql: string) => void),
  validate: boolean,       // Runtime validation

  // Pool settings (PostgreSQL/MySQL)
  poolConfig: {
    min: 2,
    max: 10,
    idleTimeoutMs: 30000
  }
});`}
        genalpha={`const db = createClient({
  // Required
  dialect: 'postgres' | 'mysql' | 'sqlite',

  // Database connection (one of these)
  pool: Pool,              // pg or mysql2 pool
  connection: Connection,  // Single connection
  database: string,        // SQLite file path

  // Optional
  schema: Schema,          // For type safety
  logging: boolean | ((sql: string) => void),
  validate: boolean,       // Runtime validation

  // Pool settings (PostgreSQL/MySQL)
  poolConfig: {
    min: 2,
    max: 10,
    idleTimeoutMs: 30000
  }
});`}
        title="options.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Custom Adapters</h2>

      <CodeBlock
        og={`import { createAdapter, Adapter } from 'genaql';

const customAdapter: Adapter = {
  dialect: 'custom',

  async query(sql: string, params: unknown[]) {
    // Execute query and return rows
    return rows;
  },

  async execute(sql: string, params: unknown[]) {
    // Execute statement (INSERT/UPDATE/DELETE)
    return { rowCount, lastInsertId };
  },

  escape(value: unknown): string {
    // Escape value for safe SQL interpolation
    return escaped;
  },

  placeholder(index: number): string {
    // Return placeholder syntax ($1, ?, etc.)
    return \`$\${index + 1}\`;
  }
};

const db = createClient({
  dialect: 'custom',
  adapter: customAdapter
});`}
        genalpha={`import { createAdapter, Adapter } from 'genaql';

const customAdapter: Adapter = {
  dialect: 'custom',

  async query(sql: string, params: unknown[]) {
    // Execute query and return rows
    return rows;
  },

  async execute(sql: string, params: unknown[]) {
    // Execute statement (INSERT/UPDATE/DELETE)
    return { rowCount, lastInsertId };
  },

  escape(value: unknown): string {
    // Escape value for safe SQL interpolation
    return escaped;
  },

  placeholder(index: number): string {
    // Return placeholder syntax ($1, ?, etc.)
    return \`$\${index + 1}\`;
  }
};

const db = createClient({
  dialect: 'custom',
  adapter: customAdapter
});`}
        title="custom-adapter.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Best Practice</h3>
        <p className="text-text-secondary text-sm">
          Always use connection pooling in production. Create the pool once at startup
          and reuse it for all queries. Don&apos;t create new connections per request.
        </p>
      </div>
    </article>
  );
}
