import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
        // Optimización de nombres de archivos CSS
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Aumentar el límite de advertencia de chunk
    chunkSizeWarningLimit: 600,
  },
  css: {
    devSourcemap: false,
  },
})
