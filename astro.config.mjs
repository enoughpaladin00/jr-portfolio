import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://jr-portoflio-ivory.vercel.app',
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});