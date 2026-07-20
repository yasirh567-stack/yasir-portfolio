import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { LinkButton } from "@/components/Button";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { SimpleIcon } from "@/components/SimpleIcon";

type Params = Promise<{ slug: string }>;

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return pageMetadata({ title: "Project not found", description: "", path: `/projects/${slug}` });

  return pageMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <ProjectGallery images={project.images} />
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.05}>
              {project.featured && (
                <Badge className="mb-4 border-accent/40 text-accent">Featured</Badge>
              )}
              <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{project.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveDemo && (
                  <LinkButton
                    href={project.liveDemo}
                    external
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Live Demo
                  </LinkButton>
                )}
                <LinkButton
                  href={project.github}
                  external
                  variant={project.liveDemo ? "secondary" : "primary"}
                  icon={<SimpleIcon slug="github" className="h-4 w-4" />}
                >
                  View Code
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
