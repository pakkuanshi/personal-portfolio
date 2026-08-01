import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PreferencesProvider } from "@/components/preferences/preferences-provider";

import "./globals.css";

const siteDescription =
  "A strategic communication and marketing portfolio built for long-term personal brand growth.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kristyshi.com"),
  title: {
    default: "Kristy Shi Portfolio",
    template: "%s | Kristy Shi",
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kristy Shi Portfolio",
    description: siteDescription,
    url: "/",
    siteName: "Kristy Shi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kristy Shi Portfolio",
    description: siteDescription,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
