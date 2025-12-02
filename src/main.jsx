import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Women from './components/Women';
import Men from './components/Men';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Admin from './components/Admin';
import AuthProvider from './components/AuthProvider';
import ProductsProvider from './components/ProductsProvider';
import ProtectedRoute from './components/ProtectedRoute';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <BaseLayout>
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
registerServiceWorker();