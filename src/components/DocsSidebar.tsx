"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Syntax Reference", href: "/docs/syntax" },
      { title: "Gen Alpha Mode", href: "/docs/gen-alpha" },
      { title: "Type Safety", href: "/docs/type-safety" },
      { title: "Dialects", href: "/docs/dialects" },
    ],
  },
  {
    title: "Query Types",
    items: [
      { title: "SELECT Queries", href: "/docs/select" },
      { title: "INSERT Statements", href: "/docs/insert" },
      { title: "UPDATE Statements", href: "/docs/update" },
      { title: "DELETE Statements", href: "/docs/delete" },
      { title: "Joins", href: "/docs/joins" },
      { title: "Aggregations", href: "/docs/aggregations" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Relations", href: "/docs/relations" },
      { title: "Eager Loading", href: "/docs/eager-loading" },
      { title: "Migrations", href: "/docs/migrations" },
      { title: "Database Adapters", href: "/docs/adapters" },
      { title: "Transactions", href: "/docs/transactions" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "cook Template", href: "/docs/api/cook" },
      { title: "Fluent Builder", href: "/docs/api/builder" },
      { title: "defineSchema", href: "/docs/api/define-schema" },
      { title: "createClient", href: "/docs/api/create-client" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-elevated h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <nav className="p-4 space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-neon-lime/10 text-neon-lime font-medium"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
