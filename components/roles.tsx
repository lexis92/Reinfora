"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    badge: "For BCBAs",
    title: "Reclaim your evenings.",
    desc: "Sign structured notes in minutes. Spot trends across caseloads in a single view.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop",
    alt: "BCBA reviewing data on a laptop",
  },
  {
    badge: "For RBTs",
    title: "Collect without friction.",
    desc: "A tap-friendly interface built for the floor. No fumbling, no lost data.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=80&auto=format&fit=crop",
    alt: "Therapist working with a child using colorful blocks",
  },
  {
    badge: "For families",
    title: "Stay in the loop.",
    desc: "Warm, plain-language recaps of the week — plus practice plans you can use at home.",
    img: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=900&q=80&auto=format&fit=crop",
    alt: "Parent and child reading together",
  },
];

export function Roles() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-brand-700 dark:text-brand-400">
              Built for every role
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
              One platform,
              <br />
              the whole care circle.
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
            Clinicians, technicians, and families all have different jobs to do —
            Reinfora gives each of them the tool they actually need.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((r, i) => (
            <motion.article
              key={r.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                {/* lime tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/25 via-brand-400/5 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-neutral-900/80 backdrop-blur px-2.5 py-1 text-xs font-medium text-brand-800 dark:text-brand-300 border border-brand-300/40">
                  {r.badge}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight dark:text-white">
                    {r.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
