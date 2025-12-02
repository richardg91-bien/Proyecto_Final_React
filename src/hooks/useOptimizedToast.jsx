/**
 * Hook optimizado para toast notifications
 * Carga react-toastify bajo demanda para reducir bundle inicial
 */
import { useCallback, useRef } from 'react';

// Cache del módulo toast
let toastModule = null;
let toastLoading = null;

/**
 * Carga el módulo de toast de forma lazy
 */
const loadToast = async () => {
  if (toastModule) return toastModule;
  if (toastLoading) return toastLoading;

  toastLoading = import('react-toastify').then(module => {
    toastModule = module.toast;
    toastLoading = null;
    return toastModule;
  });

  return toastLoading;
};

/**
 * Hook para usar toast de forma optimizada
 * @returns {object} Métodos de toast (success, error, info, warning)
 */
export const useOptimizedToast = () => {
  const toastRef = useRef(null);

  const getToast = useCallback(async () => {
    if (!toastRef.current) {
      toastRef.current = await loadToast();
    }
    return toastRef.current;
  }, []);

  const success = useCallback(async (message, options = {}) => {
    const toast = await getToast();
    return toast.success(message, {
      position: 'bottom-right',
      autoClose: 2000,
      ...options,
    });
  }, [getToast]);

  const error = useCallback(async (message, options = {}) => {
    const toast = await getToast();
    return toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      ...options,
    });
  }, [getToast]);

  const info = useCallback(async (message, options = {}) => {
    const toast = await getToast();
    return toast.info(message, {
      position: 'bottom-right',
      autoClose: 2000,
      ...options,
    });
  }, [getToast]);

  const warning = useCallback(async (message, options = {}) => {
    const toast = await getToast();
    return toast.warning(message, {
      position: 'bottom-right',
      autoClose: 2500,
      ...options,
    });
  }, [getToast]);

  return {
    success,
    error,
    info,
    warning,
  };
};

/**
 * Preload del módulo toast en idle time
 */
export const preloadToast = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      loadToast();
    });
  } else {
    setTimeout(() => {
      loadToast();
    }, 1000);
  }
};

// Preload automático después del load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    preloadToast();
  });
}

export default useOptimizedToast;
