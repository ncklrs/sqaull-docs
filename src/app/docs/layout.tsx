"use client";

import { Navigation } from "@/components/Navigation";
import { DocsSidebar } from "@/components/DocsSidebar";
import { SyntaxModeProvider } from "@/hooks/useSyntaxMode";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SyntaxModeProvider>
      <div className="min-h-screen bg-void">
        <Navigation />
        <div className="flex pt-16">
          <DocsSidebar />
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto px-8 py-12">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SyntaxModeProvider>
  );
}
