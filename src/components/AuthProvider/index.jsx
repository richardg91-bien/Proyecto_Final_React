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
    // Validar que se proporcionen credenciales
    if (!credentials.email || !credentials.password) {
      return { success: false, message: 'Email y contraseña son obligatorios' };
    }

    // Verificar credenciales de admin predeterminado
    if (credentials.email === 'admin@shopnow.com') {
      const userData = {
        id: 1,
        email: credentials.email,
        name: credentials.name || 'Administrador',
        role: 'admin'
      };

      setIsAuthenticated(true);
      setUser(userData);
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      return { success: true, user: userData };
    }

    // Verificar usuarios registrados
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = registeredUsers.find(user => 
      user.email === credentials.email && user.password === credentials.password
    );

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role
      };

      setIsAuthenticated(true);
      setUser(userData);
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      return { success: true, user: userData };
    }

    // Si no se encuentra el usuario
    return { success: false, message: 'Email o contraseña incorrectos' };
  };

  // Función para registrarse (nueva funcionalidad)
  const register = (userData) => {
    // Validar datos de registro
    if (!userData.email || !userData.password || !userData.name) {
      return { success: false, message: 'Todos los campos son obligatorios' };
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return { success: false, message: 'Por favor ingresa un email válido' };
    }

    // Validar longitud de contraseña
    if (userData.password.length < 6) {
      return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }

    // Simular verificación de email duplicado
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (existingUsers.find(user => user.email === userData.email)) {
      return { success: false, message: 'Este email ya está registrado' };
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now(),
      email: userData.email,
      name: userData.name,
      role: userData.email === 'admin@shopnow.com' ? 'admin' : 'user',
      password: userData.password, // En producción esto debería estar hasheado
      registeredAt: new Date().toISOString()
    };

    // Guardar usuario en lista de registrados
    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    // Automáticamente iniciar sesión después del registro
    setIsAuthenticated(true);
    setUser(newUser);
    
    // Guardar sesión actual
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(newUser));

    return { success: true, user: newUser, message: 'Registro exitoso' };
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
    register,
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