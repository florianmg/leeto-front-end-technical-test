import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['.tests/setup.ts'],
  },
});
