// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
// Internals
// ...eliminado import de CSS legacy...
import ClothesItems from './ClothesItems';

const Clothes = () => {
  return (
    <>
      <Helmet>
        <title>Ropa y Prendas - Indumentaria Agat | Colección de Vestimenta</title>
        <meta 
          name="description" 
          content="Descubre nuestra amplia colección de ropa y prendas para todos los estilos: casual, formal, deportivo y más. Calidad y variedad en cada prenda. ¡Comprá online!" 
        />
        <meta 
          name="keywords" 
          content="ropa, prendas, vestimenta, indumentaria, ropa casual, ropa formal, moda, comprar ropa online" 
        />
        <meta property="og:title" content="Ropa y Prendas - Indumentaria Agat" />
        <meta 
          property="og:description" 
          content="Colección completa de ropa y prendas para todos los estilos. Encuentra tu look perfecto en Indumentaria Agat." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div
        className="clothes border-top border-4 border-dark bg-white"
        // .clothes: border-top ya aplicado
      >
        <div
          className="clothes-title my-5 text-uppercase text-center fw-light"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 'lighter',
            color: 'rgba(0,0,0,0.8)'
          }}
        >
          <h4>Clothes</h4>
        </div>
        <ClothesItems />
      </div>
    </>
  );
};

export default Clothes;