/// <reference types="astro/client" />

// Declaración para JSX IntrinsicElements
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 