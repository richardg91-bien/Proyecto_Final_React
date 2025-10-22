//Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './ProductForm.css';
import { useProductsContext } from '../../hooks/useProductsContext';

const ProductForm = ({ onClose, editProduct = null, mode = 'add' }) => {
  const { agregarProducto, editarProducto } = useProductsContext();
  
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    stock: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Llenar formulario en modo editar
  useEffect(() => {
    if (mode === 'edit' && editProduct) {
      setFormData({
        nombre: editProduct.name || editProduct.title || '',
        precio: editProduct.price || '',
        descripcion: editProduct.description || '',
        imagen: editProduct.img || editProduct.image || '',
        stock: editProduct.stock || '0'
      });
    }
  }, [mode, editProduct]);

  // Manejo del estado del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validaciones del formulario
  const validateForm = () => {
    const newErrors = {};
    
    // Todos los campos obligatorios
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre del producto es obligatorio';
    }
    
    if (!formData.precio) {
      newErrors.precio = 'El precio es obligatorio';
    } else if (parseFloat(formData.precio) <= 0) {
      newErrors.precio = 'El precio debe ser mayor a 0';
    } else if (isNaN(parseFloat(formData.precio))) {
      newErrors.precio = 'El precio debe ser un número válido';
    }
    
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es obligatoria';
    } else if (formData.descripcion.trim().length < 10) {
      newErrors.descripcion = 'La descripción debe tener al menos 10 caracteres';
    }

    // Validación de imagen (opcional pero si se proporciona debe ser URL válida)
    if (formData.imagen && formData.imagen.trim()) {
      const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      if (!urlPattern.test(formData.imagen.trim())) {
        newErrors.imagen = 'Debe ser una URL válida (ej: https://ejemplo.com/imagen.jpg)';
      }
    }

    // Validación de stock (opcional pero si se proporciona debe ser número válido)
    if (formData.stock && formData.stock.trim()) {
      const stockValue = parseInt(formData.stock);
      if (isNaN(stockValue) || stockValue < 0) {
        newErrors.stock = 'El stock debe ser un número entero mayor o igual a 0';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para agregar/editar producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mode === 'edit' && editProduct) {
        // Modo editar
        editarProducto(editProduct.id, formData);
        console.log('Producto editado:', editProduct.id, formData);
      } else {
        // Modo agregar
        const nuevoProducto = agregarProducto(formData);
        console.log('Producto agregado:', nuevoProducto);
      }
      
      // Mostrar mensaje de éxito
      setShowSuccess(true);
      
      // Limpiar formulario solo en modo agregar
      if (mode === 'add') {
        setFormData({ nombre: '', precio: '', descripcion: '', imagen: '', stock: '' });
      }
      
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        if (onClose) {
          onClose();
        }
      }, 3000);
      
    } catch (error) {
      console.error('Error al procesar producto:', error);
      setErrors({ submit: 'Error al procesar el producto. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-form">
      {/* Mensaje de éxito */}
      {showSuccess && (
        <Alert variant="success" className="mb-4">
          <i className="bi bi-check-circle-fill me-2"></i>
          {mode === 'edit' ? '¡Producto editado exitosamente!' : '¡Producto agregado exitosamente!'}
        </Alert>
      )}

      {/* Error general */}
      {errors.submit && (
        <Alert variant="danger" className="mb-4">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {errors.submit}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Nombre del producto */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
            Nombre del Producto *
          </Form.Label>
          <Form.Control
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            isInvalid={!!errors.nombre}
            isValid={formData.nombre.trim() && !errors.nombre}
            placeholder="Ingresa el nombre del producto"
            style={{fontFamily: 'Quicksand, sans-serif'}}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            ¡Nombre válido!
          </Form.Control.Feedback>
        </Form.Group>

        {/* Precio */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="precio" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
            Precio ($) *
          </Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            min="0"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            isInvalid={!!errors.precio}
            isValid={formData.precio && parseFloat(formData.precio) > 0 && !errors.precio}
            placeholder="0.00"
            style={{fontFamily: 'Quicksand, sans-serif'}}
          />
          <Form.Control.Feedback type="invalid">
            {errors.precio}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            ¡Precio válido!
          </Form.Control.Feedback>
        </Form.Group>

        {/* Descripción */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="descripcion" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
            Descripción *
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            isInvalid={!!errors.descripcion}
            isValid={formData.descripcion.trim().length >= 10 && !errors.descripcion}
            placeholder="Describe el producto (mínimo 10 caracteres)"
            style={{fontFamily: 'Quicksand, sans-serif'}}
          />
          <Form.Control.Feedback type="invalid">
            {errors.descripcion}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            ¡Descripción válida!
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            {formData.descripcion.length}/10 caracteres mínimos
          </Form.Text>
        </Form.Group>

        {/* Imagen URL */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="imagen" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
            URL de la Imagen
          </Form.Label>
          <Form.Control
            type="url"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleInputChange}
            isInvalid={!!errors.imagen}
            isValid={formData.imagen.trim() && !errors.imagen}
            placeholder="https://ejemplo.com/imagen.jpg"
            style={{fontFamily: 'Quicksand, sans-serif'}}
          />
          <Form.Control.Feedback type="invalid">
            {errors.imagen}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            ¡URL válida!
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            URL completa de la imagen del producto (opcional)
          </Form.Text>
        </Form.Group>

        {/* Stock */}
        <Form.Group className="mb-4">
          <Form.Label htmlFor="stock" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
            Stock Disponible
          </Form.Label>
          <Form.Control
            type="number"
            min="0"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            isInvalid={!!errors.stock}
            isValid={formData.stock && parseInt(formData.stock) >= 0 && !errors.stock}
            placeholder="0"
            style={{fontFamily: 'Quicksand, sans-serif'}}
          />
          <Form.Control.Feedback type="invalid">
            {errors.stock}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            ¡Stock válido!
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Cantidad disponible en inventario (opcional)
          </Form.Text>
        </Form.Group>

        {/* Botones */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button 
            type="submit" 
            variant="primary"
            disabled={isSubmitting}
            className="me-md-2"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: '600'
            }}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                {mode === 'edit' ? 'Actualizando...' : 'Agregando...'}
              </>
            ) : (
              <>
                <i className={`bi ${mode === 'edit' ? 'bi-pencil-square' : 'bi-plus-circle'} me-2`}></i>
                {mode === 'edit' ? 'Actualizar Producto' : 'Agregar Producto'}
              </>
            )}
          </Button>
          
          {onClose && (
            <Button 
              type="button" 
              variant="outline-secondary"
              onClick={onClose}
              disabled={isSubmitting}
              style={{fontFamily: 'Quicksand, sans-serif'}}
            >
              Cancelar
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;