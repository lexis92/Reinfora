"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    per: "/clinician / mo",
    desc: "For solo BCBAs and small teams getting started.",
    features: [
      "Up to 3 clinicians",
      "AI session notes",
      "Real-time data collection",
      "Parent family recaps",
      "Email support",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Practice",
    price: "$39",
    per: "/clinician / mo",
    desc: "For growing practices standardizing on Reinfora.",
    features: [
      "Unlimited clinicians",
      "Scheduling & billing exports",
      "Custom programs & protocols",
      "Advanced analytics",
      "HIPAA BAA & audit logs",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "For multi-site organizations and networks.",
    features: [
      "SSO / SAML",
      "Dedicated CSM",
      "Custom integrations",
      "Clearinghouse onboarding",
      "Sandbox environment",
      "SLA & compliance review",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-400">Pricing</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight dark:text-white">
            Simple, per-clinician pricing.
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                t.highlight
                  ? "border-brand-400 bg-gradient-to-b from-brand-50 to-white dark:from-brand-400/10 dark:to-neutral-900 shadow-xl shadow-brand-500/10"
                  : "border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-brand-400 px-2.5 py-0.5 text-xs font-semibold text-neutral-900">
                  Most popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {t.desc}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight dark:text-white">
                    {t.price}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {t.per}
                  </span>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600 dark:text-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  t.highlight
                    ? "bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 text-white hover:bg-neutral-800 dark:hover:bg-brand-300"
                    : "border border-black/10 dark:border-white/15 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-white/10"
                }`}
              >
                {t.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
