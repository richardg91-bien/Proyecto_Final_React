# 🔧 Variables de Entorno - Guía de Uso

## 📁 Archivos Creados

- **`.env`** - Variables de entorno para desarrollo (NO subir a Git)
- **`.env.example`** - Plantilla de ejemplo para otros desarrolladores
- **`src/components/EnvDisplay/index.jsx`** - Componente para mostrar variables en desarrollo

## 🚀 Configuración

### 1. Variables Disponibles

```bash
# API Configuration
VITE_API_BASE_URL=https://69000051e02b16d1753fd8e6.mockapi.io
VITE_API_PRODUCTS_ENDPOINT=/products

# App Configuration
VITE_APP_NAME=Indumentaria Agat
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=E-Commerce de Moda de Calidad

# Development Configuration
VITE_DEV_MODE=true
VITE_ENABLE_DEBUG=true

# Features Flags
VITE_ENABLE_ADMIN_PANEL=true
VITE_ENABLE_LOCAL_PRODUCTS=true
VITE_ENABLE_CART_PERSISTENCE=true

# Image Configuration
VITE_IMAGES_BASE_PATH=/images/products
VITE_DEFAULT_PRODUCT_IMAGE=https://via.placeholder.com/300x300?text=Producto

# Authentication Configuration
VITE_ENABLE_DEMO_ACCOUNTS=true
VITE_SESSION_TIMEOUT=3600000

# UI Configuration
VITE_DEFAULT_CURRENCY=€
VITE_ITEMS_PER_PAGE=12
```

### 2. Cómo Usar las Variables

En Vite, las variables de entorno deben comenzar con `VITE_` para ser accesibles en el frontend:

```javascript
// ✅ Correcto
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;

// ❌ Incorrecto (no funcionará)
const apiUrl = process.env.VITE_API_BASE_URL;
```

### 3. Ejemplos de Uso

#### En servicios:
```javascript
// src/services/productService.jsx
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://default-api.com';
const response = await fetch(`${API_BASE_URL}/products`);
```

#### En componentes:
```javascript
// En cualquier componente
const appName = import.meta.env.VITE_APP_NAME;
const isDebugMode = import.meta.env.VITE_ENABLE_DEBUG === 'true';

return (
  <div>
    <h1>{appName}</h1>
    {isDebugMode && <DebugInfo />}
  </div>
);
```

#### En configuraciones:
```javascript
// src/config/app.js
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    productsEndpoint: import.meta.env.VITE_API_PRODUCTS_ENDPOINT,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.VITE_APP_VERSION,
  },
  features: {
    adminPanel: import.meta.env.VITE_ENABLE_ADMIN_PANEL === 'true',
    localProducts: import.meta.env.VITE_ENABLE_LOCAL_PRODUCTS === 'true',
  }
};
```

## 🌍 Entornos Diferentes

### Desarrollo (.env)
```bash
VITE_API_BASE_URL=https://69000051e02b16d1753fd8e6.mockapi.io
VITE_DEV_MODE=true
VITE_ENABLE_DEBUG=true
```

### Producción (.env.production)
```bash
VITE_API_BASE_URL=https://tu-api-produccion.com
VITE_DEV_MODE=false
VITE_ENABLE_DEBUG=false
```

### Pruebas (.env.test)
```bash
VITE_API_BASE_URL=https://api-test.mockapi.io
VITE_DEV_MODE=true
VITE_ENABLE_DEBUG=true
```

## 🔒 Seguridad

### ✅ Qué SÍ incluir en .env:
- URLs de APIs públicas
- Configuraciones de UI
- Feature flags
- Configuraciones de desarrollo

### ❌ Qué NO incluir en .env:
- API Keys secretas
- Contraseñas
- Tokens privados
- Información sensible

**Nota**: En aplicaciones frontend, todas las variables `VITE_` son públicas y visibles en el bundle final.

## 🛠️ Comandos Útiles

```bash
# Reiniciar servidor para aplicar cambios en .env
npm run dev

# Ver variables en tiempo de construcción
npm run build

# Verificar que las variables se cargan correctamente
console.log(import.meta.env);
```

## 📝 Buenas Prácticas

1. **Usa valores por defecto**:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://default-api.com';
   ```

2. **Convierte strings a booleanos**:
   ```javascript
   const isEnabled = import.meta.env.VITE_FEATURE_ENABLED === 'true';
   ```

3. **Documenta todas las variables**:
   - Actualiza `.env.example` cuando agregues nuevas variables
   - Incluye descripciones en los comentarios

4. **Usa nombres descriptivos**:
   ```bash
   # ✅ Bueno
   VITE_API_PRODUCTS_ENDPOINT=/products
   
   # ❌ Malo
   VITE_ENDPOINT=/products
   ```

## 🔄 Migración de Código Existente

Para migrar código existente que use URLs hardcodeadas:

### Antes:
```javascript
const response = await fetch('https://69000051e02b16d1753fd8e6.mockapi.io/products');
```

### Después:
```javascript
const API_URL = import.meta.env.VITE_API_BASE_URL;
const ENDPOINT = import.meta.env.VITE_API_PRODUCTS_ENDPOINT;
const response = await fetch(`${API_URL}${ENDPOINT}`);
```

## 📂 Estructura Recomendada

```
src/
├── config/
│   └── env.js          # Centralizar configuración de entorno
├── services/
│   └── api.js          # Servicios que usan variables de entorno
└── components/
    └── EnvDisplay/     # Componente para debug (solo desarrollo)
```

## 🚨 Troubleshooting

### Variables no se cargan:
1. Verificar que empiecen con `VITE_`
2. Reiniciar el servidor de desarrollo
3. Verificar sintaxis en `.env` (sin espacios alrededor del `=`)

### Variables undefined:
```javascript
// Verificar si las variables se están cargando
console.log('All env vars:', import.meta.env);
console.log('Specific var:', import.meta.env.VITE_API_BASE_URL);
```

### Cambios no se aplican:
- Reiniciar completamente el servidor (`Ctrl+C` y `npm run dev`)
- Verificar que no hay errores de sintaxis en `.env`