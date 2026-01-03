"use client";

import { useState, ReactNode } from "react";

interface Example {
  name: string;
  emoji: string;
  og: string;
  genalpha: string;
  sql: string;
}

const examples: Example[] = [
  {
    name: "Basic Query",
    emoji: "🔍",
    og: "from:users sel:name,email whr:age>18",
    genalpha: "main:users slay:name,email sus:age>18",
    sql: "SELECT name, email FROM users WHERE age > 18",
  },
  {
    name: "Sorting",
    emoji: "📊",
    og: "from:posts sel:title,views ord:views/desc lim:5",
    genalpha: "main:posts slay:title,views vibe:views/desc bet:5",
    sql: "SELECT title, views FROM posts ORDER BY views DESC LIMIT 5",
  },
  {
    name: "Insert",
    emoji: "➕",
    og: "ins:users cols:name,email vals:john,john@test.com ret:id",
    genalpha: "nocap:users drip:name,email fire:john,john@test.com flex:id",
    sql: "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
  },
  {
    name: "Update",
    emoji: "✏️",
    og: "upd:users set:verified=true whr:id=1 ret:*",
    genalpha: "glow:users rizz:verified=true sus:id=1 flex:*",
    sql: "UPDATE users SET verified = $1 WHERE id = $2 RETURNING *",
  },
  {
    name: "Delete",
    emoji: "🗑️",
    og: "del:sessions whr:expired=true",
    genalpha: "yeet:sessions sus:expired=true",
    sql: "DELETE FROM sessions WHERE expired = $1",
  },
  {
    name: "Join",
    emoji: "🔗",
    og: "from:orders join:users/left on:orders.user_id=users.id sel:*",
    genalpha: "main:orders link:users/left match:orders.user_id=users.id slay:*",
    sql: "SELECT * FROM orders LEFT JOIN users ON orders.user_id = users.id",
  },
];

function highlightCode(code: string, type: "genaql" | "sql"): ReactNode[] {
  const parts: ReactNode[] = [];
  let remaining = code;
  let key = 0;

  if (type === "genaql") {
    const keywords = /(from|sel|whr|ord|lim|off|grp|hav|join|on|ins|cols|vals|upd|set|del|ret|main|slay|sus|vibe|bet|skip|squad|tea|link|match|nocap|drip|fire|glow|rizz|yeet|flex):/g;
    const modifiers = /(\/desc|\/asc|\/left|\/right|\/full)/g;

    let lastIndex = 0;
    let match;

    const allMatches: { index: number; length: number; text: string; className: string }[] = [];

    keywords.lastIndex = 0;
    while ((match = keywords.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-keyword" });
    }

    modifiers.lastIndex = 0;
    while ((match = modifiers.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-operator" });
    }

    allMatches.sort((a, b) => a.index - b.index);

    for (const m of allMatches) {
      if (m.index > lastIndex) {
        parts.push(<span key={key++}>{code.slice(lastIndex, m.index)}</span>);
      }
      parts.push(<span key={key++} className={m.className}>{m.text}</span>);
      lastIndex = m.index + m.length;
    }

    if (lastIndex < code.length) {
      parts.push(<span key={key++}>{code.slice(lastIndex)}</span>);
    }
  } else {
    const sqlKeywords = /\b(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|LIMIT|OFFSET|GROUP BY|HAVING|JOIN|LEFT|RIGHT|FULL|ON|INSERT INTO|VALUES|UPDATE|SET|DELETE|RETURNING)\b/g;
    const params = /(\$\d+)/g;

    let lastIndex = 0;
    const allMatches: { index: number; length: number; text: string; className: string }[] = [];

    let match;
    sqlKeywords.lastIndex = 0;
    while ((match = sqlKeywords.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-keyword" });
    }

    params.lastIndex = 0;
    while ((match = params.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-number" });
    }

    allMatches.sort((a, b) => a.index - b.index);

    for (const m of allMatches) {
      if (m.index > lastIndex) {
        parts.push(<span key={key++}>{code.slice(lastIndex, m.index)}</span>);
      }
      parts.push(<span key={key++} className={m.className}>{m.text}</span>);
      lastIndex = m.index + m.length;
    }

    if (lastIndex < code.length) {
      parts.push(<span key={key++}>{code.slice(lastIndex)}</span>);
    }
  }

  return parts.length > 0 ? parts : [<span key={0}>{code}</span>];
}

export function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [syntaxMode, setSyntaxMode] = useState<"classic" | "genalpha">("genalpha");
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const currentExample = examples[selectedExample];

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Example selector */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedExample(i);
              setShowOutput(false);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              i === selectedExample
                ? "bg-neon-lime text-void"
                : "bg-surface border border-elevated hover:border-neon-lime/50"
            }`}
          >
            <span className="mr-2">{ex.emoji}</span>
            {ex.name}
          </button>
        ))}
      </div>

      {/* Syntax toggle */}
      <div className="flex justify-center mb-6">
        <div className="syntax-toggle">
          <button
            onClick={() => setSyntaxMode("classic")}
            className={syntaxMode === "classic" ? "active" : ""}
          >
            Classic
          </button>
          <button
            onClick={() => setSyntaxMode("genalpha")}
            className={syntaxMode === "genalpha" ? "active" : ""}
          >
            Gen Alpha
          </button>
        </div>
      </div>

      {/* Code display */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Input */}
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">genaql</span>
          </div>
          <div className="terminal-body relative">
            <pre className="code-block whitespace-pre-wrap break-all">
              <code>
                {highlightCode(
                  syntaxMode === "classic" ? currentExample.og : currentExample.genalpha,
                  "genaql"
                )}
              </code>
            </pre>
            {isRunning && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-pink animate-pulse" />
            )}
          </div>
        </div>

        {/* Output */}
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">SQL Output</span>
          </div>
          <div className="terminal-body">
            {showOutput ? (
              <pre className="code-block whitespace-pre-wrap break-all">
                <code className="code-string">
                  {highlightCode(currentExample.sql, "sql")}
                </code>
              </pre>
            ) : (
              <div className="text-text-muted text-sm flex items-center justify-center h-full min-h-[100px]">
                {isRunning ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-neon-lime border-t-transparent rounded-full animate-spin" />
                    <span>Compiling...</span>
                  </div>
                ) : (
                  "Click Run to compile"
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Run button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="btn-primary flex items-center gap-2 disabled:opacity-50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {isRunning ? "Compiling..." : "Run Query"}
        </button>
      </div>
    </div>
  );
}
