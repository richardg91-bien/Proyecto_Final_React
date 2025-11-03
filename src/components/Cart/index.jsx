//Dependencies
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
//Internals
// ...eliminado import de CSS legacy...


const CartProducts = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  // Los productos ya vienen con la propiedad quantity, no necesitamos agruparlos
  const cartItems = cartProducts.filter(product => product.quantity > 0);
  
  const subtotal = cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter(product => product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartProducts(cartProducts.map(product => 
        product.id === productId 
          ? { ...product, quantity: newQuantity }
          : product
      ));
    }
  };

  return (
    <div className="cart border-top border-4 border-dark d-flex w-100">
      <div className="cart-items flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Carrito</h2>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => setCartProducts([])}
            disabled={cartProducts.length === 0}
          >
            Vaciar Carrito
          </button>
        </div>
        <table className="table table-bordered align-middle bg-white">
          <thead className="table-light">
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th className="text-center">Cantidad</th>
              <th className="text-end">Precio unitario</th>
              <th className="text-end">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No hay productos en el carrito.</td>
              </tr>
            ) : (
              cartItems.map(product => (
                <tr key={product.id}>
                  <td className="d-flex align-items-center gap-2">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      style={{height: '3em', width: '3em', objectFit: 'cover', borderRadius: 8}} 
                    />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.description}</td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        style={{width: '30px', height: '30px'}}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        style={{width: '30px', height: '30px'}}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-end">${product.price.toFixed(2)}</td>
                  <td className="text-end">${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="total-price bg-white border-start border-bottom border-4 border-dark p-5 d-flex flex-column justify-content-center align-items-center" style={{width: '30vw'}}>
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
  );
};

export default CartProducts;