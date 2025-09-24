//Dependencies
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Spinner from '../Spinner';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, user, loading, isAdmin } = useAuth();
  const location = useLocation();

  // Mostrar spinner mientras se verifica la autenticación
  if (loading) {
    return <Spinner message="Verificando autenticación..." />;
  }

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    // Guardar la ruta actual para redirigir después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si requiere admin pero no es admin, mostrar mensaje de error
  if (requireAdmin && !isAdmin()) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-danger text-center">
              <i className="bi bi-shield-exclamation fs-1 mb-3"></i>
              <h4>Acceso Restringido</h4>
              <p className="mb-3">
                No tienes permisos para acceder a esta sección. 
                Solo los administradores pueden ver esta página.
              </p>
              <div className="mt-3">
                <strong>Usuario actual:</strong> {user?.email}
                <br />
                <strong>Rol:</strong> {user?.role || 'user'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si todo está bien, mostrar el componente
  return children;
};

export default ProtectedRoute;