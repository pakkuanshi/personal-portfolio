"use client";

import { Languages, Moon, Sun } from "lucide-react";

import { dictionary, localeOptions, themeOptions } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/components/preferences/preferences-provider";

export function PreferenceControls() {
  const { locale, setLocale, theme, setTheme } = usePreferences();
  const t = dictionary[locale];
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div className="preference-shell flex flex-wrap items-center gap-2">
      <button
        aria-label={t.preferences.theme}
        aria-pressed={theme === "dark"}
        className="theme-toggle group relative inline-flex h-7 w-14 items-center rounded-full px-1 transition-colors"
        onClick={() => setTheme(nextTheme)}
        type="button"
      >
        <span className="sr-only">
          {themeOptions.find((option) => option.value === theme)?.label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "theme-toggle-thumb absolute h-5 w-5 rounded-full transition-transform duration-200 ease-out",
            theme === "dark" && "translate-x-7",
          )}
        />
        <span className="relative z-10 grid w-full grid-cols-2 text-current opacity-70">
          <span className="flex h-5 items-center justify-center">
            <Sun
              aria-hidden="true"
              className={cn(theme === "light" && "opacity-100")}
              size={12}
            />
          </span>
          <span className="flex h-5 items-center justify-center">
            <Moon
              aria-hidden="true"
              className={cn(theme === "dark" && "opacity-100")}
              size={12}
            />
          </span>
        </span>
      </button>

      <div
        aria-label={t.preferences.language}
        className="language-toggle flex h-7 items-center gap-1 rounded-full p-1"
        role="group"
      >
        <Languages aria-hidden="true" className="ml-1 opacity-45" size={12} />
        {localeOptions.map((option) => (
          <button
            aria-pressed={locale === option.value}
            data-active={locale === option.value}
            className={cn(
              "language-toggle-button h-5 min-w-6 rounded-full px-1.5 text-[0.68rem] font-medium leading-none transition-colors",
            )}
            key={option.value}
            onClick={() => setLocale(option.value)}
            type="button"
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
