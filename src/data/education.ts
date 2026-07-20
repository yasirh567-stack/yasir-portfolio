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
      "Led recruitment programming that resulted in the fraternity's largest spring pledge class in more than 10 years.",
      "Organized educational sessions, team-building activities, and leadership development opportunities for new members.",
      "Mentored participants throughout the program while tracking progress and promoting accountability, engagement, and fraternity values.",
    ],
  },
  {
    organization: "IEEE",
    role: "Vice President of Internal Services",
    startDate: "Aug 2024",
    endDate: "May 2026",
    bullets: [
      "Organized general meetings, professional development programs, and member events for the student organization.",
      "Coordinated event logistics, scheduling, communications, and outreach across executive board members and committees.",
      "Improved member engagement by gathering feedback and helping develop programming aligned with members' academic and career interests.",
    ],
  },
  {
    organization: "Gamma Beta Fraternity",
    role: "Vice President of Service",
    startDate: "Jan 2024",
    endDate: "May 2026",
    bullets: [
      "Planned and led community service initiatives by coordinating volunteers, event logistics, outreach, and partnerships.",
      "Developed a semester-long service roadmap that prioritized high-impact events and increased member participation.",
      "Collected member and participant feedback after events to evaluate outcomes and improve future service programming.",
    ],
  },
];
