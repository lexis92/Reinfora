import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { LegalProse, LegalSection } from "@/components/legal-prose";

export const metadata: Metadata = {
  title: "Terms of service — Reinfora",
  description: "The agreement that governs your use of Reinfora.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Terms of service"
        title="The rules of the road."
        lede="Last updated: January 2026. These terms govern your access to and use of the Reinfora website and product."
      />
      <LegalProse>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          This is a plain-English overview. Customers on a paid plan are governed by a
          signed Master Services Agreement (MSA) and Business Associate Agreement (BAA),
          which control in any conflict with these terms.
        </p>

        <LegalSection title="Your account">
          <p>
            You're responsible for keeping account credentials secure and for activity on
            your account. You must be authorized to act on behalf of any practice or
            organization you sign up.
          </p>
        </LegalSection>

        <LegalSection title="Acceptable use">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use Reinfora only for lawful purposes and only as authorized by your role.</li>
            <li>Don't attempt to bypass security controls, scrape PHI, or interfere with the service.</li>
            <li>Don't use Reinfora to make decisions for which clinical judgment is required without human review.</li>
            <li>Don't reverse engineer, resell, or sublicense the service without our written consent.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Customer data & PHI">
          <p>
            You retain ownership of your data. We process PHI only as a Business
            Associate under your BAA and applicable law. We don't use PHI to train models
            or for advertising.
          </p>
        </LegalSection>

        <LegalSection title="AI features">
          <p>
            Reinfora's AI features (such as note drafting and summaries) produce
            suggestions for clinician review. The reviewing clinician is responsible for
            the final clinical artifact. Reinfora does not provide medical advice and the
            AI should not be used as a substitute for clinical judgment.
          </p>
        </LegalSection>

        <LegalSection title="Fees & cancellation">
          <p>
            Paid plans renew automatically until canceled. You can cancel future renewals
            at any time. Fees already paid are non-refundable except where required by
            law or expressly stated in your MSA.
          </p>
        </LegalSection>

        <LegalSection title="Termination">
          <p>
            Either party may terminate for material breach with reasonable notice. We may
            suspend access immediately if continued use poses a risk to the service or
            other customers.
          </p>
        </LegalSection>

        <LegalSection title="Warranties & liability">
          <p>
            The service is provided "as is" except as expressly warranted in your MSA.
            To the maximum extent permitted by law, our aggregate liability is limited to
            the fees paid in the 12 months preceding the claim.
          </p>
        </LegalSection>

        <LegalSection title="Governing law">
          <p>
            These terms are governed by the laws of the State of Delaware, without regard
            to its conflict-of-laws principles. Disputes are resolved in the state or
            federal courts located in Delaware.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            We may update these terms. Material changes will be posted here with a
            revised "last updated" date. Continued use constitutes acceptance.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Reinfora, Inc. — legal questions:{" "}
            <Link href="mailto:legal@reinfora.com" className="underline underline-offset-2">
              legal@reinfora.com
            </Link>
            .
          </p>
        </LegalSection>
      </LegalProse>
    </PageShell>
  );
}
