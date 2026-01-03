"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { AnimatedTerminal } from "@/components/AnimatedTerminal";
import { CodePlayground } from "@/components/CodePlayground";
import { Features } from "@/components/Features";

export default function Home() {
  const [terminalMode, setTerminalMode] = useState<"classic" | "genalpha">("genalpha");

  return (
    <div className="gradient-mesh min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-[fade-in_0.5s_ease-out]">
              <span className="badge badge-lime">New</span>
              <span className="text-text-secondary text-sm">
                Now with Gen Alpha syntax support 💀
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-[slide-up_0.5s_ease-out]">
              SQL for{" "}
              <span className="gradient-text glow-lime">Gen Alpha</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-4 animate-[slide-up_0.5s_ease-out_0.1s] opacity-0" style={{ animationFillMode: "forwards" }}>
              What if writing SQL felt like writing{" "}
              <span className="text-neon-cyan">Tailwind</span>?
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8 animate-[slide-up_0.5s_ease-out_0.2s] opacity-0" style={{ animationFillMode: "forwards" }}>
              A composable query language with type safety, multi-dialect support, and optional Gen Alpha slang for the chronically online.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-[slide-up_0.5s_ease-out_0.3s] opacity-0" style={{ animationFillMode: "forwards" }}>
              <Link href="/docs" className="btn-primary">
                Get Started
              </Link>
              <a
                href="https://github.com/genaql/genaql"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Syntax toggle for terminal */}
            <div className="flex justify-center mb-8">
              <div className="syntax-toggle">
                <button
                  onClick={() => setTerminalMode("classic")}
                  className={terminalMode === "classic" ? "active" : ""}
                >
                  Classic
                </button>
                <button
                  onClick={() => setTerminalMode("genalpha")}
                  className={terminalMode === "genalpha" ? "active" : ""}
                >
                  Gen Alpha 💀
                </button>
              </div>
            </div>
          </div>

          {/* Animated Terminal */}
          <div className="animate-[slide-up_0.5s_ease-out_0.4s] opacity-0" style={{ animationFillMode: "forwards" }}>
            <AnimatedTerminal mode={terminalMode} />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-elevated">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Before & After
            </h2>
            <p className="text-text-secondary text-lg">
              See the transformation from verbose SQL to clean genAQL syntax
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-4 text-text-muted text-sm">Traditional SQL</span>
              </div>
              <div className="terminal-body">
                <pre className="text-sm leading-relaxed overflow-x-auto">
                  <code className="text-text-secondary">
                    {`SELECT
  name,
  email,
  created_at
FROM users
WHERE age > 18
  AND status = 'active'
ORDER BY created_at DESC
LIMIT 10`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="transform-arrow">→</div>
            </div>

            {/* After */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]" />
                <div className="terminal-dot bg-[#febc2e]" />
                <div className="terminal-dot bg-[#28c840]" />
                <span className="ml-4 text-text-muted text-sm">genAQL</span>
                <span className="ml-auto badge badge-lime text-xs">One-liner</span>
              </div>
              <div className="terminal-body flex items-center">
                <pre className="text-sm">
                  <code>
                    <span className="code-keyword">from</span>:users{" "}
                    <span className="code-keyword">sel</span>:name,email,created_at{" "}
                    <span className="code-keyword">whr</span>:age{">"}18,status=active{" "}
                    <span className="code-keyword">ord</span>:created_at<span className="code-operator">/desc</span>{" "}
                    <span className="code-keyword">lim</span>:<span className="code-number">10</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syntax Reference Quick Look */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-abyss/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-pink mb-4">Syntax</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Two Flavors, Same SQL
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Choose your vibe: classic syntax for SQL purists, or Gen Alpha slang for maximum chaos energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Classic Syntax */}
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📋</span>
                <div>
                  <h3 className="text-xl font-semibold">Classic Syntax</h3>
                  <p className="text-text-muted text-sm">For SQL purists</p>
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span><span className="code-keyword">from:</span></span>
                  <span className="text-text-muted">FROM</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">sel:</span></span>
                  <span className="text-text-muted">SELECT</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">whr:</span></span>
                  <span className="text-text-muted">WHERE</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">ord:</span></span>
                  <span className="text-text-muted">ORDER BY</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">ins:</span></span>
                  <span className="text-text-muted">INSERT</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">upd:</span></span>
                  <span className="text-text-muted">UPDATE</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">del:</span></span>
                  <span className="text-text-muted">DELETE</span>
                </div>
              </div>
            </div>

            {/* Gen Alpha Syntax */}
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💀</span>
                <div>
                  <h3 className="text-xl font-semibold">Gen Alpha Slang</h3>
                  <p className="text-text-muted text-sm">No cap, fr fr</p>
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span><span className="code-keyword">main:</span></span>
                  <span className="text-text-muted">FROM (main character)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">slay:</span></span>
                  <span className="text-text-muted">SELECT (slay those cols)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">sus:</span></span>
                  <span className="text-text-muted">WHERE (filter the sus)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">vibe:</span></span>
                  <span className="text-text-muted">ORDER BY (vibe check)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">nocap:</span></span>
                  <span className="text-text-muted">INSERT (no cap)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">glow:</span></span>
                  <span className="text-text-muted">UPDATE (glow up)</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="code-keyword">yeet:</span></span>
                  <span className="text-text-muted">DELETE (yeet it)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-cyan mb-4">Interactive</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Try It Yourself
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Click through examples and see the SQL output in real-time
            </p>
          </div>

          <CodePlayground />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-abyss/50 border-t border-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-lime mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From simple queries to complex migrations, genAQL has you covered
            </p>
          </div>

          <Features />
        </div>
      </section>

      {/* Install Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-elevated">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Install genAQL and start writing SQL for Gen Alpha
          </p>

          {/* Install command */}
          <div className="terminal mb-8 max-w-md mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#ff5f57]" />
              <div className="terminal-dot bg-[#febc2e]" />
              <div className="terminal-dot bg-[#28c840]" />
              <span className="ml-4 text-text-muted text-sm">terminal</span>
            </div>
            <div className="terminal-body">
              <code className="text-neon-lime">npm install genaql</code>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" className="btn-primary">
              Read the Docs
            </Link>
            <Link href="/docs/quick-start" className="btn-secondary">
              Quick Start Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">genAQL</span>
              <span className="text-text-muted text-sm">
                SQL for Gen Alpha
              </span>
            </div>
            <div className="flex items-center gap-6 text-text-secondary text-sm">
              <Link href="/docs" className="hover:text-text-primary transition-colors">
                Docs
              </Link>
              <a
                href="https://github.com/genaql/genaql"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                GitHub
              </a>
              <span className="text-text-muted">
                MIT License
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
