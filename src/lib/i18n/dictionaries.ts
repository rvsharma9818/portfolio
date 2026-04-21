import type { Dictionary, Locale } from "./types";
import { en } from "./locales/en";
import { hi } from "./locales/hi";
import { ar } from "./locales/ar";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { de } from "./locales/de";
import { ja } from "./locales/ja";

export { locales } from "./types";
export type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  hi,
  ar,
  es,
  fr,
  de,
  ja,
};
