"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";

interface CodeExample {
  genaql: string;
  sql: string;
  label: string;
}

const examples: CodeExample[] = [
  {
    label: "SELECT",
    genaql: 'cook`main:users slay:name,email sus:age>18 vibe:created_at/desc bet:10`',
    sql: "SELECT name, email FROM users WHERE age > 18 ORDER BY created_at DESC LIMIT 10",
  },
  {
    label: "INSERT",
    genaql: 'cook`nocap:users drip:name,email fire:john,john@test.com flex:id`',
    sql: "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
  },
  {
    label: "UPDATE",
    genaql: 'cook`glow:users rizz:status=active sus:id=1 flex:*`',
    sql: "UPDATE users SET status = $1 WHERE id = $2 RETURNING *",
  },
  {
    label: "DELETE",
    genaql: 'cook`yeet:sessions sus:expired=true`',
    sql: "DELETE FROM sessions WHERE expired = $1",
  },
  {
    label: "JOIN",
    genaql: 'cook`main:orders link:users/left match:orders.user_id=users.id slay:*`',
    sql: "SELECT * FROM orders LEFT JOIN users ON orders.user_id = users.id",
  },
];

// Safe syntax highlighter using React elements
function highlightGenaql(code: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let remaining = code;
  let keyIndex = 0;

  const patterns = [
    { regex: /^(cook)(`)/,  classes: ["code-function", ""] },
    { regex: /^(from|sel|whr|ord|lim|off|grp|hav|join|on|ins|cols|vals|upd|set|del|ret)(:)/, classes: ["code-keyword", ""] },
    { regex: /^(main|slay|sus|vibe|bet|skip|squad|tea|link|match|nocap|drip|fire|glow|rizz|yeet|flex)(:)/, classes: ["code-keyword", ""] },
    { regex: /^(\d+)/, classes: ["code-number"] },
    { regex: /^(\/desc|\/asc|\/left|\/right|\/full)/, classes: ["code-operator"] },
  ];

  while (remaining.length > 0) {
    let matched = false;

    for (const { regex, classes } of patterns) {
      const match = remaining.match(regex);
      if (match) {
        for (let i = 1; i < match.length; i++) {
          if (match[i]) {
            const className = classes[i - 1];
            if (className) {
              parts.push(<span key={keyIndex++} className={className}>{match[i]}</span>);
            } else {
              parts.push(<span key={keyIndex++}>{match[i]}</span>);
            }
          }
        }
        if (match.length === 2 && match[1]) {
          // Single capture group
          parts.push(<span key={keyIndex++} className={classes[0]}>{match[1]}</span>);
        }
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      parts.push(<span key={keyIndex++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return parts;
}

function highlightSql(code: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let remaining = code;
  let keyIndex = 0;

  const keywords = /^(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|LIMIT|OFFSET|GROUP BY|HAVING|JOIN|LEFT|RIGHT|FULL|ON|INSERT INTO|VALUES|UPDATE|SET|DELETE|RETURNING)\b/;
  const params = /^(\$\d+)/;
  const operators = /^(\*)/;

  while (remaining.length > 0) {
    let matched = false;

    const kwMatch = remaining.match(keywords);
    if (kwMatch) {
      parts.push(<span key={keyIndex++} className="code-keyword">{kwMatch[1]}</span>);
      remaining = remaining.slice(kwMatch[1].length);
      matched = true;
    }

    if (!matched) {
      const paramMatch = remaining.match(params);
      if (paramMatch) {
        parts.push(<span key={keyIndex++} className="code-number">{paramMatch[1]}</span>);
        remaining = remaining.slice(paramMatch[1].length);
        matched = true;
      }
    }

    if (!matched) {
      const opMatch = remaining.match(operators);
      if (opMatch) {
        parts.push(<span key={keyIndex++} className="code-operator">{opMatch[1]}</span>);
        remaining = remaining.slice(opMatch[1].length);
        matched = true;
      }
    }

    if (!matched) {
      parts.push(<span key={keyIndex++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return parts;
}

export function AnimatedTerminal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedGenaql, setDisplayedGenaql] = useState("");
  const [displayedSql, setDisplayedSql] = useState("");
  const [phase, setPhase] = useState<"typing" | "executing" | "result" | "pause">("typing");
  const [isExecuting, setIsExecuting] = useState(false);

  const currentExample = examples[currentIndex];

  const typeText = useCallback(
    (text: string, setter: (s: string) => void, onComplete: () => void) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setter(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          onComplete();
        }
      }, 25);
      return () => clearInterval(interval);
    },
    []
  );

  useEffect(() => {
    setDisplayedGenaql("");
    setDisplayedSql("");
    setPhase("typing");
    setIsExecuting(false);
  }, [currentIndex]);

  useEffect(() => {
    if (phase === "typing") {
      const cleanup = typeText(currentExample.genaql, setDisplayedGenaql, () => {
        setPhase("executing");
      });
      return cleanup;
    }
  }, [phase, currentExample.genaql, typeText]);

  useEffect(() => {
    if (phase === "executing") {
      setIsExecuting(true);
      const timeout = setTimeout(() => {
        setIsExecuting(false);
        setPhase("result");
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "result") {
      const cleanup = typeText(currentExample.sql, setDisplayedSql, () => {
        setPhase("pause");
      });
      return cleanup;
    }
  }, [phase, currentExample.sql, typeText]);

  useEffect(() => {
    if (phase === "pause") {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % examples.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [phase, examples.length]);

  return (
    <div className="terminal w-full max-w-3xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-4 text-text-muted text-sm font-mono">
          genaql
        </span>
        <span className="ml-auto badge badge-lime text-xs">
          {currentExample.label}
        </span>
      </div>
      <div className="terminal-body">
        {/* Input line */}
        <div className="mb-4">
          <span className="code-function">{">"}</span>{" "}
          {highlightGenaql(displayedGenaql)}
          {phase === "typing" && <span className="typing-cursor" />}
        </div>

        {/* Execution indicator */}
        {isExecuting && (
          <div className="mb-4 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-neon-lime border-t-transparent rounded-full animate-spin" />
            <span className="text-text-muted text-sm">Compiling...</span>
          </div>
        )}

        {/* Output */}
        {(phase === "result" || phase === "pause") && (
          <div className="border-l-2 border-neon-lime/30 pl-4">
            <div className="text-text-muted text-xs mb-2">→ SQL Output:</div>
            <div className="code-string">
              {highlightSql(displayedSql)}
            </div>
            {phase === "result" && <span className="typing-cursor" />}
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-4 bg-surface/50">
        {examples.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex
                ? "bg-neon-lime w-6"
                : "bg-elevated hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
