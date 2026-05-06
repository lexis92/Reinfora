import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  FileText,
  LifeBuoy,
  Lock,
  Settings,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Help center — Reinfora",
  description:
    "Guides, policies, and answers to common questions about using Reinfora. Includes how-tos, account help, billing, security, and links to legal documents.",
};

const categories = [
  {
    icon: BookOpen,
    title: "Getting started",
    desc: "Sign in, set up your practice, and run your first session.",
    articles: ["how-to-sign-in", "set-up-your-practice", "run-your-first-session"],
  },
  {
    icon: UserCog,
    title: "Accounts & access",
    desc: "Invite your team, change roles, and manage permissions.",
    articles: ["invite-your-team", "change-a-role", "reset-your-password"],
  },
  {
    icon: CreditCard,
    title: "Billing & plans",
    desc: "Update payment, change plans, and download invoices.",
    articles: ["update-payment", "change-plans", "download-invoices", "cancel-account"],
  },
  {
    icon: Settings,
    title: "Workflow & data",
    desc: "Collect data, draft notes, schedule sessions, and run reports.",
    articles: ["collect-data", "draft-a-note", "schedule-a-session", "export-a-report"],
  },
  {
    icon: ShieldCheck,
    title: "Security & HIPAA",
    desc: "BAA requests, security practices, and what we do with PHI.",
    articles: ["request-a-baa", "report-a-security-issue", "data-handling"],
  },
  {
    icon: FileText,
    title: "Policies & legal",
    desc: "Our Privacy Policy, Terms of Service, and HIPAA documentation.",
    articles: ["privacy-policy", "terms-of-service", "hipaa-baa"],
  },
];

