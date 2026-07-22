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
      "Contributed to a network traffic anomaly detection initiative, developing and evaluating models that flagged unusual patterns in large-scale diagnostic log data.",
      "Engineered features and built data-processing pipelines that transformed raw network telemetry into structured inputs for model training and validation.",
      "Analyzed network telemetry to distinguish routine traffic fluctuations from potentially critical service issues, improving detection accuracy.",
      "Investigated high-traffic network points and recurring failure patterns, helping engineering teams prioritize infrastructure fixes.",
      "Built conversational AI and agent-assist tooling that helped support representatives resolve customer issues faster, contributing to a 54% reduction in average resolution time.",
      "Integrated AI-generated troubleshooting recommendations into internal support workflows and validated responses against common customer scenarios to improve accuracy and consistency.",
      "Partnered with network architects, engineers, and diagnostics teams to translate operational problems into scalable software solutions, documenting findings for technical and non-technical stakeholders.",
    ],
  },
  {
    company: "Aristocrat Leisure",
    title: "Software Engineer Intern",
    startDate: "Jan 2024",
    endDate: "May 2024",
    location: "Austin, TX",
    bullets: [
      "Built a GPU usage monitoring tool in C++ and OpenGL that surfaced real-time rendering performance — GPU utilization, frame-processing activity, and resource usage — across different hardware configurations.",
      "Designed visualization components that made low-level graphics performance data easier for engineers to interpret and act on.",
      "Investigated CPU-GPU performance bottlenecks and shipped optimizations that improved frame rate and reduced memory usage.",
      "Added performance logging that recorded metrics per hardware configuration, giving the team a repeatable way to compare setups and catch regressions over time.",
      "Debugged rendering, resource-utilization, and hardware-compatibility issues surfaced by the tool, verifying fixes across multiple system configurations.",
      "Wrote maintainable, reusable C++ components to support future performance-monitoring features, refined through code review and iterative testing with the engineering team.",
      "Used Git and GitHub for version control and collaborative development, and documented the tool's functionality, setup, and metrics for the team.",
    ],
  },
  {
    company: "Preptify",
    title: "Software Engineer Intern",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    location: "Austin, TX",
    bullets: [
      "Built the frontend of an early-stage mock interview platform for software and electrical engineering candidates using HTML, CSS, and JavaScript.",
      "Built responsive, reusable UI components for interview navigation, question flow, and candidate feedback, optimized across screen sizes and browsers.",
      "Translated product requirements and design concepts into functional, user-friendly interfaces, implementing client-side logic for interactive prep features.",
      "Tested and debugged frontend components to resolve usability and styling issues ahead of launch.",
      "Collaborated directly with the founding team to prioritize features based on user feedback in a fast-moving startup environment.",
      "Contributed to a 25% increase in users trying the product following the release of the updated platform.",
    ],
  },
  {
    company: "Chittagong Online Limited",
    title: "Software Engineer Intern",
    startDate: "May 2023",
    endDate: "Aug 2023",
    location: "Chittagong, Bangladesh",
    bullets: [
      "Contributed to an online customer portal that let users view account information, monitor Wi-Fi data usage, and manage internet services.",
      "Built and improved payment features that enabled customers to securely pay internet bills online.",
      "Developed responsive UI components to make the portal accessible across desktop and mobile devices.",
      "Collaborated with the engineering team to test, debug, and improve the platform's reliability and usability.",
    ],
  },
  {
    company: "Cockrell School of Engineering",
    title: "Engineering Student Associate",
    startDate: "Sep 2022",
    endDate: "May 2023",
    location: "Austin, TX",
    bullets: [
      "Planned and led hands-on engineering activities for K–12 students to build interest in STEM education and careers.",
      "Designed age-appropriate workshops covering engineering design, problem-solving, circuits, and core technology concepts.",
      "Guided students through interactive projects, explaining technical ideas in an engaging and accessible way.",
      "Coordinated with faculty, staff, and fellow student associates to organize materials, schedules, and outreach events.",
    ],
  },
];
