// Estilos críticos primero (above the fold)
import './critical.css';

// Lazy load de estilos no críticos
import('bootstrap/dist/css/bootstrap.min.css');
import('bootstrap-icons/font/bootstrap-icons.css');
import('react-toastify/dist/ReactToastify.css');
import('./index.css');

import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

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

// Desregistrar TODOS los Service Workers de manera agresiva
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister().then(() => {
        console.log('Service Worker desregistrado exitosamente');
      });
    });
  }).catch(err => {
    console.log('Error al desregistrar Service Workers:', err);
  });
  
  // Limpiar cachés del Service Worker
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        caches.delete(name);
      });
    });
  }
}

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