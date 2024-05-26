import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: '@constants',
        replacement: fileURLToPath(new URL('./src/constants', import.meta.url)),
      },

      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
    
      {
        find: '@interfaces',
        replacement: fileURLToPath(new URL('./src/interfaces', import.meta.url)),
      },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
     
      {
        find: '@apiServices',
        replacement: fileURLToPath(new URL('./src/apiServices', import.meta.url)),
      },
      { find: '@config', replacement: fileURLToPath(new URL('./src/config', import.meta.url)) },
    ],
  },
})
