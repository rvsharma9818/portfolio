import type { Locale } from "./types";
import { locales } from "./types";

// Country (ISO 3166-1 alpha-2) → preferred portfolio locale.
// Anything not listed falls back to "en".
export const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  // Arabic-speaking markets
  AE: "ar", SA: "ar", EG: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar",
  JO: "ar", LB: "ar", SY: "ar", IQ: "ar", YE: "ar", PS: "ar", LY: "ar",
  TN: "ar", DZ: "ar", MA: "ar", SD: "ar", MR: "ar", SO: "ar", DJ: "ar",

  // Hindi — India (other English markets use en)
  IN: "hi",

  // Spanish-speaking markets
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", CU: "es", GT: "es", DO: "es", HN: "es", BO: "es", SV: "es",
  NI: "es", PY: "es", CR: "es", PA: "es", UY: "es", PR: "es",

  // French-speaking markets
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", CH: "fr", SN: "fr", CI: "fr",
  CM: "fr", MG: "fr", ML: "fr", BF: "fr", NE: "fr", TD: "fr", GA: "fr",
  CG: "fr", CD: "fr", BJ: "fr", TG: "fr",

  // German-speaking markets
  DE: "de", AT: "de", LI: "de",

  // Japanese
  JP: "ja",
};

export const LANGUAGE_PREFIX_TO_LOCALE: Record<string, Locale> = {
  ar: "ar",
  hi: "hi",
  es: "es",
  fr: "fr",
  de: "de",
  ja: "ja",
  en: "en",
};

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Pick a locale from an Accept-Language header like "fr-FR,fr;q=0.9,en;q=0.8".
 * Returns null if nothing matches.
 */
export function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const parts = header
    .split(",")
    .map((p) => {
      const [tag, q] = p.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parts) {
    const primary = tag.split("-")[0];
    const mapped = LANGUAGE_PREFIX_TO_LOCALE[primary];
    if (mapped) return mapped;
  }
  return null;
}

/**
 * Pick a locale from an ISO country code (e.g. "AE" → "ar"). Returns null on miss.
 */
export function localeFromCountry(country: string | null | undefined): Locale | null {
  if (!country) return null;
  return COUNTRY_TO_LOCALE[country.toUpperCase()] ?? null;
}
