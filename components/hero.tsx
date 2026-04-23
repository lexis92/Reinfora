"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Activity } from "lucide-react";
import { Logo } from "./logo";
import { Magnetic } from "./magnetic";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ThreeScene = dynamic(() => import("./three-scene").then((m) => m.ThreeScene), {
  ssr: false,
});

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const previewY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const previewScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const previewOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const threeY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const threeOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* 3D scene backdrop */}
      <motion.div
        style={{ y: threeY, opacity: threeOpacity }}
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 opacity-70 dark:opacity-90">
          <ThreeScene />
        </div>
        {/* mask so the scene blends into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white dark:from-neutral-950/0 dark:via-neutral-950/50 dark:to-neutral-950" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-300/60 dark:border-brand-400/40 bg-brand-50/80 dark:bg-brand-400/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Now in private beta for ABA practices
        </motion.div>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.02]">
          <AnimatedWords text="The modern platform" delay={0.05} />
          <br />
          <AnimatedWords text="for " delay={0.25} />
          <span className="gradient-text">
            <AnimatedWords text="ABA therapy" delay={0.35} inline />
          </span>
          <AnimatedWords text="." delay={0.55} inline />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300"
        >
          Reinfora helps BCBAs and RBTs cut documentation in half, track data in real
          time, and keep families in the loop — all in one beautifully simple workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic strength={0.4}>
            <Link
              href="#cta"
              className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300 glow overflow-hidden"
            >
              <span className="relative z-10">Start free trial</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 transition hover:bg-white dark:hover:bg-white/10"
            >
              Watch demo
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 flex items-center justify-center gap-6 text-xs text-neutral-500 dark:text-neutral-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" /> HIPAA-ready
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" /> Real-time data
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" /> AI session notes
          </span>
        </motion.div>

        {/* App preview w/ scroll parallax */}
        <motion.div
          style={{ y: previewY, scale: previewScale, opacity: previewOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-b from-brand-300/40 dark:from-brand-500/20 to-transparent blur-2xl" />
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-2 shadow-2xl shadow-brand-500/10">
            <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-black/5 dark:border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="mx-auto text-xs text-neutral-400 dark:text-neutral-500">
                  app.reinfora.com/sessions
                </div>
              </div>
              <AppPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedWords({
  text,
  delay = 0,
  inline = false,
}: {
  text: string;
  delay?: number;
  inline?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={inline ? "" : "inline-block"}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function AppPreview() {
  const rows = [
    { name: "Requesting with full sentence", mastery: 92 },
    { name: "Peer interaction (2-step)", mastery: 78 },
    { name: "Tolerating transitions", mastery: 64 },
    { name: "Tacting community helpers", mastery: 88 },
  ];
  return (
    <div className="grid grid-cols-12 gap-0 min-h-[420px]">
      <aside className="col-span-3 hidden md:flex flex-col border-r border-black/5 dark:border-white/10 bg-neutral-50/60 dark:bg-neutral-900/60 p-4 gap-1">
        <div className="flex items-center gap-2 pb-3">
          <Logo className="h-5 w-5" />
          <span className="text-sm font-semibold dark:text-neutral-100">Reinfora</span>
        </div>
        {["Dashboard", "Clients", "Sessions", "Programs", "Reports", "Billing"].map(
          (x, i) => (
            <div
              key={x}
              className={`rounded-md px-2.5 py-1.5 text-xs ${
                i === 2
                  ? "bg-brand-100 text-brand-900 font-medium dark:bg-brand-400/20 dark:text-brand-300"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {x}
            </div>
          )
        )}
      </aside>
      <main className="col-span-12 md:col-span-9 p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              Live session · RBT Maya L.
            </div>
            <div className="mt-1 text-lg font-semibold tracking-tight dark:text-neutral-100">
              Ethan · Age 6
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 dark:bg-brand-400/20 px-2.5 py-1 text-xs font-medium text-brand-900 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
              Recording
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Trials", value: "48" },
            { label: "Correct", value: "41" },
            { label: "Accuracy", value: "85%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-3"
            >
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {s.label}
              </div>
              <div className="mt-0.5 text-xl font-semibold tracking-tight dark:text-neutral-100">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-black/5 dark:border-white/10">
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 px-4 py-2.5">
            <div className="text-sm font-medium dark:text-neutral-100">Programs</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Today</div>
          </div>
          <div className="divide-y divide-black/5 dark:divide-white/10">
            {rows.map((r, i) => (
              <div
                key={r.name}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md bg-brand-100 text-brand-800 dark:bg-brand-400/20 dark:text-brand-300 flex items-center justify-center text-[10px] font-semibold">
                    P{i + 1}
                  </div>
                  <div className="text-sm text-neutral-800 dark:text-neutral-200">
                    {r.name}
                  </div>
                </div>
                <div className="flex items-center gap-3 w-52">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.mastery}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                    />
                  </div>
                  <div className="w-10 text-right text-xs font-medium tabular-nums text-neutral-700 dark:text-neutral-300">
                    {r.mastery}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
