"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  {
    q: "Is Reinfora HIPAA compliant?",
    a: "Yes. We sign BAAs, encrypt data in transit and at rest, and maintain detailed audit logs. Our infrastructure is designed for healthcare from the ground up.",
  },
  {
    q: "Can I import from my current system?",
    a: "We support imports from CentralReach, Rethink, CR Essentials, and CSV exports. Our onboarding team handles the migration for Practice and Enterprise plans.",
  },
  {
    q: "Do RBTs need training to use it?",
    a: "Most RBTs are productive within 20 minutes. Reinfora is opinionated about workflow so there's less to learn, not more.",
  },
  {
    q: "How does the AI session-note drafting work?",
    a: "Reinfora drafts the session note from the data collected and optional voice dictation. The BCBA always reviews, edits, and signs — the model never submits on its own.",
  },
  {
    q: "Do you bill insurance directly?",
    a: "We produce clean CPT-ready exports that drop into your clearinghouse. Direct claim submission is on the roadmap for Enterprise customers.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-400">FAQ</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-black/5 dark:divide-white/10 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    {it.q}
                  </span>
                  <Plus
                    className={`h-4 w-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
