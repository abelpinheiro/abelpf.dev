import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/abelpf.dev/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    preserveSymlinks: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
