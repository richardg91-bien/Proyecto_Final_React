# 🛒 E-Commerce React App - Proyecto Final

Una moderna aplicación de e-commerce desarrollada con React, Vite y Bootstrap que incluye categorías de productos, carrito de compras, autenticación de usuarios y panel administrativo.

## 🚀 Características Principales

- **🛍️ Catálogo de Productos**: Navegación por categorías (Mujeres, Hombres, Ropa, Accesorios)
- **🛒 Carrito de Compras**: Funcionalidad completa de carrito con persistencia
- **👤 Autenticación**: Sistema de login y registro de usuarios
- **🔐 Rutas Protegidas**: Acceso controlado a secciones administrativas
- **📱 Diseño Responsivo**: Interfaz adaptable usando React Bootstrap
- **⚡ Rendimiento Optimizado**: Construido con Vite para desarrollo rápido
- **🎨 UI Moderna**: Diseño atractivo con Bootstrap e iconos

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.9.1
- **Estilos**: Bootstrap 5.3.8 + React Bootstrap 2.10.10
- **Iconos**: Bootstrap Icons 1.13.1
- **Utilidades**: Lodash 4.17.21
- **Linting**: ESLint con configuración personalizada

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes de la aplicación
│   ├── About/           # Página "Acerca de"
│   ├── Accessories/     # Categoría de accesorios
│   ├── Admin/           # Panel administrativo
│   ├── App/             # Componente principal
│   ├── AuthProvider/    # Proveedor de autenticación
│   ├── BaseLayout/      # Layout base con header/footer
│   ├── Cart/            # Carrito de compras
│   ├── Clothes/         # Categoría de ropa
│   ├── Contact/         # Página de contacto
│   ├── Items/           # Componentes de productos
│   ├── Login/           # Formularios de autenticación
│   ├── Men/             # Categoría para hombres
│   ├── Women/           # Categoría para mujeres
│   └── ...              # Otros componentes
├── context/             # Context API para estado global
│   ├── AuthContext.jsx  # Contexto de autenticación
│   └── CartContext.jsx  # Contexto del carrito
├── hooks/               # Hooks personalizados
├── services/            # Servicios y APIs
└── assets/              # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Proyecto_Final_React
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Navega a `http://localhost:5173`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run preview` - Previsualiza la versión de producción

## 🔧 Configuración de Desarrollo

El proyecto incluye:
- **ESLint** configurado con reglas para React
- **Spell Checker** con soporte para español
- **Vite** con Hot Module Replacement (HMR)
- **Bootstrap** para estilos responsivos

## 📱 Funcionalidades

### Para Usuarios
- Explorar productos por categorías
- Añadir/remover productos del carrito
- Ver detalles de productos
- Registro e inicio de sesión
- Navegación intuitiva

### Para Administradores
- Acceso a panel administrativo
- Gestión de productos
- Control de inventario

## 🎨 Diseño y UX

- Diseño moderno y limpio
- Navegación intuitiva con breadcrumbs
- Componentes reutilizables
- Responsive design para todos los dispositivos
- Iconos de Bootstrap para mejor UX

## 🚀 Próximas Mejoras

- [ ] Integración con API de pagos
- [ ] Sistema de reseñas de productos
- [ ] Filtros avanzados de búsqueda
- [ ] Wishlist de productos
- [ ] Notificaciones en tiempo real

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte de un ejercicio académico.

## 👨‍💻 Autor

Desarrollado como proyecto final del curso de React.

---

**¡Gracias por visitar el proyecto!** 🙌
