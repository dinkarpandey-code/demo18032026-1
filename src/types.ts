export interface Bio {
  name: string;
  title: string;
  photo: string;
  summary: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  bio: Bio;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
