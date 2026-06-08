export interface Skill {
  name: string;
  category: "mobile" | "language" | "backend" | "architecture" | "tool";
  level: number; // 0-100 indicating confidence/experience
  years: number;
  featured: boolean;
  details: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  periodArabic?: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  client?: string;
  description: string;
  detailedPoints: string[];
  impactMetrics?: string[];
  technologies: string[];
  category: "Android" | "KMP" | "Backend" | "Hackathon";
  demoUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo: string;
  topics: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface HackathonAward {
  event: string;
  award: string;
  year: string;
  description: string;
  projectBuilt: string;
}
