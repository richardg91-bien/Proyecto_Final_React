//Dependencies
import React from 'react';
//Internals
// ...eliminado import de CSS legacy...
import WomenItems from './WomenItems';
import SEO from '../SEO';


const WomensProducts = () => (
  <>
    <SEO
      title="Ropa para Mujer"
      description="Descubre nuestra exclusiva colección de ropa femenina. Vestidos, blusas, pantalones y más para lucir elegante en cualquier ocasión."
      keywords="ropa mujer, moda femenina, vestidos, blusas, pantalones mujer, accesorios mujer"
    />
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