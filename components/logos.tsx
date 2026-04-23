"use client";

import { Marquee } from "./marquee";

const names = [
  "Horizon Behavioral",
  "BrightPath ABA",
  "Northstar Therapy",
  "Keystone Kids",
  "Meridian Care",
  "Wavelength ABA",
  "Evergreen Learning",
  "Cascade Behavior",
  "Anchor ABA",
];

export function LogoCloud() {
  return (
    <section className="border-y border-black/5 dark:border-white/10 bg-neutral-50/60 dark:bg-neutral-900/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-6">
          Trusted by forward-thinking ABA practices
        </p>
        <Marquee items={names} duration={32} />
      </div>
    </section>
  );
}
