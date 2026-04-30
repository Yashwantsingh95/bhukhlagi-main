import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    allowedHosts: true   // 👈 THIS LINE FIXES IT
  },

  plugins: [
    react(),
    tailwindcss(),
  ],
})