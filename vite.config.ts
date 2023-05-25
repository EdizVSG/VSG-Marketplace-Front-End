import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name].js',
        entryFileNames: '[name].js',
      }
    }
  },
  plugins: [react()],
});