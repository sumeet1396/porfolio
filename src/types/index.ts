export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  social: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillsData {
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  featured: boolean;
}

export interface ProjectsData {
  projects: Project[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ExperienceData {
  experience: Experience[];
}
