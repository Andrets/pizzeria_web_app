import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@redux': '/src/app/redux',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants'
    }
  }
})
