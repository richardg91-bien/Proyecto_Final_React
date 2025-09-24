// Dependencies
import React, { useState, useEffect } from 'react';
import CartContext from '../../context/CartContext';
// Externals
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from '../Breadcrumb';

const classNames = [
  "first-header",
  "second-header",
  "third-header"
];



const BaseLayout = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => i + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  const className = classNames[index % classNames.length];

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      <div>
        <div
          className={
            `${className} d-flex flex-column` +
            ' bg-cover bg-center'
          }
          style={{
            backgroundImage:
              className === 'first-header' ? "url('https://preview.ibb.co/j8nRCQ/fashion2.jpg')" :
              className === 'second-header' ? "url('https://preview.ibb.co/fm4Cmk/fashion3.jpg')" :
              className === 'third-header' ? "url('https://preview.ibb.co/bMsCK5/fashion5.jpg')" :
              className === 'fourth-header' ? "url('https://preview.ibb.co/gtsZXQ/fashion6.jpg')" :
              undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Navbar />
          <Header />
        </div>
        <Breadcrumb />
        <div className="content w-100" style={{backgroundColor: '#F9F6F6'}}>
          {children}
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default BaseLayout;