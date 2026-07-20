import type { SiteConfig, NavLink } from "./types";

/**
 * Core site identity. Change your deployed URL, socials, or resume path
 * here — every page's metadata and every button on the site reads from
 * this one object.
 */
export const siteConfig: SiteConfig = {
  name: "Yasir Hassan",
  initials: "YH",
  role: "ECE Student @ UT Austin",
  tagline: "ECE student at UT Austin building full-stack and ML products.",
  location: "Austin, TX",
  url: "https://yasirh.com",
  social: {
    github: "https://github.com/yasirh567-stack",
    linkedin: "https://linkedin.com/in/yasir-hassan5612",
    email: "yasirh567@gmail.com",
  },
  // Drop your resume at public/resume.pdf — every "Resume" button links here.
  resumeUrl: "/resume.pdf",
};

/** Sticky navbar links, in display order. The /stats page is intentionally excluded. */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];
