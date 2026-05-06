import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { features, getFeature } from "@/lib/features-data";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return { title: "Feature — Reinfora" };
  return {
    title: `${f.name} — Reinfora`,
    description: f.summary,
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();

  const others = features.filter((x) => x.slug !== f.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        breadcrumbs={[
          { label: "Features", href: "/features" },
          { label: f.name },
        ]}
        eyebrow={f.name}
        title={
          <>
            <span className="gradient-text">{f.tagline}</span>
          </>
        }
        lede={f.hero}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
          >
            See it live
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
          >
            All features
          </Link>
        </div>
      </PageHeader>

      {/* Highlights */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-4">
          {f.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                {h.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Details + bullets */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              What's inside
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
              {f.name}, in detail.
            </h2>
            <ul className="mt-6 space-y-2.5">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {f.details.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6"
              >
                <h3 className="text-base font-semibold tracking-tight dark:text-white">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-black/5 dark:divide-white/10 border-y border-black/5 dark:border-white/10">
            {f.faq.map((item) => (
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

      {/* Related */}
      <section className="py-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
            Explore more
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/features/${o.slug}`}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/40"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight dark:text-white">
                  {o.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {o.tagline}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                  Learn more
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
