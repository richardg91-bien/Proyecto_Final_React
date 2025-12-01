// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
//Internals
import Products from '../Items';
import './index.css';

const App = () => (
  <>
    <Helmet>
      <title>Indumentaria Agat - Moda de Calidad</title>
      <meta 
        name="description" 
        content="Descubre moda de calidad en Indumentaria Agat. Encuentra ropa para hombre, mujer, accesorios y más. Envíos a todo el país." 
      />
      <meta 
        name="keywords" 
        content="indumentaria, moda, ropa, accesorios, hombre, mujer, comprar ropa online, Agat" 
      />
      <meta property="og:title" content="Indumentaria Agat - Moda de Calidad" />
      <meta property="og:description" content="Descubre moda de calidad para expresar tu personalidad única" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://indumentaria-agat.com" />
    </Helmet>
    
    <div className="content d-flex w-100 justify-content-between m-0" style={{margin: 0}}>
      <Products />
    </div>
  </>
)

export default App;