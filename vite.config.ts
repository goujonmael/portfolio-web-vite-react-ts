import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
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
