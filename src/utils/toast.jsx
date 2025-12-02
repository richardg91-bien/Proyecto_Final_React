import { toast } from 'react-toastify';

// Configuraciones predeterminadas para cada tipo de toast
const defaultOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Toast de éxito
export const showSuccessToast = (message, options = {}) => {
  toast.success(message, {
    ...defaultOptions,
    ...options,
  });
};

// Toast de error
export const showErrorToast = (message, options = {}) => {
  toast.error(message, {
    ...defaultOptions,
    ...options,
  });
};

// Toast de advertencia
export const showWarningToast = (message, options = {}) => {
  toast.warning(message, {
    ...defaultOptions,
    ...options,
  });
};

// Toast informativo
export const showInfoToast = (message, options = {}) => {
  toast.info(message, {
    ...defaultOptions,
    ...options,
  });
};

// Toast personalizado para agregar al carrito
export const showAddToCartToast = (productName) => {
  toast.success(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '1.2rem' }}></i>
      <div>
        <strong>¡Agregado al carrito!</strong>
        <div style={{ fontSize: '0.85rem', marginTop: '2px' }}>{productName}</div>
      </div>
    </div>,
    {
      ...defaultOptions,
      autoClose: 2000,
    }
  );
};

// Toast para producto eliminado
export const showRemoveFromCartToast = (productName) => {
  toast.info(
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-trash me-2" style={{ fontSize: '1.2rem' }}></i>
      <div>
        <strong>Producto eliminado</strong>
        <div style={{ fontSize: '0.85rem', marginTop: '2px' }}>{productName}</div>
      </div>
    </div>,
    {
      ...defaultOptions,
      autoClose: 2000,
    }
  );
};

// Toast para login exitoso
export const showLoginSuccessToast = (userName) => {
  toast.success(
    <div>
      <strong>¡Bienvenido/a!</strong>
      <div style={{ fontSize: '0.85rem', marginTop: '2px' }}>{userName}</div>
    </div>,
    {
      ...defaultOptions,
      autoClose: 2500,
    }
  );
};

// Toast para logout
export const showLogoutToast = () => {
  toast.info('Sesión cerrada correctamente', {
    ...defaultOptions,
    autoClose: 2000,
  });
};
