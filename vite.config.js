import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      // Aquí puedes agregar más alias según sea necesario para otras rutas
    },
  },
});
