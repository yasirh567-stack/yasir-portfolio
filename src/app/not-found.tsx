import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-28">
      <Container className="text-center">
        <p className="font-heading text-7xl font-semibold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <LinkButton href="/" icon={<ArrowLeft className="h-4 w-4" />}>
            Back home
          </LinkButton>
        </div>
      </Container>
    </div>
  );
}
