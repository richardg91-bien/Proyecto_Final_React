//Dependencies
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { useAuth } from './useAuth';

// Hook personalizado para manejar agregar al carrito con autenticación
export const useCartActions = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const addToCart = (product, showSuccessCallback = null) => {
    // Verificar si el usuario está autenticado
    if (!isAuthenticated) {
      // Redirigir al login con la información de que viene de una acción de compra
      navigate('/login', { 
        state: { 
          from: { pathname: '/cart' },
          message: 'Inicia sesión para agregar productos al carrito'
        } 
      });
      return;
    }

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
    
    // Mostrar notificación de éxito si se proporciona el callback
    if (showSuccessCallback) {
      showSuccessCallback();
    }
  };

  return {
    addToCart,
    cartProducts,
    isAuthenticated
  };
};