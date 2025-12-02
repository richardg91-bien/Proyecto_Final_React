import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'Indumentaria Agat',
  description = 'Tienda online de moda y accesorios de calidad. Encuentra ropa para hombre, mujer y los mejores accesorios.',
  keywords = 'ropa, moda, accesorios, indumentaria, tienda online, hombre, mujer',
  image = '/images/products/producto-1.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const fullTitle = title === 'Indumentaria Agat' ? title : `${title} | Indumentaria Agat`;

  return (
    <Helmet>
      {/* Títulos y descripción básica */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Viewport para responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Charset */}
      <meta charSet="utf-8" />
      
      {/* Language */}
      <html lang="es" />
    </Helmet>
  );
};

export default SEO;
