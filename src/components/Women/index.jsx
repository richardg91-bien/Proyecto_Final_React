//Dependencies
import React from 'react';
//Internals
// ...eliminado import de CSS legacy...
import WomenItems from './WomenItems';


const WomensProducts = () => (
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
);

export default WomensProducts;