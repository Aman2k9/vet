import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // If your app is served from a specific base path, update the base URL
  base: '/', // Change this if deploying under a subdirectory (e.g., '/app/')
  
  build: {
    rollupOptions: {
      output: {
        // Ensure that JS and assets are properly placed in the output directory
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },

  // Server configuration for Netlify
  server: {
    watch: {
      usePolling: true, // Useful if you're running into issues with file watching in some environments
    },
  },
})
