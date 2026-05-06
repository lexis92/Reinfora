"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 -top-24 h-[40rem] -z-10 bg-gradient-to-b from-brand-200/30 dark:from-brand-500/15 to-transparent blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="hover:text-neutral-800 dark:hover:text-neutral-200">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-neutral-700 dark:text-neutral-300">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
              </span>
            ))}
          </motion.nav>
        )}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-300/60 dark:border-brand-400/40 bg-brand-50/80 dark:bg-brand-400/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-300"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300"
          >
            {lede}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
