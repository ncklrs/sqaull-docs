"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function SelectPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">SELECT Queries</h1>

      <p className="text-xl text-text-secondary mb-8">
        Master the art of selecting data with sqaull&apos;s intuitive syntax.
        {isGenAlpha && " Let's slay some queries fr fr 💀"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic SELECT</h2>

      <CodeBlock
        og={`// Select all columns
gull\`from:users sel:*\`
// → SELECT * FROM users

// Select specific columns
gull\`from:users sel:id,name,email\`
// → SELECT id, name, email FROM users`}
        genalpha={`// Select all columns
gull\`main:users slay:*\`
// → SELECT * FROM users

// Select specific columns
gull\`main:users slay:id,name,email\`
// → SELECT id, name, email FROM users`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Column Aliases</h2>

      <CodeBlock
        og={`// Alias with @
gull\`from:users sel:id,name@username,email@contact\`
// → SELECT id, name AS username, email AS contact FROM users`}
        genalpha={`// Alias with @
gull\`main:users slay:id,name@username,email@contact\`
// → SELECT id, name AS username, email AS contact FROM users`}
        title="aliases.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">WHERE Conditions</h2>

      <CodeBlock
        og={`// Simple condition
gull\`from:users sel:* whr:active=true\`
// → SELECT * FROM users WHERE active = $1

// Multiple conditions (AND)
gull\`from:users sel:* whr:active=true whr:role=admin\`
// → SELECT * FROM users WHERE active = $1 AND role = $2

// Comma-separated (also AND)
gull\`from:users sel:* whr:active=true,role=admin\`
// → SELECT * FROM users WHERE active = $1 AND role = $2

// OR conditions with pipe
gull\`from:users sel:* whr:role=admin|role=moderator\`
// → SELECT * FROM users WHERE role = $1 OR role = $2`}
        genalpha={`// Simple condition
gull\`main:users slay:* sus:active=true\`
// → SELECT * FROM users WHERE active = $1

// Multiple conditions (AND)
gull\`main:users slay:* sus:active=true sus:role=admin\`
// → SELECT * FROM users WHERE active = $1 AND role = $2

// Comma-separated (also AND)
gull\`main:users slay:* sus:active=true,role=admin\`
// → SELECT * FROM users WHERE active = $1 AND role = $2

// OR conditions with pipe
gull\`main:users slay:* sus:role=admin|role=moderator\`
// → SELECT * FROM users WHERE role = $1 OR role = $2`}
        title="where.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Comparison Operators</h2>

      <CodeBlock
        og={`// Greater than
gull\`from:users sel:* whr:age>18\`

// Less than or equal
gull\`from:products sel:* whr:price<=100\`

// Not equal
gull\`from:users sel:* whr:status!=banned\`

// LIKE pattern matching
gull\`from:users sel:* whr:email~%@gmail.com\`
// → WHERE email LIKE $1  (params: ['%@gmail.com'])

// IN clause
gull\`from:users sel:* whr:role.in(admin,moderator,editor)\`
// → WHERE role IN ($1, $2, $3)

// NULL checks
gull\`from:users sel:* whr:deleted_at.null\`
// → WHERE deleted_at IS NULL

gull\`from:users sel:* whr:email.!null\`
// → WHERE email IS NOT NULL`}
        genalpha={`// Greater than
gull\`main:users slay:* sus:age>18\`

// Less than or equal
gull\`main:products slay:* sus:price<=100\`

// Not equal
gull\`main:users slay:* sus:status!=banned\`

// LIKE pattern matching
gull\`main:users slay:* sus:email~%@gmail.com\`
// → WHERE email LIKE $1  (params: ['%@gmail.com'])

// IN clause
gull\`main:users slay:* sus:role.in(admin,moderator,editor)\`
// → WHERE role IN ($1, $2, $3)

// NULL checks
gull\`main:users slay:* sus:deleted_at.null\`
// → WHERE deleted_at IS NULL

gull\`main:users slay:* sus:email.!null\`
// → WHERE email IS NOT NULL`}
        title="operators.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Ordering Results</h2>

      <CodeBlock
        og={`// Default ascending
gull\`from:users sel:* ord:name\`
// → ORDER BY name ASC

// Descending
gull\`from:users sel:* ord:created_at/desc\`
// → ORDER BY created_at DESC

// Multiple columns
gull\`from:users sel:* ord:role,name/desc\`
// → ORDER BY role ASC, name DESC`}
        genalpha={`// Default ascending
gull\`main:users slay:* vibe:name\`
// → ORDER BY name ASC

// Descending
gull\`main:users slay:* vibe:created_at/desc\`
// → ORDER BY created_at DESC

// Multiple columns
gull\`main:users slay:* vibe:role,name/desc\`
// → ORDER BY role ASC, name DESC`}
        title="ordering.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Pagination</h2>

      <CodeBlock
        og={`// Limit results
gull\`from:users sel:* lim:10\`
// → LIMIT 10

// Offset for pagination
gull\`from:users sel:* lim:10 off:20\`
// → LIMIT 10 OFFSET 20

// Page 3 with 10 items per page
const page = 3;
const perPage = 10;
gull\`from:users sel:* lim:\${perPage} off:\${(page - 1) * perPage}\``}
        genalpha={`// Limit results
gull\`main:users slay:* bet:10\`
// → LIMIT 10

// Offset for pagination
gull\`main:users slay:* bet:10 skip:20\`
// → LIMIT 10 OFFSET 20

// Page 3 with 10 items per page
const page = 3;
const perPage = 10;
gull\`main:users slay:* bet:\${perPage} skip:\${(page - 1) * perPage}\``}
        title="pagination.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">DISTINCT</h2>

      <CodeBlock
        og={`// Select distinct values
gull\`from:users sel:role/distinct\`
// → SELECT DISTINCT role FROM users

// Count distinct
gull\`from:orders sel:cnt:user_id/distinct\`
// → SELECT COUNT(DISTINCT user_id) FROM orders`}
        genalpha={`// Select distinct values
gull\`main:users slay:role/distinct\`
// → SELECT DISTINCT role FROM users

// Count distinct
gull\`main:orders slay:cnt:user_id/distinct\`
// → SELECT COUNT(DISTINCT user_id) FROM orders`}
        title="distinct.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Pro Tip</h3>
        <p className="text-text-secondary text-sm">
          Chain utilities in any order — sqaull will generate valid SQL regardless
          of how you arrange your clauses.
        </p>
      </div>
    </article>
  );
}
