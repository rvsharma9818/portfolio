"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { Github, Linkedin, XTwitter } from "./BrandIcons";
import { siteConfig } from "@/lib/data";
import { Magnetic } from "./Magnetic";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

const socialLinks = [
  {
    key: "linkedin",
    href: siteConfig.socials.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    key: "github",
    href: siteConfig.socials.github,
    label: "GitHub",
    Icon: Github,
  },
  {
    key: "twitter",
    href: siteConfig.socials.twitter,
    label: "Twitter",
    Icon: XTwitter,
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  const status = [
    { Icon: Clock, label: t.contact.status.response.label, value: t.contact.status.response.value },
    { Icon: MapPin, label: t.contact.status.basedIn.label, value: t.contact.status.basedIn.value },
    { Icon: Zap, label: t.contact.status.availability.label, value: t.contact.status.availability.value },
    { Icon: Sparkles, label: t.contact.status.currently.label, value: t.contact.status.currently.value },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 py-32 sm:px-10 sm:py-44 lg:px-14"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-lime/10 blur-[140px]"
        aria-hidden
      />
      <motion.div
        style={{ y, scale }}
        className="pointer-events-none absolute inset-x-0 top-0 text-center opacity-[0.04]"
        aria-hidden
      >
        <p className="font-display text-[clamp(120px,22vw,320px)] font-semibold leading-none tracking-[-0.04em]">
          hello
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-5 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-subtle"
        >
          <span className="text-lime">05</span>
          <span className="h-px w-8 bg-border" />
          <span>{t.sections.contact.eyebrow}</span>
          <span className="h-px w-8 bg-border" />
          <span className="text-lime">→</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="text-center font-display text-[clamp(48px,10vw,128px)] font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          {t.sections.contact.titleLead}{" "}
          <span className="italic text-lime/95">
            {t.sections.contact.titleAccent}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-center text-lg text-subtle"
        >
          {t.contact.copyIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {status.map(({ Icon, label, value }) => (
            <div key={label} className="glass rounded-xl p-4 text-left">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                <Icon className="h-3 w-3 text-lime" aria-hidden />
                {label}
              </div>
              <div className="mt-2 text-sm text-foreground/90">{value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-12"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
            <span className="text-lime">◇</span>
            <span>{t.contact.excitedLabel}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2">
            {t.contact.interests.map((i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-lime/40 hover:text-lime"
              >
                {i}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary group"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={t.contact.copyEmail}
              className="btn-ghost"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-lime" />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  {t.contact.copyEmail}
                </>
              )}
            </button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-1"
        >
          {socialLinks.map(({ href, label, Icon, key }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-subtle transition-colors hover:text-lime"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-px w-10 bg-border" />
          <span>{t.contact.signature}</span>
          <span className="h-px w-10 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
