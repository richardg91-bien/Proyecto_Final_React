import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de imagen optimizada con:
 * - Lazy loading nativo
 * - Placeholder mientras carga
 * - Soporte para imágenes responsive
 * - Detección de errores
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  onLoad,
  onError,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Si la imagen ya está en cache, cargarla inmediatamente
    const img = new Image();
    img.src = src;
    
    if (img.complete) {
      setImageSrc(src);
      setIsLoaded(true);
    } else {
      // Usar Intersection Observer para lazy loading más eficiente
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px', // Comenzar a cargar 50px antes de que sea visible
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [src]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setImageSrc(placeholder);
    if (onError) onError(e);
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchpriority={fetchpriority}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7,
        backgroundColor: '#f0f0f0',
      }}
      {...props}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  fetchpriority: PropTypes.oneOf(['high', 'low', 'auto']),
  placeholder: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default OptimizedImage;
