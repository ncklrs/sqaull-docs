"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function EagerLoadingPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Eager Loading</h1>

      <p className="text-xl text-text-secondary mb-8">
        Efficiently load related data in a single query to avoid N+1 problems.
        {isGenAlpha && " Bring the whole fam in one trip 🚗"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">The N+1 Problem</h2>

      <p className="text-text-secondary mb-4">
        Without eager loading, fetching related data requires multiple queries:
      </p>

      <CodeBlock
        og={`// ❌ Bad: N+1 queries
const users = await db.query(gull\`from:users sel:*\`);  // 1 query

for (const user of users) {
  // N additional queries!
  user.posts = await db.query(gull\`from:posts sel:* whr:user_id=\${user.id}\`);
}

// ✓ Good: Single query with eager loading
const users = await db.query(gull\`from:users sel:* with:posts\`);  // 1-2 queries total`}
        genalpha={`// ❌ Bad: N+1 queries
const users = await db.query(gull\`main:users slay:*\`);  // 1 query

for (const user of users) {
  // N additional queries!
  user.posts = await db.query(gull\`main:posts slay:* sus:user_id=\${user.id}\`);
}

// ✓ Good: Single query with eager loading
const users = await db.query(gull\`main:users slay:* fam:posts\`);  // 1-2 queries total`}
        title="n-plus-one.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Basic Eager Loading</h2>

      <CodeBlock
        og={`// Load single relation
const users = await db.query(
  gull\`from:users sel:* with:profile\`
);

// Load multiple relations
const users = await db.query(
  gull\`from:users sel:* with:profile,posts\`
);`}
        genalpha={`// Load single relation
const users = await db.query(
  gull\`main:users slay:* fam:profile\`
);

// Load multiple relations
const users = await db.query(
  gull\`main:users slay:* fam:profile,posts\`
);`}
        title="basic.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Nested Eager Loading</h2>

      <CodeBlock
        og={`// Load nested relations with dot notation
const users = await db.query(
  gull\`from:users sel:* with:posts.comments\`
);
// Result: users → posts → comments

// Multiple levels deep
const users = await db.query(
  gull\`from:users sel:* with:posts.comments.author\`
);
// Result: users → posts → comments → author`}
        genalpha={`// Load nested relations with dot notation
const users = await db.query(
  gull\`main:users slay:* fam:posts.comments\`
);
// Result: users → posts → comments

// Multiple levels deep
const users = await db.query(
  gull\`main:users slay:* fam:posts.comments.author\`
);
// Result: users → posts → comments → author`}
        title="nested.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Constrained Eager Loading</h2>

      <CodeBlock
        og={`// Filter related records
const users = await db.query(
  gull\`from:users sel:* with:posts(whr:published=true)\`
);
// Only loads published posts

// Order related records
const users = await db.query(
  gull\`from:users sel:* with:posts(ord:created_at/desc)\`
);
// Posts ordered by date

// Limit related records
const users = await db.query(
  gull\`from:users sel:* with:posts(lim:5 ord:created_at/desc)\`
);
// Only latest 5 posts per user`}
        genalpha={`// Filter related records
const users = await db.query(
  gull\`main:users slay:* fam:posts(sus:published=true)\`
);
// Only loads published posts

// Order related records
const users = await db.query(
  gull\`main:users slay:* fam:posts(vibe:created_at/desc)\`
);
// Posts ordered by date

// Limit related records
const users = await db.query(
  gull\`main:users slay:* fam:posts(bet:5 vibe:created_at/desc)\`
);
// Only latest 5 posts per user`}
        title="constrained.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Select Specific Columns</h2>

      <CodeBlock
        og={`// Select only needed columns from relations
const users = await db.query(
  gull\`from:users sel:id,name with:posts(sel:id,title)\`
);
// { id: 1, name: "John", posts: [{ id: 1, title: "Hello" }] }`}
        genalpha={`// Select only needed columns from relations
const users = await db.query(
  gull\`main:users slay:id,name fam:posts(slay:id,title)\`
);
// { id: 1, name: "John", posts: [{ id: 1, title: "Hello" }] }`}
        title="select-columns.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Loading Strategies</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">Subquery (Default)</h3>
          <p className="text-text-secondary text-sm">
            Uses separate queries for each relation. Best for hasMany relations
            to avoid row multiplication.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">Join</h3>
          <p className="text-text-secondary text-sm">
            Uses SQL JOINs. More efficient for hasOne/belongsTo but can cause
            row duplication with hasMany.
          </p>
        </div>
      </div>

      <CodeBlock
        og={`// Force join strategy
const users = await db.query(
  gull\`from:users sel:* with:profile/join\`
);

// Force subquery strategy
const users = await db.query(
  gull\`from:users sel:* with:posts/subquery\`
);`}
        genalpha={`// Force join strategy
const users = await db.query(
  gull\`main:users slay:* fam:profile/join\`
);

// Force subquery strategy
const users = await db.query(
  gull\`main:users slay:* fam:posts/subquery\`
);`}
        title="strategies.ts"
      />

      <div className="feature-card bg-neon-cyan/5 border-neon-cyan/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-cyan">Performance Tip</h3>
        <p className="text-text-secondary text-sm">
          Only eager load what you need. Loading unnecessary relations wastes
          database resources and memory. Use constrained loading to limit data.
        </p>
      </div>
    </article>
  );
}
