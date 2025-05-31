// Tipos para información básica
export interface Image {
  local?: string;
  remote: string;
}

export interface Location {
  city: string;
  countryCode: string;
  region: string;
}

export interface SocialProfile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  last_name: string;
  occupation: string;
  image: Image;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: SocialProfile[];
}

// Tipos para habilidades
export interface Skill {
  name: string;
  keywords: string[];
  type: 'hard' | 'soft';
}

// Tipos para educación
export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

// Tipos para proyectos
export interface Project {
  name: string;
  description: string;
  highlights: string[];
  url: string;
  featured: boolean;
  technologies: string[];
  isNew?: boolean;
}

// Perfil completo
export interface Profile {
  basics: Basics;
  skills: Skill[];
  education: Education[];
  projects: Project[];
}