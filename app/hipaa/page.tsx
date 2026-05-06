import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSignature, Lock, ScrollText, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "HIPAA & BAA — Reinfora",
  description:
    "How Reinfora supports HIPAA compliance, including our Business Associate Agreement (BAA), safeguards, and breach-notification commitments.",
};

const safeguards = [
  {
    icon: Lock,
    title: "Technical safeguards",
    points: [
      "AES-256 encryption at rest",
      "TLS 1.2+ encryption in transit",
      "Two-factor authentication for clinical and admin roles",
      "Granular role-based access control",
      "Comprehensive audit logging",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Administrative safeguards",
    points: [
      "Workforce security training and background checks",
      "Documented access management and offboarding",
      "Vendor risk reviews for all sub-processors",
      "Annual policy reviews and updates",
      "Documented incident response plan",
    ],
  },
  {
    icon: ScrollText,
    title: "Physical safeguards",
    points: [
      "Healthcare-grade US-region cloud infrastructure",
      "Provider-level physical access controls",
      "No on-prem PHI storage at Reinfora offices",
      "Encrypted, geographically redundant backups",
    ],
  },
];

const baaIncludes = [
  "Permitted uses and disclosures of PHI",
  "Safeguard requirements",
  "Sub-contractor (sub-processor) obligations",
  "Reporting of security incidents and breaches",
  "Access, amendment, and accounting of disclosures",
  "Termination provisions and PHI return/destruction",
];

export default function HipaaPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="HIPAA & BAA"
        title={
          <>
            Healthcare-grade by default — <br />
            <span className="gradient-text">BAA included</span>.
          </>
        }
        lede="Reinfora supports practices subject to HIPAA with a Business Associate Agreement, documented safeguards, and breach-notification commitments."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-4">
          {safeguards.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                {s.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              The agreement
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
              About our BAA.
            </h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              A Business Associate Agreement is required whenever a vendor handles PHI on
              behalf of a covered entity. Reinfora's BAA is included with every paid plan
              at no additional cost.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:security@reinfora.com?subject=BAA%20request"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
              >
                Request a BAA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
              >
                Security details
              </Link>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                <FileSignature className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                What our BAA covers
              </h3>
              <ul className="mt-3 space-y-2">
                {baaIncludes.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                Enterprise customers may review and propose redlines. Standard turnaround
                is 3–5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
            Frequently asked
          </h2>
          <div className="mt-6 divide-y divide-black/5 dark:divide-white/10 border-y border-black/5 dark:border-white/10">
            {[
              {
                q: "Is HIPAA compliance a binary thing?",
                a: "No. HIPAA is a framework, not a certification. Vendors implement administrative, physical, and technical safeguards and sign BAAs with covered entities. Reinfora is built to meet that bar — we don't claim to be 'HIPAA certified' because no such certification exists.",
              },
              {
                q: "Do free trials include a BAA?",
                a: "Free evaluation accounts can be set up with non-PHI test data. Once you sign a BAA — included with every paid plan — you can use real PHI.",
              },
              {
                q: "What happens if there's a breach?",
                a: "Our incident response plan defines investigation, containment, customer notification timelines (consistent with HIPAA breach-notification requirements), and post-incident review.",
              },
              {
                q: "Can I get a list of your sub-processors?",
                a: "Yes. Email security@reinfora.com — we maintain a current list and notify customers before material changes.",
              },
              {
                q: "Are you SOC 2 certified?",
                a: "SOC 2 Type II is in progress. We can share our current security overview, sub-processor list, and policy documentation in the meantime.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-medium dark:text-white list-none">
                  {item.q}
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 dark:border-white/20 text-xs transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
