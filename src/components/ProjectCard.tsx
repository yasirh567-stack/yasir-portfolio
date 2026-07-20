import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/types";
import { Badge } from "./Badge";
import { LinkButton } from "./Button";
import { Reveal } from "./Reveal";
import { SimpleIcon } from "./SimpleIcon";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-elevated transition-colors hover:border-accent/50">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden bg-background">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            {project.featured && (
              <Badge className="mb-3 border-accent/40 text-accent">Featured</Badge>
            )}
            <Link href={`/projects/${project.slug}`}>
              <h3 className="font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                {project.name}
              </h3>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-3 pt-2">
            {project.liveDemo && (
              <LinkButton
                href={project.liveDemo}
                external
                variant="primary"
                icon={<ExternalLink className="h-4 w-4" />}
                className="flex-1 justify-center"
              >
                Live Demo
              </LinkButton>
            )}
            <LinkButton
              href={project.github}
              external
              variant="secondary"
              icon={<SimpleIcon slug="github" className="h-4 w-4" />}
              className={project.liveDemo ? "flex-1 justify-center" : "w-full justify-center"}
            >
              View Code
            </LinkButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
