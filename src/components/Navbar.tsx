"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";
import { useI18n } from "./providers/I18nProvider";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about, num: "01" },
    { href: "#work", label: t.nav.work, num: "02" },
    { href: "#experience", label: t.nav.experience, num: "03" },
    { href: "#contact", label: t.nav.contact, num: "04" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,padding] duration-300 ${
        scrolled
          ? "bg-background/70 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
        <Magnetic>
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-base font-semibold tracking-tight"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-full border border-lime text-lime transition-[background,color] duration-200 group-hover:bg-lime group-hover:text-background"
            >
              R
            </span>
            <span className="hidden sm:inline">ravi.sharma</span>
          </a>
        </Magnetic>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Magnetic strength={0.25}>
                <a
                  href={l.href}
                  className="group relative inline-flex items-baseline gap-1.5 rounded-full px-4 py-2 text-sm transition-colors hover:text-foreground"
                >
                  <span className="font-mono text-[11px] text-lime">{l.num}.</span>
                  <span className="text-subtle group-hover:text-foreground">
                    {l.label}
                  </span>
                  <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Magnetic>
            <a href="#contact" className="btn-primary !py-2 !px-5 text-sm">
              {t.nav.letsTalk}
            </a>
          </Magnetic>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-[2px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45 bg-lime" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45 bg-lime" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-6 px-6">
          {links.map((l, i) => (
            <li key={l.href} className="font-display text-3xl">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3"
              >
                <span className="font-mono text-xs text-lime">0{i + 1}.</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              {t.nav.letsTalk}
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
