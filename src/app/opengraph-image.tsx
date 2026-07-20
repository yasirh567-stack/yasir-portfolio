import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            fontSize: 28,
            color: "#60a5fa",
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#f4f4f5", marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#9aa1ac",
            marginTop: 28,
            maxWidth: 920,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
