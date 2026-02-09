import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/New-AlphaPages-bolt/',
  build: {
  outDir: 'docs',
  },
  optimizeDeps: {
      exclude: ['lucide-react'],
    },
  });
