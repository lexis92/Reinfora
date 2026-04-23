"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    q: "Reinfora gave us our evenings back. Our BCBAs went from 2 hours of notes a night to 20 minutes.",
    a: "Dr. Alana Reyes, BCBA-D",
    r: "Clinical Director, BrightPath ABA",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
  },
  {
    q: "The data tracking actually works the way clinicians think. We ditched two other tools after our first week.",
    a: "Marcus Okafor, M.Ed, BCBA",
    r: "Founder, Wavelength ABA",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
  },
  {
    q: "Parents finally understand what we're working on. The family recaps have been a quiet game-changer.",
    a: "Priya Menon, BCBA",
    r: "Horizon Behavioral",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-400">
            Loved by clinicians
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
            Built with BCBAs,
            <br />
            not just for them.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-6 overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-brand-100 dark:bg-brand-400/10 blur-2xl" />
              <Quote className="h-6 w-6 text-brand-500/80 dark:text-brand-400/80" />
              <blockquote className="mt-3 text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-300/60 dark:ring-brand-400/40 bg-brand-100">
                  <img
                    src={t.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {t.a}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t.r}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
