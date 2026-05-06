import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Sparkles, Users, Workflow, BookOpen } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About — Reinfora",
  description:
    "Reinfora is on a mission to give ABA clinicians their time — and their craft — back.",
};

const values = [
  {
    icon: Shield,
    title: "Trust is non-negotiable",
    desc: "Healthcare data deserves more than the bare minimum. HIPAA alignment, encryption, and access control are table stakes — not selling points.",
  },
  {
    icon: Heart,
    title: "Clinicians first",
    desc: "Every screen, shortcut, and default is shaped by the BCBAs and RBTs who use Reinfora every day. Software should bend to clinical work, not the other way around.",
  },
  {
    icon: Workflow,
    title: "Workflow is the product",
    desc: "We don't ship features that look good in a demo and crumble in a real session. The job is to make the next click obvious.",
  },
  {
    icon: Sparkles,
    title: "AI that defers to humans",
    desc: "Our AI drafts, summarizes, and surfaces. It never signs, submits, or decides. Clinicians stay in the loop on every billable artifact.",
  },
  {
    icon: Users,
    title: "Families are part of the team",
    desc: "Outcomes happen between sessions. Reinfora keeps caregivers informed without adding more to a clinician's plate.",
  },
  {
    icon: BookOpen,
    title: "Learn in public",
    desc: "We share what we're building, why it works, and what didn't. The ABA community grows when we trade notes openly.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Reinfora"
        title={
          <>
            Better tools for the people <br />
            doing the <span className="gradient-text">most important work</span>.
          </>
        }
        lede="Reinfora exists so BCBAs and RBTs can spend less time fighting software and more time doing the work that changes lives."
      />

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                Our mission
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
                Give clinicians their evenings back.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                ABA therapy works. The science is rigorous, the outcomes are real, and the
                clinicians who deliver it are some of the most thoughtful people in
                healthcare. The software they're handed almost never reflects that.
              </p>
              <p>
                Reinfora is a workflow platform built specifically for ABA practices —
                from intake and scheduling to data collection, session notes, supervision,
                and reporting. Our north star is simple: cut the documentation tax in
                half, raise data quality, and keep families in the loop.
              </p>
              <p>
                When charting takes minutes instead of hours, clinicians stay in the field
                longer, clients get clearer programs faster, and practices grow without
                burning out the people who built them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                Our story
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
                Why we built Reinfora.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                Reinfora started where most good tools do — with a frustration that
                wouldn't go away. Watching family and friends in ABA practices stay up
                past midnight finishing notes in legacy systems, it became obvious that
                the tooling had fallen a decade behind the rest of healthcare software.
              </p>
              <p>
                We spent months sitting in on sessions, supervision meetings, and
                billing reviews. We listened to what RBTs hated about data collection,
                what BCBAs hated about reports, and what clinic owners hated about
                month-end. Then we threw out the conventional wisdom and started over.
              </p>
              <p>
                Reinfora is what we wish every ABA clinician already had: clean,
                opinionated software that respects clinical judgment, runs on real
                healthcare-grade infrastructure, and gets out of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              What we believe
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight dark:text-white">
              The values that shape every release.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
                The team
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
                A small team, deeply embedded with clinicians.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                Reinfora is built by a small team of engineers, designers, and ABA
                clinical advisors. We work alongside BCBAs and clinic owners every week —
                not in focus groups, but in the actual rooms where the work happens.
              </p>
              <p>
                We're hiring thoughtfully. If you're a BCBA who wants to shape the
                future of clinical software, or an engineer who's tired of building
                things that don't matter, we'd love to talk.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
