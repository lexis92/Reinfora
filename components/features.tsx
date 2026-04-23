"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  ClipboardCheck,
  LineChart,
  MessageSquareHeart,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI session notes",
    desc: "Turn raw session data into compliant, insurance-ready notes in seconds — reviewed by you, written by Reinfora.",
  },
  {
    icon: LineChart,
    title: "Real-time data tracking",
    desc: "Tally trials, track mastery, and visualize progress without juggling spreadsheets or clunky legacy tools.",
  },
  {
    icon: Workflow,
    title: "Programs & protocols",
    desc: "Build, clone, and iterate on behavior programs with a clean interface your RBTs will actually enjoy using.",
  },
  {
    icon: MessageSquareHeart,
    title: "Parent engagement",
    desc: "Share weekly summaries, milestones, and practice plans with families — automatically, in plain language.",
  },
  {
    icon: ClipboardCheck,
    title: "Scheduling & billing",
    desc: "Smart scheduling, auth tracking, and clean CPT exports that integrate with the clearinghouses you already use.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-ready security",
    desc: "End-to-end encryption, audit logs, and signed BAAs. Built with compliance at the core, not bolted on.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-400">
            Everything you need
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
            A complete ABA workspace,
            <br />
            thoughtfully designed.
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
            From first intake to monthly progress report, Reinfora replaces five
            tools with one calm, focused workflow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-6 transition hover:border-brand-300/70 dark:hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-400/15 dark:text-brand-400 transition group-hover:bg-brand-400 group-hover:text-neutral-900">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
