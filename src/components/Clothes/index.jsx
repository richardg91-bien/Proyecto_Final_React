// Dependencies
import React from 'react';
// Internals
// ...eliminado import de CSS legacy...
import ClothesItems from './ClothesItems';

const Clothes = () => {
  return (
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
  );
};

export default Clothes;