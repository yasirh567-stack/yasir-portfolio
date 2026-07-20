import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const name = project?.name ?? "Project";
  const summary = project?.summary ?? siteConfig.tagline;
  const tech = project?.tech.slice(0, 4) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0c",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#60a5fa",
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name} &middot; Project
        </div>
        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, color: "#f4f4f5", marginTop: 24 }}>
          {name}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9aa1ac", marginTop: 24, maxWidth: 940 }}>
          {summary}
        </div>
        {tech.length > 0 && (
          <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
            {tech.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 22,
                  padding: "8px 22px",
                  border: "1px solid #24242b",
                  borderRadius: 999,
                  color: "#9aa1ac",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    size,
  );
}
