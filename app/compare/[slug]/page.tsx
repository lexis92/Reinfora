import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { comparisons, getComparison } from "@/lib/compare-data";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return { title: "Compare — Reinfora" };
  return { title: c.metaTitle, description: c.metaDescription };
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const others = comparisons.filter((x) => x.slug !== c.slug);

  return (
    <PageShell>
      <PageHeader
        breadcrumbs={[{ label: "Compare", href: "/compare" }, { label: `vs. ${c.competitor}` }]}
        eyebrow={`Reinfora vs. ${c.competitor}`}
        title={
          <>
            <span className="gradient-text">{c.title}</span>
          </>
        }
        lede={c.lede}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
          >
            See Reinfora live
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
          >
            Explore features
          </Link>
        </div>
      </PageHeader>

      {/* TL;DR */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-brand-300/60 dark:border-brand-400/30 bg-gradient-to-br from-brand-50 to-white dark:from-brand-400/10 dark:to-neutral-900/60 p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              TL;DR
            </div>
            <p className="mt-3 text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {c.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white">
            Side-by-side
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 dark:bg-neutral-900/60 text-left">
                <tr>
                  <th className="px-5 py-3 font-medium text-neutral-600 dark:text-neutral-400 w-1/3">
                    Feature
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-700 dark:text-brand-400">
                    Reinfora
                  </th>
                  <th className="px-5 py-3 font-medium text-neutral-700 dark:text-neutral-300">
                    {c.competitor}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/10 bg-white dark:bg-neutral-900/40">
                {c.rows.map((r) => (
                  <tr key={r.feature}>
                    <td className="px-5 py-4 font-medium text-neutral-800 dark:text-neutral-200">
                      {r.feature}
                    </td>
                    <td className="px-5 py-4 text-neutral-700 dark:text-neutral-300">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                        {r.reinfora}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-neutral-600 dark:text-neutral-400">
                      {r.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best for */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-brand-300/60 dark:border-brand-400/30 bg-white dark:bg-neutral-900/60 p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              Reinfora is best for
            </div>
            <ul className="mt-4 space-y-3">
              {c.bestFor.reinfora.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
              {c.competitor} is best for
            </div>
            <ul className="mt-4 space-y-3">
              {c.bestFor.competitor.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <X className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Callouts */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white">
            Why teams switch to Reinfora
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {c.callouts.map((co) => (
              <div
                key={co.title}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                  {co.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {co.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other comparisons */}
      <section className="py-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
            Other comparisons
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/compare/${o.slug}`}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/40"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                  vs. {o.competitor}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight dark:text-white">
                  {o.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                  Read comparison
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
