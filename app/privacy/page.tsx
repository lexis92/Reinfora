import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { PageHeader } from "@/components/page-header";
import { LegalProse, LegalSection } from "@/components/legal-prose";

export const metadata: Metadata = {
  title: "Privacy policy — Reinfora",
  description: "How Reinfora collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Privacy policy"
        title="Your data, handled with care."
        lede="Last updated: January 2026. This policy describes how Reinfora, Inc. handles information from our website, marketing, and product."
      />
      <LegalProse>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          This is a plain-English summary intended to inform — it is not legal advice and
          does not replace the binding agreements you sign when using Reinfora. Customers
          subject to HIPAA receive additional protections under our Business Associate
          Agreement (BAA), which controls in any conflict.
        </p>

        <LegalSection title="What we collect">
          <p>
            <strong>Information you provide.</strong> Account details (name, email, role,
            practice), billing information processed by our payment provider, and content
            you upload to the product.
          </p>
          <p>
            <strong>Protected health information (PHI).</strong> When clinicians use
            Reinfora with their learners' data, that PHI is governed by our BAA. We do
            not use PHI to train models or for marketing.
          </p>
          <p>
            <strong>Usage data.</strong> Pages visited, features used, device and
            browser metadata, IP address, and approximate location for security and
            product improvement.
          </p>
          <p>
            <strong>Cookies.</strong> Essential cookies for sign-in and security. Optional
            analytics cookies only fire after consent where required by law.
          </p>
        </LegalSection>

        <LegalSection title="How we use information">
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, secure, and improve the Reinfora service.</li>
            <li>Authenticate users and protect against abuse.</li>
            <li>Communicate about your account, security, and product changes.</li>
            <li>Comply with legal obligations and respond to lawful requests.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell personal information, and we do not use PHI
            for advertising or model training.
          </p>
        </LegalSection>

        <LegalSection title="How we share">
          <p>
            We share information only with vetted sub-processors required to run the
            service (hosting, email delivery, analytics, payments) and only as needed for
            their function. Our current sub-processor list is available on request to{" "}
            <Link href="mailto:security@reinfora.com" className="underline underline-offset-2">
              security@reinfora.com
            </Link>
            .
          </p>
          <p>
            We may disclose information if required by law, to protect rights and safety,
            or in connection with a merger or acquisition (with notice to customers).
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We use industry-standard administrative, technical, and physical safeguards.
            See the{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security page
            </Link>{" "}
            for specifics including encryption, access control, and incident response.
          </p>
        </LegalSection>

        <LegalSection title="Retention & deletion">
          <p>
            We retain account data while your account is active. On termination, we
            delete or return PHI per the BAA and the timelines specified in your
            agreement. You may request export or deletion of personal data at any time
            by emailing{" "}
            <Link href="mailto:privacy@reinfora.com" className="underline underline-offset-2">
              privacy@reinfora.com
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>
            Depending on your jurisdiction, you may have rights to access, correct,
            export, or delete personal information. Reach us at{" "}
            <Link href="mailto:privacy@reinfora.com" className="underline underline-offset-2">
              privacy@reinfora.com
            </Link>{" "}
            and we'll honor verified requests within applicable timeframes.
          </p>
          <p>
            Reinfora is intended for clinicians and practices — it is not directed to
            children. Learner PHI is handled under the BAA with our customers, who are
            the covered entities.
          </p>
        </LegalSection>

        <LegalSection title="International users">
          <p>
            Reinfora is operated in the United States and our infrastructure is hosted in
            the US. By using the service, you understand information may be processed in
            the US under US law.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            We'll post material changes here and notify customers by email. Your
            continued use of the service after changes take effect constitutes acceptance.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Reinfora, Inc. — privacy questions:{" "}
            <Link href="mailto:privacy@reinfora.com" className="underline underline-offset-2">
              privacy@reinfora.com
            </Link>
            . Security:{" "}
            <Link href="mailto:security@reinfora.com" className="underline underline-offset-2">
              security@reinfora.com
            </Link>
            .
          </p>
        </LegalSection>
      </LegalProse>
    </PageShell>
  );
}
