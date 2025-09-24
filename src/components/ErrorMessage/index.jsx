import React from 'react';
import Button from 'react-bootstrap/Button';

const ErrorMessage = ({ 
  message = "Error al cargar productos. Inténtalo más tarde.", 
  onRetry = null 
}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div className="alert alert-danger text-center mb-4" style={{ maxWidth: '500px' }}>
        <i className="bi bi-exclamation-triangle-fill me-2 fs-4"></i>
        <div className="mt-2">
          <h5 className="alert-heading">¡Oops! Algo salió mal</h5>
          <p className="mb-0" style={{ fontFamily: 'Lato, sans-serif' }}>
            {message}
          </p>
        </div>
      </div>
      {onRetry && (
        <Button 
          variant="outline-primary" 
          onClick={onRetry}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-arrow-clockwise"></i>
          Intentar nuevamente
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;