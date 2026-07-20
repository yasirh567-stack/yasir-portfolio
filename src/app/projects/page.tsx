import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Full-stack and ML projects — financial prediction, retrieval-augmented generation, and real-time classification.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Work"
      title="Projects"
      description="Full-stack and ML systems I've designed and built end to end, from data pipeline to UI."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={(i % 3) * 0.05} />
        ))}
      </div>
    </Section>
  );
}
