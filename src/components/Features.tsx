"use client";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Tailwind-Style Syntax",
    description: "Write SQL queries using composable utility patterns. Colons separate utilities, slashes add modifiers. Clean, scannable, expressive.",
    badge: "Core",
    badgeClass: "badge-lime",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Gen Alpha Mode",
    description: "main:users slay:* sus:age>18 vibe:name/desc bet:10 — SQL that hits different. No cap, fr fr. Same output, more rizz.",
    badge: "Fun",
    badgeClass: "badge-pink",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Type Safety",
    description: "Define your schema once with defineSchema(). Get compile-time validation, autocomplete, and runtime checks that catch errors before they hit your database.",
    badge: "Safe",
    badgeClass: "badge-cyan",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Multi-Dialect",
    description: "PostgreSQL, MySQL, SQLite — write once, deploy anywhere. Automatic placeholder syntax conversion ($1 vs ?) and dialect-specific SQL generation.",
    badge: "Flexible",
    badgeClass: "badge-lime",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Migrations",
    description: "Schema management with automatic up/down generation. Fluent builder API, foreign keys, indexes — everything you need for production databases.",
    badge: "Pro",
    badgeClass: "badge-pink",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Relations & Eager Loading",
    description: "hasMany, belongsTo, manyToMany — define relationships and load related data efficiently with with: or fam: (Gen Alpha). No N+1 queries.",
    badge: "ORM",
    badgeClass: "badge-cyan",
  },
];

export function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="feature-card opacity-0 animate-[slide-up_0.5s_ease-out_forwards]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="text-neon-lime">{feature.icon}</div>
            <span className={`badge ${feature.badgeClass}`}>{feature.badge}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
