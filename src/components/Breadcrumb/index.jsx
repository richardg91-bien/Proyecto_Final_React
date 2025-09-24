//Dependencies
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//Internals

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const generateBreadcrumbName = (segment) => {
    const breadcrumbMap = {
      'women': 'Mujer',
      'men': 'Hombre', 
      'clothes': 'Ropa',
      'accessories': 'Accesorios',
      'about': 'Acerca de',
      'contact': 'Contacto',
      'cart': 'Carrito',
      'products': 'Producto'
    };

    return breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const generateBreadcrumbPath = (index) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  // No mostrar breadcrumb en la página de inicio
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="bg-light border-bottom">
      <div className="container">
        <ol className="breadcrumb mb-0 py-2" style={{fontFamily: 'Quicksand, sans-serif'}}>
          <li className="breadcrumb-item">
            <Link 
              to="/" 
              className="text-decoration-none text-muted"
              style={{fontSize: '0.9rem'}}
            >
              <i className="bi bi-house-fill me-1"></i>
              Inicio
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const path = generateBreadcrumbPath(index);
            const isLast = index === pathSegments.length - 1;
            const name = generateBreadcrumbName(segment);

            return (
              <li 
                key={path} 
                className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {isLast ? (
                  <span 
                    className="text-dark fw-medium"
                    style={{fontSize: '0.9rem'}}
                  >
                    {name}
                  </span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-decoration-none text-muted"
                    style={{fontSize: '0.9rem'}}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;