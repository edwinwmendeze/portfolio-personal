/**
 * Utilidad para generar rutas basadas en la configuración base de la aplicación
 */

/**
 * Obtiene una ruta completa con el base path configurado en Astro
 * @param path Ruta relativa (sin / inicial)
 * @returns La ruta completa con el base path correctamente formateado
 */
export function getPath(path: string = ''): string {
    // Usamos casting para evitar errores de TypeScript
    const baseUrl = (import.meta as any).env.BASE_URL || '/';
    
    // Asegurarse de que la base URL tenga una barra al final
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
      
    // Eliminar barras iniciales del path para evitar dobles barras
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Construir y retornar la ruta completa
    return `${base}${cleanPath}`;
  }