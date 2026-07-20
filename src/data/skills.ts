import type { SkillGroup } from "./types";

/**
 * Skills, grouped into cards on /skills. `icon` is a simple-icons slug
 * (see https://simpleicons.org for the full catalog, or run
 * `node -e "console.log(Object.keys(require('simple-icons')))"`). Leave
 * `icon` off entirely for skills without a brand mark (e.g. SQL, Verilog) —
 * the card falls back to a plain monogram badge.
 */
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cplusplus" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL" },
      { name: "Verilog" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "SQLAlchemy", icon: "sqlalchemy" },
      { name: "OpenGL", icon: "opengl" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "Jira", icon: "jira" },
      { name: "Pytest", icon: "pytest" },
      { name: "Playwright" },
    ],
  },
];
