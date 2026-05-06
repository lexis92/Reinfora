import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Calendar, HeartHandshake, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact — Reinfora",
  description:
    "Talk to the Reinfora team. Book a demo, ask sales questions, or start an enterprise conversation.",
};

const channels = [
  {
    icon: Calendar,
    title: "Book a live demo",
    desc: "30-minute walkthrough with a Reinfora specialist. Bring your hardest workflow questions.",
    href: "/demo",
    cta: "Pick a time",
    accent: true,
  },
  {
    icon: Mail,
    title: "Talk to sales",
    desc: "Pricing, BAA timelines, migration paths, and procurement docs.",
    href: "mailto:sales@reinfora.com",
    cta: "sales@reinfora.com",
  },
  {
    icon: Building2,
    title: "Enterprise & multi-site",
    desc: "10+ BCBAs, multi-state operations, custom SSO, or specialized reporting needs.",
    href: "mailto:enterprise@reinfora.com",
    cta: "enterprise@reinfora.com",
  },
  {
    icon: HeartHandshake,
    title: "Partnerships",
    desc: "Integrations, clearinghouses, university programs, and clinical advisory.",
    href: "mailto:partners@reinfora.com",
    cta: "partners@reinfora.com",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    desc: "Pen-test results, SOC 2 status, BAA requests, and data-handling questions.",
    href: "mailto:security@reinfora.com",
    cta: "security@reinfora.com",
  },
  {
    icon: MessageSquare,
    title: "Customer support",
    desc: "Existing customer? We respond in under 4 business hours, every time.",
    href: "mailto:support@reinfora.com",
    cta: "support@reinfora.com",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Talk to a real <span className="gradient-text">human</span>.
          </>
        }
        lede="Tell us about your practice and we'll route you to the right person — usually within a few hours during the work week."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-4">
          {channels.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group relative rounded-2xl border p-6 transition ${
                c.accent
                  ? "border-brand-300/70 dark:border-brand-400/40 bg-gradient-to-br from-brand-50 to-white dark:from-brand-400/10 dark:to-neutral-900/60 hover:border-brand-400"
                  : "border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 hover:border-brand-300 dark:hover:border-brand-400/40"
              }`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {c.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                {c.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* General contact form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
              Not sure where to start?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white">
              Send us a note.
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              We'll get back to you within one business day.
            </p>

            <form className="mt-8 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" placeholder="Jordan B., BCBA" />
                <Field label="Work email" name="email" type="email" placeholder="you@yourpractice.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Practice name" name="practice" placeholder="Bright Horizons ABA" />
                <Field label="Number of BCBAs" name="size" placeholder="5–15" />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your current setup and what's frustrating you most."
                  className="w-full rounded-2xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-950 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-200/60 dark:focus:ring-brand-400/20 transition"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  By submitting you agree to our{" "}
                  <Link href="/privacy" className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200">
                    privacy policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-950 px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-200/60 dark:focus:ring-brand-400/20 transition"
      />
    </label>
  );
}
