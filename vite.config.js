import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimizaciones de build
  build: {
    // Optimización de chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['bootstrap', 'styled-components', 'react-icons'],
          'utils-vendor': ['react-toastify', 'react-helmet-async'],
        },
      },
    },
    // Comprimir output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
      },
    },
    // Generar sourcemaps para debugging
    sourcemap: false,
    // Optimizar CSS
    cssMinify: true,
    // Target para navegadores modernos
    target: 'esnext',
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  
  // Optimizaciones de desarrollo
  server: {
    // Pre-transform de dependencias comunes
    warmup: {
      clientFiles: [
        './src/components/**/*.jsx',
        './src/context/**/*.jsx',
        './src/hooks/**/*.jsx',
      ],
    },
  },
  
  // Optimización de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'bootstrap',
      'styled-components',
      'react-icons/fi',
      'react-toastify',
      'react-helmet-async',
    ],
  },
})
