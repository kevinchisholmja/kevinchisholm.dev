import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://kevinchisholm.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kevin Chisholm",
    template: "%s — Kevin Chisholm",
  },
  description:
    "I build AI-powered tools that solve real problems. Consulting for technical projects.",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Kevin Chisholm",
    title: "Kevin Chisholm",
    description:
      "I build AI-powered tools that solve real problems. Consulting for technical projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Chisholm",
    description:
      "I build AI-powered tools that solve real problems. Consulting for technical projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-canvas text-ink antialiased min-h-screen flex flex-col">
        {/* Background blobs — fixed, pure CSS, GPU-only */}
        <div className="bg-blob bg-blob-1" aria-hidden="true" />
        <div className="bg-blob bg-blob-2" aria-hidden="true" />

        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
