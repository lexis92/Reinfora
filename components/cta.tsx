"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";

export function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-brand-300/60 dark:border-brand-400/30 bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-brand-400/10 dark:via-neutral-900 dark:to-brand-500/10 p-10 md:p-16 text-center"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/40 dark:bg-brand-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-lime-200/60 dark:bg-brand-500/15 blur-3xl" />
          <div className="relative">
            <Logo className="mx-auto h-10 w-10" />
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
              Ready to reinforce
              <br />
              what matters most?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
              Join the ABA practices using Reinfora to give their clinicians
              time back and their clients better outcomes.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row items-stretch gap-2">
              <input
                type="email"
                placeholder="you@yourpractice.com"
                className="h-14 w-full flex-1 appearance-none rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 px-5 text-base leading-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-200/60 dark:focus:ring-brand-400/20 transition"
              />
              <button
                type="submit"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 text-base font-medium leading-none text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
              >
                Start trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              14-day free trial · no credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
