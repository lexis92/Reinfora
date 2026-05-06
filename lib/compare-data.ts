export type CompareSlug = "centralreach" | "rethink" | "best-aba-software";

export type Comparison = {
  slug: CompareSlug;
  competitor: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  summary: string;
  bestFor: { reinfora: string[]; competitor: string[] };
  rows: { feature: string; reinfora: string; competitor: string }[];
  callouts: { title: string; desc: string }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "centralreach",
    competitor: "CentralReach",
    title: "Reinfora vs. CentralReach",
    metaTitle: "Reinfora vs. CentralReach — ABA software comparison",
    metaDescription:
      "How Reinfora compares to CentralReach for ABA practices: pricing, AI session notes, data collection, scheduling, reporting, and onboarding speed.",
    lede: "CentralReach is the established player. Reinfora is what ABA software looks like when you start from a clean slate in 2026 — built for AI workflows, modern infrastructure, and clinicians who don't want a 3-week onboarding.",
    summary:
      "If you need a long-tenured incumbent with deep enterprise hooks and don't mind the learning curve, CentralReach is a fine choice. If you want a fast, opinionated, AI-first tool that BCBAs and RBTs actually enjoy using, Reinfora is built for you.",
    bestFor: {
      reinfora: [
        "Practices with 1–50 BCBAs who want fast onboarding",
        "Teams that prioritize clinician experience and AI assistance",
        "Clinics that want predictable, transparent pricing",
        "Practices that want modern data collection on phones and tablets",
      ],
      competitor: [
        "Very large enterprises with complex existing workflows",
        "Practices already deeply invested in CR's ecosystem",
        "Organizations needing some of CR's specialized add-ons",
      ],
    },
    rows: [
      { feature: "AI-drafted session notes", reinfora: "Built-in, included", competitor: "Limited / add-on" },
      { feature: "Onboarding time", reinfora: "Days, not weeks", competitor: "Multi-week implementation" },
      { feature: "Modern data collection UX", reinfora: "Phone, tablet, offline-first", competitor: "Functional but dated" },
      { feature: "Clinician learning curve", reinfora: "Most RBTs productive in <30 min", competitor: "Significant training required" },
      { feature: "Pricing transparency", reinfora: "Public, per-clinician pricing", competitor: "Quote-based" },
      { feature: "BAA included", reinfora: "Every paid plan", competitor: "Yes" },
      { feature: "Customer support response", reinfora: "<4 business hours", competitor: "Varies" },
    ],
    callouts: [
      {
        title: "Built for AI from the start",
        desc: "Reinfora drafts notes from session data and dictation by default — it's not bolted on to a 15-year-old codebase.",
      },
      {
        title: "Fast onboarding",
        desc: "Most practices migrate from CR in under a week with our hands-on migration team.",
      },
      {
        title: "Pricing without surprises",
        desc: "Per-clinician pricing, BAA included, no quote-only mystery line items.",
      },
    ],
  },
  {
    slug: "rethink",
    competitor: "Rethink",
    title: "Reinfora vs. Rethink",
    metaTitle: "Reinfora vs. Rethink — ABA software comparison",
    metaDescription:
      "How Reinfora compares to Rethink Behavioral Health for ABA practices: AI workflows, data collection UX, supervision, reporting, and pricing.",
    lede: "Rethink is a solid traditional ABA platform. Reinfora is purpose-built for the way clinicians actually work in 2026 — AI-first documentation, modern data collection, and a UX that doesn't fight you.",
    summary:
      "Rethink is fine if you're comfortable with traditional ABA software and don't expect AI assistance. If you want notes drafted in seconds, real-time analytics, and a UI your team won't complain about, Reinfora is the modern choice.",
    bestFor: {
      reinfora: [
        "Clinics that want modern, AI-assisted documentation",
        "Teams that value clinician experience over feature checklists",
        "Practices that want transparent pricing and fast support",
        "Multi-site groups that need clean reporting and dashboards",
      ],
      competitor: [
        "Practices comfortable with traditional ABA software",
        "Teams that don't need AI-assisted documentation",
        "Clinics already running on Rethink's broader catalog",
      ],
    },
    rows: [
      { feature: "AI-drafted session notes", reinfora: "Built-in, included", competitor: "Limited" },
      { feature: "Real-time mastery dashboards", reinfora: "Live, per learner", competitor: "Reports + manual" },
      { feature: "Mobile data collection", reinfora: "Offline-first, modern UX", competitor: "Functional" },
      { feature: "Supervision automation", reinfora: "Automatic pairing & ratio", competitor: "Manual scheduling" },
      { feature: "Pricing transparency", reinfora: "Public, per-clinician pricing", competitor: "Quote-based" },
      { feature: "BAA included", reinfora: "Every paid plan", competitor: "Yes" },
      { feature: "Average implementation time", reinfora: "Under 2 weeks", competitor: "4–8 weeks" },
    ],
    callouts: [
      {
        title: "AI as default, not add-on",
        desc: "Note drafting, summary generation, and parent updates are core — not premium-tier features.",
      },
      {
        title: "Live operational visibility",
        desc: "Auth burn-down, no-shows, RBT utilization — visible without exporting reports.",
      },
      {
        title: "Designed for clinicians",
        desc: "Reinfora's UI is opinionated about ABA workflow, so there's less to configure and less to forget.",
      },
    ],
  },
  {
    slug: "best-aba-software",
    competitor: "the field",
    title: "The best ABA software for clinics in 2026",
    metaTitle: "Best ABA software for clinics in 2026 — buyer's guide",
    metaDescription:
      "An honest buyer's guide to the best ABA software in 2026 — what to evaluate, what's overrated, and how Reinfora compares to CentralReach, Rethink, and CR Essentials.",
    lede: "There is no one 'best' ABA software — only the right fit for your practice. Here's an honest buyer's framework, the trade-offs to watch for, and how the major options compare.",
    summary:
      "The right ABA platform balances clinical depth, data quality, billing accuracy, and clinician experience. The mistake most practices make is over-indexing on feature checklists and under-indexing on whether RBTs and BCBAs will actually use the tool every day.",
    bestFor: {
      reinfora: [
        "Modern, AI-assisted workflow",
        "Fast onboarding (<2 weeks)",
        "Transparent pricing",
        "Strong clinician UX",
      ],
      competitor: [
        "Established incumbents",
        "Deep enterprise integrations",
        "Specialized add-on catalogs",
        "Long-tenured customer relationships",
      ],
    },
    rows: [
      { feature: "AI session notes", reinfora: "Reinfora ✓", competitor: "Mostly absent or limited" },
      { feature: "Modern data collection UX", reinfora: "Reinfora ✓", competitor: "Varies, often dated" },
      { feature: "Onboarding time", reinfora: "Reinfora: <2 weeks", competitor: "4–8 weeks (industry avg)" },
      { feature: "Pricing transparency", reinfora: "Reinfora ✓", competitor: "Mostly quote-based" },
      { feature: "BAA included", reinfora: "Reinfora ✓", competitor: "Most yes, some add-on" },
      { feature: "Live ops dashboards", reinfora: "Reinfora ✓", competitor: "Mixed" },
    ],
    callouts: [
      {
        title: "Look at the daily-use experience",
        desc: "If RBTs and BCBAs avoid using the tool, you'll lose data quality — no amount of dashboards can fix that.",
      },
      {
        title: "Demand BAA and clear data ownership",
        desc: "Whatever you pick, you should be able to read the BAA, see the sub-processor list, and export your data on demand.",
      },
      {
        title: "Evaluate AI features for substance",
        desc: "AI note drafting that requires 10 minutes of cleanup isn't saving you time. Test it on your real data, not vendor demos.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}
