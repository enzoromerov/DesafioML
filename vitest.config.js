import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilita las variables globales (como window y document)
    environment: 'jsdom', // Configura jsdom como entorno de pruebas
  },
});