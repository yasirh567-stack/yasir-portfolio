import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          color: "#60a5fa",
          fontSize: 15,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        {siteConfig.initials}
      </div>
    ),
    size,
  );
}
