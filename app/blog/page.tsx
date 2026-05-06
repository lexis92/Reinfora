import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & resources — Reinfora",
  description:
    "Notes from the Reinfora team on ABA practice, operations, compliance, and documentation workflows.",
};

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogPage() {
  const [feature, ...rest] = sorted;
  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog & resources"
        title={
          <>
            Notes from the field on <br />
            <span className="gradient-text">building better ABA practice</span>.
          </>
        }
        lede="Operations, compliance, documentation, and the small workflow shifts that make a real difference."
      />

      {/* Featured */}
      {feature && (
        <section className="pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href={`/blog/${feature.slug}`}
              className="group block rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-brand-50 via-white to-white dark:from-brand-400/10 dark:via-neutral-900/60 dark:to-neutral-900/40 p-8 md:p-12 transition hover:border-brand-300 dark:hover:border-brand-400/40"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-100 dark:bg-brand-400/20 text-brand-800 dark:text-brand-300 px-2.5 py-1 font-medium">
                  {feature.category}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(feature.date)}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {feature.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white max-w-3xl">
                {feature.title}
              </h2>
              <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">
                {feature.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other posts */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-4">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-7 transition hover:border-brand-300 dark:hover:border-brand-400/40"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-100 dark:bg-brand-400/20 text-brand-800 dark:text-brand-300 px-2.5 py-1 font-medium">
                  {p.category}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(p.date)}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {p.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {p.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
