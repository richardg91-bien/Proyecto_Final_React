//Dependencies
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDeleteModal = ({ show, onHide, onConfirm, productName, isDeleting }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="md"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title style={{fontFamily: 'Lato, sans-serif'}}>
          <i className="bi bi-exclamation-triangle text-warning me-2"></i>
          Confirmar Eliminación
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        <div className="text-center">
          <i className="bi bi-trash text-danger mb-3" style={{fontSize: '3rem'}}></i>
          <h5 className="mb-3" style={{fontFamily: 'Quicksand, sans-serif'}}>
            ¿Estás seguro que deseas eliminar este producto?
          </h5>
          <p className="text-muted mb-4" style={{fontFamily: 'Quicksand, sans-serif'}}>
            <strong>"{productName}"</strong>
            <br />
            Esta acción no se puede deshacer.
          </p>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="d-flex justify-content-center gap-3">
        <Button 
          variant="outline-secondary"
          onClick={onHide}
          disabled={isDeleting}
          style={{fontFamily: 'Quicksand, sans-serif'}}
        >
          <i className="bi bi-x-circle me-2"></i>
          Cancelar
        </Button>
        
        <Button 
          variant="danger"
          onClick={onConfirm}
          disabled={isDeleting}
          style={{fontFamily: 'Quicksand, sans-serif'}}
        >
          {isDeleting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Eliminando...
            </>
          ) : (
            <>
              <i className="bi bi-trash me-2"></i>
              Eliminar Producto
            </>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;