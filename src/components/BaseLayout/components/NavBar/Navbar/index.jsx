//Dependencies
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/useAuth';
import CartContext from '../../../../../context/CartContext';
import logo from '../../../../../assets/logo1.jpeg';

const Navbar = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { cartProducts } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Contar total de productos en el carrito
  const totalItemsInCart = cartProducts.reduce((total, product) => total + product.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg d-flex align-items-center justify-content-between w-100 px-4"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))',
        minHeight: '4em',
        boxShadow: 'none',
      }}
    >
      {/* Logo/Brand */}
      <div className="navbar-brand">
        <Link 
          to="/" 
          className="text-white text-decoration-none d-flex align-items-center"
          onClick={closeMenu}
        >
          <img 
            src={logo} 
            alt="Indumentaria Agat Logo" 
            style={{
              height: '40px',
              width: 'auto',
              borderRadius: '6px',
              marginRight: '8px'
            }}
          />
          <span className="fw-bold d-none d-sm-inline" style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.1rem' }}>
            Indumentaria Agat
          </span>
        </Link>
      </div>

      {/* Hamburger Menu Button - Solo visible en móvil */}
      <button
        className="navbar-toggler d-lg-none border-0"
        type="button"
        onClick={toggleMenu}
        style={{
          background: 'none',
          padding: '4px 8px'
        }}
      >
        <span className="text-white" style={{ fontSize: '1.5rem' }}>
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </span>
      </button>

      {/* Navigation Menu */}
      <div className={`navbar-collapse ${isMenuOpen ? 'd-block' : 'd-none'} d-lg-flex`} style={{
        position: isMenuOpen ? 'absolute' : 'relative',
        top: isMenuOpen ? '100%' : 'auto',
        left: isMenuOpen ? '0' : 'auto',
        right: isMenuOpen ? '0' : 'auto',
        backgroundColor: isMenuOpen ? 'rgba(0,0,0,0.95)' : 'transparent',
        zIndex: 1000,
        padding: isMenuOpen ? '1rem' : '0',
        borderRadius: isMenuOpen ? '0 0 10px 10px' : '0'
      }}>
        
        {/* Navigation Links */}
        <ul
          className={`navbar-nav me-auto ${isMenuOpen ? 'd-block' : 'd-flex'}`}
          style={{
            listStyle: 'none',
            fontFamily: 'Quicksand, sans-serif',
            margin: 0,
            padding: 0
          }}
        >
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/"
              onClick={closeMenu}
            >
              <i className="bi bi-house me-2"></i>
              Inicio
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/women"
              onClick={closeMenu}
            >
              <i className="bi bi-person-dress me-2"></i>
              Mujer
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/men"
              onClick={closeMenu}
            >
              <i className="bi bi-person me-2"></i>
              Hombre
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/clothes"
              onClick={closeMenu}
            >
              <i className="bi bi-bag me-2"></i>
              Ropa
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/accessories"
              onClick={closeMenu}
            >
              <i className="bi bi-gem me-2"></i>
              Accesorios
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/about"
              onClick={closeMenu}
            >
              <i className="bi bi-info-circle me-2"></i>
              About
            </NavLink>
          </li>
          <li className={isMenuOpen ? 'mb-2' : ''}>
            <NavLink
              className={({ isActive }) =>
                `text-white text-decoration-none d-block py-2 px-3 ${isActive ? 'fw-bold' : ''}`
              }
              style={{
                transition: '0.3s',
                borderRadius: '5px'
              }}
              to="/contact"
              onClick={closeMenu}
            >
              <i className="bi bi-envelope me-2"></i>
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className={`navbar-actions d-flex ${isMenuOpen ? 'flex-column mt-3' : 'flex-row'} align-items-${isMenuOpen ? 'start' : 'center'} gap-2`}>
          {/* Carrito */}
          <NavLink to="/cart" className="text-decoration-none" onClick={closeMenu}>
            <Button variant="outline-light" size="sm" className="position-relative">
              <i className="bi bi-cart"></i>
              {totalItemsInCart > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.7rem' }}
                >
                  {totalItemsInCart}
                </span>
              )}
              {isMenuOpen && <span className="ms-2">Carrito</span>}
            </Button>
          </NavLink>

          {/* Admin Link (solo si es admin) */}
          {isAuthenticated && isAdmin() && (
            <NavLink to="/admin" className="text-decoration-none" onClick={closeMenu}>
              <Button variant="outline-warning" size="sm">
                <i className="bi bi-shield-check me-1"></i>
                Admin
              </Button>
            </NavLink>
          )}

          {/* Authentication */}
          {isAuthenticated ? (
            <div className={`d-flex ${isMenuOpen ? 'flex-column' : 'flex-row'} align-items-${isMenuOpen ? 'start' : 'center'} gap-2`}>
              {/* User Info */}
              <span className="text-white small" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                <i className="bi bi-person-circle me-1"></i>
                {user?.name}
              </span>
              
              {/* Logout Button */}
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                title="Cerrar Sesión"
              >
                <i className="bi bi-box-arrow-right"></i>
                {isMenuOpen && <span className="ms-2">Salir</span>}
              </Button>
            </div>
          ) : (
            <Link to="/login" className="text-decoration-none" onClick={closeMenu}>
              <Button variant="outline-success" size="sm">
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Iniciar Sesión
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;