import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://squidlane.com',
  compressHTML: true,
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
      },
    },
  },
});
