import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilita variables globales (como 'window') en el entorno de pruebas
    environment: 'jsdom',
    deps: {
      registerNodeLoader: true, // Habilita la carga de módulos CommonJS
    }, // Utiliza jsdom para simular el entorno del navegador
  },
});