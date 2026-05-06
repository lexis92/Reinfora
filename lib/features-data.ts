import type { LucideIcon } from "lucide-react";
import {
  Users,
  CalendarRange,
  ClipboardList,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export type FeatureSlug =
  | "client-management"
  | "scheduling"
  | "data-collection"
  | "reporting"
  | "automation"
  | "compliance";

export type Feature = {
  slug: FeatureSlug;
  icon: LucideIcon;
  name: string;
  tagline: string;
  summary: string;
  hero: string;
  highlights: { title: string; desc: string }[];
  details: { title: string; desc: string }[];
  bullets: string[];
  faq: { q: string; a: string }[];
};

export const features: Feature[] = [
  {
    slug: "client-management",
    icon: Users,
    name: "Client management",
    tagline: "Every learner, in one clean record.",
    summary:
      "Intake, demographics, authorizations, contacts, programs, and history — organized the way clinicians actually think.",
    hero:
      "A single, fast client record that pulls together everyone and everything tied to a learner — no more six-tab safaris to find a parent phone number.",
    highlights: [
      {
        title: "Unified learner profile",
        desc: "Demographics, diagnosis codes, contacts, payers, auths, and program history in one scrollable view.",
      },
      {
        title: "Fast intake",
        desc: "Configurable intake flow that captures everything ops and clinical need on day one.",
      },
      {
        title: "Smart timelines",
        desc: "Automatic timeline of every session, supervision, note, and authorization change — searchable and filterable.",
      },
    ],
    details: [
      {
        title: "Authorization tracking",
        desc: "See remaining hours per CPT code at a glance. Get warned 14 days before an auth expires — never bill into a void again.",
      },
      {
        title: "Family & caregiver portal",
        desc: "Caregivers see weekly summaries, milestones, and recommended practice — without IT setup or app installs.",
      },
      {
        title: "Custom fields",
        desc: "Add the fields your clinic actually uses — preferences, sensory profiles, school contacts — without waiting on engineering.",
      },
      {
        title: "Bulk import",
        desc: "Migrate from CentralReach, Rethink, or CSV with our onboarding team handling the heavy lifting.",
      },
    ],
    bullets: [
      "One profile per learner, not five",
      "Auth utilization warnings before you run out",
      "Caregiver portal with no extra app",
      "HIPAA-aligned access controls per role",
    ],
    faq: [
      {
        q: "Can I migrate from my current system?",
        a: "Yes. We support CentralReach, Rethink, CR Essentials, and generic CSV. Practice and Enterprise plans get hands-on migration help.",
      },
      {
        q: "How do you handle siblings or shared caregivers?",
        a: "Caregivers can be linked across multiple learner profiles with one login — no duplicate accounts.",
      },
    ],
  },
  {
    slug: "scheduling",
    icon: CalendarRange,
    name: "Scheduling",
    tagline: "Match the right RBT to the right session.",
    summary:
      "Drag-and-drop scheduling with availability, certifications, drive time, and authorization checks built in.",
    hero:
      "Scheduling that respects clinical reality — RBT certifications, BCBA supervision ratios, drive time between learners, and remaining auth hours.",
    highlights: [
      {
        title: "Conflict-aware drag & drop",
        desc: "Move a session and Reinfora flags overlaps, supervision gaps, and auth shortfalls in real time.",
      },
      {
        title: "Smart availability",
        desc: "Each clinician has a recurring availability profile. We surface only valid candidates when you need a fill-in.",
      },
      {
        title: "Drive-time aware",
        desc: "Optional drive-time guardrails so back-to-back home sessions never get scheduled 40 minutes apart.",
      },
    ],
    details: [
      {
        title: "Recurring templates",
        desc: "Set up a learner's standard week once — Reinfora rolls it forward and flags exceptions.",
      },
      {
        title: "Cancellations & PTO",
        desc: "One-click cancellations with reason codes, automatic notifications, and rebooking suggestions.",
      },
      {
        title: "Supervision pairing",
        desc: "Auto-suggest BCBA supervision sessions to satisfy your supervision ratio without spreadsheets.",
      },
      {
        title: "Calendar sync",
        desc: "Two-way sync with Google and Microsoft 365 calendars so clinicians never miss a session.",
      },
    ],
    bullets: [
      "Real-time conflict detection",
      "Auth utilization built into every drop",
      "Supervision ratio automation",
      "Two-way calendar sync",
    ],
    faq: [
      {
        q: "Can RBTs see only their own schedule?",
        a: "Yes. Role-based views ensure RBTs only see their own sessions, while leads see their teams.",
      },
      {
        q: "Do you support telehealth sessions?",
        a: "Yes. Session location flags telehealth, in-clinic, school, or home — with separate billing rules per location type.",
      },
    ],
  },
  {
    slug: "data-collection",
    icon: ClipboardList,
    name: "Notes & data collection",
    tagline: "Real-time data, real session notes.",
    summary:
      "Trial-by-trial, duration, frequency, ABC, and behavior tracking — designed for one-handed use during a session.",
    hero:
      "Collect data on a phone, tablet, or laptop without losing eye contact with your learner. Reinfora drafts the session note from the data the moment the session ends.",
    highlights: [
      {
        title: "One-handed data entry",
        desc: "Big tap targets, voice capture, and offline support so RBTs can stay present and accurate.",
      },
      {
        title: "All major data types",
        desc: "DTT trial-by-trial, duration, frequency, latency, interval, ABC, task analyses — and custom types.",
      },
      {
        title: "AI session notes",
        desc: "Reinfora drafts a compliant note from the data and optional voice memo. The BCBA reviews and signs.",
      },
    ],
    details: [
      {
        title: "Offline first",
        desc: "Sessions in basements, schools, and dead-zone homes still capture data — Reinfora syncs the moment connectivity returns.",
      },
      {
        title: "Program-aware UI",
        desc: "The data screen reshapes itself based on the program type — no more configuring custom forms per learner.",
      },
      {
        title: "Voice dictation",
        desc: "Add narrative observations by voice. Reinfora transcribes and integrates them into the draft note.",
      },
      {
        title: "Note QA",
        desc: "Automatic checks for medical-necessity language, mismatched data, and missing fields before you sign.",
      },
    ],
    bullets: [
      "Offline-first capture",
      "AI drafts, clinicians sign",
      "Built-in note quality checks",
      "Voice dictation included",
    ],
    faq: [
      {
        q: "Does the AI ever sign or submit notes on its own?",
        a: "Never. The BCBA reviews and signs every note. Reinfora flags anomalies — it doesn't override clinical judgment.",
      },
      {
        q: "What happens if Wi-Fi drops mid-session?",
        a: "Data continues to capture locally. When connectivity returns, Reinfora syncs in the background with conflict-free merging.",
      },
    ],
  },
  {
    slug: "reporting",
    icon: BarChart3,
    name: "Reporting",
    tagline: "Outcomes, on demand.",
    summary:
      "Treatment progress reports, mastery dashboards, supervision summaries, and operational KPIs — exportable in clicks.",
    hero:
      "Pull a clinician-ready progress report, an ops dashboard, or an insurance-ready summary in seconds. Stop assembling reports the night before they're due.",
    highlights: [
      {
        title: "Progress reports",
        desc: "Auto-generated quarterly reports with mastery graphs, narrative summaries, and recommendations — ready to edit.",
      },
      {
        title: "Live dashboards",
        desc: "BCBA, clinic, and ops dashboards with mastery trends, session attendance, and authorization utilization.",
      },
      {
        title: "Insurance-friendly exports",
        desc: "Export reports in formats funders actually accept — clean PDFs, structured data, and CPT-aligned summaries.",
      },
    ],
    details: [
      {
        title: "Custom reports",
        desc: "Filter by learner, payer, supervisor, or program. Save views your team uses every month.",
      },
      {
        title: "Goal mastery curves",
        desc: "Acquisition, generalization, and maintenance phases visualized with industry-standard graphing.",
      },
      {
        title: "Operational KPIs",
        desc: "Authorization burn-down, no-show rates, RBT utilization, and revenue-per-clinician dashboards.",
      },
      {
        title: "Scheduled delivery",
        desc: "Reports can email themselves on the cadence funders or supervisors expect.",
      },
    ],
    bullets: [
      "Auto-generated progress reports",
      "Live mastery + ops dashboards",
      "Industry-standard ABA graphing",
      "Scheduled report delivery",
    ],
    faq: [
      {
        q: "Can I customize report templates per funder?",
        a: "Yes. Templates are funder- and state-aware so you can match the exact format each payer requires.",
      },
      {
        q: "Do you do raw data exports?",
        a: "Yes — CSV and structured JSON exports are available so your data scientists or BI team can do their own analysis.",
      },
    ],
  },
  {
    slug: "automation",
    icon: Workflow,
    name: "Automation",
    tagline: "Eliminate the busywork that owns your evenings.",
    summary:
      "Workflow automations for note prep, supervision pairing, parent updates, billing exports, and reminders.",
    hero:
      "Automate the repetitive work that doesn't need clinical judgment. The result: more time for the work that does.",
    highlights: [
      {
        title: "AI note drafting",
        desc: "The most painful chore — turned into a 90-second review.",
      },
      {
        title: "Auto-reminders",
        desc: "Auth expirations, supervision gaps, and unsigned notes get reminders so nothing slips.",
      },
      {
        title: "Parent updates",
        desc: "Weekly caregiver summaries are generated, reviewed, and sent on the schedule you choose.",
      },
    ],
    details: [
      {
        title: "Billing exports",
        desc: "Daily or weekly clean exports drop into your clearinghouse with CPT codes, modifiers, and place-of-service ready.",
      },
      {
        title: "Document generation",
        desc: "Treatment plans, BIPs, and re-auth packets are pre-filled from existing data — clinicians edit, don't recreate.",
      },
      {
        title: "Onboarding flows",
        desc: "New-learner onboarding kicks off intake, scheduling, and program selection in one structured workflow.",
      },
      {
        title: "Approval routing",
        desc: "Notes, plans, and reports route to the right reviewer automatically based on role, learner, and funder.",
      },
    ],
    bullets: [
      "AI note drafting (clinician-signed)",
      "Auth & supervision reminders",
      "Auto-generated caregiver updates",
      "Billing exports on a schedule",
    ],
    faq: [
      {
        q: "Are automations configurable per practice?",
        a: "Yes. Practices choose which automations are on, what cadence they run, and who reviews their output.",
      },
      {
        q: "Do automations replace clinicians?",
        a: "No. Automations remove busywork — every clinical artifact is still reviewed and signed by a qualified clinician.",
      },
    ],
  },
  {
    slug: "compliance",
    icon: ShieldCheck,
    name: "Compliance",
    tagline: "Healthcare-grade by default.",
    summary:
      "HIPAA-aligned infrastructure, role-based access, audit logs, BAA, and the documentation your funders ask for.",
    hero:
      "Reinfora was built from day one to meet the bar healthcare actually requires — not bolted on afterwards.",
    highlights: [
      {
        title: "HIPAA-aligned",
        desc: "Encryption at rest and in transit, BAA available, and access controls scoped by role and team.",
      },
      {
        title: "Audit logs",
        desc: "Every read, edit, and export is logged so investigations and audits don't require detective work.",
      },
      {
        title: "Funder-ready docs",
        desc: "Medical-necessity language, signature blocks, and CPT/HCPCS alignment baked into every artifact.",
      },
    ],
    details: [
      {
        title: "Role-based access control",
        desc: "Granular roles for RBT, BCaBA, BCBA, ops, and admin — with team scoping so people only see what they should.",
      },
      {
        title: "Two-factor authentication",
        desc: "Required by default for clinical and admin roles. SSO available on Enterprise plans.",
      },
      {
        title: "Data residency",
        desc: "Hosted on healthcare-grade US infrastructure with documented backup, retention, and incident response policies.",
      },
      {
        title: "Vendor diligence",
        desc: "Sub-processor list published; SOC 2 in progress; BAA available on signature.",
      },
    ],
    bullets: [
      "BAA available on every paid plan",
      "AES-256 at rest, TLS 1.2+ in transit",
      "Granular role-based access",
      "Full audit logging",
    ],
    faq: [
      {
        q: "Will you sign a BAA?",
        a: "Yes. A BAA is included with every paid plan. Enterprise customers can review our standard agreement and propose redlines.",
      },
      {
        q: "Where is data stored?",
        a: "On healthcare-grade US infrastructure with encryption at rest, automated backups, and documented retention policies. See the Security page for full details.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}
