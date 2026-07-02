import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site also works opened directly from disk (file://)
export default defineConfig({
  plugins: [react()],
  base: './',
})
