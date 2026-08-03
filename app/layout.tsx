import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uge Destiny Enanefe — Full-Stack Developer & Business Strategist",
  description:
    "Portfolio of Uge Destiny Enanefe, a full-stack web developer and business strategist building technology, e-commerce and AI-enabled products.",
  keywords: [
    "Uge Destiny Enanefe",
    "Full-Stack Developer",
    "Business Strategist",
    "React Developer",
    "Node.js Developer",
    "E-commerce Developer",
    "Nigeria",
  ],
  openGraph: {
    title: "Uge Destiny Enanefe — Full-Stack Developer",
    description:
      "I build digital systems that turn ambitious ideas into scalable businesses.",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
