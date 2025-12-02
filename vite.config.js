import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// Plugin para copiar service worker vacío
const copyServiceWorkerPlugin = () => {
  return {
    name: 'copy-service-worker',
    closeBundle() {
      try {
        copyFileSync(
          resolve(__dirname, 'public/service-worker.js'),
          resolve(__dirname, 'dist/service-worker.js')
        );
        console.log('✅ service-worker.js copiado a dist/');
      } catch (err) {
        console.error('⚠️  Error copiando service-worker.js:', err.message);
      }
    }
  };
};

// Plugin para optimizar recursos críticos
const criticalResourcesPlugin = () => {
  return {
    name: 'critical-resources',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // Inyectar resource hints y optimizaciones
        const resourceHints = `
    <!-- Resource Hints para optimizar carga -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />`;
        
        return html.replace('<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />', 
          '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />' + resourceHints);
      },
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    criticalResourcesPlugin(),
    copyServiceWorkerPlugin(),
    // Optimización de imágenes
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    // Optimizaciones para reducir tamaño del bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Eliminar funciones específicas
      },
    },
    // CSS Code splitting
    cssCodeSplit: true,
    // Optimizar module preload
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps) => {
        // Precargar solo dependencias críticas
        return deps.filter(dep => 
          dep.includes('react-vendor') || 
          dep.includes('critical')
        );
      },
    },
    // Code splitting para lazy loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors grandes en chunks independientes
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'bootstrap-vendor': ['react-bootstrap', 'bootstrap'],
          'ui-vendor': ['react-toastify', 'react-helmet', 'styled-components'],
          'icons-vendor': ['react-icons'],
        },
        // Optimización de nombres de archivos
        assetFileNames: (assetInfo) => {
          // Excluir archivos .jsx del output
          const name = assetInfo.name || '';
          if (name.endsWith('.jsx') || name.endsWith('.js')) {
            return 'assets/[name]-[hash].js';
          }
          if (name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // Configuración de chunks de JavaScript
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Aumentar el límite de advertencia de chunk
    chunkSizeWarningLimit: 600,
    // Optimización de assets (imágenes)
    assetsInlineLimit: 4096, // Inline assets < 4kb como base64
  },
  css: {
    devSourcemap: false,
  },
  // Optimización de assets estáticos
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
})
