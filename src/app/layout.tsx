import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "SK — Credit Infrastructure for Corporate LATAM",
  description: "The first AI-native credit infrastructure for corporate Latin America. Deploy supply chain finance, credit lines, and BNPL via API in days.",
  keywords: ["credit infrastructure", "LATAM", "supply chain finance", "B2B BNPL", "credit lines", "invoice financing", "API credit"],
  openGraph: {
    title: "SK — Credit Infrastructure",
    description: "AI-native credit infrastructure for corporate Latin America.",
    url: "https://sk.com",
    siteName: "SK",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK — Credit Infrastructure",
    description: "AI-native credit infrastructure for corporate Latin America.",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: ['/icon.svg'],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "h-full", "antialiased", "scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
