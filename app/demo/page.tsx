import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Book a demo — Reinfora",
  description:
    "See Reinfora in action. 30 minutes with a specialist who knows ABA workflows inside and out.",
};

const expect = [
  "A live walkthrough tailored to your role — BCBA, clinic owner, or RBT lead",
  "Honest answers on pricing, BAA, migration, and timeline",
  "A look at how AI session notes work end-to-end with real session data",
  "Clear next steps — no pressure, no canned follow-ups",
];

const audiences = [
  {
    icon: Users,
    title: "BCBAs & Clinical Directors",
    desc: "See how supervision, programs, and reporting flow without bouncing between tabs.",
  },
  {
    icon: ShieldCheck,
    title: "Clinic owners & operators",
    desc: "We'll show the auth tracking, billing exports, and dashboards your business runs on.",
  },
  {
    icon: Clock,
    title: "RBTs & lead therapists",
    desc: "We'll demo data collection on a real device and answer the real-session edge cases.",
  },
];

export default function DemoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Book a demo"
        title={
          <>
            See Reinfora in 30 minutes — <br />
            <span className="gradient-text">tailored to your practice</span>.
          </>
        }
        lede="Pick a time that works. We'll send a calendar invite, a short prep doc, and a meeting link. No sales theater."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-8">
          {/* Calendly slot */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-black/5 dark:border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="mx-auto text-xs text-neutral-400 dark:text-neutral-500">
                  calendly.com/reinfora/demo
                </div>
              </div>
              {/* Calendly inline embed — replace data-url with your real link */}
              <div
                className="calendly-inline-widget min-h-[700px] bg-neutral-50 dark:bg-neutral-950"
                data-url="https://calendly.com/reinfora/demo?hide_landing_page_details=1&hide_gdpr_banner=1"
              />
              <CalendlyScript />
              <noscript>
                <div className="p-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
                  Calendly requires JavaScript. You can also email{" "}
                  <Link href="mailto:sales@reinfora.com" className="underline">
                    sales@reinfora.com
                  </Link>{" "}
                  to schedule.
                </div>
              </noscript>
            </div>

            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 text-center">
              Don't see a time that works?{" "}
              <Link href="mailto:sales@reinfora.com" className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200">
                Email sales@reinfora.com
              </Link>{" "}
              and we'll find one.
            </p>
          </div>

          {/* What to expect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-brand-50 to-white dark:from-brand-400/10 dark:to-neutral-900/60 p-8">
              <h2 className="text-xl font-semibold tracking-tight dark:text-white">
                What to expect
              </h2>
              <ul className="mt-4 space-y-3">
                {expect.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8">
              <h2 className="text-xl font-semibold tracking-tight dark:text-white">
                Who it's for
              </h2>
              <ul className="mt-4 space-y-4">
                {audiences.map((a) => (
                  <li key={a.title} className="flex gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300 shrink-0">
                      <a.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium dark:text-white">{a.title}</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">{a.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8">
              <h2 className="text-xl font-semibold tracking-tight dark:text-white">
                Already evaluating?
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                See how we stack up against the tools you're considering.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/compare/centralreach" className="rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-white/10">
                  vs CentralReach
                </Link>
                <Link href="/compare/rethink" className="rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-white/10">
                  vs Rethink
                </Link>
                <Link href="/compare" className="inline-flex items-center gap-1 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-3 py-1.5 text-xs font-medium text-white">
                  All comparisons
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CalendlyScript() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
