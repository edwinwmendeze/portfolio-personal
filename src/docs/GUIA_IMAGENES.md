# Guía para Añadir Imágenes a Proyectos

Este documento explica cómo añadir imágenes para tus proyectos en tu portfolio personal.

## Estructura de Archivos

Las imágenes de proyectos deben colocarse en la siguiente carpeta:

```cmd
public/images/projects/
```

## Convención de Nombres

Para que el componente `ProjectCard.astro` encuentre automáticamente las imágenes de tus proyectos, debes seguir esta convención de nombres:

1. Toma el nombre del proyecto exactamente como aparece en tu archivo `profile.json`.
2. Convierte el nombre a minúsculas.
3. Reemplaza todos los espacios con guiones (`-`).
4. Usa la extensión `.jpg`.

Por ejemplo:

| Nombre del Proyecto en profile.json | Nombre del Archivo de Imagen |
|-------------------------------------|------------------------------|
| "Sistema de Automatización SUP"     | `sistema-de-automatización-sup.jpg` |
| "Te Comparto"                       | `te-comparto.jpg` |
| "Herramientas SUP"                  | `herramientas-sup.jpg` |

## Tamaño y Formato Recomendados

Para obtener mejores resultados:

- **Dimensiones**: 800x450 píxeles (relación de aspecto 16:9)
- **Formato**: JPG para fotos, PNG para capturas de pantalla con áreas de color plano
- **Tamaño de archivo**: Optimiza tus imágenes para que pesen menos de 200 KB

## Imagen de Respaldo

Si una imagen específica no se encuentra, el sistema mostrará automáticamente una imagen de respaldo genérica.

## Ejemplo de Cómo Añadir una Imagen

1. Prepara una captura de pantalla o imagen de tu proyecto.
2. Redimensiona la imagen a 800x450 píxeles.
3. Guarda la imagen siguiendo la convención de nombres.
4. Coloca el archivo en la carpeta `public/images/projects/`.

Por ejemplo, para el proyecto "Sistema de Automatización SUP":

```bash
# Asumiendo que estás en la raíz del proyecto
mkdir -p public/images/projects
cp ruta/a/tu/imagen.jpg public/images/projects/sistema-de-automatización-sup.jpg
```

## Consejos para Buenas Capturas de Pantalla

- Captura la interfaz principal o característica más destacada de tu proyecto.
- Asegúrate de que el texto sea legible.
- Evita información sensible o datos personales.
- Usa una resolución clara sin pixelación.
- Considera mostrar el proyecto en uso con datos de ejemplo.

---

Con estas instrucciones, tus proyectos tendrán una representación visual atractiva en tu portfolio.
