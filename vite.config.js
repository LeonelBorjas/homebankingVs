import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layouts': './layouts/Layout', // Ajusta esta ruta según la estructura de tu proyecto
    },
  },
});
