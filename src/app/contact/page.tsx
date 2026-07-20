import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/Section";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { SimpleIcon } from "@/components/SimpleIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Yasir Hassan by email, LinkedIn, or GitHub.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Get in touch"
      title="Contact"
      description="The fastest way to reach me is email — happy to talk about roles, projects, or anything in between."
    >
      <Reveal>
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-border bg-elevated p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Mail className="h-6 w-6" aria-hidden />
            </span>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="font-heading text-xl font-semibold transition-colors hover:text-accent sm:text-2xl"
            >
              {siteConfig.social.email}
            </a>
          </div>

          <CopyButton text={siteConfig.social.email} />

          <div className="flex w-full flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <SimpleIcon slug="github" className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
