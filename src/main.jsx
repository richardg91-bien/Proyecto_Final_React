import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons removido - usamos solo React Icons
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import { addResourceHints } from './utils/resourceHints';
import { enableBfCache } from './utils/bfcache';

// Agregar resource hints para optimizar carga
addResourceHints();

// Habilitar back/forward cache
enableBfCache();

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Componentes críticos - Carga inmediata
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import AuthProvider from './components/AuthProvider';
import ProductsProvider from './components/ProductsProvider';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingFallback from './components/LoadingFallback';
import registerServiceWorker from './registerServiceWorker';

// Lazy loading de rutas - Reduce el bundle inicial
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

const root = createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <BaseLayout>
            <Suspense fallback={<LoadingFallback />}>
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
  </HelmetProvider>
);
registerServiceWorker();