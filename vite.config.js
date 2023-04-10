import { defineConfig } from 'vite';

const config = defineConfig({
  output: {
    path: __dirname + '/dist',
  },
  build: {
    emptyOutDir: true
  }
});

export default config;