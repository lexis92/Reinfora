import Link from "next/link";
import { Logo } from "./logo";

const groups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Security", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press"],
  },
  {
    title: "Resources",
    links: ["Help center", "Clinician library", "Guides", "API"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "HIPAA", "BAA"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight dark:text-white">
                Reinfora
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
              The modern platform for ABA therapy — purpose-built for BCBAs, RBTs,
              and the families they serve.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                {g.title}
              </div>
              <ul className="mt-3 space-y-2">
                {g.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-black/5 dark:border-white/10 pt-6">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Reinfora, Inc. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Made with care for the ABA community.
          </p>
        </div>
      </div>
    </footer>
  );
}