const howTos: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "how-to-sign-in",
    title: "How do I sign in to Reinfora?",
    body: (
      <>
        <p>
          Go to <Link href="/" className="underline">reinfora.com</Link> and click
          <strong> Sign in</strong> in the top-right of the navigation. Enter the email
          address your practice admin used to invite you, then follow the prompts.
        </p>
        <p>
          If you can't find your invite email, check your spam folder or ask your admin
          to resend the invitation from <em>Settings → Team</em>.
        </p>
      </>
    ),
  },
  {
    id: "set-up-your-practice",
    title: "How do I set up my practice for the first time?",
    body: (
      <>
        <p>
          On first sign-in, the setup wizard walks you through (1) practice details,
          (2) inviting your team, (3) importing or creating your first learner, and
          (4) connecting any clearinghouse you bill through.
        </p>
        <p>
          Migrating from CentralReach, Rethink, or CR Essentials? Email{" "}
          <Link href="mailto:onboarding@reinfora.com" className="underline">
            onboarding@reinfora.com
          </Link>{" "}
          and our team will run the import for you.
        </p>
      </>
    ),
  },
  {
    id: "run-your-first-session",
    title: "How do I run my first session?",
    body: (
      <>
        <p>
          Open the learner's profile, tap <strong>Start session</strong>, and choose the
          programs you'll run today. Reinfora's data screen reshapes itself to match each
          program — DTT, duration, frequency, ABC, or task analyses.
        </p>
        <p>
          When you end the session, Reinfora drafts a session note from your data and any
          voice notes. The reviewing BCBA edits and signs — Reinfora never signs on your
          behalf.
        </p>
      </>
    ),
  },
  {
    id: "invite-your-team",
    title: "How do I invite my team?",
    body: (
      <>
        <p>
          Go to <em>Settings → Team → Invite member</em>. Enter the email and choose a
          role (RBT, BCaBA, BCBA, Ops, Admin). The invitee receives an email with a
          one-time link to sign in.
        </p>
        <p>Roles are scoped to teams and learners — see the next article for details.</p>
      </>
    ),
  },
  {
    id: "change-a-role",
    title: "How do I change someone's role?",
    body: (
      <p>
        Only Admins can change roles. Go to <em>Settings → Team</em>, click the member,
        and choose the new role. Role changes take effect immediately and are recorded in
        the audit log.
      </p>
    ),
  },
  {
    id: "reset-your-password",
    title: "How do I reset my password?",
    body: (
      <p>
        On the sign-in screen, click <strong>Forgot password?</strong> Enter your email
        and we'll send a reset link. Reset links expire in 30 minutes for security. Two-
        factor authentication is required for clinical and admin roles.
      </p>
    ),
  },
  {
    id: "update-payment",
    title: "How do I update payment details?",
    body: (
      <p>
        Admins can manage billing under <em>Settings → Billing</em>. We use Stripe for
        payment processing, so card details are handled directly by Stripe and are never
        stored on Reinfora's servers.
      </p>
    ),
  },
  {
    id: "change-plans",
    title: "How do I change plans?",
    body: (
      <>
        <p>
          Go to <em>Settings → Billing → Plan</em>. Upgrades take effect immediately and
          are pro-rated. Downgrades take effect at the end of your current billing cycle.
        </p>
        <p>
          Need a custom plan or have more than 50 BCBAs? Email{" "}
          <Link href="mailto:enterprise@reinfora.com" className="underline">
            enterprise@reinfora.com
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "download-invoices",
    title: "Where do I download invoices?",
    body: (
      <p>
        Admins can download all past invoices under <em>Settings → Billing → Invoices</em>.
        Invoices are generated as PDFs at the end of each billing cycle.
      </p>
    ),
  },
  {
    id: "cancel-account",
    title: "How do I cancel my account?",
    body: (
      <>
        <p>
          Email{" "}
          <Link href="mailto:support@reinfora.com" className="underline">
            support@reinfora.com
          </Link>{" "}
          and we'll handle cancellation and final data export. Your account remains
          active until the end of the current billing cycle.
        </p>
        <p>
          Per our Privacy Policy and BAA, customer PHI is exported and/or deleted on the
          timeline specified in your agreement.
        </p>
      </>
    ),
  },
  {
    id: "collect-data",
    title: "How do I collect data during a session?",
    body: (
      <p>
        Open the active session and tap a program tile to start collecting. Reinfora
        supports trial-by-trial, duration, frequency, latency, interval, ABC, and task
        analysis data — and works offline so basements and dead zones don't block you.
      </p>
    ),
  },
  {
    id: "draft-a-note",
    title: "How does AI note drafting work?",
    body: (
      <>
        <p>
          When a session ends, Reinfora drafts a session note from your structured data
          and any voice memos. The reviewing BCBA opens the draft, edits as needed, and
          signs.
        </p>
        <p>
          Reinfora never signs notes, never submits to insurance on its own, and never
          uses your PHI to train models.
        </p>
      </>
    ),
  },
  {
    id: "schedule-a-session",
    title: "How do I schedule a session?",
    body: (
      <p>
        Go to <em>Schedule</em> and drag a session onto a clinician's row. Reinfora flags
        conflicts in real time — overlapping sessions, missing certifications, supervision
        ratio gaps, drive-time issues, and authorization shortfalls.
      </p>
    ),
  },
  {
    id: "export-a-report",
    title: "How do I export a progress or ops report?",
    body: (
      <p>
        Open <em>Reports</em>, choose the report type (progress, mastery, supervision,
        ops, or insurance summary), apply filters, and click <strong>Export</strong>.
        Reports export as PDF or structured CSV depending on the type.
      </p>
    ),
  },
  {
    id: "request-a-baa",
    title: "How do I request a Business Associate Agreement (BAA)?",
    body: (
      <>
        <p>
          A BAA is included with every paid plan at no additional cost. Email{" "}
          <Link href="mailto:security@reinfora.com" className="underline">
            security@reinfora.com
          </Link>{" "}
          with the subject <em>BAA request</em> and we'll send our standard agreement.
          Enterprise customers can review and propose redlines.
        </p>
        <p>
          See the <Link href="/hipaa" className="underline">HIPAA & BAA page</Link> for
          full details.
        </p>
      </>
    ),
  },
  {
    id: "report-a-security-issue",
    title: "How do I report a security issue?",
    body: (
      <p>
        We take responsible disclosure seriously. Email{" "}
        <Link href="mailto:security@reinfora.com" className="underline">
          security@reinfora.com
        </Link>{" "}
        — we respond within one business day. See the{" "}
        <Link href="/security" className="underline">Security page</Link> for the full
        program.
      </p>
    ),
  },
  {
    id: "data-handling",
    title: "How does Reinfora handle PHI?",
    body: (
      <p>
        PHI is encrypted at rest (AES-256) and in transit (TLS 1.2+). We do not sell PHI,
        we do not use PHI to train models, and access is scoped by role and team. See the{" "}
        <Link href="/security" className="underline">Security page</Link> and{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link> for specifics.
      </p>
    ),
  },
  {
    id: "privacy-policy",
    title: "Where can I read your Privacy Policy?",
    body: (
      <p>
        Our full Privacy Policy is at{" "}
        <Link href="/privacy" className="underline">/privacy</Link>. It covers what we
        collect, how we use it, sub-processor sharing, retention, and your rights.
      </p>
    ),
  },
  {
    id: "terms-of-service",
    title: "Where are your Terms of Service?",
    body: (
      <p>
        Our Terms of Service are at{" "}
        <Link href="/terms" className="underline">/terms</Link>. Paid customers are
        additionally governed by a signed Master Services Agreement (MSA), which controls
        in any conflict.
      </p>
    ),
  },
  {
    id: "hipaa-baa",
    title: "Where are your HIPAA and BAA documents?",
    body: (
      <p>
        Our HIPAA and BAA overview is at{" "}
        <Link href="/hipaa" className="underline">/hipaa</Link>. Email{" "}
        <Link href="mailto:security@reinfora.com" className="underline">
          security@reinfora.com
        </Link>{" "}
        to request the signed agreement.
      </p>
    ),
  },
];

export default function HelpPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Help center"
        title={
          <>
            How can we <span className="gradient-text">help</span>?
          </>
        }
        lede="Quick answers to common questions, plus our full set of policy documents. If you don't find what you're looking for, our support team replies within 4 business hours."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="mailto:support@reinfora.com"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
          >
            Contact support
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
          >
            All contact channels
          </Link>
        </div>
      </PageHeader>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <a
              key={c.title}
              href={`#${c.articles[0]}`}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                <c.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold tracking-tight dark:text-white">
                {c.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {c.desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                View articles
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
            Articles
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
            How-tos and answers
          </h2>
          <div className="mt-8 divide-y divide-black/5 dark:divide-white/10 border-y border-black/5 dark:border-white/10">
            {howTos.map((a) => (
              <details key={a.id} id={a.id} className="group py-5 scroll-mt-32">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-medium dark:text-white list-none">
                  {a.title}
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 dark:border-white/20 text-xs transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {a.body}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-400">
            Policies & legal
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight dark:text-white">
            Standard policy documents
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            The legal and compliance documents that govern your use of Reinfora. Customers on a paid plan are additionally bound by their signed MSA and BAA, which control in any conflict.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Lock,
                title: "Privacy Policy",
                desc: "What we collect, how we use it, sub-processor sharing, retention, and your rights.",
                href: "/privacy",
              },
              {
                icon: FileText,
                title: "Terms of Service",
                desc: "The agreement that governs your use of the Reinfora website and product.",
                href: "/terms",
              },
              {
                icon: ShieldCheck,
                title: "HIPAA & BAA",
                desc: "How Reinfora supports HIPAA, including our Business Associate Agreement.",
                href: "/hipaa",
              },
              {
                icon: LifeBuoy,
                title: "Security overview",
                desc: "Encryption, access control, audit logging, and incident response practices.",
                href: "/security",
              },
            ].map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-6 transition hover:border-brand-300 dark:hover:border-brand-400/40"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="py-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight dark:text-white">
            Still need help?
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Our support team replies within 4 business hours. Existing customers can also reach us in-product from the help menu.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="mailto:support@reinfora.com"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-brand-400 dark:text-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:hover:bg-brand-300"
            >
              support@reinfora.com
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/10"
            >
              All channels
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
