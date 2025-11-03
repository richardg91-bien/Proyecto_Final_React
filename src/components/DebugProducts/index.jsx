import React, { useState, useEffect } from 'react';
import { config } from '../../config/env';

const DebugProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('🔍 Iniciando petición a MockAPI...');
        const apiUrl = `${config.api.baseUrl}${config.api.productsEndpoint}`;
        console.log('🌐 URL de API:', apiUrl);
        
        const response = await fetch(apiUrl);
        
        console.log('📡 Respuesta recibida:', response);
        console.log('📊 Status:', response.status);
        console.log('✅ OK:', response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📦 Datos recibidos:', data);
        console.log('🔢 Cantidad de productos:', data.length);
        
        if (data.length > 0) {
          console.log('🎯 Primer producto:', data[0]);
          console.log('🖼️ URL de primera imagen:', data[0].img);
        }
        
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('❌ Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;

  return (
    <div style={{padding: '20px'}}>
      <h2>Debug Products - Total: {products.length}</h2>
      {products.slice(0, 3).map((product, index) => (
        <div key={product.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h3>Producto {index + 1}: {product.name}</h3>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>URL:</strong> <a href={product.img} target="_blank" rel="noopener noreferrer">{product.img}</a></p>
          <img 
            src={product.img} 
            alt={product.name}
            style={{maxWidth: '200px', height: 'auto'}}
            onLoad={() => console.log(`✅ Imagen ${index + 1} cargada:`, product.img)}
            onError={(e) => {
              console.error(`❌ Error imagen ${index + 1}:`, product.img);
              console.error('Error event:', e);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DebugProducts;