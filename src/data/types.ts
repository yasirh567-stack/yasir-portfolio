export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  /** Canonical deployed URL, used for metadataBase, sitemap, and OG tags. */
  url: string;
  social: SocialLinks;
  /** Path under /public that the "Resume" buttons link to. */
  resumeUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  /** Optional — omit rather than guess; the timeline hides the line if unset. */
  location?: string;
  bullets: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  featured?: boolean;
  /** One-line summary shown on cards and the home teaser. */
  summary: string;
  /** Longer write-up shown on the project detail page. */
  description: string;
  tech: string[];
  github: string;
  /** Omit entirely if there's no live demo yet — the UI adapts. */
  liveDemo?: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
}

export interface SkillItem {
  name: string;
  /** simple-icons slug, e.g. "python", "react" — see https://simpleicons.org */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface EducationInfo {
  school: string;
  degree: string;
  location: string;
  graduation: string;
  coursework: string[];
}

export interface LeadershipRole {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}
