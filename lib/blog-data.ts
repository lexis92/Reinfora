export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: "ABA practice" | "Operations" | "Compliance" | "Documentation";
  author: string;
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "cut-documentation-time-in-half",
    title: "How modern ABA clinics cut documentation time in half",
    description:
      "Five workflow changes that take BCBAs from charting at 9pm to closing the laptop at 6.",
    date: "2026-01-22",
    readTime: "7 min read",
    category: "Documentation",
    author: "The Reinfora team",
    body: [
      {
        type: "p",
        text: "Ask any BCBA what their least favorite part of the job is and you'll hear the same answer. It's not the science. It's not the families. It's the documentation tax — the hours every week spent turning a clinical session into something insurance will accept.",
      },
      {
        type: "p",
        text: "After spending months sitting in on sessions, supervision meetings, and end-of-month billing reviews, we identified five workflow changes that consistently move the needle for ABA practices. None of them require a new platform. All of them work better when your tooling supports them.",
      },
      {
        type: "h2",
        text: "1. Capture the data, not the prose",
      },
      {
        type: "p",
        text: "Most documentation drag comes from rewriting in narrative form what was already entered as structured data. The fix is upstream: capture the right structured signals during the session, and let the system draft the narrative.",
      },
      {
        type: "h2",
        text: "2. Standardize the parts that don't need clinical judgment",
      },
      {
        type: "p",
        text: "Medical-necessity language, signature blocks, CPT alignment, place-of-service formatting — none of these benefit from being written by hand each time. Templating these makes notes faster and audits easier.",
      },
      {
        type: "h2",
        text: "3. Move QA to the moment of capture",
      },
      {
        type: "p",
        text: "Catching missing fields, mismatched data, and weak language before a note is signed is far cheaper than the alternative. Real-time QA prompts during draft review save hours of post-hoc cleanup.",
      },
      {
        type: "h2",
        text: "4. Let AI draft, never sign",
      },
      {
        type: "p",
        text: "Generative AI is good at the boring parts of documentation: turning structured data into compliant prose, suggesting phrasing for medical necessity, summarizing supervision notes. It is bad — and inappropriate — at exercising clinical judgment. The right division of labor is AI drafts, clinicians sign.",
      },
      {
        type: "h2",
        text: "5. Stop documenting twice",
      },
      {
        type: "p",
        text: "If your team is filling out one system for clinical and another for billing — or copy-pasting between supervision notes and treatment plans — the speed gain from a unified system is real. Single source of truth, multiple views.",
      },
      {
        type: "p",
        text: "None of this is rocket science. But these five shifts, taken together, can take a 10-hour-a-week documentation load down to 4 or 5. That's a few hundred hours of clinician time, per BCBA, per year — given back.",
      },
    ],
  },
  {
    slug: "auth-tracking-without-spreadsheets",
    title: "Authorization tracking without spreadsheets",
    description:
      "Why authorization burn-down is the most under-managed risk in ABA practices — and how to fix it.",
    date: "2026-01-08",
    readTime: "5 min read",
    category: "Operations",
    author: "The Reinfora team",
    body: [
      {
        type: "p",
        text: "Every ABA practice we talk to has one back-office spreadsheet they cannot live without — and it's almost always the authorizations tracker. It's also almost always a liability.",
      },
      {
        type: "p",
        text: "Authorizations expire. Hours run out. Approvals come back with new caps. When that information lives in a spreadsheet only one person knows how to interpret, the practice is one PTO away from billing into a void.",
      },
      {
        type: "h2",
        text: "What good auth tracking actually looks like",
      },
      {
        type: "ul",
        items: [
          "Every learner shows remaining hours per CPT code at a glance",
          "Warnings fire 14, 7, and 1 day before expiration — to the right people",
          "Scheduling is aware of remaining hours and can't drag in a session that exceeds them",
          "Re-auth packets are pre-filled from existing data instead of recreated",
          "Auth changes are logged with who, when, and why",
        ],
      },
      {
        type: "p",
        text: "If your current tooling doesn't support all five, you have an unmanaged risk. The good news: most of the work is already in your data. You just need a system that surfaces it.",
      },
    ],
  },
  {
    slug: "what-bcbas-want-from-software",
    title: "What BCBAs actually want from clinical software",
    description:
      "What we learned from 60+ BCBA interviews about the gap between what software promises and what clinicians need.",
    date: "2025-12-14",
    readTime: "8 min read",
    category: "ABA practice",
    author: "The Reinfora team",
    body: [
      {
        type: "p",
        text: "We spent the last six months talking to BCBAs in clinics of every size — from solo practitioners to multi-state groups. Here's what we heard, organized into the themes that came up over and over.",
      },
      {
        type: "h2",
        text: "Theme 1: 'Stop making me click into a side window for everything.'",
      },
      {
        type: "p",
        text: "Modal-driven UIs are the single most-cited annoyance. Clinicians want context — when looking at a learner, they want to see programs, sessions, supervision history, and notes without launching a second window for each.",
      },
      {
        type: "h2",
        text: "Theme 2: 'Don't make me train my RBTs for two weeks.'",
      },
      {
        type: "p",
        text: "RBT turnover is real, and every additional hour of platform training is an hour of unbilled, often unpaid time. The platforms that win are the ones an RBT can be productive on within 30 minutes.",
      },
      {
        type: "h2",
        text: "Theme 3: 'I don't want AI to make decisions. I want it to handle the busywork.'",
      },
      {
        type: "p",
        text: "BCBAs are sophisticated about AI. They don't want a black box deciding clinical anything. They do want help drafting language, summarizing trends, and flagging anomalies — with the BCBA in the loop on every output.",
      },
      {
        type: "h2",
        text: "Theme 4: 'Show me the operational picture without me asking.'",
      },
      {
        type: "p",
        text: "Auth burn-down, no-show rates, RBT utilization, supervision compliance — clinicians and clinic owners want this surfaced live, not pulled monthly. The data exists. It just needs the right dashboard.",
      },
      {
        type: "p",
        text: "We took these themes seriously when designing Reinfora. They're not nice-to-haves — they're the difference between a platform clinicians tolerate and one they actively use.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
