# Informe Técnico: Portfolio Personal

Este informe detalla la implementación técnica del portafolio personal, enfocado en los principios de desarrollo solicitados.

## 1. Centralización de Tipos e Interfaces

### Implementación

Hemos centralizado todas las definiciones de tipos e interfaces en la carpeta `src/types/`, con dos archivos principales:

- `profile.types.ts`: Define la estructura de datos del perfil profesional
- `component.types.ts`: Define las props para los componentes
- `index.ts`: Exporta todo de manera centralizada

### Ventajas obtenidas

- **Coherencia de datos**: Todos los componentes utilizan exactamente las mismas definiciones de tipos
- **Mantenibilidad mejorada**: Las modificaciones en la estructura de datos se hacen en un solo lugar
- **Autocompletado y validación**: TypeScript puede ofrecer sugerencias precisas durante el desarrollo
- **Documentación implícita**: Los tipos sirven como documentación de la estructura de datos

### Ejemplo práctico

```typescript
// En src/types/profile.types.ts (centralización)
export interface Skill {
  name: string;
  keywords: string[];
  type: 'hard' | 'soft';
}

// En src/components/profile/SkillsList.astro (uso)
import type { Skill } from '@types';

interface Props {
  skills: Skill[];
  title?: string;
}