// Servicio para manejar las peticiones a la API de productos
const API_BASE_URL = 'https://fakestoreapi.com';

// Mapear categorías de FakeStoreAPI a nuestro formato
const mapCategory = (category) => {
  const categoryMap = {
    "men's clothing": "clothes",
    "women's clothing": "clothes", 
    "jewelery": "accessories",
    "electronics": "accessories"
  };
  return categoryMap[category] || "accessories";
};

// Mapear género basado en la categoría
const mapGender = (category) => {
  const genderMap = {
    "men's clothing": "men",
    "women's clothing": "women",
    "jewelery": "women",
    "electronics": "men"
  };
  return genderMap[category] || "men";
};

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    // Mapear datos de FakeStoreAPI a nuestro formato
    return data.map(item => ({
      id: item.id,
      name: item.title,
      description: item.description,
      price: item.price,
      img: item.image,
      type: mapCategory(item.category),
      category: mapCategory(item.category),
      gender: mapGender(item.category)
    }));
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
    // Mapear el producto individual al mismo formato
    return {
      id: data.id,
      name: data.title,
      description: data.description,
      price: data.price,
      img: data.image,
      type: mapCategory(data.category),
      category: mapCategory(data.category),
      gender: mapGender(data.category)
    };
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