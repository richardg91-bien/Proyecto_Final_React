//Dependencies
import React, { useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';

// Proveedor del contexto de autenticación
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simular verificación de sesión al cargar la app
  useEffect(() => {
    const checkAuthStatus = () => {
      const savedAuth = localStorage.getItem('isAuthenticated');
      const savedUser = localStorage.getItem('user');
      
      if (savedAuth === 'true' && savedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    // Simular un pequeño delay para el check de autenticación
    setTimeout(checkAuthStatus, 500);
  }, []);

  // Función para iniciar sesión
  const login = (credentials) => {
    // Simular validación de credenciales
    if (credentials.email && credentials.password) {
      const userData = {
        id: 1,
        email: credentials.email,
        name: credentials.name || 'Usuario',
        role: credentials.email === 'admin@shopnow.com' ? 'admin' : 'user'
      };

      setIsAuthenticated(true);
      setUser(userData);
      
      // Guardar en localStorage para persistencia
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      return { success: true, user: userData };
    }
    return { success: false, message: 'Credenciales inválidas' };
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    
    // Limpiar localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  // Función para verificar si el usuario es admin
  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;