/**
 * Utilidad para dividir tareas pesadas en chunks más pequeños
 * usando requestIdleCallback y Time Slicing
 */

/**
 * Procesa un array de items en chunks pequeños para evitar bloquear el main thread
 * @param {Array} items - Array de items a procesar
 * @param {Function} processor - Función que procesa cada item
 * @param {number} chunkSize - Tamaño de cada chunk (default: 50)
 * @returns {Promise} Promise que resuelve cuando todo está procesado
 */
export const processInIdleChunks = async (items, processor, chunkSize = 50) => {
  return new Promise((resolve) => {
    let currentIndex = 0;

    const processChunk = (deadline) => {
      // Procesar mientras haya tiempo idle (o hasta 50ms mínimo)
      while (
        (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
        currentIndex < items.length
      ) {
        const endIndex = Math.min(currentIndex + chunkSize, items.length);
        
        for (let i = currentIndex; i < endIndex; i++) {
          processor(items[i], i);
        }
        
        currentIndex = endIndex;
      }

      // Si quedan items, programar siguiente chunk
      if (currentIndex < items.length) {
        requestIdleCallback(processChunk, { timeout: 100 });
      } else {
        resolve();
      }
    };

    // Iniciar procesamiento
    requestIdleCallback(processChunk, { timeout: 100 });
  });
};

/**
 * Time Slicing: Divide una tarea grande en pequeñas piezas
 * @param {Function} task - Tarea a ejecutar
 * @param {number} sliceTime - Tiempo máximo por slice en ms (default: 16)
 * @returns {Promise}
 */
export const timeSlice = async (task, sliceTime = 16) => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    
    const execute = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < sliceTime) {
        task();
        resolve();
      } else {
        // Si toma mucho tiempo, pausar y continuar en el siguiente frame
        setTimeout(() => {
          task();
          resolve();
        }, 0);
      }
    };
    
    requestAnimationFrame(execute);
  });
};

/**
 * Scheduler de prioridades para tareas
 */
class TaskScheduler {
  constructor() {
    this.highPriorityQueue = [];
    this.normalPriorityQueue = [];
    this.lowPriorityQueue = [];
    this.isProcessing = false;
  }

  /**
   * Agrega una tarea a la cola según prioridad
   * @param {Function} task - Tarea a ejecutar
   * @param {string} priority - 'high' | 'normal' | 'low'
   * @returns {Promise}
   */
  addTask(task, priority = 'normal') {
    return new Promise((resolve, reject) => {
      const wrappedTask = async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      switch (priority) {
        case 'high':
          this.highPriorityQueue.push(wrappedTask);
          break;
        case 'low':
          this.lowPriorityQueue.push(wrappedTask);
          break;
        default:
          this.normalPriorityQueue.push(wrappedTask);
      }

      this.processTasks();
    });
  }

  /**
   * Procesa tareas de las colas
   */
  async processTasks() {
    if (this.isProcessing) return;
    
    this.isProcessing = true;

    while (
      this.highPriorityQueue.length > 0 ||
      this.normalPriorityQueue.length > 0 ||
      this.lowPriorityQueue.length > 0
    ) {
      let task = null;

      // Priorizar tareas high > normal > low
      if (this.highPriorityQueue.length > 0) {
        task = this.highPriorityQueue.shift();
      } else if (this.normalPriorityQueue.length > 0) {
        task = this.normalPriorityQueue.shift();
      } else {
        task = this.lowPriorityQueue.shift();
      }

      if (task) {
        await new Promise(resolve => {
          requestIdleCallback(() => {
            task();
            resolve();
          });
        });
      }
    }

    this.isProcessing = false;
  }
}

// Instancia global del scheduler
export const taskScheduler = new TaskScheduler();

/**
 * Memoización con LRU cache para resultados costosos
 */
export class MemoCache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;
    
    // Mover al final (más reciente)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    // Si ya existe, eliminar para re-agregar al final
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // Si está lleno, eliminar el más antiguo
    else if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }

  clear() {
    this.cache.clear();
  }
}

/**
 * HOC para memoizar funciones costosas con cache
 */
export const memoize = (fn, cacheSize = 100) => {
  const cache = new MemoCache(cacheSize);
  
  return (...args) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Virtual scrolling helper - renderiza solo elementos visibles
 * @param {Array} items - Array completo de items
 * @param {number} itemHeight - Altura de cada item en px
 * @param {number} containerHeight - Altura del contenedor en px
 * @param {number} scrollTop - Scroll actual
 * @param {number} overscan - Items extra a renderizar (default: 3)
 * @returns {Object} { visibleItems, offsetY }
 */
export const getVisibleItems = (
  items,
  itemHeight,
  containerHeight,
  scrollTop,
  overscan = 3
) => {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  return {
    visibleItems: items.slice(startIndex, endIndex + 1),
    startIndex,
    endIndex,
    offsetY: startIndex * itemHeight,
    totalHeight: items.length * itemHeight,
  };
};

/**
 * Detecta si el dispositivo es de baja capacidad
 */
export const isLowEndDevice = () => {
  // Check hardware concurrency
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    return true;
  }

  // Check memory (Chrome only)
  if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
    return true;
  }

  // Check connection (slow 2G/3G)
  if (navigator.connection) {
    const { effectiveType, saveData } = navigator.connection;
    if (effectiveType === 'slow-2g' || effectiveType === '2g' || saveData) {
      return true;
    }
  }

  return false;
};

/**
 * Adaptive loading: ajusta features según capacidad del dispositivo
 */
export const getAdaptiveConfig = () => {
  const isLowEnd = isLowEndDevice();
  
  return {
    enableAnimations: !isLowEnd,
    imageQuality: isLowEnd ? 60 : 85,
    lazyLoadThreshold: isLowEnd ? '200px' : '50px',
    chunkSize: isLowEnd ? 20 : 50,
    enableParallax: !isLowEnd,
    enableSmoothScroll: !isLowEnd,
    maxConcurrentRequests: isLowEnd ? 2 : 6,
  };
};

/**
 * React hook para procesamiento en idle
 * Importar React en el componente que lo use
 */
export const createIdleCallback = (callback) => {
  const handle = requestIdleCallback(() => {
    callback();
  });

  return () => cancelIdleCallback(handle);
};

// Fallback para navegadores sin requestIdleCallback
if (typeof window !== 'undefined' && !window.requestIdleCallback) {
  window.requestIdleCallback = (cb) => {
    const start = Date.now();
    return setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1);
  };

  window.cancelIdleCallback = (id) => clearTimeout(id);
}
