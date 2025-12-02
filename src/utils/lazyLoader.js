/**
 * Lazy loader para módulos pesados
 * Carga módulos de forma diferida para evitar bloquear el main thread
 */

/**
 * Carga diferida de Toastify
 * @returns {Promise} Promise que resuelve con el módulo toast
 */
export const loadToastify = async () => {
  try {
    const { toast } = await import('react-toastify');
    return toast;
  } catch (error) {
    console.error('Error loading toastify:', error);
    // Fallback: mostrar alert nativo
    return {
      success: (msg) => alert(`✓ ${msg}`),
      error: (msg) => alert(`✗ ${msg}`),
      info: (msg) => alert(`ℹ ${msg}`),
      warning: (msg) => alert(`⚠ ${msg}`),
    };
  }
};

/**
 * Precarga módulos críticos en idle time
 */
export const preloadCriticalModules = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload de rutas más visitadas
      import('../components/Cart');
      import('../components/Women');
      import('../components/Men');
    });
  }
};

/**
 * Carga módulos bajo demanda con retry
 * @param {Function} importFn - Función de import dinámico
 * @param {number} retries - Número de reintentos
 * @returns {Promise}
 */
export const loadModuleWithRetry = async (importFn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await importFn();
    } catch (error) {
      if (i === retries - 1) throw error;
      // Esperar antes de reintentar (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

/**
 * Chunk de módulos por prioridad
 */
export const moduleLoadPriority = {
  high: ['react', 'react-dom', 'react-router-dom'],
  medium: ['styled-components', 'react-toastify'],
  low: ['react-icons', 'react-helmet-async'],
};

/**
 * Verifica si un módulo ya está cargado
 * @param {string} moduleName - Nombre del módulo
 * @returns {boolean}
 */
export const isModuleLoaded = (moduleName) => {
  return window.__loadedModules?.has(moduleName) || false;
};

/**
 * Marca un módulo como cargado
 * @param {string} moduleName - Nombre del módulo
 */
export const markModuleLoaded = (moduleName) => {
  if (!window.__loadedModules) {
    window.__loadedModules = new Set();
  }
  window.__loadedModules.add(moduleName);
};

/**
 * Inicializa el sistema de carga diferida
 */
export const initLazyLoading = () => {
  // Preload en idle time
  preloadCriticalModules();
  
  // Event listener para prefetch al hover
  document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        // Prefetch del chunk de esa ruta
        prefetchRoute(href);
      }
    }
  }, { passive: true });
};

/**
 * Prefetch de ruta específica
 * @param {string} route - Ruta a prefetch
 */
const prefetchRoute = (route) => {
  const routeMap = {
    '/cart': () => import('../components/Cart'),
    '/women': () => import('../components/Women'),
    '/men': () => import('../components/Men'),
    '/clothes': () => import('../components/Clothes'),
    '/accessories': () => import('../components/Accessories'),
    '/about': () => import('../components/About'),
    '/contact': () => import('../components/Contact'),
    '/login': () => import('../components/Login'),
    '/admin': () => import('../components/Admin'),
  };

  const importFn = routeMap[route];
  if (importFn && !isModuleLoaded(route)) {
    requestIdleCallback(() => {
      importFn().then(() => markModuleLoaded(route));
    });
  }
};

// Auto-inicializar si está en browser
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    requestIdleCallback(() => {
      initLazyLoading();
    });
  });
}
