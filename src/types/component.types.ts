import type { Basics, SocialProfile } from './profile.types';

// Interfaces para Props de componentes UI
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  ariaLabel?: string;
  download?: boolean | string;
  id?: string;
  [key: string]: any; // Para permitir atributos data-* y otros atributos HTML
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'border';
  class?: string;
  id?: string;
}

export interface TagProps {
  text: string;
  variant?: 'default' | 'primary' | 'outline';
  size?: 'small' | 'medium';
  class?: string;
}

// Interfaces para Props de componentes comunes
export interface ErrorBoundaryProps {
  fallback?: string;
}

export interface SocialLinksProps {
  profiles: SocialProfile[];
  variant?: 'default' | 'minimal' | 'header';
  class?: string;
}

// Interfaces para Props de layouts
export interface LayoutProps {
  title?: string;
  description?: string;
  // Añadimos la opción de pasar datos del perfil
  profileData?: {
    basics: Basics;
  };
}