//Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
//Internals
import MenItems from './MenItems';

const MensProducts = () => (
  <>
    <Helmet>
      <title>Ropa de Hombre - Indumentaria Agat | Moda Masculina</title>
      <meta 
        name="description" 
        content="Explora nuestra colección de ropa para hombre: camisas, pantalones, jeans, remeras y más. Moda masculina de calidad con estilo urbano. ¡Compra online!" 
      />
      <meta 
        name="keywords" 
        content="ropa de hombre, moda masculina, camisas hombre, pantalones hombre, jeans, remeras, ropa casual hombre, indumentaria masculina" 
      />
      <meta property="og:title" content="Ropa de Hombre - Indumentaria Agat" />
      <meta 
        property="og:description" 
        content="Colección completa de moda masculina: camisas, pantalones, remeras y más. Estilo y calidad para el hombre moderno." 
      />
      <meta property="og:type" content="website" />
    </Helmet>

    <div className="mens-products border-top border-4 border-dark">
      <div className="mens-title my-5 text-uppercase text-center fw-light" style={{fontFamily: 'Lato, sans-serif', color: 'rgba(0,0,0,0.8)'}}>
        <h4>Men's Items</h4>
      </div>
      <MenItems />
    </div>
  </>
);


export default MensProducts;