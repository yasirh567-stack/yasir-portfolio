import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { skills } from "@/data/skills";
import { Section } from "@/components/Section";
import { SkillGroupCard } from "@/components/SkillGroupCard";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description: "Languages, frameworks, and tools I use to build full-stack and ML products.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Toolbox"
      title="Skills"
      description="What I reach for day to day, grouped by language, framework, and tooling."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillGroupCard key={group.title} group={group} delay={i * 0.05} />
        ))}
      </div>
    </Section>
  );
}
