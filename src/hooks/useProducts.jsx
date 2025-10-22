import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

// Productos locales agregados por el admin (simulados)
let localProducts = [];

// Hook personalizado para manejar productos desde la API
export const useProducts = (filter = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
        
        // Aplicar filtro si se proporciona
        if (filter?.type === 'category') {
          data = await productService.getProductsByCategory(filter.value);
        } else if (filter?.type === 'gender') {
          data = await productService.getProductsByGender(filter.value);
        } else {
          data = await productService.getProducts();
        }
        
        // Combinar productos de API con productos locales (locales primero para mayor visibilidad)
        const allProducts = [...localProducts, ...data];
        setProducts(allProducts);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filter?.type, filter?.value]);

  // Función para recargar productos
  const refetch = () => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
        
        if (filter?.type === 'category') {
          data = await productService.getProductsByCategory(filter.value);
        } else if (filter?.type === 'gender') {
          data = await productService.getProductsByGender(filter.value);
        } else {
          data = await productService.getProducts();
        }
        
        // Combinar productos de API con productos locales (locales primero para mayor visibilidad)
        const allProducts = [...localProducts, ...data];
        setProducts(allProducts);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  };

  // Función para agregar producto local
  const addLocalProduct = (newProduct) => {
    localProducts.push(newProduct);
    // Recargar productos para incluir el nuevo
    refetch();
  };

  return {
    products,
    loading,
    error,
    refetch,
    addLocalProduct
  };
};

// Hook específico para un producto individual
export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return {
    product,
    loading,
    error
  };
};