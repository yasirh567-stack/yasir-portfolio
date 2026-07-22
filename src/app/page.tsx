import { Download, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { LinkButton } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SimpleIcon } from "@/components/SimpleIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const teaserProjects = [...projects]
  .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))
  .slice(0, 2);

export default function Home() {
  return (
    <>
      <section className="py-24 sm:py-36">
        <Container>
          <Reveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
              {siteConfig.role}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              {siteConfig.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {siteConfig.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={siteConfig.resumeUrl} external icon={<Download className="h-4 w-4" />}>
                Resume
              </LinkButton>
              <LinkButton
                href={siteConfig.social.github}
                external
                variant="secondary"
                icon={<SimpleIcon slug="github" className="h-4 w-4" />}
              >
                GitHub
              </LinkButton>
              <LinkButton
                href={siteConfig.social.linkedin}
                external
                variant="secondary"
                icon={<LinkedInIcon className="h-4 w-4" />}
              >
                LinkedIn
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
                Contact
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section
        eyebrow="About"
        title="About me"
        description="I'm an ECE student at UT Austin who builds software, AI tools, and user-facing products, spanning network systems, GPU performance tooling, and full-stack web platforms. I'm especially interested in software engineering and product roles where technical depth meets product strategy, and I like building things that create measurable, real-world impact."
      />

      {testimonials.length > 0 && (
        <Section eyebrow="Recommendation" title="What people say">
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Section>
      )}

      <Section
        eyebrow="Selected Work"
        title="Featured projects"
        description="A couple of things I've been building recently. See the full project list for details, screenshots, and code."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {teaserProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.05} />
          ))}
        </div>
        <Reveal delay={0.15} className="mt-10">
          <LinkButton href="/projects" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
            View all projects
          </LinkButton>
        </Reveal>
      </Section>
    </>
  );
}
