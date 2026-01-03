"use client";

import { useSyntaxMode } from "@/hooks/useSyntaxMode";
import { ReactNode } from "react";

interface CodeBlockProps {
  og: string;
  genalpha: string;
  output?: string;
  title?: string;
  showBoth?: boolean;
}

function highlightCode(code: string, type: "genaql" | "sql"): ReactNode[] {
  const parts: ReactNode[] = [];
  let remaining = code;
  let key = 0;

  if (type === "genaql") {
    const keywords = /(from|sel|whr|ord|lim|off|grp|hav|join|on|ins|cols|vals|upd|set|del|ret|main|slay|sus|vibe|bet|skip|squad|tea|link|match|nocap|drip|fire|glow|rizz|yeet|flex|fam|with):/g;
    const modifiers = /(\/desc|\/asc|\/left|\/right|\/full)/g;
    const functions = /(sum|cnt|avg|min|max):/g;

    let lastIndex = 0;
    const allMatches: { index: number; length: number; text: string; className: string }[] = [];

    let match;
    keywords.lastIndex = 0;
    while ((match = keywords.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-keyword" });
    }

    modifiers.lastIndex = 0;
    while ((match = modifiers.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-operator" });
    }

    functions.lastIndex = 0;
    while ((match = functions.exec(code)) !== null) {
      allMatches.push({ index: match.index, length: match[1].length, text: match[1], className: "code-function" });
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
    const sqlKeywords = /\b(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|LIMIT|OFFSET|GROUP BY|HAVING|JOIN|LEFT|RIGHT|FULL|INNER|ON|INSERT INTO|VALUES|UPDATE|SET|DELETE|RETURNING|AND|OR|IN|IS|NULL|NOT|SUM|COUNT|AVG|MIN|MAX)\b/g;
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

export function CodeBlock({ og, genalpha, output, title, showBoth }: CodeBlockProps) {
  const { mode, isGenAlpha } = useSyntaxMode();
  const code = isGenAlpha ? genalpha : og;

  if (showBoth) {
    return (
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">Classic Syntax</span>
          </div>
          <div className="terminal-body">
            <pre className="text-sm whitespace-pre-wrap break-all">
              <code>{highlightCode(og, "genaql")}</code>
            </pre>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-4 text-text-muted text-sm">Gen Alpha</span>
          </div>
          <div className="terminal-body">
            <pre className="text-sm whitespace-pre-wrap break-all">
              <code>{highlightCode(genalpha, "genaql")}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal mb-6">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-4 text-text-muted text-sm">{title || (isGenAlpha ? "Gen Alpha" : "Classic")}</span>
        <span className="ml-auto badge badge-lime text-xs">{mode.toUpperCase()}</span>
      </div>
      <div className="terminal-body">
        <pre className="text-sm whitespace-pre-wrap break-all">
          <code>{highlightCode(code, "genaql")}</code>
        </pre>
        {output && (
          <div className="mt-4 pt-4 border-t border-elevated">
            <div className="text-text-muted text-xs mb-2">SQL Output:</div>
            <pre className="text-sm whitespace-pre-wrap break-all">
              <code className="code-string">{highlightCode(output, "sql")}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export function InlineCode({ og, genalpha }: { og: string; genalpha: string }) {
  const { isGenAlpha } = useSyntaxMode();
  return (
    <code className="px-1.5 py-0.5 bg-surface rounded text-neon-lime text-sm font-mono">
      {isGenAlpha ? genalpha : og}
    </code>
  );
}
