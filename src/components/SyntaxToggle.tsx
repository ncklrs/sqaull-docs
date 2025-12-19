"use client";

import { useSyntaxMode } from "@/hooks/useSyntaxMode";

export function SyntaxToggle() {
  const { mode, setMode } = useSyntaxMode();

  return (
    <div className="syntax-toggle">
      <button
        onClick={() => setMode("og")}
        className={mode === "og" ? "active" : ""}
      >
        OG 🧓
      </button>
      <button
        onClick={() => setMode("genalpha")}
        className={mode === "genalpha" ? "active" : ""}
      >
        Gen Alpha 💀
      </button>
    </div>
  );
}
