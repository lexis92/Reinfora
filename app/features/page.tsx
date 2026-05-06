import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { features } from "@/lib/features-data";

export const metadata: Metadata = {
  title: "Features — Reinfora",
  description:
    "Everything Reinfora does for ABA practices — from client management and scheduling to data collection, reporting, automation, and compliance.",
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Features"
        title={
          <>
            One platform for the <br />
            <span className="gradient-text">whole ABA workflow</span>.
          </>
        }
        lede="Reinfora replaces the patchwork of tools most clinics juggle — without forcing you to compromise on the depth your clinicians actually need."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-4">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8 transition hover:border-brand-300 dark:hover:border-brand-400/40"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-100 dark:bg-brand-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight dark:text-white">
                  {f.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-400">
                  {f.tagline}
                </p>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                  {f.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white">
                  Explore {f.name.toLowerCase()}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
            Want a guided tour?
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Book 30 minutes with someone who knows ABA workflows. We'll show you exactly the parts that matter for your practice.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
