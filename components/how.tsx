"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Capture during session",
    desc: "RBTs tap through clean, program-specific collection sheets. Everything syncs in real-time.",
  },
  {
    n: "02",
    title: "Reinfora drafts the note",
    desc: "Our model turns data + brief voice dictation into a structured, billable session note in seconds.",
  },
  {
    n: "03",
    title: "BCBA reviews & signs",
    desc: "Review the highlights, adjust what you need, and sign. No copy-paste, no starting from scratch.",
  },
  {
    n: "04",
    title: "Families stay informed",
    desc: "Weekly family recaps go out automatically — warm, readable, and clinician-approved.",
  },
];

export function How() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section
      id="how"
      className="relative py-24 md:py-32 bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 grid-bg" />
      <div className="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-400">How it works</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            From raw data to signed note —
            <br />
            <span className="text-brand-400">in under two minutes.</span>
          </h2>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* animated connector line (horizontal on desktop) */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-white/10">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: "0% 50%" }}
              className="h-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative mx-auto lg:mx-0 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-neutral-900 text-xs font-mono text-brand-400">
                  {s.n}
                  <span className="absolute inset-0 rounded-full animate-ping bg-brand-400/10" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-brand-400/40 hover:bg-white/[0.07]">
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
