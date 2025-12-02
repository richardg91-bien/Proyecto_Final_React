/**
 * Configuración de recursos críticos para preload
 * Mejora LCP y reduce el tiempo de bloqueo de renderización
 */

export const criticalResources = {
  // Fuentes críticas
  fonts: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      as: 'style',
    },
  ],
  
  // APIs críticas
  apis: [
    {
      href: 'https://6790f03e6a8940f8bfff5e04.mockapi.io',
      crossorigin: true,
    },
  ],
  
  // CDNs externos
  cdns: [
    {
      href: 'https://cdn.jsdelivr.net',
      crossorigin: true,
    },
  ],
};

/**
 * Función para agregar preload/prefetch dinámicamente
 */
export const addResourceHints = () => {
  const head = document.head;
  
  // Preconnect para APIs
  criticalResources.apis.forEach(api => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = api.href;
    if (api.crossorigin) link.crossOrigin = 'anonymous';
    head.appendChild(link);
    
    // DNS-prefetch como fallback
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = api.href;
    head.appendChild(dnsPrefetch);
  });
  
  // Preconnect para CDNs
  criticalResources.cdns.forEach(cdn => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = cdn.href;
    if (cdn.crossorigin) link.crossOrigin = 'anonymous';
    head.appendChild(link);
  });
};

/**
 * Función para prefetch de rutas futuras
 */
export const prefetchRoute = (route) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Función para preload de imágenes críticas
 */
export const preloadImage = (src, fetchPriority = 'high') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = fetchPriority;
  document.head.appendChild(link);
};

export default {
  criticalResources,
  addResourceHints,
  prefetchRoute,
  preloadImage,
};
