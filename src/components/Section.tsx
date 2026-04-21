"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Section({
  id,
  num,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-28 sm:px-10 sm:py-36 lg:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 flex items-end justify-between gap-6 border-b border-border pb-6"
        >
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">
              <span className="text-lime">{num}</span>
              <span className="h-px w-8 bg-border" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {title}
            </h2>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
