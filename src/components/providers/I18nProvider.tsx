"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  dictionaries,
  Dictionary,
  Locale,
  locales,
} from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/geo";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "rs-lang";
const GEO_COOKIE = "rs-geo-locale";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function applyLocaleToDocument(locale: Locale) {
  const dir = dictionaries[locale].meta.dir ?? "ltr";
  document.documentElement.setAttribute("lang", locale);
  document.documentElement.setAttribute("dir", dir);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      applyLocaleToDocument(stored);
      return;
    }

    const geo = readCookie(GEO_COOKIE);
    if (isLocale(geo)) {
      setLocaleState(geo);
      applyLocaleToDocument(geo);
      return;
    }

    applyLocaleToDocument("en");
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      applyLocaleToDocument(next);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    const idx = locales.indexOf(locale);
    const next = locales[(idx + 1) % locales.length];
    setLocale(next);
  }, [locale, setLocale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: dictionaries[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
