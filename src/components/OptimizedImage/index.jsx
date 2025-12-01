import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.$bgColor || '#f0f0f0'};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.$loaded ? 1 : 0};
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
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setImageSrc(src);
    setImageLoaded(false);
    setShowSkeleton(true);
  }, [src]);

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
      <StyledImage
        as="img"
        src={imageSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        {...{ fetchpriority: fetchPriority }}
        onLoad={handleLoad}
        onError={handleError}
        $loaded={imageLoaded}
        $objectFit={objectFit}
        {...props}
      />
    </ImageWrapper>
  );
};

export default OptimizedImage;
