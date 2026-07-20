import type { EducationInfo, LeadershipRole } from "./types";

export const education: EducationInfo = {
  school: "The University of Texas at Austin",
  degree: "B.S. Electrical and Computer Engineering",
  location: "Austin, TX",
  graduation: "May 2027",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Digital Logic Design",
    "Discrete Mathematics",
    "Probability",
    "Computer Architecture",
  ],
};

/** Shown as a subsection of /education, most recent first. Add more roles to this array as needed. */
export const leadership: LeadershipRole[] = [
  {
    organization: "Gamma Beta Fraternity",
    role: "Program Educator",
    startDate: "Jan 2026",
    endDate: "May 2026",
    bullets: [
      "Initiated recruitment efforts that produced the fraternity's largest spring pledge class in over 10 years.",
    ],
  },
  {
    organization: "IEEE",
    role: "Vice President of Internal Services",
    startDate: "Aug 2024",
    endDate: "May 2026",
    bullets: [
      "Organized general meetings and a range of member events, coordinating logistics and outreach across the organization.",
    ],
  },
  {
    organization: "Gamma Beta Fraternity",
    role: "Vice President of Service",
    startDate: "Jan 2024",
    endDate: "May 2026",
    bullets: [
      "Planned and led community service initiatives, coordinating logistics, outreach, and post-event feedback to improve future programming.",
      "Built a semester-long service roadmap and used member input to prioritize high-impact events and grow participation.",
    ],
  },
];
