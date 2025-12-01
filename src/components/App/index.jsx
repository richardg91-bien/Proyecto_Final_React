// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
//Internals
import Products from '../Items';
import './index.css';

const App = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://indumentaria-agat.com';
  
  return (
    <>
      <Helmet>
        {/* Título optimizado para SEO */}
        <title>Indumentaria Agat - Moda de Calidad | Ropa para Hombres y Mujeres</title>
        
        {/* Meta Description mejorada */}
        <meta 
          name="description" 
          content="Descubre Indumentaria Agat: tu tienda online de moda con las mejores prendas de ropa, accesorios y calzado para hombres y mujeres. Calidad, estilo y precios competitivos. ¡Envíos a todo el país!" 
        />
        
        {/* Keywords relevantes */}
        <meta 
          name="keywords" 
          content="indumentaria, moda, ropa, accesorios, hombre, mujer, comprar ropa online, tienda de ropa, fashion, estilo, Agat, ropa de calidad" 
        />
        
        {/* Open Graph para redes sociales (Facebook, WhatsApp, etc.) */}
        <meta property="og:title" content="Indumentaria Agat - Moda de Calidad" />
        <meta 
          property="og:description" 
          content="Tienda online de moda con las mejores prendas para expresar tu personalidad única. Ropa, accesorios y más." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Indumentaria Agat" />
        <meta property="og:locale" content="es_AR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indumentaria Agat - Moda de Calidad" />
        <meta 
          name="twitter:description" 
          content="Descubre nuestra colección de moda para todos los estilos. Calidad y diseño en cada prenda." 
        />
        
        {/* Otros meta tags importantes para SEO */}
        <meta name="author" content="Indumentaria Agat" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#2c3e50" />
        
        {/* Canonical URL para evitar contenido duplicado */}
        <link rel="canonical" href={currentUrl} />
        
        {/* Preconnect para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      <div className="content d-flex w-100 justify-content-between m-0" style={{margin: 0}}>
        <Products />
      </div>
    </>
  );
};

export default App;