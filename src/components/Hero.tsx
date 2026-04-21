"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { HeroCanvasClient } from "./HeroCanvasClient";
import { Magnetic } from "./Magnetic";
import { Portrait } from "./Portrait";
import { useI18n } from "./providers/I18nProvider";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  const { t } = useI18n();

  const { scrollY } = useScroll();
  const canvasY = useTransform(scrollY, [0, 800], [0, 160]);
  const canvasScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const canvasOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-14"
    >
      <div className="absolute inset-0 grid-bg radial-fade" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[520px] w-[520px] rounded-full bg-violet/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[560px] w-[560px] rounded-full bg-lime/10 blur-[140px]"
        aria-hidden
      />

      <motion.div
        style={{
          y: canvasY,
          scale: canvasScale,
          opacity: canvasOpacity,
        }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <HeroCanvasClient />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.4 }}
        style={{ y: portraitY }}
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[48%] items-end justify-center md:flex lg:w-[44%]"
        aria-hidden
      >
        <div className="relative h-[92vh] max-h-[920px] w-full">
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] h-[62%] w-[80%] -translate-x-1/2 rounded-full bg-lime/20 blur-[120px]"
            aria-hidden
          />
          <Portrait
            src={siteConfig.portraitUrl}
            alt=""
            priority
            sizes="(min-width: 1024px) 44vw, 48vw"
            className="select-none object-contain object-bottom drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
          />
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl md:max-w-[56%] lg:max-w-[58%]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-subtle backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="font-mono">
                {siteConfig.location} · {t.hero.openToWork}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/5 px-3 py-1.5 text-xs text-lime backdrop-blur-sm">
              <Sparkles className="h-3 w-3" aria-hidden />
              <span className="font-mono">{t.hero.aiAugmented}</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="font-display mt-6 text-[clamp(46px,9vw,128px)] font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            Ravi
            <br />
            <span className="italic text-lime/95">Sharma</span>
            <span className="text-foreground">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-subtle sm:text-xl"
          >
            {t.hero.tagline.lead}{" "}
            <span className="text-foreground">{t.hero.tagline.company}</span>
            {t.hero.tagline.middle}{" "}
            <span className="text-foreground">
              {t.hero.tagline.productHighlight}
            </span>
            {t.hero.tagline.middle2}
            {t.hero.tagline.tail}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a href="#work" className="btn-primary">
                {t.hero.seeWork}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-ghost"
              >
                {t.hero.sayHello}
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-6 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-foreground sm:flex sm:left-10 lg:left-14"
        >
          <span className="h-px w-10 bg-subtle/60" aria-hidden />
          <span>{t.hero.scroll}</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
}
