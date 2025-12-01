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
        manualChunks: (id) => {
          // Separar node_modules en chunks específicos
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('styled-components')) {
              return 'styled-vendor';
            }
            if (id.includes('react-icons')) {
              return 'icons-vendor';
            }
            if (id.includes('bootstrap')) {
              return 'bootstrap-vendor';
            }
            if (id.includes('react-toastify') || id.includes('react-helmet')) {
              return 'utils-vendor';
            }
            // Todo lo demás de node_modules
            return 'vendor';
          }
          // Separar componentes grandes
          if (id.includes('/src/components/Admin')) {
            return 'admin';
          }
          if (id.includes('/src/components/ProductForm')) {
            return 'product-form';
          }
        },
        // Compresión de chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Comprimir output agresivamente
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Dos pasadas de minificación
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // Eliminar todos los comentarios
      },
    },
    // Generar sourcemaps para debugging
    sourcemap: false,
    // Optimizar CSS agresivamente
    cssMinify: 'lightningcss',
    cssCodeSplit: true, // Split CSS por componente
    // Target para navegadores modernos
    target: 'esnext',
    // Chunk size warnings
    chunkSizeWarningLimit: 500, // Más estricto
    // Reportar tamaños comprimidos
    reportCompressedSize: true,
    // Inline assets pequeños
    assetsInlineLimit: 4096, // 4kb
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
