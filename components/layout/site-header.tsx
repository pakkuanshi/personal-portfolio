"use client";

import Link from "next/link";
import { useState } from "react";

import { PreferenceControls } from "@/components/preferences/preference-controls";
import { siteConfig } from "@/config/site";
import { dictionary } from "@/lib/i18n";
import { usePreferences } from "@/components/preferences/preferences-provider";

export function SiteHeader() {
  const { locale } = usePreferences();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = dictionary[locale];
  const navLabels = t.site.nav;
  const dropdownLabels = t.site.navDropdown;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="site-container site-header-inner flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-0">
        <Link
          className="site-brand shrink-0 transition-colors hover:opacity-70"
          href="/"
        >
          {t.site.name}
        </Link>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between lg:justify-end lg:gap-7">
          <nav
            aria-label="Primary navigation"
            data-dropdown-open={openDropdown ? "true" : undefined}
            className="site-nav flex items-center overflow-x-auto pb-1 md:overflow-visible md:pb-0"
          >
            {siteConfig.navigation.map((item) =>
              item.children ? (
                <div
                  className="site-nav-item shrink-0"
                  data-open={openDropdown === item.key ? "true" : undefined}
                  key={item.href}
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    aria-expanded={openDropdown === item.key}
                    aria-haspopup="menu"
                    className="site-nav-link site-nav-trigger"
                    href={item.href}
                    onClick={(event) => {
                      if (!window.matchMedia("(max-width: 767px)").matches) {
                        return;
                      }

                      event.preventDefault();
                      setOpenDropdown((current) =>
                        current === item.key ? null : item.key,
                      );
                    }}
                  >
                    {navLabels[item.key]}
                  </Link>

                  <div className="site-nav-dropdown" role="menu">
                    {item.children.map((child) => (
                      <Link
                        className="site-nav-dropdown-link"
                        href={child.href}
                        key={child.href}
                        onClick={() => setOpenDropdown(null)}
                        role="menuitem"
                      >
                        {dropdownLabels[child.key]}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  className="site-nav-link shrink-0"
                  href={item.href}
                  key={item.href}
                >
                  {navLabels[item.key]}
                </Link>
              ),
            )}
          </nav>

          <PreferenceControls />
        </div>
      </div>
    </header>
  );
}
