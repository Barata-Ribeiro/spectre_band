import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  root: 'src',
  base: '/spectre_band/',
  build: {
    outDir: '../dist',
  },
  plugins: [
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js'],
    }),
  ],
});
