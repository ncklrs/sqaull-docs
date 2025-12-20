"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export default function RelationsPage() {
  const { isGenAlpha } = useSyntaxMode();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Relations</h1>

      <p className="text-xl text-text-secondary mb-8">
        Define relationships between tables for type-safe queries and eager loading.
        {isGenAlpha && " Build that fam tree bestie 👨‍👩‍👧‍👦"}
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Defining Relations</h2>

      <CodeBlock
        og={`import { defineSchema, hasOne, hasMany, belongsTo, manyToMany } from 'sqaull';

const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text'
  },
  profiles: {
    id: 'serial',
    user_id: 'integer',
    bio: 'text',
    avatar_url: 'text'
  },
  posts: {
    id: 'serial',
    user_id: 'integer',
    title: 'text',
    content: 'text'
  },
  tags: {
    id: 'serial',
    name: 'text'
  },
  post_tags: {
    post_id: 'integer',
    tag_id: 'integer'
  }
}, {
  relations: {
    users: {
      profile: hasOne('profiles', 'user_id'),
      posts: hasMany('posts', 'user_id')
    },
    profiles: {
      user: belongsTo('users', 'user_id')
    },
    posts: {
      author: belongsTo('users', 'user_id'),
      tags: manyToMany('tags', 'post_tags', 'post_id', 'tag_id')
    }
  }
});`}
        genalpha={`import { defineSchema, got, stacked, simps, linked } from 'sqaull';

const schema = defineSchema({
  users: {
    id: 'serial',
    name: 'text',
    email: 'text'
  },
  profiles: {
    id: 'serial',
    user_id: 'integer',
    bio: 'text',
    avatar_url: 'text'
  },
  posts: {
    id: 'serial',
    user_id: 'integer',
    title: 'text',
    content: 'text'
  },
  tags: {
    id: 'serial',
    name: 'text'
  },
  post_tags: {
    post_id: 'integer',
    tag_id: 'integer'
  }
}, {
  relations: {
    users: {
      profile: got('profiles', 'user_id'),      // user got profile
      posts: stacked('posts', 'user_id')        // user stacked posts
    },
    profiles: {
      user: simps('users', 'user_id')           // profile simps for user
    },
    posts: {
      author: simps('users', 'user_id'),        // post simps for user
      tags: linked('tags', 'post_tags', 'post_id', 'tag_id')  // linked up
    }
  }
});`}
        title="schema.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Relation Types</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-elevated">
              <th className="text-left py-3 px-4 text-text-muted font-medium">OG</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Gen Alpha</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Description</th>
              <th className="text-left py-3 px-4 text-text-muted font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-elevated">
            <tr>
              <td className="py-3 px-4"><code className="code-function">hasOne()</code></td>
              <td className="py-3 px-4"><code className="code-function">got()</code></td>
              <td className="py-3 px-4 text-text-secondary">One-to-one</td>
              <td className="py-3 px-4 text-text-muted text-xs">User has one Profile</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">hasMany()</code></td>
              <td className="py-3 px-4"><code className="code-function">stacked()</code></td>
              <td className="py-3 px-4 text-text-secondary">One-to-many</td>
              <td className="py-3 px-4 text-text-muted text-xs">User has many Posts</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">belongsTo()</code></td>
              <td className="py-3 px-4"><code className="code-function">simps()</code></td>
              <td className="py-3 px-4 text-text-secondary">Inverse of hasOne/hasMany</td>
              <td className="py-3 px-4 text-text-muted text-xs">Post belongs to User</td>
            </tr>
            <tr>
              <td className="py-3 px-4"><code className="code-function">manyToMany()</code></td>
              <td className="py-3 px-4"><code className="code-function">linked()</code></td>
              <td className="py-3 px-4 text-text-secondary">Many-to-many via pivot</td>
              <td className="py-3 px-4 text-text-muted text-xs">Posts linked to Tags</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Querying Relations</h2>

      <CodeBlock
        og={`// Load user with their profile
const user = await db.query(
  gull\`from:users sel:* whr:id=1 with:profile\`
);
// { id: 1, name: "John", profile: { bio: "...", avatar_url: "..." } }

// Load user with all their posts
const userWithPosts = await db.query(
  gull\`from:users sel:* whr:id=1 with:posts\`
);
// { id: 1, name: "John", posts: [{ title: "...", content: "..." }, ...] }`}
        genalpha={`// Load user with their profile
const user = await db.query(
  gull\`main:users slay:* sus:id=1 fam:profile\`
);
// { id: 1, name: "John", profile: { bio: "...", avatar_url: "..." } }

// Load user with all their posts
const userWithPosts = await db.query(
  gull\`main:users slay:* sus:id=1 fam:posts\`
);
// { id: 1, name: "John", posts: [{ title: "...", content: "..." }, ...] }`}
        title="query-relations.ts"
      />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Nested Relations</h2>

      <CodeBlock
        og={`// Load posts with author and tags
const posts = await db.query(
  gull\`from:posts sel:* with:author,tags\`
);
// [{ title: "...", author: { name: "John" }, tags: [{ name: "tech" }] }]

// Nested eager loading
const users = await db.query(
  gull\`from:users sel:* with:posts.tags\`
);
// [{ name: "John", posts: [{ title: "...", tags: [...] }] }]`}
        genalpha={`// Load posts with author and tags
const posts = await db.query(
  gull\`main:posts slay:* fam:author,tags\`
);
// [{ title: "...", author: { name: "John" }, tags: [{ name: "tech" }] }]

// Nested eager loading
const users = await db.query(
  gull\`main:users slay:* fam:posts.tags\`
);
// [{ name: "John", posts: [{ title: "...", tags: [...] }] }]`}
        title="nested.ts"
      />

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20 mt-8">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">Type Safety</h3>
        <p className="text-text-secondary text-sm">
          Relations are fully typed. TypeScript knows the shape of loaded relations
          and will error if you try to access a relation that wasn&apos;t eagerly loaded.
        </p>
      </div>
    </article>
  );
}
