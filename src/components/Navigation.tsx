"use client";

import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

export function Navigation() {
  const { isDark, toggle, mounted } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void/80 border-b border-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">sqaull</span>
            <span className="badge badge-pink text-xs">v0.1.0</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/docs" className="nav-link">
              Docs
            </Link>
            <Link href="/docs/syntax" className="nav-link">
              Syntax
            </Link>
            <Link href="/docs/type-safety" className="nav-link">
              Type Safety
            </Link>
            <a
              href="https://github.com/sqaull/sqaull"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center gap-1"
            >
              GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {mounted && (
                isDark ? (
                  <svg className="w-5 h-5 text-neon-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )
              )}
            </button>

            {/* CTA */}
            <Link href="/docs" className="btn-primary hidden sm:block">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
