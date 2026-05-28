"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Locale, ThemeMode } from "@/types/preferences";

type PreferencesContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const localeStorageKey = "portfolio-locale";
const themeStorageKey = "portfolio-theme";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh-CN" || value === "zh-TW";
}

function isTheme(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    const storedTheme = window.localStorage.getItem(themeStorageKey);

    if (isLocale(storedLocale)) {
      setLocaleState(storedLocale);
    }

    if (isTheme(storedTheme)) {
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      theme,
      setTheme: setThemeState,
    }),
    [locale, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }

  return context;
}
