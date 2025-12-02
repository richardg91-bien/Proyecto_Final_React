//Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
//Internals
// ...eliminado import de CSS legacy...
import WomenItems from './WomenItems';


const WomensProducts = () => (
  <>
    <Helmet>
      <title>Ropa de Mujer - Indumentaria Agat | Moda Femenina</title>
      <meta 
        name="description" 
        content="Descubre nuestra colección de ropa para mujer: vestidos, blusas, pantalones, faldas y más. Moda femenina de calidad con estilo único. ¡Envíos a todo el país!" 
      />
      <meta 
        name="keywords" 
        content="ropa de mujer, moda femenina, vestidos, blusas, pantalones mujer, faldas, ropa casual mujer, indumentaria femenina" 
      />
      <meta property="og:title" content="Ropa de Mujer - Indumentaria Agat" />
      <meta 
        property="og:description" 
        content="Colección completa de moda femenina: vestidos, blusas, pantalones y más. Calidad y estilo para la mujer moderna." 
      />
      <meta property="og:type" content="website" />
    </Helmet>

    <div
      className="border-top border-4 border-dark bg-white"
      style={{
        // .womens-products
        // border-top: 4px solid black; (ya en border-top)
      }}
    >
      <div
        className="my-5 text-uppercase text-center"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 'lighter',
          color: 'rgba(0,0,0,0.8)'
        }}
      >
        <h4>Women's Items</h4>
      </div>
      <WomenItems />
    </div>
  </>
);

export default WomensProducts;