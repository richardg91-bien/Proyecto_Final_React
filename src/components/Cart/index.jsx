//Dependencies
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiTrash2, FiPlus, FiMinus, FiShoppingCart, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
//Internals

// Styled Components
const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;

  svg {
    font-size: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  h3 {
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    color: #999;
  }
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #dee2e6;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #f8f9fa;
    border-color: #adb5bd;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 14px;
  }
`;

const ProductImage = styled.img`
  height: 3.5em;
  width: 3.5em;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: #dc3545;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;

  &:hover {
    background: #fff5f5;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CartProducts = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // Los productos ya vienen con la propiedad quantity, no necesitamos agruparlos
  const cartItems = cartProducts.filter(product => product.quantity > 0);
  
  const subtotal = cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  const removeFromCart = (productId, productName) => {
    setCartProducts(cartProducts.filter(product => product.id !== productId));
    toast.info(`${productName} eliminado del carrito`, {
      position: "bottom-right",
      autoClose: 2000,
      icon: <FiTrash2 />,
    });
  };

  const updateQuantity = (productId, newQuantity, productName) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, productName);
    } else {
      setCartProducts(cartProducts.map(product => 
        product.id === productId 
          ? { ...product, quantity: newQuantity }
          : product
      ));
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    toast.success('Carrito vaciado correctamente', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Carrito de Compras - Indumentaria Agat</title>
        <meta 
          name="description" 
          content="Revisa y gestiona los productos en tu carrito de compras. Completa tu compra en Indumentaria Agat." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="cart border-top border-4 border-dark d-flex w-100 flex-wrap">
        <div className="cart-items flex-grow-1 p-4" style={{ minWidth: '300px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2 className="mb-0 d-flex align-items-center gap-2">
              <FiShoppingCart />
              Carrito
            </h2>
            <button
              className="btn btn-danger btn-sm d-flex align-items-center gap-2"
              onClick={clearCart}
              disabled={cartProducts.length === 0}
            >
              <FiTrash2 />
              Vaciar Carrito
            </button>
          </div>
        <div className="table-responsive">
          <table className="table table-bordered align-middle bg-white">
            <thead className="table-light">
              <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th className="text-center">Cantidad</th>
                <th className="text-end">Precio unitario</th>
                <th className="text-end">Subtotal</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-0">
                  <EmptyCartContainer>
                    <FiShoppingCart />
                    <h3>Tu carrito está vacío</h3>
                    <p>Agrega productos para comenzar tu compra</p>
                  </EmptyCartContainer>
                </td>
              </tr>
            ) : (
              cartItems.map(product => (
                <tr key={product.id}>
                  <td className="d-flex align-items-center gap-2">
                    <ProductImage 
                      src={product.img} 
                      alt={product.name} 
                    />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.description}</td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <QuantityButton
                        onClick={() => updateQuantity(product.id, product.quantity - 1, product.name)}
                        title="Disminuir cantidad"
                      >
                        <FiMinus />
                      </QuantityButton>
                      <span className="mx-2 fw-bold">{product.quantity}</span>
                      <QuantityButton
                        onClick={() => updateQuantity(product.id, product.quantity + 1, product.name)}
                        title="Aumentar cantidad"
                      >
                        <FiPlus />
                      </QuantityButton>
                    </div>
                  </td>
                  <td className="text-end">${product.price.toFixed(2)}</td>
                  <td className="text-end fw-bold">${(product.price * product.quantity).toFixed(2)}</td>
                  <td className="text-center">
                    <DeleteButton
                      onClick={() => removeFromCart(product.id, product.name)}
                      title="Eliminar producto"
                    >
                      <FiTrash2 />
                    </DeleteButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          </table>
        </div>
        </div>
        <div className="total-price bg-white border-start border-bottom border-4 border-dark p-5 d-flex flex-column justify-content-center align-items-center" style={{width: '30vw', minWidth: '300px'}}>
          <h2 className="text-center mb-4">Resumen</h2>
          <div className="w-100">
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>IVA (21%)</span>
              <span>${iva.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between border-top pt-2 mt-2 fw-bold fs-5">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;