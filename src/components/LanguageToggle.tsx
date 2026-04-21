"use client";

import { Check, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { dictionaries, locales } from "@/lib/i18n/dictionaries";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const short = dictionaries[locale].meta.localeShort;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.nav.toggleLanguage}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={t.nav.toggleLanguage}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-[11px] font-medium tracking-[0.18em] text-foreground/80 transition hover:border-foreground/30 hover:bg-surface hover:text-foreground"
      >
        <Languages className="h-3.5 w-3.5" strokeWidth={1.6} />
        <span>{short}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-border bg-background/95 p-1 shadow-xl shadow-black/20 backdrop-blur-xl"
        >
          {locales.map((code) => {
            const d = dictionaries[code];
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    active
                      ? "bg-lime/10 text-lime"
                      : "text-foreground/85 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-6 items-center justify-center rounded border border-border text-[10px] font-mono uppercase">
                      {d.meta.localeShort}
                    </span>
                    <span>{d.meta.localeName}</span>
                  </span>
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
