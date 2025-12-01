//Dependencies
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../../hooks/useProducts';
import { useCartActions } from '../../hooks/useCartActions';
import { showAddToCartToast } from '../../utils/toast';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

const Accessories = () => {
  const { products, loading, error, refetch } = useProducts({ type: 'category', value: 'accessories' });
  const { addToCart } = useCartActions();

  const handleAddToCart = (product) => {
    addToCart(product, () => {
      showAddToCartToast(product.name);
    });
  };

  if (loading) {
    return <Spinner message="Cargando accesorios..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <>
      <Helmet>
        <title>Accesorios - Indumentaria Agat</title>
        <meta name="description" content="Complementa tu estilo con nuestros accesorios exclusivos. Encuentra el detalle perfecto para cada look." />
        <meta name="keywords" content="accesorios, complementos, moda, estilo, accesorios moda" />
      </Helmet>

      <div className="accessories border-top border-4 border-dark bg-white">
        <div className="accessories-title my-5 text-uppercase text-center fw-light" style={{fontFamily: 'Lato, sans-serif', color: 'rgba(0,0,0,0.8)'}}>
          <h4>Accesorios</h4>
        </div>
        <Container fluid className="pb-4">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
            {products.map((product) => (
              <Col key={product.id}>
                <div className="card h-100 shadow-sm" style={{transition: 'all 0.2s', borderRadius: '12px', overflow: 'hidden'}}
                  onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';}}
                  onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';}}>
                  <Link to={`/products/${product.id}`} className="text-decoration-none">
                    <div style={{height: '250px', overflow: 'hidden'}}>
                      <img alt={product.name} src={product.img} loading="lazy" className="card-img-top"
                        style={{height: '100%', objectFit: 'cover', width: '100%', transition: 'transform 0.3s ease'}}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <Link to={`/products/${product.id}`} className="text-decoration-none">
                      <h5 className="card-title text-dark mb-2" style={{fontSize: '1.1rem', fontWeight: '600', height: '2.6em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', fontFamily: 'Quicksand, sans-serif'}}>
                        {product.name}
                      </h5>
                      <p className="card-text text-muted small mb-3" style={{height: '3em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: '1.5'}}>
                        {product.description}
                      </p>
                    </Link>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 text-success fw-bold mb-0" style={{fontFamily: 'Lato, sans-serif'}}>${product.price}</span>
                        <Button variant="primary" size="sm" onClick={() => handleAddToCart(product)}
                          style={{borderRadius: '20px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                          <FiShoppingCart size={16} />Agregar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Accessories;