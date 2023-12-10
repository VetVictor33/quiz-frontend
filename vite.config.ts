import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@libs': path.resolve(__dirname, './src/libs'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@schemas': path.resolve(__dirname, './src/schemas'),
      '@animations': path.resolve(__dirname, './src/styles/animations'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
