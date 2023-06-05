import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  root: 'src',
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
