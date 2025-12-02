/**
 * Optimizaciones para Back/Forward Cache (bfcache)
 * Permite navegación instantánea con el botón atrás/adelante
 */

/**
 * Limpiar listeners antes de que la página se guarde en bfcache
 */
export const enableBfCache = () => {
  // Listener para pageshow - detecta cuando la página se restaura del bfcache
  window.addEventListener('pageshow', (event) => {
    // Si la página viene del bfcache, refrescar datos críticos
    if (event.persisted) {
      console.log('Página restaurada del bfcache');
      // Puedes actualizar datos aquí si es necesario
    }
  });

  // Listener para pagehide - limpiar antes de entrar al bfcache
  window.addEventListener('pagehide', (event) => {
    if (event.persisted) {
      console.log('Página entrando al bfcache');
    }
  });

  // Evitar usar unload event que bloquea bfcache
  // En su lugar, usar pagehide o visibilitychange

  // Listener para visibilitychange - alternativa a unload
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // Guardar estado si es necesario
      // Cerrar conexiones abiertas
    }
  });
};

/**
 * Limpiar recursos que podrían bloquear bfcache
 */
export const cleanupForBfCache = () => {
  // Eliminar listeners de beforeunload si los hay
  window.onbeforeunload = null;
  
  // Cerrar conexiones IndexedDB si las hay
  // Cerrar conexiones WebSocket si las hay
  
  // Limpiar timers
  // (Los timers activos no bloquean bfcache en navegadores modernos)
};

/**
 * Verificar si la página es elegible para bfcache
 */
export const checkBfCacheEligibility = () => {
  // En Chrome DevTools -> Application -> Back/forward cache
  // se puede verificar el estado de bfcache
  
  const issues = [];
  
  // Verificar beforeunload
  if (window.onbeforeunload) {
    issues.push('beforeunload event listener detectado');
  }
  
  // Verificar unload
  if (window.onunload) {
    issues.push('unload event listener detectado');
  }
  
  return {
    eligible: issues.length === 0,
    issues,
  };
};

export default {
  enableBfCache,
  cleanupForBfCache,
  checkBfCacheEligibility,
};
