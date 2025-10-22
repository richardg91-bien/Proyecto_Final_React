//Dependencies
import React, { useState, useEffect } from 'react';
import ProductsContext from '../../context/ProductsContext';
import { productService } from '../../services/productService';

// Proveedor del contexto de productos
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localProducts, setLocalProducts] = useState([]);

  // Cargar productos de la API al inicializar
  useEffect(() => {
    loadProducts();
  }, []);

  // Función para cargar productos de la API
  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getProducts();
      // Agregar stock por defecto a productos que no lo tengan
      const productsWithStock = data.map(product => ({
        ...product,
        stock: product.stock !== undefined ? product.stock : Math.floor(Math.random() * 50) + 5 // Stock aleatorio entre 5 y 54
      }));
      setProducts(productsWithStock);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Obtener todos los productos (API + locales)
  const getAllProducts = () => {
    return [...localProducts, ...products];
  };

  // Agregar producto (solo local)
  const agregarProducto = (nuevoProducto) => {
    const productoConId = {
      ...nuevoProducto,
      id: Date.now(), // ID único basado en timestamp
      title: nuevoProducto.nombre,
      name: nuevoProducto.nombre,
      price: parseFloat(nuevoProducto.precio),
      description: nuevoProducto.descripcion,
      category: 'general',
      image: nuevoProducto.imagen || 'https://via.placeholder.com/300x300?text=Nuevo+Producto',
      img: nuevoProducto.imagen || 'https://via.placeholder.com/300x300?text=Nuevo+Producto',
      stock: nuevoProducto.stock ? parseInt(nuevoProducto.stock) : 0,
      isLocal: true // Marca para identificar productos locales
    };

    setLocalProducts(prev => [productoConId, ...prev]);
    return productoConId;
  };

  // Editar producto (TODOS los productos, no solo locales)
  const editarProducto = (id, productosActualizados) => {
    const productId = parseInt(id);
    
    // Buscar si es un producto local
    const esProductoLocal = localProducts.some(p => p.id === productId);
    
    if (esProductoLocal) {
      // Editar producto local
      setLocalProducts(prev => 
        prev.map(producto => 
          producto.id === productId 
            ? {
                ...producto,
                ...productosActualizados,
                title: productosActualizados.nombre || producto.title,
                name: productosActualizados.nombre || producto.name,
                price: productosActualizados.precio ? parseFloat(productosActualizados.precio) : producto.price,
                description: productosActualizados.descripcion || producto.description,
                image: productosActualizados.imagen || producto.image,
                img: productosActualizados.imagen || producto.img,
                stock: productosActualizados.stock ? parseInt(productosActualizados.stock) : (producto.stock || 0),
              }
            : producto
        )
      );
    } else {
      // Crear copia editable del producto de API/Data
      const productoOriginal = products.find(p => p.id === productId);
      if (productoOriginal) {
        const productoEditado = {
          ...productoOriginal,
          ...productosActualizados,
          id: Date.now(), // Nuevo ID para evitar conflictos
          originalId: productId, // Mantener referencia al ID original
          title: productosActualizados.nombre || productoOriginal.title || productoOriginal.name,
          name: productosActualizados.nombre || productoOriginal.name || productoOriginal.title,
          price: productosActualizados.precio ? parseFloat(productosActualizados.precio) : productoOriginal.price,
          description: productosActualizados.descripcion || productoOriginal.description,
          image: productosActualizados.imagen || productoOriginal.image || productoOriginal.img,
          img: productosActualizados.imagen || productoOriginal.img || productoOriginal.image,
          stock: productosActualizados.stock ? parseInt(productosActualizados.stock) : (productoOriginal.stock || 0),
          isLocal: true,
          isEditedVersion: true // Marca para identificar versiones editadas
        };
        
        setLocalProducts(prev => [productoEditado, ...prev]);
        
        // Ocultar el producto original de la lista principal
        setProducts(prev => prev.filter(p => p.id !== productId));
      }
    }
  };

  // Eliminar producto (solo productos locales)
  const eliminarProducto = (id) => {
    setLocalProducts(prev => prev.filter(producto => producto.id !== id));
  };

  // Buscar producto por ID
  const obtenerProductoPorId = (id) => {
    // Buscar primero en productos locales
    const localProduct = localProducts.find(p => p.id === parseInt(id));
    if (localProduct) return localProduct;
    
    // Buscar en productos de API
    const apiProduct = products.find(p => p.id === parseInt(id));
    return apiProduct;
  };

  // Verificar si un producto es editable (TODOS los productos son editables ahora)
  const esProductoEditable = () => {
    return true; // Todos los productos son editables
  };

  // Recargar productos
  const refetch = () => {
    loadProducts();
  };

  const value = {
    // Estados
    products: getAllProducts(),
    loading,
    error,
    localProducts,
    
    // Funciones CRUD
    agregarProducto,
    editarProducto,
    eliminarProducto,
    obtenerProductoPorId,
    esProductoEditable,
    
    // Utilidades
    refetch,
    loadProducts
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;