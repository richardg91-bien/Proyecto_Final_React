//Dependencies
import React from 'react';
//Internals
import MenItems from './MenItems';
import SEO from '../SEO';

const MensProducts = () => (
  <>
    <SEO
      title="Ropa para Hombre"
      description="Explora nuestra selección de ropa masculina. Camisas, pantalones, chaquetas y accesorios para el hombre moderno y elegante."
      keywords="ropa hombre, moda masculina, camisas hombre, pantalones hombre, accesorios masculinos"
    />
    <div className="mens-products border-top border-4 border-dark">
    <div className="mens-title my-5 text-uppercase text-center fw-light" style={{fontFamily: 'Lato, sans-serif', color: 'rgba(0,0,0,0.8)'}}>
      <h4>Men's Items</h4>
    </div>
    <MenItems />
  </div>
  </>
);


export default MensProducts;