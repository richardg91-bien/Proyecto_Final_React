//Dependencies
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/useAuth';
import CartContext from '../../../../../context/CartContext';
import logo from '../../../../../assets/logo1.jpeg';
import OptimizedImage from '../../../../OptimizedImage';
import { 
  FaHome, FaShoppingCart, FaUser, FaShieldAlt, 
  FaSignInAlt, FaSignOutAlt, FaUserCircle, FaBars, FaTimes 
} from 'react-icons/fa';
import { 
  BsFillBagFill, BsGem, BsInfoCircle, BsEnvelope 
} from 'react-icons/bs';
import { GiClothes } from 'react-icons/gi';

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
          <OptimizedImage 
            src={logo} 
            alt="Indumentaria Agat Logo" 
            width="40"
            height="40"
            loading="eager"
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
          {isMenuOpen ? <FaTimes /> : <FaBars />}
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
              <FaHome className="me-2" />
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
              <FaUser className="me-2" />
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
              <FaUser className="me-2" />
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
              <GiClothes className="me-2" />
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
              <BsGem className="me-2" />
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
              <BsInfoCircle className="me-2" />
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
              <BsEnvelope className="me-2" />
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className={`navbar-actions d-flex ${isMenuOpen ? 'flex-column mt-3' : 'flex-row'} align-items-${isMenuOpen ? 'start' : 'center'} gap-2`}>
          {/* Carrito */}
          <NavLink to="/cart" className="text-decoration-none" onClick={closeMenu}>
            <Button variant="outline-light" size="sm" className="position-relative" aria-label="Ver carrito de compras">
              <FaShoppingCart />
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
              <Button variant="outline-warning" size="sm" aria-label="Panel de administración">
                <FaShieldAlt className="me-1" />
                Admin
              </Button>
            </NavLink>
          )}

          {/* Authentication */}
          {isAuthenticated ? (
            <div className={`d-flex ${isMenuOpen ? 'flex-column' : 'flex-row'} align-items-${isMenuOpen ? 'start' : 'center'} gap-2`}>
              {/* User Info */}
              <span className="text-white small" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                <FaUserCircle className="me-1" />
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
                aria-label="Cerrar sesión"
              >
                <FaSignOutAlt />
                {isMenuOpen && <span className="ms-2">Salir</span>}
              </Button>
            </div>
          ) : (
            <Link to="/login" className="text-decoration-none" onClick={closeMenu}>
              <Button variant="outline-success" size="sm" aria-label="Iniciar sesión">
                <FaSignInAlt className="me-1" />
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