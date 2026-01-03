"use client";

import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

export default function DocsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="flex items-center gap-3 mb-8">
        <span className="badge badge-lime">Docs</span>
        <span className="text-text-muted text-sm">v0.1.0</span>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-text-primary">
        Introduction to genaql
      </h1>

      <p className="text-xl text-text-secondary mb-8 leading-relaxed">
        genaql is a Tailwind-inspired query language that compiles to SQL. Write composable,
        type-safe queries using utility-style syntax that feels familiar to modern frontend developers.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Why genaql?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">Composable Syntax</h3>
          <p className="text-text-secondary text-sm">
            Like Tailwind for CSS, genaql uses utility patterns that are scannable,
            composable, and expressive. Colons separate utilities, slashes add modifiers.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">Type Safety</h3>
          <p className="text-text-secondary text-sm">
            Define your schema once and get compile-time validation, autocomplete,
            and runtime checks that catch errors before they hit your database.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-cyan">Multi-Dialect</h3>
          <p className="text-text-secondary text-sm">
            Write once, deploy anywhere. genaql supports PostgreSQL, MySQL, and SQLite
            with automatic placeholder syntax conversion.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-orange">Full ORM Features</h3>
          <p className="text-text-secondary text-sm">
            Migrations, relations, eager loading, transactions — everything you need
            for production databases, with a clean API.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Quick Example</h2>

      <p className="text-text-secondary mb-4">
        Here&apos;s how a typical query looks in genaql:
      </p>

      <CodeBlock
        og="from:users sel:name,email whr:age>18 ord:name lim:10"
        genalpha="main:users slay:name,email sus:age>18 vibe:name bet:10"
        output="SELECT name, email FROM users WHERE age > $1 ORDER BY name LIMIT $2"
        title="query.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Two Syntaxes, Same Power</h2>

      <p className="text-text-secondary mb-4">
        genaql offers two syntax flavors that produce identical SQL output. Use the toggle above to switch between them:
      </p>

      <CodeBlock
        og="from:users sel:name,email whr:age>18 ord:name/desc lim:10"
        genalpha="main:users slay:name,email sus:age>18 vibe:name/desc bet:10"
        showBoth
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Next Steps</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/docs/installation" className="feature-card group">
          <h3 className="text-lg font-semibold mb-2 text-text-primary group-hover:text-neon-lime transition-colors">
            Installation →
          </h3>
          <p className="text-text-secondary text-sm">
            Get genaql installed in your project in under a minute.
          </p>
        </Link>
        <Link href="/docs/quick-start" className="feature-card group">
          <h3 className="text-lg font-semibold mb-2 text-text-primary group-hover:text-neon-lime transition-colors">
            Quick Start →
          </h3>
          <p className="text-text-secondary text-sm">
            Write your first query and connect to a database.
          </p>
        </Link>
        <Link href="/docs/syntax" className="feature-card group">
          <h3 className="text-lg font-semibold mb-2 text-text-primary group-hover:text-neon-lime transition-colors">
            Syntax Reference →
          </h3>
          <p className="text-text-secondary text-sm">
            Complete reference for all genaql utilities and modifiers.
          </p>
        </Link>
      </div>
    </article>
  );
}
