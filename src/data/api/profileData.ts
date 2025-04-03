// @data/api/profileData.ts
import type { Profile } from '@types';
import { profileDataSchema } from '../schemas/profileSchema';
// Importar datos locales para modo offline
import localProfileData from '../profile.json';

const PROFILE_URL = 'https://raw.githubusercontent.com/edwinwmendeze/nrc-23731/refs/heads/main/grupo-a/@data/profiles/EdwinMendez.json';
const TIMEOUT_MS = 8000; // 8 segundos

/**
 * Obtiene los datos del perfil desde GitHub y valida su estructura
 * Implementa manejo de excepciones y timeout para evitar bloqueos
 */
export async function getProfileData(): Promise<Profile> {
  try {
    // Configuración del controlador para manejar timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    // Realizamos la solicitud con el controlador
    const response = await fetch(PROFILE_URL, { 
      signal: controller.signal,
      headers: {
        'Cache-Control': 'no-cache' // Evitamos caché para datos actualizados
      } 
    });
    
    // Limpiamos el timeout una vez recibida la respuesta
    clearTimeout(timeoutId);
    
    // Validamos status code
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status} - ${response.statusText}`);
    }
    
    // Obtenemos y validamos el JSON
    const data = await response.json();
    
    // Validamos la estructura usando Zod
    return profileDataSchema.parse(data);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('La solicitud ha excedido el tiempo de espera. Por favor, inténtalo de nuevo.');
      }
      
      if (error.name === 'SyntaxError') {
        throw new Error('El formato de los datos recibidos no es válido (JSON inválido).');
      }
      
      throw error;
    }
    
    throw new Error('Ha ocurrido un error desconocido al obtener los datos del perfil.');
  }
}

/**
 * Función que implementa fallback para obtener datos del perfil
 * Si falla la obtención remota, usa datos locales para desarrollo sin conexión
 */
export async function getProfileDataWithFallback(): Promise<Profile> {
  try {
    return await getProfileData();
  } catch (error) {
    console.warn('Error obteniendo datos remotos, usando datos locales:', error);
    
    try {
      // Usar datos locales como fallback para desarrollo sin conexión
      return profileDataSchema.parse(localProfileData);
    } catch (localError) {
      console.error('Error validando datos locales, usando fallback mínimo:', localError);
      
      // Datos mínimos de fallback en caso extremo
      return {
        basics: {
          name: "Edwin Wilson",
          last_name: "Méndez Echevarría",
          label: "Desarrollador Backend",
          image: {
            local: "/images/placeholder.png",
            remote: "https://via.placeholder.com/150"
          },
          email: "contacto@ejemplo.com",
          phone: "(000) 000-0000",
          url: "https://ejemplo.com",
          summary: "Información no disponible temporalmente.",
          location: {
            city: "Ciudad",
            countryCode: "XX",
            region: "Región"
          },
          profiles: []
        },
        skills: [],
        education: [],
        projects: []
      };
    }
  }
}