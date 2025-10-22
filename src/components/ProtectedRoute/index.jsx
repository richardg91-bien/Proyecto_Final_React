//Dependencies
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Spinner from '../Spinner';

const ProtectedRoute = ({ children, requireAdmin = false, forShopping = false }) => {
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
          <div className="col-md-8">
            <div className="alert alert-warning text-center border-0 shadow">
              <i className="bi bi-shield-exclamation fs-1 mb-3 text-warning"></i>
              <h4 className="text-dark">Acceso Restringido al Panel de Administración</h4>
              <p className="mb-3 text-muted">
                Has iniciado sesión correctamente, pero no tienes permisos de administrador para acceder a esta sección. 
                Solo los administradores pueden gestionar productos y acceder al panel de control.
              </p>
              <div className="bg-light p-3 rounded mb-3">
                <strong>👤 Usuario actual:</strong> {user?.email}
                <br />
                <strong>🏷️ Rol:</strong> <span className="badge bg-primary">{user?.role || 'user'}</span>
              </div>
              <div className="mt-4">
                <p className="small text-muted mb-3">Como usuario registrado puedes:</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <a href="/" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-house me-1"></i>
                    Ver Productos
                  </a>
                  <a href="/cart" className="btn btn-outline-success btn-sm">
                    <i className="bi bi-cart me-1"></i>
                    Mi Carrito
                  </a>
                  <a href="/women" className="btn btn-outline-info btn-sm">
                    <i className="bi bi-person-dress me-1"></i>
                    Ropa Femenina
                  </a>
                  <a href="/men" className="btn btn-outline-dark btn-sm">
                    <i className="bi bi-person me-1"></i>
                    Ropa Masculina
                  </a>
                </div>
                <hr className="my-3" />
                <p className="small text-muted">
                  <strong>💡 ¿Necesitas acceso de administrador?</strong><br />
                  Contacta al administrador o usa la cuenta: <code>admin@shopnow.com</code>
                </p>
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