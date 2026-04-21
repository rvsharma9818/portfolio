"use client";

import { motion } from "framer-motion";
import { Sparkles, GitPullRequest, Ticket, Search } from "lucide-react";
import { Section } from "./Section";
import { skills } from "@/lib/data";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

const WORKFLOW_ICONS = [Sparkles, Ticket, GitPullRequest, Search];

export function About() {
  const { t } = useI18n();
  const techList = skills.flatMap((s) => s.items);

  return (
    <Section
      id="about"
      num="01"
      eyebrow={t.sections.about.eyebrow}
      title={
        <>
          {t.sections.about.titleLead}{" "}
          <span className="italic text-lime/90">
            {t.sections.about.titleAccent}
          </span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="space-y-5 text-lg leading-relaxed text-subtle"
        >
          {t.about.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-2xl p-6">
            <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
              <span>{t.about.currently.label}</span>
              <span className="text-lime">{t.about.currently.online}</span>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime" />
                <span className="text-foreground">
                  {t.about.currently.roleLine}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet" />
                <span>{t.about.currently.focusLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan" />
                <span>{t.about.currently.openLine}</span>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-5">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                {t.about.stats.label}
              </div>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t.about.stats.years}
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-foreground">
                    4+
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t.about.stats.leading}
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-lime">
                    {t.about.stats.leadingValue}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className="mt-20"
      >
        <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
          <span className="text-lime">◇</span>
          <span>{t.about.workflow.heading}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.workflow.cards.map(({ tool, use }, i) => {
            const Icon = WORKFLOW_ICONS[i] ?? Sparkles;
            return (
              <motion.div
                key={tool + i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="glass group relative overflow-hidden rounded-xl p-5"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lime/10 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-40"
                  aria-hidden
                />
                <Icon className="h-4 w-4 text-lime" aria-hidden />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {tool}
                </div>
                <div className="mt-1.5 text-sm leading-snug text-foreground/90">
                  {use}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mt-16">
        <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
          <span className="text-lime">◇</span>
          <span>{t.about.toolkit}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...techList, ...techList].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-3xl font-medium text-foreground/70 transition-colors hover:text-lime sm:text-5xl"
              >
                {item}
                <span className="ml-12 text-lime/60">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
