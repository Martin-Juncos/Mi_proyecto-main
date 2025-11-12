// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // *** PARTE CRÍTICA PARA EL FIX ***
  root: path.resolve(__dirname, '..'), // Establece la raíz en el directorio superior (Trabajo Final)
  
  build: {
    // Si la raíz es 'Trabajo Final', el punto de entrada es 'backend/public/index.html'
    rollupOptions: {
      input: path.resolve(__dirname, '..', 'backend', 'public', 'index.html')
    }
  },
  
  server: {
    // Esto es fundamental: le dice a Vite dónde encontrar la página que va a servir.
    // En este caso, la ruta a index.html desde la raíz del proyecto (Trabajo Final)
    open: 'backend/public/index.html' 
  }
});