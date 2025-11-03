// Servicio para manejar las peticiones a la API de productos
const API_BASE_URL = 'https://69000051e02b16d1753fd8e6.mockapi.io';

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
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
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
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