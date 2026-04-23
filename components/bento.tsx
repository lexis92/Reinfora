"use client";

import { motion } from "framer-motion";
import { DataFlowGraphic, WaveGraphic, GridBloom } from "./graphics";
import { Counter } from "./counter";
import { Sparkles, MessageCircle, Users } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Bento() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-400">
            Built to be seen
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
            A beautifully clear
            <br />
            picture of progress.
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
            From the first data point to the long-term trendline, Reinfora keeps
            everyone aligned with visuals that just make sense.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 auto-rows-min md:auto-rows-[180px] gap-4">
          {/* Large — AI + data flow */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6 }}
            className="group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-brand-400/10 dark:via-neutral-900 dark:to-brand-500/10 p-8 pb-10 md:pb-8 flex flex-col md:block"
          >
            <div className="relative z-10 max-w-sm">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur px-2.5 py-1 text-xs font-medium text-brand-800 dark:text-brand-300 border border-brand-300/40">
                <Sparkles className="h-3 w-3" />
                Intelligence layer
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight dark:text-white">
                One model, every
                <br /> data stream in sync.
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Session data, voice dictation, and program history flow into a single
                draft — cited, structured, and ready for your review.
              </p>
            </div>
            <div className="relative mt-6 h-56 md:h-auto md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-[55%] flex items-center justify-center">
              <div className="relative h-full w-full md:h-[88%] md:w-[88%] transition-transform duration-700 group-hover:scale-105">
                <DataFlowGraphic />
              </div>
            </div>
          </motion.div>

          {/* Photo — child learning */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-0 overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-neutral-900"
          >
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80&auto=format&fit=crop"
              alt="Child learning with colorful blocks"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            <div className="relative h-full flex flex-col justify-end p-6 z-10">
              <p className="text-xs font-medium text-brand-300 uppercase tracking-widest">
                Outcomes first
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white tracking-tight">
                Every minute spent on paperwork is a minute not spent with a kid.
              </h3>
            </div>
          </motion.div>

          {/* Animated trend */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:col-span-3 min-h-[200px] md:min-h-0 overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium text-brand-700 dark:text-brand-400 uppercase tracking-widest">
                Trends
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight dark:text-white">
                Mastery up <Counter to={27} suffix="%" /> over 90 days
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3/5 opacity-90">
              <WaveGraphic />
            </div>
          </motion.div>

          {/* Parent quote */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative md:col-span-3 overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-neutral-950 text-white p-6"
          >
            <GridBloom />
            <div className="relative">
              <MessageCircle className="h-5 w-5 text-brand-400" />
              <p className="mt-3 text-lg leading-snug tracking-tight">
                “For the first time, we actually understand what our son is working on
                each week. It feels like we're on the same team.”
              </p>
              <p className="mt-3 text-xs text-neutral-400">— Sarah M., parent</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
