// Placeholder image generator
// Genera una imagen SVG en caso de que la imagen real falle al cargar

export const generatePlaceholder = (text = 'Producto', width = 300, height = 300) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="20" 
        fill="#999" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const DEFAULT_PRODUCT_IMAGE = generatePlaceholder('Sin Imagen');

export default { generatePlaceholder, DEFAULT_PRODUCT_IMAGE };
