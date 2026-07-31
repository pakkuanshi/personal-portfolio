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
    <footer className="border-t border-border bg-background transition-colors duration-200 dark:border-[hsl(32_12%_30%/0.55)] dark:bg-[hsl(28_18%_8%)]">
      <div className="site-container grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl dark:text-[hsl(42_28%_90%)]">
            {t.site.name}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground dark:text-[hsl(38_14%_70%/0.82)]">
            {t.site.footer}
          </p>
        </div>

        <div className="grid gap-4 text-sm text-muted-foreground dark:text-[hsl(38_13%_70%/0.74)] sm:grid-cols-2 md:justify-self-end">
          <div>
            <p className="eyebrow dark:text-[hsl(38_14%_68%/0.62)]">
              {t.site.labels.contact}
            </p>
            <Link
              className="mt-3 block transition-colors hover:text-foreground dark:hover:text-[hsl(42_28%_92%)]"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </Link>
          </div>
          <div>
            <p className="eyebrow dark:text-[hsl(38_14%_68%/0.62)]">
              {t.site.labels.navigation}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {siteConfig.navigation.slice(1).map((item) => (
                <Link
                  className="transition-colors hover:text-foreground dark:hover:text-[hsl(42_28%_92%)]"
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
