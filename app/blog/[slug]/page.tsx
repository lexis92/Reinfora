import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { posts, getPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog — Reinfora" };
  return { title: `${post.title} — Reinfora`, description: post.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <PageHeader
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
        eyebrow={post.category}
        title={post.title}
        lede={post.description}
      >
        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
          <span>{post.author}</span>
        </div>
      </PageHeader>

      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {post.body.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white"
                >
                  {b.text}
                </h2>
              );
            }
            if (b.type === "ul") {
              return (
                <ul key={i} className="mt-4 mb-4 list-disc pl-5 space-y-2 text-[15px]">
                  {b.items?.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-4 text-[15px]">
                {b.text}
              </p>
            );
          })}

          <div className="mt-16 rounded-3xl border border-brand-300/60 dark:border-brand-400/30 bg-gradient-to-br from-brand-50 to-white dark:from-brand-400/10 dark:to-neutral-900/60 p-8">
            <h3 className="text-xl font-semibold tracking-tight dark:text-white">
              Want to see what this looks like in practice?
            </h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Reinfora is built around the workflow shifts in this article. Book a 30-minute demo and we'll show you how it plays out for your practice.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
              >
                Explore features
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>
        </div>
      </article>

      <section className="py-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
            Keep reading
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}`}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/40"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                  {o.category}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight dark:text-white">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {o.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                  Read article
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

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
