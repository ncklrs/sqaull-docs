import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "genAQL - SQL that hits different",
  description: "A Tailwind-inspired query language that compiles to SQL. Write queries the way you think.",
  keywords: ["SQL", "query builder", "TypeScript", "database", "ORM", "genAQL"],
  openGraph: {
    title: "genAQL - SQL that hits different",
    description: "A Tailwind-inspired query language that compiles to SQL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
