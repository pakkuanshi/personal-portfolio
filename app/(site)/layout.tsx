import type { ReactNode } from "react";

import { OpeningScreen } from "@/components/layout/opening-screen";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <OpeningScreen />
      <SiteHeader />
      <main className="pt-[7rem] lg:pt-[3.25rem]">{children}</main>
      <SiteFooter />
    </div>
  );
}
