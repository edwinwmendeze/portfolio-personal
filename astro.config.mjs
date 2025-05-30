import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://edwinwmendeze.github.io',
  base: '/portfolio-personal',
  output: 'static',

  build: {
    assets: '_assets'
  },

  vite: {
    ssr: {
      // Soluciona problemas con módulos que dependen de APIs de navegador
      noExternal: ['@astrojs/prism']
    },
    // Optimizaciones para mejorar el rendimiento
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      assetsInlineLimit: 4096
    }
  },
});