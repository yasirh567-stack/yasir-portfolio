import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { VisitCounter } from "./VisitCounter";
import { SimpleIcon } from "./SimpleIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <SimpleIcon slug="github" className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-muted">
          <VisitCounter />
        </p>
      </Container>
    </footer>
  );
}
