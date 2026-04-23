"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./logo";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-4 py-2 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_8px_30px_rgba(0,0,0,0.35)]">
        <Link href="/" className="flex items-center gap-2">
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
            className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-3 py-1.5"
          >
            Sign in
          </Link>
          <Link
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
