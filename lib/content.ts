/**
 * Single source of truth for all portfolio content.
 * Edit values here to update the site — components read from these exports.
 */

export const site = {
  name: "Ayush Prajapat",
  title: "AI/ML Engineer & Computer Science Student",
  tagline:
    "B.Tech Computer Science (AI) student building AI-powered applications, RAG systems, and full-stack products.",
  bio: "I'm a Computer Science Engineering student specializing in Artificial Intelligence, with hands-on experience building AI-powered applications, RAG systems, and full-stack projects. I'm interested in AI/ML, backend development, and shipping practical software products.",
  location: "India",
  email: "ayushprajapatujjain@gmail.com",
  phone: "+918305211430",
  phoneDisplay: "+91 83052 11430",
  socials: {
    github: "https://github.com/AyushPrajapattt",
    linkedin: "https://www.linkedin.com/in/ayush-prajapat-a5530527a/",
  },
} as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "DocuMind",
    description:
      "A RAG-based document Q&A system for intelligent document search and question answering over your own files.",
    tech: ["Python", "LangChain", "Gemini API", "FAISS", "FastAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/AyushPrajapattt/documind" },
    ],
    featured: true,
  },
  {
    name: "Codesuu",
    description:
      "A coding-focused platform for learning and practicing programming, with a live in-browser code editor and real-time collaboration.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Monaco Editor",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/AyushPrajapattt/codesuu" },
      { label: "Live Demo", href: "https://codesuu.tech/" },
    ],
    featured: true,
  },
  {
    name: "LedgerKB",
    description:
      "A knowledge/documentation-focused open-source project for structured document and knowledge management. Contributor.",
    tech: [
      "Python",
      "SQLite",
      "Pydantic",
      "pytest",
      "FastEmbed",
      "Ruff",
      "mypy",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rajo69/ledgerkb" },
    ],
    featured: true,
  },
  {
    name: "TaskFlow",
    description:
      "A task management application to organize, track, and manage daily tasks efficiently, with auth and real-time updates.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Socket.IO",
      "Docker",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/AyushPrajapattt/taskflow" },
    ],
  },
  {
    name: "COVID-19 Data Analysis",
    description:
      "Data analysis and visualization exploring COVID-19 trends — cases, recoveries, and other pandemic-related statistics across countries.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AyushPrajapattt/covid19-country-analysis",
      },
    ],
  },
  {
    name: "Iris Classification",
    description:
      "A machine learning classification project that predicts Iris flower species from sepal and petal measurements.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AyushPrajapattt/iris-flower-classification",
      },
    ],
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Python", "C", "C++", "JavaScript", "TypeScript"] },
  { category: "AI / ML", items: ["Machine Learning", "Generative AI", "RAG", "LLMs"] },
  {
    category: "Frameworks & Libraries",
    items: ["LangChain", "FastAPI", "React", "Node.js", "Express.js", "Socket.IO"],
  },
  { category: "Data & ML Tools", items: ["Pandas", "NumPy", "Scikit-learn", "FAISS"] },
  { category: "Databases", items: ["PostgreSQL", "SQLite"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux", "REST APIs"] },
];

export type TimelineItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  kind: "education" | "work";
};

export const experience: TimelineItem[] = [
  {
    role: "Open-Source Contributor",
    org: "LedgerKB",
    period: "2026 – Present",
    summary:
      "Contributing documentation and code improvements through GitHub-based open-source workflows.",
    kind: "work",
  },
  {
    role: "B.Tech — Computer Science Engineering (AI)",
    org: "University",
    period: "2023 – 2027",
    summary:
      "Building skills across AI/ML, software engineering, backend development, and applied AI systems.",
    kind: "education",
  },
];

export type Achievement = { title: string; detail: string };

export const achievements: Achievement[] = [
  {
    title: "ROBOFEST 6.0",
    detail: "Participated in the ideation / Phase 1 submission.",
  },
  {
    title: "Open-Source Contribution",
    detail: "Contributed documentation and repository improvements to LedgerKB.",
  },
];

export type Contribution = {
  project: string;
  description: string;
  href: string;
};

export const contributions: Contribution[] = [
  {
    project: "LedgerKB",
    description:
      "Open-source contributor — improved project documentation and made repository improvements via GitHub pull requests.",
    href: "https://github.com/rajo69/ledgerkb",
  },
];
