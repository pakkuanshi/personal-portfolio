import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PreferencesProvider } from "@/components/preferences/preferences-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Personal Portfolio",
    template: "%s | Personal Portfolio",
  },
  description:
    "A strategic communication and marketing portfolio built for long-term personal brand growth.",
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
