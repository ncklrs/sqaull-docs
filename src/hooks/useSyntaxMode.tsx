"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type SyntaxMode = "classic" | "genalpha";

interface SyntaxModeContextType {
  mode: SyntaxMode;
  setMode: (mode: SyntaxMode) => void;
  toggle: () => void;
  isGenAlpha: boolean;
}

const SyntaxModeContext = createContext<SyntaxModeContextType | null>(null);

export function SyntaxModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<SyntaxMode>("genalpha");

  const toggle = useCallback(() => {
    setMode((prev) => (prev === "classic" ? "genalpha" : "classic"));
  }, []);

  const value = {
    mode,
    setMode,
    toggle,
    isGenAlpha: mode === "genalpha",
  };

  return (
    <SyntaxModeContext.Provider value={value}>
      {children}
    </SyntaxModeContext.Provider>
  );
}

export function useSyntaxMode() {
  const context = useContext(SyntaxModeContext);
  if (!context) {
    throw new Error("useSyntaxMode must be used within a SyntaxModeProvider");
  }
  return context;
}
