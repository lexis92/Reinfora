"use client";

import { motion } from "framer-motion";
import { Counter } from "./counter";

const stats = [
  { to: 52, suffix: "%", label: "Less time on documentation" },
  { to: 3.4, decimals: 1, suffix: "×", label: "Faster note turnaround" },
  { to: 98, suffix: "%", label: "Clinician satisfaction" },
  { to: 100, suffix: "%", label: "HIPAA audit pass rate" },
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-b from-brand-50/60 to-white dark:from-brand-400/5 dark:to-neutral-950 p-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight gradient-text">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
