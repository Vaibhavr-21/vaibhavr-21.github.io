export interface Project {
  name: string;
  duration?: string;
  role?: string;
  description?: string;
  responsibilities: string[];
}

export interface Job {
  id: string;
  company: string;
  designation: string;
  duration: string;
  summary?: string;
  projects: Project[];
}

export interface EducationItem {
  course: string;
  institution: string;
  university: string;
  year: string;
  percentage: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  languages: string[];
}