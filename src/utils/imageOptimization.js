/**
 * Utilidades avanzadas para optimización de imágenes
 * Implementa lazy loading, placeholders, y WebP detection
 */

/**
 * Verifica si el navegador soporta WebP
 */
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

/**
 * Genera un placeholder blur en formato data URI
 * @param {number} width - Ancho del placeholder
 * @param {number} height - Alto del placeholder
 * @returns {string} Data URI del placeholder
 */
export const generateBlurPlaceholder = (width = 40, height = 40) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Gradient suave gris
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f0f0');
  gradient.addColorStop(1, '#e0e0e0');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1); // Baja calidad para placeholder
};

/**
 * Calcula las dimensiones responsive para imágenes
 * @param {number} originalWidth - Ancho original
 * @param {number} originalHeight - Alto original
 * @param {number} maxWidth - Ancho máximo deseado
 * @returns {object} Nuevas dimensiones
 */
export const calculateResponsiveDimensions = (originalWidth, originalHeight, maxWidth = 800) => {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight };
  }
  
  const ratio = originalHeight / originalWidth;
  return {
    width: maxWidth,
    height: Math.round(maxWidth * ratio)
  };
};

/**
 * Genera srcset para imágenes responsive
 * @param {string} imageUrl - URL base de la imagen
 * @param {array} sizes - Array de anchos [400, 800, 1200]
 * @returns {string} String srcset
 */
export const generateSrcSet = (imageUrl, sizes = [400, 800, 1200]) => {
  // Si la URL ya tiene parámetros, usa & en vez de ?
  const separator = imageUrl.includes('?') ? '&' : '?';
  
  return sizes
    .map(size => `${imageUrl}${separator}w=${size} ${size}w`)
    .join(', ');
};

/**
 * Precarga una imagen de manera optimizada
 * @param {string} src - URL de la imagen
 * @returns {Promise} Promise que resuelve cuando la imagen carga
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Lazy load de imágenes con Intersection Observer
 * @param {HTMLElement} element - Elemento img a observar
 * @param {string} src - URL de la imagen
 * @param {object} options - Opciones del observer
 */
export const lazyLoadImage = (element, src, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px', // Cargar 50px antes de entrar al viewport
    threshold: 0.01
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = src;
        img.classList.add('loaded');
        obs.unobserve(img);
      }
    });
  }, { ...defaultOptions, ...options });

  observer.observe(element);
  return observer;
};

/**
 * Optimiza el formato de imagen según el contexto
 * @param {string} url - URL original
 * @param {object} options - width, quality, format
 * @returns {string} URL optimizada
 */
export const optimizeImageUrl = (url, options = {}) => {
  const {
    width = null,
    quality = 80,
    format = 'auto' // 'auto', 'webp', 'jpeg'
  } = options;

  // Si la URL es local, no optimizar
  if (!url.startsWith('http')) return url;

  // Detectar si es Picsum o similar
  if (url.includes('picsum.photos')) {
    let optimizedUrl = url;
    
    // Agregar ancho si se especifica
    if (width) {
      optimizedUrl = optimizedUrl.replace(/\/(\d+)\/(\d+)/, `/${width}/$2`);
    }
    
    // Picsum no soporta WebP nativamente, pero podemos usar blur
    if (options.blur) {
      const separator = optimizedUrl.includes('?') ? '&' : '?';
      optimizedUrl = `${optimizedUrl}${separator}blur=${options.blur}`;
    }
    
    return optimizedUrl;
  }

  // Para otras URLs, intentar agregar parámetros estándar
  const params = new URLSearchParams();
  if (width) params.append('w', width);
  if (quality !== 80) params.append('q', quality);
  if (format !== 'auto' && supportsWebP()) params.append('fm', 'webp');

  const hasParams = params.toString();
  if (!hasParams) return url;

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
};

/**
 * Batch loading de múltiples imágenes con priorización
 * @param {array} urls - Array de URLs
 * @param {number} concurrent - Número de cargas simultáneas
 * @returns {Promise} Promise que resuelve cuando todas cargan
 */
export const batchLoadImages = async (urls, concurrent = 3) => {
  const results = [];
  
  for (let i = 0; i < urls.length; i += concurrent) {
    const batch = urls.slice(i, i + concurrent);
    const batchResults = await Promise.allSettled(
      batch.map(url => preloadImage(url))
    );
    results.push(...batchResults);
  }
  
  return results;
};

/**
 * Detecta el ancho óptimo de imagen según el viewport
 * @returns {number} Ancho óptimo en píxeles
 */
export const getOptimalImageWidth = () => {
  const dpr = window.devicePixelRatio || 1;
  const viewportWidth = window.innerWidth;
  
  // Categorías de ancho
  if (viewportWidth < 640) return Math.round(viewportWidth * dpr); // Mobile
  if (viewportWidth < 1024) return Math.round(800 * dpr); // Tablet
  return Math.round(1200 * dpr); // Desktop
};

/**
 * Aplica optimizaciones de imagen en elementos ya renderizados
 */
export const applyImageOptimizations = () => {
  // Buscar todas las imágenes sin optimizar
  const images = document.querySelectorAll('img[data-optimize]');
  
  images.forEach(img => {
    const originalSrc = img.dataset.src || img.src;
    const width = img.dataset.width || getOptimalImageWidth();
    
    const optimizedSrc = optimizeImageUrl(originalSrc, {
      width,
      quality: 85,
      format: 'auto'
    });
    
    // Lazy load si no está en viewport
    if (img.loading !== 'eager') {
      lazyLoadImage(img, optimizedSrc);
    } else {
      img.src = optimizedSrc;
    }
  });
};

// Auto-ejecutar optimizaciones al cargar
if (typeof window !== 'undefined') {
  window.addEventListener('load', applyImageOptimizations);
}
