import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { comparisons } from "@/lib/compare-data";

export const metadata: Metadata = {
  title: "Compare — Reinfora vs. other ABA software",
  description:
    "Honest comparisons between Reinfora and the major ABA software platforms — CentralReach, Rethink, and the broader category.",
};

export default function ComparePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Compare"
        title={
          <>
            Honest comparisons. <br />
            <span className="gradient-text">No vendor theater.</span>
          </>
        }
        lede="We'll be the first to tell you when Reinfora isn't the right fit. Here's how we stack up against the major players in ABA software."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-4">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8 transition hover:border-brand-300 dark:hover:border-brand-400/40"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                vs. {c.competitor}
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight dark:text-white">
                {c.title}
              </h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4">
                {c.lede}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                Read comparison
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
