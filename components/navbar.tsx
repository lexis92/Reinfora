"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-4 py-2 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_8px_30px_rgba(0,0,0,0.35)]">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Reinfora
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="#"
            className="hidden md:block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-3 py-1.5"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="group hidden md:inline-flex items-center gap-1.5 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden relative inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-[72px] inset-x-4 rounded-3xl border border-black/5 dark:border-white/10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] p-2"
          >
            <ul className="flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.03 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="my-2 h-px bg-black/5 dark:bg-white/10" />
            <div className="flex flex-col gap-2 p-2">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10 transition"
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
