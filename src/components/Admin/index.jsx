//Dependencies
import React, { useState } from 'react';
import { Button, Card, Table, Modal, Toast, ToastContainer, Badge } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { useProductsContext } from '../../hooks/useProductsContext';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import ProductForm from '../ProductForm';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

const Admin = () => {
  const { user } = useAuth();
  const { products, loading, error, localProducts, eliminarProducto, esProductoEditable, refetch } = useProductsContext();
  const [showProductForm, setShowProductForm] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formMode, setFormMode] = useState('add'); // 'add' o 'edit'
  const [lastAddedProduct, setLastAddedProduct] = useState(null);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    totalUsers: 0,
    pendingOrders: 0
  });

  // Funciones para manejar productos
  const handleAddProduct = () => {
    setFormMode('add');
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const handleEditProduct = (product) => {
    setFormMode('edit');
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;
    
    setIsDeleting(true);
    try {
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      eliminarProducto(productToDelete.id);
      setShowSuccessToast(true);
      setLastAddedProduct({ name: productToDelete.name });
      
      // Ocultar toast después de 3 segundos
      setTimeout(() => setShowSuccessToast(false), 3000);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  // Simular estadísticas
  React.useEffect(() => {
    if (products && products.length > 0) {
      setStats({
        totalProducts: products.length,
        totalSales: Math.floor(Math.random() * 10000) + 5000,
        totalUsers: Math.floor(Math.random() * 500) + 100,
        pendingOrders: Math.floor(Math.random() * 50) + 5
      });
    }
  }, [products]);

  if (loading) {
    return <Spinner message="Cargando panel de administración..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="admin-page bg-light min-vh-100">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h2 fw-bold mb-1" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                  Panel de Administración
                </h1>
                <p className="text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif'}}>
                  Bienvenido, {user?.name}
                </p>
              </div>
              <div className="badge bg-success px-3 py-2">
                <i className="bi bi-shield-check me-2"></i>
                Administrador
              </div>
            </div>

            {/* Estadísticas */}
            <div className="row mb-5">
              <div className="col-md-3 mb-3">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="text-center">
                    <i className="bi bi-box-seam text-primary mb-3" style={{fontSize: '3rem'}}></i>
                    <h3 className="h4 fw-bold">{stats.totalProducts}</h3>
                    <p className="text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      Productos
                    </p>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="col-md-3 mb-3">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="text-center">
                    <i className="bi bi-graph-up text-success mb-3" style={{fontSize: '3rem'}}></i>
                    <h3 className="h4 fw-bold">${stats.totalSales.toLocaleString()}</h3>
                    <p className="text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      Ventas Totales
                    </p>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="col-md-3 mb-3">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="text-center">
                    <i className="bi bi-people text-info mb-3" style={{fontSize: '3rem'}}></i>
                    <h3 className="h4 fw-bold">{stats.totalUsers}</h3>
                    <p className="text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      Usuarios
                    </p>
                  </Card.Body>
                </Card>
              </div>
              
              <div className="col-md-3 mb-3">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="text-center">
                    <i className="bi bi-clock text-warning mb-3" style={{fontSize: '3rem'}}></i>
                    <h3 className="h4 fw-bold">{stats.pendingOrders}</h3>
                    <p className="text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      Pedidos Pendientes
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>

            {/* Gestión de Productos */}
            <div className="row">
              <div className="col-12">
                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-white border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="h5 mb-0" style={{fontFamily: 'Lato, sans-serif'}}>
                        Gestión de Productos
                      </h4>
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={handleAddProduct}
                      >
                        <i className="bi bi-plus-circle me-2"></i>
                        Nuevo Producto
                      </Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <div className="table-responsive">
                      <Table className="mb-0" hover>
                        <thead className="bg-light">
                          <tr>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>ID</th>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>Producto</th>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>Categoría</th>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>Precio</th>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>Stock</th>
                            <th style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.slice(0, 10).map((product) => (
                            <tr key={product.id}>
                              <td>
                                <small className="text-muted">#{product.id}</small>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img 
                                    src={product.img} 
                                    alt={product.name}
                                    style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                    className="rounded me-3"
                                  />
                                  <div>
                                    <div style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                                      {product.name.length > 30 ? 
                                        `${product.name.substring(0, 30)}...` : 
                                        product.name
                                      }
                                    </div>
                                    {/* Indicador para productos locales */}
                                    {product.id > 1000000000000 && (
                                      <small className="badge bg-primary ms-1">NUEVO</small>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-light text-dark">
                                  {product.category}
                                </span>
                              </td>
                              <td>
                                <span className="fw-bold text-success">${product.price}</span>
                              </td>
                              <td>
                                {product.stock !== undefined ? (
                                  <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-warning text-dark'}`}>
                                    {product.stock > 0 ? `${product.stock} unidades` : 'Sin stock'}
                                  </span>
                                ) : (
                                  <span className="badge bg-secondary">No definido</span>
                                )}
                              </td>
                              <td>
                                <div className="btn-group" role="group">
                                  <Button 
                                    variant="outline-primary" 
                                    size="sm"
                                    onClick={() => handleEditProduct(product)}
                                    title="Editar producto"
                                  >
                                    <i className="bi bi-pencil"></i>
                                  </Button>
                                  {esProductoEditable(product.id) && (
                                    <Button 
                                      variant="outline-danger" 
                                      size="sm"
                                      onClick={() => handleDeleteProduct(product)}
                                      title="Eliminar producto"
                                    >
                                      <i className="bi bi-trash"></i>
                                    </Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-light text-center">
                    <small className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                      Mostrando 10 de {products.length} productos
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>

            {/* Acciones Rápidas */}
            <div className="row mt-4">
              <div className="col-12">
                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0" style={{fontFamily: 'Lato, sans-serif'}}>
                      Acciones Rápidas
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <Button 
                          variant="outline-primary" 
                          className="w-100 py-3"
                          onClick={() => alert('Funcionalidad en desarrollo')}
                        >
                          <i className="bi bi-file-earmark-text d-block mb-2" style={{fontSize: '2rem'}}></i>
                          Generar Reporte
                        </Button>
                      </div>
                      <div className="col-md-4 mb-3">
                        <Button 
                          variant="outline-success" 
                          className="w-100 py-3"
                          onClick={() => refetch()}
                        >
                          <i className="bi bi-arrow-clockwise d-block mb-2" style={{fontSize: '2rem'}}></i>
                          Actualizar Datos
                        </Button>
                      </div>
                      <div className="col-md-4 mb-3">
                        <Button 
                          variant="outline-warning" 
                          className="w-100 py-3"
                          onClick={() => alert('Funcionalidad en desarrollo')}
                        >
                          <i className="bi bi-gear d-block mb-2" style={{fontSize: '2rem'}}></i>
                          Configuración
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para agregar producto */}
      <Modal 
        show={showProductForm} 
        onHide={() => setShowProductForm(false)}
        size="lg"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: 'Lato, sans-serif'}}>
            <i className={`bi ${formMode === 'edit' ? 'bi-pencil-square' : 'bi-plus-circle'} me-2`}></i>
            {formMode === 'edit' ? 'Editar Producto' : 'Agregar Nuevo Producto'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <ProductForm 
            mode={formMode}
            editProduct={editingProduct}
            onClose={() => {
              setShowProductForm(false);
              setEditingProduct(null);
              setFormMode('add');
            }}
          />
        </Modal.Body>
      </Modal>

      {/* Toast de éxito */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showSuccessToast} 
          onClose={() => setShowSuccessToast(false)}
          delay={4000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            <strong className="me-auto">
              {formMode === 'edit' ? 'Producto Actualizado' : 'Producto Agregado'}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            <strong>{lastAddedProduct?.name}</strong> se procesó exitosamente.
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Modal de confirmación de eliminación */}
      <ConfirmDeleteModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setProductToDelete(null);
        }}
        onConfirm={confirmDelete}
        productName={productToDelete?.name || productToDelete?.title || ''}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default Admin;