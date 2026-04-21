"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Github } from "./BrandIcons";
import { Section } from "./Section";
import { projects } from "@/lib/data";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Projects() {
  const { t } = useI18n();
  return (
    <Section
      id="work"
      num="02"
      eyebrow={t.sections.work.eyebrow}
      title={
        <>
          {t.sections.work.titleLead}{" "}
          <span className="italic text-lime/90">
            {t.sections.work.titleAccent}
          </span>
        </>
      }
    >
      <div className="space-y-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className={`group relative grid overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-[border-color,background] duration-300 hover:border-lime/40 hover:bg-white/[0.04] sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 ${
              p.featured ? "" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(214,255,61,0.06), transparent 40%)",
              }}
              aria-hidden
            />

            <div className="flex flex-col">
              <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                <span className="text-lime">0{idx + 1}</span>
                <span>{p.year}</span>
                {p.featured && (
                  <span className="rounded-full border border-lime/40 bg-lime/10 px-2 py-0.5 text-[10px] text-lime">
                    {t.projects.featured}
                  </span>
                )}
                <span className="h-px flex-1 bg-border" />
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.title}
              </h3>

              <p className="mt-4 max-w-xl leading-relaxed text-subtle">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/30 px-3 py-1 font-mono text-[11px] text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} repository`}
                    className="btn-ghost !py-2 !px-4 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    {t.projects.repo}
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} link`}
                    className="btn-ghost !py-2 !px-4 text-sm"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {t.projects.visit}
                  </a>
                )}
              </div>
            </div>

            {p.impact && p.impact.length > 0 && (
              <div className="mt-8 lg:mt-0">
                <div className="glass rounded-xl p-5">
                  <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                    <TrendingUp className="h-3.5 w-3.5 text-lime" />
                    {t.projects.impact}
                  </div>
                  <ul className="space-y-3">
                    {p.impact.map((m, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/90"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-lime" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
