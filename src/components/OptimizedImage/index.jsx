import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { optimizeImageUrl, generateBlurPlaceholder } from '../../utils/imageOptimization';

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.$bgColor || '#f0f0f0'};
`;

const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

/**
 * Componente de imagen optimizada con lazy loading, skeleton y fallback
 * 
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo
 * @param {string} fallback - URL de imagen de respaldo
 * @param {string} loading - "lazy" | "eager" (default: "lazy")
 * @param {string} fetchPriority - "high" | "low" | "auto" (default: "auto")
 * @param {string} objectFit - Valor CSS object-fit (default: "cover")
 * @param {string} bgColor - Color de fondo del skeleton
 * @param {function} onLoad - Callback cuando la imagen se carga
 * @param {function} onError - Callback cuando hay un error
 */
const OptimizedImage = ({
  src,
  alt,
  fallback,
  loading = 'lazy',
  fetchPriority = 'auto',
  objectFit = 'cover',
  bgColor,
  onLoad,
  onError,
  className,
  style,
  width, // Ancho deseado para optimización
  quality = 85, // Calidad de imagen
  ...props
}) => {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(() => {
    // Optimizar URL inicial si se proporciona ancho
    return width ? optimizeImageUrl(src, { width, quality }) : src;
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [placeholder] = useState(() => generateBlurPlaceholder());

  useEffect(() => {
    const optimizedSrc = width ? optimizeImageUrl(src, { width, quality }) : src;
    setImageSrc(optimizedSrc);
    setImageLoaded(false);
    setShowSkeleton(true);
  }, [src, width, quality]);

  const handleLoad = (e) => {
    setImageLoaded(true);
    setShowSkeleton(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    } else {
      setShowSkeleton(false);
    }
    if (onError) onError(e);
  };

  return (
    <ImageWrapper $bgColor={bgColor} className={className} style={style}>
      {showSkeleton && <Skeleton />}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          transition: 'opacity 0.3s ease-in-out',
          opacity: imageLoaded ? 1 : 0,
          background: showSkeleton ? `url(${placeholder})` : 'transparent',
          backgroundSize: 'cover',
        }}
        {...props}
      />
    </ImageWrapper>
  );
};

export default OptimizedImage;
