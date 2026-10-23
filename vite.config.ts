import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let prerender: any = undefined;
// Enable the prerender plugin only when explicitly requested via env var.
// This avoids Puppeteer/Chromium runtime issues on minimal dev environments.
if (process.env.PRERENDER === '1') {
  try {
    // load with createRequire to avoid ESM `require is not defined` issues
    prerender = require('vite-plugin-prerender').default || require('vite-plugin-prerender');
  } catch (e: unknown) {
    const msg = e && typeof e === 'object' && 'message' in e ? (e as any).message : String(e);
    // eslint-disable-next-line no-console
    console.warn('vite-plugin-prerender not available (PRERENDER=1 requested):', msg);
  }
}

export default defineConfig({
  plugins: [
    react(),
    ...(prerender ? [
      prerender({
        staticDir: resolve(__dirname, 'dist'),
        routes: ['/', '/competences', '/scolarite', '/cybersecurity'],
        renderer: new (prerender as any).PuppeteerRenderer({
          // Attendre que React ait monté le contenu de la route avant de capturer.
          // .container est vide tant que le <Suspense> (fallback null) n'a pas résolu,
          // donc son premier enfant n'existe qu'une fois le contenu lazy monté.
          renderAfterElementExists: '.container > *',
        }),
        // Pendant le rendu Puppeteer, /js/load-fonts.js bascule la feuille de
        // polices en media="all" (render-blocking) au DOMContentLoaded. Comme la
        // capture a lieu APRÈS, on rétablit media="print" pour que le HTML
        // pré-rendu servi aux utilisateurs garde des polices non bloquantes.
        postProcess(renderedRoute: { html: string }) {
          renderedRoute.html = renderedRoute.html.replace(
            /(<link id="font-css"[^>]*?media=")all(")/g,
            '$1print$2',
          );
          return renderedRoute;
        },
      })
    ] : []),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://tryhackme.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v2/public-profile?username=GoGoGadg3t'),
      },
      '/certificates': {
        target: 'https://tryhackme.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/certificates/, '/api/v2/certificates/public-list?page=1&limit=10&sort=Newest&username=GoGoGadg3t'),
      },
    },
  },
});