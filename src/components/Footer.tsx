"use client";

import { ArrowUp } from "lucide-react";
import { Github, Linkedin, XTwitter } from "./BrandIcons";
import { siteConfig } from "@/lib/data";
import { useI18n } from "./providers/I18nProvider";

const socials = [
  { href: siteConfig.socials.github, label: "GitHub", Icon: Github },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.socials.twitter, label: "Twitter", Icon: XTwitter },
];

export function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { href: "#about", label: t.nav.about, num: "01" },
    { href: "#work", label: t.nav.work, num: "02" },
    { href: "#experience", label: t.nav.experience, num: "03" },
    { href: "#credentials", label: t.sections.credentials.eyebrow, num: "04" },
    { href: "#contact", label: t.nav.contact, num: "05" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-lime/5 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 sm:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-display text-base font-semibold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-lime text-lime">
                R
              </span>
              <span>ravi.sharma</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-subtle">{t.footer.bio}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block font-mono text-sm text-foreground transition-colors hover:text-lime"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {t.footer.sitemap}
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-baseline gap-2 text-sm text-subtle transition-colors hover:text-lime"
                  >
                    <span className="font-mono text-[10px] text-muted group-hover:text-lime">
                      {l.num}.
                    </span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {t.footer.elsewhere}
            </div>
            <ul className="space-y-2.5">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-subtle transition-colors hover:text-lime"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    <span
                      className="translate-y-px text-[10px] opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 text-[11px] text-muted sm:flex-row sm:items-center">
          <div className="font-mono">
            <span className="text-lime">{"//"}</span> ©{" "}
            {new Date().getFullYear()} {siteConfig.name} · {t.footer.builtWith}
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono">
            <span className="hidden sm:inline">
              {t.footer.aiStackLine}{" "}
              <span className="text-subtle">
                Claude · Cursor · Copilot · MCP
              </span>
            </span>
            <a
              href="#top"
              aria-label={t.footer.backToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-subtle transition-[color,border-color,background] hover:border-lime/50 hover:bg-lime/5 hover:text-lime"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
