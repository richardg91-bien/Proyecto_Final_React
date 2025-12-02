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
          // Separar node_modules en chunks específicos y optimizados
          if (id.includes('node_modules')) {
            // Dividir React en chunks más pequeños
            if (id.includes('react-dom/client')) {
              return 'react-dom-client';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react/jsx-runtime')) {
              return 'react-jsx';
            }
            if (id.includes('scheduler')) {
              return 'scheduler';
            }
            if (id.includes('react') && !id.includes('react-')) {
              return 'react';
            }
            // Router (lazy load)
            if (id.includes('react-router')) {
              return 'router';
            }
            // Styled Components (crítico para estilos)
            if (id.includes('styled-components')) {
              return 'styled';
            }
            // Icons (lazy, solo cuando se necesitan)
            if (id.includes('react-icons')) {
              return 'icons';
            }
            // Bootstrap (layout, siempre necesario)
            if (id.includes('bootstrap')) {
              return 'bootstrap';
            }
            // Utils (toast, helmet - lazy)
            if (id.includes('react-toastify') || id.includes('react-helmet')) {
              return 'ui-libs';
            }
            // Resto de node_modules (poco probable)
            return 'vendor';
          }
          // Componentes Admin (lazy load)
          if (id.includes('/src/components/Admin') || id.includes('/src/components/ProductForm')) {
            return 'admin-chunk';
          }
          // Context y Providers (críticos)
          if (id.includes('/src/context/') || id.includes('/src/components/ProductsProvider')) {
            return 'app-context';
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
    cssMinify: true, // Usar minificador default (esbuild)
    cssCodeSplit: true, // Split CSS por componente
    // Target para navegadores modernos
    target: 'es2020', // Mejor compatibilidad con código más pequeño
    // Chunk size warnings
    chunkSizeWarningLimit: 200, // Muy estricto para detectar chunks grandes
    // Reportar tamaños comprimidos
    reportCompressedSize: true,
    // Inline assets pequeños
    assetsInlineLimit: 2048, // 2kb - reducido para menor bundle inicial
    // Módulos que pueden externalizarse si se necesita más optimización
    // external: [], // Agregar dependencias CDN aquí si es necesario
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
