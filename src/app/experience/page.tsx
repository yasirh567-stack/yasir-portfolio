import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description: "Software engineering internships across network ML, GPU tooling, and frontend product work.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Career"
      title="Experience"
      description="Internships where I've shipped production code, from network anomaly detection to GPU performance tooling."
    >
      <ExperienceTimeline entries={experience} />
    </Section>
  );
}
