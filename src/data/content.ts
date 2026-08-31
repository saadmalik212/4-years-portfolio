export const SITE = {
  name: "Saad",
  fullName: "Saad",
  role: "Software Engineer",
  focus: "Website Development",
  tagline: "Full Stack Software Engineer",
  years: 4,
  email: "muhammadsaad16321@gmail.com",
  phone: "+92 (300) 1234567",
  location: "Lahore, Pakistan",
  social: {
    github: "https://github.com/saadmalik212",
    linkedin: "https://www.linkedin.com/in/muhammad-saad-743bb4237/",
    upwork: "https://upwork.com/",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "Python", level: 90 },
  { name: "Node.js", level: 92 },
  { name: "AWS", level: 85 },
  { name: "Next.js", level: 95 },
  { name: "React.js", level: 93 },
  { name: "Tailwind CSS", level: 96 },
  { name: "SaaS", level: 88 },
  { name: "Firebase", level: 85 },
  { name: "REST / GraphQL", level: 90 },
];

export const EXPERIENCE = [
  {
    period: "2023 — Present",
    company: "Nimbus Digital",
    title: "Senior Software Engineer",
  },
  {
    period: "2022 — 2023",
    company: "Bytework Studio",
    title: "Full Stack Developer",
  },
  {
    period: "2021 — 2022",
    company: "Codeloom Labs",
    title: "Frontend Engineer (React)",
  },
  {
    period: "2020 — 2021",
    company: "Freelance",
    title: "Website Developer",
  },
];

export const SERVICES = [
  {
    id: "01",
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with Next.js, React and Node.js — from database schema to pixel-perfect UI, engineered to scale.",
  },
  {
    id: "02",
    title: "Third-Party API Integration",
    description:
      "Connecting your product to payment gateways, CRMs, analytics and any external service with clean, well-documented integrations.",
  },
  {
    id: "03",
    title: "AI API Integration",
    description:
      "Wiring up Google Gemini, Claude and OpenAI APIs to add intelligent search, chat, content generation and automation to your product.",
  },
  {
    id: "04",
    title: "Cloud & Deployment (AWS)",
    description:
      "Provisioning, deploying and scaling infrastructure on AWS with CI/CD pipelines that ship confidently and often.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "Finlytics — SaaS Dashboard",
    category: "Web App",
    description:
      "A subscription analytics platform for SaaS founders, built with Next.js, GraphQL and Stripe. Real-time MRR, churn and cohort charts.",
    tags: ["Next.js", "GraphQL", "Tailwind"],
    image: "linear-gradient(135deg,#5B3DF5 0%,#2E1EA8 100%)",
    accent: "#5B3DF5",
    link: "https://example.com/projects/finlytics",
  },
  {
    id: "proj-02",
    title: "Autofix — Service Booking",
    category: "Full Stack",
    description:
      "An auto-repair booking platform with live technician tracking, built on React, Node.js and Firebase with REST APIs.",
    tags: ["React", "Node.js", "Firebase"],
    image: "linear-gradient(135deg,#F5B942 0%,#C97A1A 100%)",
    accent: "#F5B942",
    link: "https://example.com/projects/autofix",
  },
  {
    id: "proj-03",
    title: "Loop — AI Content Studio",
    category: "AI Integration",
    description:
      "A content generation suite wired to the Claude and OpenAI APIs, letting teams draft, refine and publish copy in one workspace.",
    tags: ["Claude API", "OpenAI API", "Next.js"],
    image: "linear-gradient(135deg,#22C55E 0%,#0F5132 100%)",
    accent: "#22C55E",
    link: "https://example.com/projects/loop",
  },
  {
    id: "proj-04",
    title: "Marketplace — Multi-vendor Store",
    category: "E-commerce",
    description:
      "A multi-vendor storefront with vendor dashboards, GraphQL APIs and AWS-hosted media pipelines for fast product imagery.",
    tags: ["AWS", "GraphQL", "React"],
    image: "linear-gradient(135deg,#EC4899 0%,#831843 100%)",
    accent: "#EC4899",
    link: "https://example.com/projects/marketplace",
  },
  {
    id: "proj-05",
    title: "Pulse — Realtime Chat SaaS",
    category: "SaaS",
    description:
      "A white-labelled chat and support widget for SaaS teams, powered by Node.js websockets and a Firebase realtime backend.",
    tags: ["Node.js", "Firebase", "SaaS"],
    image: "linear-gradient(135deg,#38BDF8 0%,#0B4A6F 100%)",
    accent: "#38BDF8",
    link: "https://example.com/projects/pulse",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Saad shipped our dashboard ahead of schedule and kept the codebase spotless. Every request was handled fast, with clear communication throughout.",
    name: "Enrique Herbella",
    role: "Founder, Finlytics",
  },
  {
    quote:
      "Working with Saad felt like having a senior engineer on staff. He integrated three external APIs in a week without a single production hiccup.",
    name: "Amelia Grant",
    role: "Product Lead, Autofix",
  },
  {
    quote:
      "Clear, fast, and genuinely invested in the product. Saad's Next.js builds are some of the cleanest I've reviewed.",
    name: "Daniyal Raza",
    role: "CTO, Loop AI",
  },
];
