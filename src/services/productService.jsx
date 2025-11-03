// Servicio para manejar las peticiones a la API de productos
import { config } from '../config/env';

const API_BASE_URL = config.api.baseUrl;
const API_PRODUCTS_ENDPOINT = config.api.productsEndpoint;

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_PRODUCTS_ENDPOINT}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    
    // MockAPI ya tiene la estructura correcta, solo devolver los datos
    return data;
  } catch (error) {
    throw new Error(`Error al cargar productos: ${error.message}`);
  }
};

// Obtener producto por ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_PRODUCTS_ENDPOINT}/${id}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    
    // MockAPI ya tiene la estructura correcta
    return data;
  } catch (error) {
    throw new Error(`Error al cargar producto: ${error.message}`);
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  const products = await getProducts();
  return products.filter(product => product.category === category);
};

// Obtener productos por género
export const getProductsByGender = async (gender) => {
  const products = await getProducts();
  return products.filter(product => product.gender === gender);
};

export const productService = {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByGender
};

export default productService;