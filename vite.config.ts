
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.pieterohearn.com',
      dynamicRoutes: ['/', '/Pieter-OHearn-CV.pdf'],
      extensions: ['html', 'pdf'],
      priority: {
        '*': 1.0,
        '/Pieter-OHearn-CV.pdf': 0.6,
      },
      changefreq: {
        '*': 'monthly',
      },
      readable: true,
      generateRobotsTxt: true,
      robots: [{ userAgent: '*', allow: '/' }],
      outDir: 'build',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
