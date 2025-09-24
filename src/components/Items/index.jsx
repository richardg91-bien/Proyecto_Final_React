//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper border-top border-4 border-dark">
        <div className="items-title my-5 text-uppercase text-center fw-light" style={{fontFamily: 'Lato, sans-serif', color: 'rgba(0,0,0,0.8)'}}>
          <h4>All Items</h4>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;