import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeSnap - Share Screenshots Without Exposing PII",
  description: "Privacy-first Chrome extension that automatically detects and protects personally identifiable information in screenshots. Perfect for QA teams, product managers, and developers.",
  metadataBase: new URL('https://safesnap.app'),
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "SafeSnap - Share Screenshots Without Exposing PII",
    description: "Privacy-first Chrome extension for automatic PII protection in screenshots.",
    url: 'https://safesnap.app',
    siteName: 'SafeSnap',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SafeSnap - Share Screenshots Without Exposing PII",
    description: "Privacy-first Chrome extension for automatic PII protection in screenshots.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.className = theme;
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
