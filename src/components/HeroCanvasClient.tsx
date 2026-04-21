"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-28 w-28 animate-pulse rounded-full bg-lime/20 blur-2xl" aria-hidden />
    </div>
  ),
});

export function HeroCanvasClient() {
  return <HeroCanvas />;
}
