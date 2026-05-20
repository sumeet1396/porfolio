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
  skills: string[];
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
