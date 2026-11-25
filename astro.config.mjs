// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL e BASE_PATH permitem o mesmo código servir dois destinos:
// - Docker/EasyPanel: https://dev.anselmotech.online/ (padrão)
// - GitHub Pages:     https://anselmoaxo.github.io/portifolio/
const site = process.env.SITE_URL ?? 'https://dev.anselmotech.online';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'pt',
      locales: { pt: 'pt-BR', en: 'en', es: 'es' },
    },
  })],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
