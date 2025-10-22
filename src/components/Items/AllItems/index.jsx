// Dependencies
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProducts';
import { useCartActions } from '../../../hooks/useCartActions';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';


const AllItems = () => {
  const { products, loading, error, refetch } = useProducts();
  const { addToCart } = useCartActions();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product, () => {
      // Mostrar notificación de éxito
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    });
  };

  if (loading) {
    return <Spinner message="Cargando productos..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div>
      {showSuccess && (
        <div className="alert alert-success alert-dismissible position-fixed top-0 end-0 m-3" style={{zIndex: 1050, fontSize: '12px', padding: '6px 10px', maxWidth: '250px'}}>
          <i className="bi bi-check-circle me-1"></i>
          <small>Producto agregado</small>
          <button type="button" className="btn-close btn-close-sm ms-2" onClick={() => setShowSuccess(false)} style={{fontSize: '10px', padding: '2px'}}></button>
        </div>
      )}
      <div
        className="d-flex flex-wrap justify-content-center align-items-center w-100"
        style={{ minHeight: '60vh' }}
      >
      {products.map((product) => (
        <div
          key={product.id}
          className="card h-100 m-2 shadow-sm"
          style={{
            width: '18rem',
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Link to={`/products/${product.id}`} className="text-decoration-none">
            <div className="card-img-top-wrapper" style={{height: '250px', overflow: 'hidden'}}>
              <img
                alt={product.name}
                src={product.img}
                className="card-img-top"
                style={{ 
                  height: '100%', 
                  objectFit: 'cover', 
                  width: '100%',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </Link>
          
          <div className="card-body d-flex flex-column">
            <Link to={`/products/${product.id}`} className="text-decoration-none">
              <h5 className="card-title text-dark mb-2" style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                height: '2.6em',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>
                {product.name}
              </h5>
              <p className="card-text text-muted small mb-3" style={{
                height: '3em',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.5'
              }}>
                {product.description}
              </p>
            </Link>
            
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 text-success fw-bold mb-0">${product.price}</span>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="btn-sm"
                  onClick={() => handleAddToCart(product)}
                  style={{borderRadius: '20px'}}
                >
                  <i className="bi bi-cart-plus"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AllItems;