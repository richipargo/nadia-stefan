import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nadia-stefan',
  plugins: [react()],
  server: { port: 3000 },
});
