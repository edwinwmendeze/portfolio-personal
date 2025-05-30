import { z } from 'zod';

// Esquema para validar la estructura de los datos del perfil
const imageSourceSchema = z.object({
  remote: z.string(),
  local: z.string().optional()
});

const locationSchema = z.object({
  city: z.string(),
  countryCode: z.string(),
  region: z.string()
});

const profileSchema = z.object({
  network: z.string(),
  username: z.string(),
  url: z.string().url()
});

const basicsSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  occupation: z.string(),
  image: imageSourceSchema,
  email: z.string().email(),
  phone: z.string(),
  url: z.string().url(),
  summary: z.string(),
  location: locationSchema,
  profiles: z.array(profileSchema)
});

const skillSchema = z.object({
  name: z.string(),
  keywords: z.array(z.string()),
  type: z.enum(['hard', 'soft'])
});

const educationSchema = z.object({
  institution: z.string(),
  area: z.string(),
  studyType: z.string(),
  startDate: z.string(),
  endDate: z.string().optional().default("")
});

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
  url: z.string().url(),
  featured: z.boolean(),
  technologies: z.array(z.string())
});

export const profileDataSchema = z.object({
  basics: basicsSchema,
  skills: z.array(skillSchema),
  education: z.array(educationSchema),
  projects: z.array(projectSchema)
});