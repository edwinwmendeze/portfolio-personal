// @data/api/profileData.ts
import type { Profile } from '@types';
import { profileDataSchema } from '../schemas/profileSchema';
// Importar datos locales 
import localProfileData from '../profile.json';

/**
 * Obtiene los datos del perfil desde el archivo local
 */
export async function getProfileData(): Promise<Profile> {
  try {
    // Validamos la estructura usando Zod
    return profileDataSchema.parse(localProfileData);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Ha ocurrido un error al validar los datos del perfil.');
  }
}

/**
 * Función que implementa fallback para obtener datos del perfil
 * Esta función ahora simplemente llama a getProfileData, pero mantenemos
 * la estructura para compatibilidad con el código existente
 */
export async function getProfileDataWithFallback(): Promise<Profile> {
  try {
    return await getProfileData();
  } catch (error) {
    console.error('Error obteniendo datos del perfil:', error);
    
    // Datos mínimos de fallback en caso extremo
    return {
      basics: {
        name: "Edwin Wilson",
        last_name: "Méndez Echevarría",
        occupation: "Analista de datos",
        image: {
          remote: "https://github.com/edwinwmendez.png"
        },
        email: "45088035@continental.edu.pe",
        phone: "(51) 948-924-822",
        url: "https://edwinwmendez.github.io/portfolio-personal/",
        summary: "Analista de datos con experiencia en Python y automatización.",
        location: {
          city: "Atalaya",
          countryCode: "PE",
          region: "Ucayali"
        },
        profiles: []
      },
      skills: [],
      education: [],
      projects: []
    };
  }
}