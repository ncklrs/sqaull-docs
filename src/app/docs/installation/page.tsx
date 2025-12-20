export default function InstallationPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">Installation</h1>

      <p className="text-xl text-text-secondary mb-8">
        Get sqaull installed in your project in under a minute.
      </p>

      <div className="line-glow my-8" />

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Requirements</h2>

      <ul className="list-disc list-inside text-text-secondary mb-8 space-y-2">
        <li>Node.js 18 or later</li>
        <li>TypeScript 5.0+ (recommended for type safety)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Install sqaull</h2>

      <p className="text-text-secondary mb-4">
        Install sqaull using your preferred package manager:
      </p>

      <div className="space-y-4 mb-8">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">npm</span>
          </div>
          <div className="terminal-body">
            <code className="text-neon-lime">npm install sqaull</code>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">pnpm</span>
          </div>
          <div className="terminal-body">
            <code className="text-neon-lime">pnpm add sqaull</code>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">yarn</span>
          </div>
          <div className="terminal-body">
            <code className="text-neon-lime">yarn add sqaull</code>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">bun</span>
          </div>
          <div className="terminal-body">
            <code className="text-neon-lime">bun add sqaull</code>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Database Drivers</h2>

      <p className="text-text-secondary mb-4">
        To actually run queries against a database, install the driver for your database:
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-lime">PostgreSQL</h3>
          <code className="text-sm text-text-secondary">npm install pg</code>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-pink">MySQL</h3>
          <code className="text-sm text-text-secondary">npm install mysql2</code>
        </div>
        <div className="feature-card">
          <h3 className="text-lg font-semibold mb-2 text-neon-cyan">SQLite</h3>
          <code className="text-sm text-text-secondary">npm install better-sqlite3</code>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Verify Installation</h2>

      <p className="text-text-secondary mb-4">
        Create a test file to verify sqaull is working:
      </p>

      <div className="terminal mb-8">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#ff5f57]" />
          <div className="terminal-dot bg-[#febc2e]" />
          <div className="terminal-dot bg-[#28c840]" />
          <span className="ml-4 text-text-muted text-sm">test.ts</span>
        </div>
        <div className="terminal-body">
          <pre className="text-sm">
            <code>
              <span className="code-keyword">import</span> {"{"} gull {"}"} <span className="code-keyword">from</span> <span className="code-string">&apos;sqaull&apos;</span>;{"\n\n"}
              <span className="code-keyword">const</span> query = gull<span className="code-string">`from:users sel:* lim:1`</span>;{"\n\n"}
              console.<span className="code-function">log</span>(query.<span className="code-function">toSQL</span>());{"\n"}
              <span className="code-comment">// Should output: SELECT * FROM users LIMIT 1</span>
            </code>
          </pre>
        </div>
      </div>

      <div className="feature-card bg-neon-lime/5 border-neon-lime/20">
        <h3 className="text-lg font-semibold mb-2 text-neon-lime">You&apos;re Ready!</h3>
        <p className="text-text-secondary text-sm">
          sqaull is installed and ready to use. Head to the{" "}
          <a href="/docs/quick-start" className="text-neon-lime hover:underline">Quick Start</a>{" "}
          guide to write your first real query.
        </p>
      </div>
    </article>
  );
}
