//Dependencies
import React from 'react';
//Internals
import logo from '../../../../assets/logo1.jpeg';
import OptimizedImage from '../../../OptimizedImage';
import { FaArrowDown } from 'react-icons/fa';

const Header = () => (
  <div
    className="header d-flex flex-column align-items-center justify-content-center bg-transparent"
    style={{height: '40em', fontFamily: 'Lato, sans-serif'}}
  >
    {/* Logo Grande para Branding */}
    <div className="logo-container mb-4">
      <OptimizedImage 
        src={logo} 
        alt="Indumentaria Agat Logo" 
        width="150"
        height="150"
        loading="eager"
        style={{
          height: '150px',
          width: 'auto',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>
    
    {/* Título de Marca */}
    <h1 id="header-title" className="fw-light text-uppercase mb-3" style={{color: 'rgba(0,0,0,0.7)', fontSize: '3.5rem', letterSpacing: '2px'}}>
      Indumentaria Agat
    </h1>
    
    {/* Slogan/Descripción */}
    <p className="text-center text-muted mb-4" style={{fontSize: '1.2rem', fontFamily: 'Quicksand, sans-serif', maxWidth: '600px', lineHeight: '1.6'}}>
      Moda de calidad para expresar tu personalidad única
    </p>

    {/* Call to Action */}
    <div className="mt-3">
      <p className="text-muted small" style={{fontFamily: 'Quicksand, sans-serif'}}>
        <FaArrowDown className="me-2" />
        Explora nuestras colecciones
      </p>
    </div>
  </div>
)

export default Header;