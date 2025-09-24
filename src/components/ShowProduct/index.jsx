//Dependencies
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//Internals
import { getProductById } from '../../services/productService';
import CartContext from '../../context/CartContext';
// import { useProducts } from '../../hooks/useProducts';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

const ShowProduct = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  // Removemos temporalmente el hook de productos para simplificar
  // const { products, loading: productsLoading } = useProducts();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const product = await getProductById(parseInt(id));
        setCurrentProduct(product);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const addToCart = (product) => {
    const existingProduct = cartProducts.find(item => item.id === product.id);
    if (existingProduct) {
      // Si el producto ya existe, aumentar la cantidad
      setCartProducts(cartProducts.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si es un producto nuevo, agregarlo con cantidad 1
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
    
    // Mostrar notificación de éxito
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (loading) {
    return <Spinner message="Cargando producto..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  if (!currentProduct) {
    return (
      <div className="container text-center py-5">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe.</p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  // Temporalmente comentamos productos similares para simplificar
  // const similarProducts = products.filter(product =>
  //   product.gender === currentProduct.gender &&
  //   product.type === currentProduct.type &&
  //   product.id !== currentProduct.id
  // ).slice(0, 3);

  return (
    <div className="show-product">
      {showSuccess && (
        <div className="alert alert-success alert-dismissible position-fixed top-0 end-0 m-3" style={{zIndex: 1050, fontSize: '12px', padding: '6px 10px', maxWidth: '250px'}}>
          <i className="bi bi-check-circle me-1"></i>
          <small>Producto agregado</small>
          <button type="button" className="btn-close btn-close-sm ms-2" onClick={() => setShowSuccess(false)} style={{fontSize: '10px', padding: '2px'}}></button>
        </div>
      )}
      
      <div className="container-fluid py-5">
        {/* Botón Volver */}
        <div className="row justify-content-center mb-3">
          <div className="col-lg-10">
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={() => window.history.back()}
              className="d-flex align-items-center gap-2"
              style={{width: 'fit-content'}}
            >
              <i className="bi bi-arrow-left"></i>
              Volver
            </Button>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0">
              <div className="row g-0">
                {/* Imagen del producto */}
                <div className="col-md-6">
                  <div className="p-4 d-flex justify-content-center align-items-center" style={{minHeight: '500px'}}>
                    <img 
                      src={currentProduct.img} 
                      alt={currentProduct.name}
                      className="img-fluid rounded"
                      style={{
                        maxHeight: '450px', 
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
                
                {/* Información del producto */}
                <div className="col-md-6">
                  <div className="card-body p-5">
                    <h1 className="card-title h2 mb-3 fw-bold text-dark">
                      {currentProduct.name}
                    </h1>
                    
                    <div className="mb-3">
                      <span className="badge bg-primary text-uppercase fs-6 mb-2">
                        {currentProduct.category}
                      </span>
                    </div>
                    
                    <p className="card-text fs-6 text-muted mb-4 lh-base">
                      {currentProduct.description}
                    </p>
                    
                    <div className="price-section mb-4">
                      <h3 className="text-success fw-bold mb-0">
                        ${currentProduct.price}
                      </h3>
                      <small className="text-muted">Precio incluye IVA</small>
                    </div>
                    
                    <div className="rating mb-4">
                      <div className="d-flex align-items-center">
                        <div className="stars me-2">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-half text-warning"></i>
                        </div>
                        <small className="text-muted">(4.5/5)</small>
                      </div>
                    </div>
                    
                    <div className="action-buttons">
                      <Button 
                        variant="primary" 
                        size="lg"
                        className="w-100 mb-3"
                        onClick={() => addToCart(currentProduct)}
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Agregar al Carrito
                      </Button>
                      
                      <div className="row">
                        <div className="col-6">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            className="w-100"
                          >
                            <i className="bi bi-heart me-1"></i>
                            Favoritos
                          </Button>
                        </div>
                        <div className="col-6">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            className="w-100"
                          >
                            <i className="bi bi-share me-1"></i>
                            Compartir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Temporalmente comentamos la sección de productos similares
      <div className="similar-products bg-white" style={{height: '40em', overflow: 'scroll', fontFamily: 'Lato, sans-serif', margin: '0 3em'}}>
        <h5>También te podría gustar</h5>
        {productsLoading ? (
          <div className="text-center py-3">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          similarProducts.map(product => (
            <Link to={`/products/${product.id}`} key={product.id} className="text-decoration-none text-dark">
              <div className="similar-product d-flex flex-column m-2 p-3 bg-white" style={{height: '30em', width: '20em', fontFamily: 'Quicksand, sans-serif', overflow: 'hidden', transition: 'transform 300ms cubic-bezier(.68,-0.55,.27,1.55)'}}>
                <div className="product-img">
                  <img alt={product.name} src={product.img} style={{height: '20em'}} />
                </div>
                <div className="product-details">
                  <h1 id="product-name" className="border-top pt-3 mt-2 mb-2" style={{fontSize: '1.5em', fontFamily: 'Lato, sans-serif'}}>{product.name}</h1>
                  <h4 id="product-description" className="text-secondary fw-light m-0" style={{fontSize: '1em', fontFamily: 'Lato, sans-serif'}}>{product.description}</h4>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      */}
    </div>
  );
};

export default ShowProduct;