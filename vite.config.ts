import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so built assets load from any path (e.g., file:// or subfolders)
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
