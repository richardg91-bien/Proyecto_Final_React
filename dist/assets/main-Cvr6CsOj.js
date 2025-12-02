// Estilos críticos primero (above the fold)
import './critical.css';

import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// Iconos optimizados (solo los que usamos)
import './bootstrap-icons-minimal.css';

// Lazy load de estilos no críticos con prioridad optimizada
const loadStyles = () => {
  // Cargar en orden de prioridad
  const stylesheets = [
    { href: () => import('bootstrap/dist/css/bootstrap.min.css'), media: 'all' },
    { href: () => import('react-toastify/dist/ReactToastify.css'), media: 'all' },
    { href: () => import('./index.css'), media: 'all' },
  ];
  
  // Cargar después del primer paint
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => stylesheets.forEach(sheet => sheet.href()));
  } else {
    setTimeout(() => stylesheets.forEach(sheet => sheet.href()), 1);
  }
};

// Iniciar carga de estilos
loadStyles();

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importaciones necesarias para el layout principal
import BaseLayout from './components/BaseLayout';
import AuthProvider from './components/AuthProvider';
import ProductsProvider from './components/ProductsProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Spinner from './components/Spinner';

// Lazy loading de componentes para reducir bundle inicial
const App = lazy(() => import('./components/App'));
const Cart = lazy(() => import('./components/Cart'));
const Women = lazy(() => import('./components/Women'));
const Men = lazy(() => import('./components/Men'));
const Clothes = lazy(() => import('./components/Clothes'));
const Accessories = lazy(() => import('./components/Accessories'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Login = lazy(() => import('./components/Login'));
const Admin = lazy(() => import('./components/Admin'));
const ShowProduct = lazy(() => import('./components/ShowProduct'));

// Limpiar Service Workers solo una vez usando sessionStorage
// Esto evita bloquear el bfcache en navegaciones subsecuentes
if ('serviceWorker' in navigator && !sessionStorage.getItem('sw_cleaned')) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    if (registrations.length > 0) {
      registrations.forEach(registration => {
        registration.unregister();
      });
      // Marcar como limpiado en esta sesión
      sessionStorage.setItem('sw_cleaned', 'true');
    }
  });
  
  // Limpiar cachés solo si existen
  if ('caches' in window) {
    caches.keys().then(names => {
      if (names.length > 0) {
        names.forEach(name => caches.delete(name));
      }
    });
  }
}

// Listener para restauración desde bfcache
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // La página fue restaurada desde bfcache
    console.log('Página restaurada desde bfcache');
  }
});

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <BaseLayout>
          <Suspense fallback={<Spinner message="Cargando..." />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/cart" 
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ShowProduct />} />
            </Routes>
          </Suspense>
        </BaseLayout>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>
);