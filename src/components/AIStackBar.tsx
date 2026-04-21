"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useI18n } from "./providers/I18nProvider";

const tools = [
  "Claude",
  "Cursor",
  "GitHub Copilot",
  "MCP",
  "OpenAI APIs",
];

export function AIStackBar() {
  const { t } = useI18n();
  const items = [...tools, ...tools, ...tools];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label={t.aiBar.label}
      className="relative z-10 border-y border-border bg-gradient-to-b from-background via-background/60 to-background"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4 sm:px-10 lg:px-14">
        <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
          <Sparkles className="h-3.5 w-3.5 text-lime" aria-hidden />
          <span className="hidden sm:inline">{t.aiBar.label}</span>
          <span className="sm:hidden">{t.aiBar.labelShort}</span>
          <span className="h-px w-6 bg-border sm:w-10" />
        </div>
        <div className="marquee flex-1">
          <div className="marquee-track !gap-10">
            {items.map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 whitespace-nowrap font-display text-base text-foreground/80 sm:text-lg"
              >
                <span className="text-lime/70">◆</span>
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
