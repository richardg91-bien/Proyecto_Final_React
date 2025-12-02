/**
 * Utilidades para dividir tareas largas y mejorar el rendimiento
 * del Main Thread
 */

/**
 * Ejecuta una función en el próximo frame disponible
 * Útil para dividir tareas largas
 */
export const scheduleTask = (callback) => {
  if ('requestIdleCallback' in window) {
    // Usar requestIdleCallback si está disponible
    window.requestIdleCallback(callback, { timeout: 1000 });
  } else {
    // Fallback a setTimeout
    setTimeout(callback, 0);
  }
};

/**
 * Divide un array grande en chunks y procesa cada chunk
 * en un frame separado para evitar bloquear el main thread
 */
export const processInChunks = async (items, processFn, chunkSize = 50) => {
  const chunks = [];
  
  // Dividir en chunks
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  
  // Procesar cada chunk en un frame separado
  for (const chunk of chunks) {
    await new Promise((resolve) => {
      scheduleTask(() => {
        chunk.forEach(processFn);
        resolve();
      });
    });
  }
};

/**
 * Debounce function - Reduce la frecuencia de ejecución
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function - Limita la frecuencia de ejecución
 */
export const throttle = (func, limit = 100) => {
  let inThrottle;
  
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Ejecuta código cuando el navegador está idle
 */
export const whenIdle = (callback, options = {}) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  
  // Fallback para navegadores sin requestIdleCallback
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => 50,
    });
  }, 1);
};

/**
 * Divide operaciones pesadas usando web workers si están disponibles
 */
export const offloadToWorker = (workerFn, data) => {
  return new Promise((resolve, reject) => {
    if (!window.Worker) {
      // Fallback si no hay soporte para Workers
      try {
        const result = workerFn(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
      return;
    }
    
    // Crear worker inline
    const blob = new Blob([`
      self.onmessage = function(e) {
        try {
          const result = (${workerFn.toString()})(e.data);
          self.postMessage({ success: true, result });
        } catch (error) {
          self.postMessage({ success: false, error: error.message });
        }
      }
    `], { type: 'application/javascript' });
    
    const worker = new Worker(URL.createObjectURL(blob));
    
    worker.onmessage = (e) => {
      if (e.data.success) {
        resolve(e.data.result);
      } else {
        reject(new Error(e.data.error));
      }
      worker.terminate();
    };
    
    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };
    
    worker.postMessage(data);
  });
};

export default {
  scheduleTask,
  processInChunks,
  debounce,
  throttle,
  whenIdle,
  offloadToWorker,
};
