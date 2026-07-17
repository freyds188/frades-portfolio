import type { StaticImageData } from "next/image";

import pesoDashboard from "@/data/image/peso-image/dashboard.png";
import pesoFrontpage from "@/data/image/peso-image/frontpage.png";
import pesoTimeTracker from "@/data/image/peso-image/time-tracker.png";

export type Project = {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  thumbnail: string | StaticImageData;
  screenshots: Array<string | StaticImageData>;
  githubUrl?: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  privateProject?: boolean;
  showScreenshots?: boolean;
};

export const profile = {
  name: "Aldrin Frades",
  title: "Mobile App Developer | Web Developer | Fresh Graduate",
  intro:
    "Fresh graduate building reliable backend systems, web and mobile applications, and practical software that solves real problems.",
  email: "fradesaldrin18@gmail.com",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/freyds188",
  linkedin: "https://www.linkedin.com/in/frades-aldrin-5301b73b6/"
};

export const skills = {
  "Programming Languages": ["TypeScript", "JavaScript", "PHP", "Dart", "Java"],
  Backend: ["Node.js", "Express.js", "Laravel", "REST APIs", "Firebase"],
  "Mobile Development": ["Flutter", "React Native", "Expo", "Mobile UI"],
  Databases: ["MySQL", "MongoDB"],
  Tools: ["VS Code", "Postman", "Vercel", "Figma", "TensorFlow"],
  "Version Control": ["Git", "GitHub"]
};

export const projects: Project[] = [
  {
    title: "PESO Attendance Tracking System",
    description:
      "A web-based tracking system that manages interns, employment records, and reporting workflows for PESO operations.",
    role: "Full-stack Developer",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    thumbnail: pesoFrontpage,
    screenshots: [pesoFrontpage, pesoDashboard, pesoTimeTracker],
    githubUrl: "https://github.com/itsmemarkmalvar/peso-frontend",
    showScreenshots: true
  },  
  {
    title: "AI-Based Health Access for Rural Communities",
    description:
      "A mobile app that helps rural communities monitor health by collecting symptoms through a chatbot and identifying health patterns using AI, focused on awareness rather than diagnosis.",
    role: "Mobile & Backend Developer",
    technologies: [
      "React Native (Expo)",
      "Python",
      "SQLite",
      "NLP",
      "K-Means Clustering"
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
    ],
    demoVideoUrl: "/videos/ai-health-system-demo.mp4",
    privateProject: true,
    showScreenshots: false
  }
];

export const experiences = [
  {
    label: "Internship",
    title: "Software Developer Intern",
    period: "2026",
    description:
      "Supported web application development, database updates, testing, and documentation for internal systems."
  },
  {
    label: "Academic Projects",
    title: "Capstone and Coursework Developer",
    period: "2024 - 2025",
    description:
      "Delivered backend, database, and mobile/web features across school projects using modern development workflows."
  }
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "University of Cabuyao",
  graduationYear: "2026"
};

export const certificates = [
  {
    name: "Python Essentials Certificate",
    issuer: "Cisco Networking Academy",
    year: "2026"
  },
  {
    name: "Google Analytics",
    issuer: "Google",
    year: "2026"
  },
  {
    name: "Google AI-Powered Ads Certificate",
    issuer: "Google",
    year: "2026"
  }
];
