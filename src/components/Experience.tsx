"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/data";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Experience() {
  const { t } = useI18n();
  return (
    <Section
      id="experience"
      num="03"
      eyebrow={t.sections.experience.eyebrow}
      title={
        <>
          {t.sections.experience.titleLead}{" "}
          <span className="italic text-lime/90">
            {t.sections.experience.titleAccent}
          </span>
        </>
      }
    >
      <div className="relative">
        <div
          className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-lime/60 via-border to-transparent sm:left-6"
          aria-hidden
        />

        <div className="space-y-14">
          {experience.map((e, idx) => (
            <motion.div
              key={e.company + e.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: idx * 0.08 }}
              className="relative pl-12 sm:pl-20"
            >
              <span
                className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center sm:left-2"
                aria-hidden
              >
                <span className="absolute h-8 w-8 rounded-full border border-lime/30 bg-background" />
                <span className="relative h-2 w-2 rounded-full bg-lime shadow-[0_0_20px_theme(colors.lime)]" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {e.role}{" "}
                  <span className="text-lime">@ {e.company}</span>
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                  {e.period}
                </div>
              </div>
              <div className="mt-1 font-mono text-[11px] text-muted">
                {e.location}
              </div>

              <p className="mt-4 max-w-3xl leading-relaxed text-subtle">
                {e.description}
              </p>

              <ul className="mt-5 space-y-2">
                {e.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-subtle"
                  >
                    <span
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-lime"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
