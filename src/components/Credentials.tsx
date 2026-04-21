"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { certifications, education } from "@/lib/data";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Credentials() {
  const { t } = useI18n();
  return (
    <Section
      id="credentials"
      num="04"
      eyebrow={t.sections.credentials.eyebrow}
      title={
        <>
          {t.sections.credentials.titleLead}{" "}
          <span className="italic text-lime/90">
            {t.sections.credentials.titleAccent}
          </span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          whileHover={{ y: -3 }}
          className="glass rounded-2xl p-8"
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            <GraduationCap className="h-4 w-4 text-lime" /> {t.credentials.education}
          </div>
          <h3 className="font-display text-2xl font-semibold">
            {education.degree}
          </h3>
          <div className="mt-1 text-subtle">{education.school}</div>
          <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-muted">
            <span>{education.period}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>{education.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          whileHover={{ y: -3 }}
          className="glass rounded-2xl p-8"
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
            <Award className="h-4 w-4 text-lime" /> {t.credentials.certifications}
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
