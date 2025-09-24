//Dependencies
import React from 'react';
//Internals
import MenItems from './MenItems';

const MensProducts = () => (
  <div className="mens-products border-top border-4 border-dark">
    <div className="mens-title my-5 text-uppercase text-center fw-light" style={{fontFamily: 'Lato, sans-serif', color: 'rgba(0,0,0,0.8)'}}>
      <h4>Men's Items</h4>
    </div>
    <MenItems />
  </div>
);


export default MensProducts;