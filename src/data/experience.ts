import type { ExperienceEntry } from "./types";

/**
 * Work experience, most recent first. Each entry renders as one card on
 * /experience. Add a new role by adding a new object to this array —
 * no component changes needed.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "Spectrum",
    title: "Software Engineer Intern",
    startDate: "May 2025",
    endDate: "Aug 2025",
    location: "Austin, TX",
    bullets: [
      "Contributed to a network traffic anomaly detection effort, helping build and evaluate models that flagged unusual patterns in log data for the diagnostics team.",
      "Worked on conversational AI and agent-assist tooling that helped support representatives resolve customer issues faster, contributing to a 54% reduction in average resolution time.",
    ],
  },
  {
    company: "Aristocrat Leisure",
    title: "Software Engineer Intern",
    startDate: "Jan 2024",
    endDate: "May 2024",
    location: "Austin, TX",
    bullets: [
      "Built a GPU usage monitoring tool in C++ and OpenGL that surfaced rendering performance across different hardware configurations, giving users visibility into system behavior.",
      "Collaborated with the engineering team using Git and GitHub to debug and refine the tool.",
    ],
  },
  {
    company: "Preptify",
    title: "Software Engineer Intern",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    location: "Austin, TX",
    bullets: [
      "Built the frontend of an early-stage mock interview platform for software and electrical engineering candidates using HTML, CSS, and JavaScript, contributing to a 25% increase in users trying the product after launch.",
    ],
  },
];
