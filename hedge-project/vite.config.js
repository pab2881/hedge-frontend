import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the entry point
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});
