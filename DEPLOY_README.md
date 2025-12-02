# 🛍️ Indumentaria Agat - E-commerce React Application

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?logo=styled-components)
![License](https://img.shields.io/badge/License-MIT-green)

Una moderna aplicación e-commerce de indumentaria construida con React, optimizada para rendimiento y experiencia de usuario.

[Demo en Vivo](#) • [Documentación](#características) • [Instalación](#instalación)

</div>

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Optimizaciones](#optimizaciones)
- [Deploy](#deploy)
- [Contribuir](#contribuir)

---

## ✨ Características

### 🎨 Diseño y UI/UX
- **Diseño Responsivo**: Completamente adaptable a dispositivos móviles, tablets y desktop
- **Styled Components**: Componentes estilizados con CSS-in-JS para mayor modularidad
- **Bootstrap 5**: Framework CSS moderno con sistema de grillas flexibles
- **Animaciones**: Transiciones suaves y efectos hover mejorados
- **Iconos**: React Icons (Feather Icons) para una interfaz visualmente atractiva

### 🛒 Funcionalidades E-commerce
- **Catálogo de Productos**: Vista de grilla responsiva con productos organizados
- **Carrito de Compras**: Sistema completo de gestión de carrito
- **Gestión de Cantidades**: Incrementar/decrementar cantidades de productos
- **Cálculo Automático**: Subtotal, IVA y total calculados dinámicamente
- **Favoritos**: Sistema para marcar productos como favoritos
- **Filtros**: Por categoría (Hombres, Mujeres, Accesorios, Ropa)

### 🔐 Autenticación y Autorización
- **Sistema de Login**: Autenticación de usuarios
- **Rutas Protegidas**: Acceso restringido a áreas específicas
- **Panel de Administración**: Gestión de productos para administradores
- **Context API**: Manejo global del estado de autenticación

### 📢 Notificaciones
- **React Toastify**: Notificaciones elegantes y no intrusivas
- **Feedback en Tiempo Real**: Confirmación de acciones del usuario
- **Diferentes Tipos**: Success, info, warning y error toasts

### 🔍 SEO y Rendimiento
- **React Helmet Async**: Meta tags dinámicos para cada página
- **Open Graph**: Optimización para redes sociales
- **Lazy Loading**: Carga diferida de imágenes
- **Code Splitting**: División de código para optimizar la carga
- **Canonical URLs**: Evita contenido duplicado en SEO

### 🎯 Gestión de Estado
- **Context API**: Manejo de estado global (Auth, Cart, Products)
- **Custom Hooks**: Lógica reutilizable y separación de concerns
- **Optimistic Updates**: Interfaz fluida con actualizaciones optimistas

---

## 🚀 Tecnologías

### Core
- **React 18.3.1**: Biblioteca de JavaScript para interfaces de usuario
- **Vite**: Build tool ultrarrápido para desarrollo moderno
- **React Router DOM 6**: Navegación y rutas en la aplicación

### Estilos
- **Bootstrap 5.3**: Framework CSS con componentes responsivos
- **Styled Components 6.1**: CSS-in-JS para componentes estilizados
- **Bootstrap Icons**: Iconografía oficial de Bootstrap
- **React Icons**: Colección de iconos populares

### UI/UX
- **React Toastify 10**: Sistema de notificaciones toast
- **React Helmet Async 2**: Gestión de meta tags para SEO
- **Animations**: CSS animations y transitions

### Backend/API
- **MockAPI.io**: API REST mock para datos de productos
- **Fetch API**: Peticiones HTTP nativas

### Herramientas de Desarrollo
- **ESLint**: Linting de código JavaScript/React
- **PowerShell Scripts**: Automatización de tareas

---

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/richardg91-bien/Proyecto_Final_React.git
cd Proyecto_Final_React
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=https://tu-api.mockapi.io/api/v1
VITE_APP_NAME=Indumentaria Agat
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 💻 Uso

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Construye para producción
npm run preview      # Preview de la build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

### Credenciales de Prueba

**Usuario Administrador:**
- Email: `admin@indumentariaagat.com`
- Password: `admin123`

**Usuario Regular:**
- Email: `user@test.com`
- Password: `user123`

---

## 📁 Estructura del Proyecto

```
Proyecto_Final_React/
├── public/
│   ├── images/
│   │   └── products/          # Imágenes de productos
│   └── vite.svg
├── src/
│   ├── assets/                # Assets estáticos (logos, etc.)
│   ├── components/            # Componentes React
│   │   ├── App/              # Componente principal
│   │   ├── BaseLayout/       # Layout base con Header, NavBar, Footer
│   │   ├── Cart/             # Carrito de compras
│   │   ├── ProductCard/      # Tarjeta de producto reutilizable
│   │   ├── Login/            # Sistema de autenticación
│   │   ├── Admin/            # Panel de administración
│   │   ├── Items/            # Productos y filtros
│   │   ├── Spinner/          # Loading spinner
│   │   └── ...               # Otros componentes
│   ├── context/              # Context API
│   │   ├── AuthContext.jsx   # Contexto de autenticación
│   │   ├── CartContext.jsx   # Contexto del carrito
│   │   └── ProductsContext.jsx
│   ├── hooks/                # Custom hooks
│   │   ├── useAuth.jsx
│   │   ├── useCart Actions.jsx
│   │   └── useProducts.jsx
│   ├── services/             # Servicios API
│   │   └── productService.jsx
│   ├── styles/               # Estilos globales
│   │   └── GlobalStyles.js   # Styled components globales
│   ├── utils/                # Utilidades
│   │   └── toast.jsx         # Funciones de toast
│   ├── config/               # Configuración
│   │   └── env.js            # Variables de entorno
│   ├── App.css
│   ├── index.css
│   └── main.jsx              # Punto de entrada
├── docs/                     # Documentación adicional
├── .env.example              # Ejemplo de variables de entorno
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Optimizaciones Implementadas

### Rendimiento
- ✅ Lazy loading de imágenes con `loading="lazy"`
- ✅ Code splitting automático con Vite
- ✅ Minimización de re-renders con React.memo
- ✅ Optimización de bundles con tree-shaking

### SEO
- ✅ Meta tags dinámicos con React Helmet Async
- ✅ Títulos y descripciones únicas por página
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data ready

### Accesibilidad
- ✅ Atributos `alt` en todas las imágenes
- ✅ ARIA labels donde corresponde
- ✅ Contraste de colores mejorado
- ✅ Navegación por teclado optimizada
- ✅ Focus states visibles

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: 576px, 768px, 992px, 1200px, 1400px
- ✅ Grid system de Bootstrap 5
- ✅ Componentes totalmente responsivos
- ✅ Menú hamburguesa para móviles

### UX
- ✅ Animaciones y transiciones suaves
- ✅ Feedback visual inmediato
- ✅ Loading states informativos
- ✅ Error handling robusto
- ✅ Notificaciones toast elegantes

---

## 🚀 Deploy

### Build para Producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con los archivos optimizados.

### Deploy en Vercel

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy en Netlify

1. Build el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)

### Variables de Entorno en Producción

Asegúrate de configurar las variables de entorno en tu plataforma de deploy:
- `VITE_API_URL`
- `VITE_APP_NAME`

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Richard G**
- GitHub: [@richardg91-bien](https://github.com/richardg91-bien)

---

## 🙏 Agradecimientos

- React Team por la increíble biblioteca
- Bootstrap Team por el framework CSS
- Comunidad Open Source por las librerías utilizadas

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella! ⭐**

</div>
