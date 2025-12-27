import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Build optimization
  build: {
    // Use esbuild for minification (faster and built-in)
    minify: 'esbuild',
    
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
        },
      },
    },
    
    // Generate source maps for debugging (disable for smaller bundle)
    sourcemap: false,
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
    
    // Target modern browsers for smaller bundle
    target: 'es2020',
  },
  
  // Esbuild options for better minification
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  
  // Development server
  server: {
    port: 5173,
    open: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
  },
  
  // Optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
