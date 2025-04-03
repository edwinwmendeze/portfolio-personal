# Portfolio Personal

Portfolio minimalista desarrollado con Astro, optimizado para visualización web e impresión.

## Características

- Diseño minimalista con fuente Meslo
- Integración con datos desde GitHub
- Versión optimizada para impresión
- Implementa principios de:
  - Centralización de tipos e interfaces
  - Principio de Responsabilidad Única (SRP)
  - Manejo de excepciones y fallbacks
  - Refactorización de estilos CSS

## Estructura del Proyecto

portfolio-personal/
│
├── .github/                        # Configuración de GitHub (workflows, etc.)
│
├── public/                         # Archivos estáticos
│   ├── images/                     # Imágenes del proyecto
│   └── favicon.ico
│
├── src/
│   ├── components/                 # Componentes reutilizables
│   │   ├── ui/                     # Componentes de interfaz básicos
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── ...
│   │   ├── layout/                 # Componentes de estructura
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── ...
│   │   ├── profile/                # Componentes específicos del perfil
│   │   │   ├── ProfileHeader.astro
│   │   │   ├── SkillsList.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── ...
│   │   └── common/                 # Componentes comunes
│   │       ├── SocialLinks.astro
│   │       └── ErrorBoundary.astro
│   │
│   ├── layouts/                    # Plantillas de página
│   │   ├── MainLayout.astro
│   │   └── PrintLayout.astro       # Layout especial para versión imprimible
│   │
│   ├── pages/                      # Páginas de la aplicación
│   │   ├── index.astro             # Página principal
│   │   ├── projects/
│   │   │   ├── index.astro         # Lista de proyectos
│   │   │   └── [slug].astro        # Página de detalle de proyecto
│   │   ├── resume.astro            # Versión de CV/resume
│   │   └── 404.astro               # Página de error 404
│   │
│   ├── data/                       # Capa de datos
│   │   ├── api/                    # Funciones para obtener datos
│   │   │   └── profileData.ts      # Función para obtener datos del perfil
│   │   └── schemas/                # Validación de esquemas
│   │       └── profileSchema.ts    
│   │
│   ├── types/                      # Centralización de tipos e interfaces
│   │   ├── profile.types.ts        # Tipos para datos de perfil
│   │   └── index.ts                # Exportaciones centralizadas
│   │
│   ├── utils/                      # Utilidades
│   │   ├── formatters.ts           # Formateo de fechas, texto, etc.
│   │   └── errorHandling.ts        # Manejo centralizado de errores
│   │
│   ├── hooks/                      # Hooks personalizados (si usas frameworks)
│   │   └── useFetchData.ts         # Hook para obtener datos con manejo de errores
│   │
│   └── styles/                     # Estilos globales
│       ├── global.css              # Estilos globales
│       ├── print.css               # Estilos específicos para impresión
│       ├── variables.css           # Variables CSS (colores, espaciados, etc.)
│       └── utils.css               # Clases de utilidad
│
├── astro.config.mjs                # Configuración de Astro
├── tsconfig.json                   # Configuración de TypeScript
├── package.json                    # Dependencias del proyecto
├── README.md                       # Documentación del proyecto
└── INFORME-TECNICO.md              # Informe técnico solicitado

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build