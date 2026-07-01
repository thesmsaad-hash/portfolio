import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://smsaad.online',
  server: { host: true },

  integrations: [tailwind({
    applyBaseStyles: false,
  }), sitemap()],

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },

  adapter: cloudflare(),
});