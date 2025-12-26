import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/english-tutor-grade6/',
  server: {
    port: 3000,
    open: true
  }
})


