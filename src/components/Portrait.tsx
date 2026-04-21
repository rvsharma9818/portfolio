"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export function Portrait({ src, alt, sizes, className, priority }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="absolute inset-0 flex items-end justify-center"
        aria-hidden
      >
        <div className="relative h-[70%] w-[70%]">
          <div className="absolute inset-0 rounded-[2rem] border border-border bg-surface backdrop-blur-xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-lime/40 bg-lime/10 font-display text-2xl font-semibold text-lime">
              R
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle">
              drop portrait.png
            </div>
            <div className="mx-6 font-mono text-[10px] leading-relaxed text-muted">
              save your photo to <span className="text-foreground/80">public/portrait.png</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
