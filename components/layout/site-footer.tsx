"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { dictionary } from "@/lib/i18n";
import { usePreferences } from "@/components/preferences/preferences-provider";

export function SiteFooter() {
  const { locale } = usePreferences();
  const t = dictionary[locale];
  const navLabels = t.site.nav;

  return (
    <footer className="border-t border-border">
      <div className="site-container grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl">{t.site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            {t.site.footer}
          </p>
        </div>

        <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 md:justify-self-end">
          <div>
            <p className="eyebrow">{t.site.labels.contact}</p>
            <Link
              className="mt-3 block transition-colors hover:text-foreground"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </Link>
          </div>
          <div>
            <p className="eyebrow">{t.site.labels.navigation}</p>
            <div className="mt-3 flex flex-col gap-2">
              {siteConfig.navigation.slice(1).map((item) => (
                <Link
                  className="transition-colors hover:text-foreground"
                  href={item.href}
                  key={item.href}
                >
                  {navLabels[item.key]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
