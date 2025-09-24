//Dependencies
import React from 'react';
//Internals

const Footer = () => (
  <div
    className="footer d-flex flex-column justify-content-center align-items-center w-100 bg-dark text-white py-3"
    style={{fontFamily: 'Quicksand, sans-serif', fontWeight: 'lighter'}}
  >
    {/* Redes Sociales */}
    <div className="social-media d-flex gap-3 mb-2">
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        style={{fontSize: '1.5rem', transition: 'transform 0.2s ease, color 0.2s ease'}}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.color = '#1DA1F2';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.color = 'white';
        }}
        title="Síguenos en X (Twitter)"
      >
        <i className="bi bi-twitter-x"></i>
      </a>
      
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        style={{fontSize: '1.5rem', transition: 'transform 0.2s ease, color 0.2s ease'}}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.color = '#E4405F';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.color = 'white';
        }}
        title="Síguenos en Instagram"
      >
        <i className="bi bi-instagram"></i>
      </a>
      
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
        style={{fontSize: '1.5rem', transition: 'transform 0.2s ease, color 0.2s ease'}}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.color = '#25D366';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.color = 'white';
        }}
        title="Contáctanos por WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
    
    {/* Copyright */}
    <p className="m-0 text-center">© 2025 Copyright Richard Garcia</p>
  </div>
)

export default Footer;