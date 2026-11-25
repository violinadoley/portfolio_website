import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Violina Doley Portfolio",
  description:
    "Software Developer and ML Researcher building intelligent systems at the intersection of AI and machine learning.",
  keywords: [
    "Violina Doley",
    "Software Developer",
    "ML Researcher",
    "Machine Learning",
    "AI Engineer",
  ],
  authors: [{ name: "Violina Doley" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${newsreader.variable} antialiased bg-background text-foreground font-serif`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {/* Umami Analytics - Replace with your own website ID after setup */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_URL || "https://analytics.umami.is/script.js"}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
