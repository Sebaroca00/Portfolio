import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // Esta línea es crucial
  plugins: [react()],
});
