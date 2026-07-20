import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder project screenshots ship as local SVGs until real
    // screenshots are dropped into public/projects/. Safe because these
    // are static files we author ourselves, not user-uploaded content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
