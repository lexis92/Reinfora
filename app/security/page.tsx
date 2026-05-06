import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileLock2,
  KeyRound,
  Lock,
  Network,
  ScrollText,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Security & compliance — Reinfora",
  description:
    "How Reinfora protects PHI: HIPAA alignment, encryption, access control, audit logging, and infrastructure built for healthcare.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "HIPAA alignment",
    desc: "BAA available on every paid plan. Administrative, physical, and technical safeguards mapped to the HIPAA Security Rule.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    desc: "AES-256 at rest, TLS 1.2+ in transit. Backups encrypted with separately managed keys.",
  },
  {
    icon: UserCog,
    title: "Role-based access",
    desc: "Granular roles for RBT, BCaBA, BCBA, ops, and admin — scoped to teams, learners, and funders.",
  },
  {
    icon: ScrollText,
    title: "Audit logging",
    desc: "Every read, edit, export, and login is logged with user, timestamp, and IP — exportable for compliance reviews.",
  },
  {
    icon: KeyRound,
    title: "Strong authentication",
    desc: "Two-factor authentication required by default for clinical and admin roles. SSO available on Enterprise plans.",
  },
  {
    icon: Database,
    title: "Healthcare-grade infrastructure",
    desc: "Hosted on US-region cloud infrastructure (Supabase + Vercel) with documented sub-processors and SOC 2-certified providers.",
  },
];

const practices = [
  {
    title: "Data minimization",
    desc: "We only collect and store the PHI required to deliver the service — and we make it easy to export or delete on request.",
  },
  {
    title: "Least-privilege engineering access",
    desc: "Engineers do not access production PHI as part of normal work. Break-glass access is logged and reviewed.",
  },
  {
    title: "Sub-processor transparency",
    desc: "Our full sub-processor list is published and updated whenever a vendor changes. Customers are notified before material changes.",
  },
  {
    title: "Backup & retention",
    desc: "Encrypted backups taken daily with documented retention windows. Customer data deletion honored on request, with audit trail.",
  },
  {
    title: "Vulnerability management",
    desc: "Continuous dependency scanning, regular penetration testing, and a published responsible-disclosure program.",
  },
  {
    title: "Incident response",
    desc: "Documented incident response plan with defined notification timelines per HIPAA breach-notification requirements.",
  },
];

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Security & compliance"
        title={
          <>
            Built for healthcare,<br />
            <span className="gradient-text">not patched into it</span>.
          </>
        }
        lede="Reinfora is designed for the level of trust ABA practices and the families they serve deserve. Here's exactly how we protect PHI."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              Our practices
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
              The boring details that actually matter.
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              We treat security as a clinical responsibility, not a marketing checkbox. Below is a snapshot of how we operate today.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {practices.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
              >
                <h3 className="text-base font-semibold tracking-tight dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300 shrink-0">
                <FileLock2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
                  Need security documentation?
                </h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  We provide a security overview, sub-processor list, and BAA on request. Enterprise customers can review and redline our standard agreements.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="mailto:security@reinfora.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
                  >
                    Request docs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/hipaa"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
                  >
                    HIPAA & BAA
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/70 dark:border-amber-400/20 bg-amber-50/60 dark:bg-amber-400/5 p-5 text-sm text-amber-900 dark:text-amber-200">
            <div className="flex items-start gap-2">
              <Network className="h-4 w-4 mt-0.5 shrink-0" />
              <p>
                Found a security issue? We take responsible disclosure seriously. Email{" "}
                <Link href="mailto:security@reinfora.com" className="underline underline-offset-2">
                  security@reinfora.com
                </Link>{" "}
                — we respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
