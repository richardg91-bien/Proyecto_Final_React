//Dependencies
import React, { useState } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Si ya está autenticado, redirigir
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = login(formData);
      
      if (result.success) {
        // El redireccionamiento se maneja automáticamente por Navigate arriba
      } else {
        setError(result.message || 'Error al iniciar sesión');
      }
    } catch {
      setError('Error inesperado. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = (type) => {
    if (type === 'admin') {
      setFormData({
        email: 'admin@shopnow.com',
        password: 'admin123',
        name: 'Administrador'
      });
    } else {
      setFormData({
        email: 'usuario@shopnow.com',
        password: 'user123',
        name: 'Usuario Demo'
      });
    }
  };

  return (
    <div className="login-page bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <h2 className="h3 fw-bold" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                    Iniciar Sesión
                  </h2>
                  <p className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    Accede a tu cuenta de Indumentaria Agat
                  </p>
                </div>

                {/* Alert de error */}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Formulario */}
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{fontFamily: 'Quicksand, sans-serif'}}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{fontFamily: 'Quicksand, sans-serif'}}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      style={{fontFamily: 'Quicksand, sans-serif'}}
                      placeholder="Tu contraseña"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-100 mb-3"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Iniciando sesión...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Iniciar Sesión
                      </>
                    )}
                  </Button>
                </Form>

                {/* Demo buttons */}
                <div className="border-top pt-3 mt-4">
                  <p className="text-center text-muted small mb-3" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    Cuentas de prueba:
                  </p>
                  <div className="d-grid gap-2">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => handleDemoLogin('user')}
                      style={{fontFamily: 'Quicksand, sans-serif'}}
                    >
                      <i className="bi bi-person me-2"></i>
                      Usuario Demo
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => handleDemoLogin('admin')}
                      style={{fontFamily: 'Quicksand, sans-serif'}}
                    >
                      <i className="bi bi-shield-check me-2"></i>
                      Admin Demo
                    </Button>
                  </div>
                </div>

                {/* Links */}
                <div className="text-center mt-4 pt-3 border-top">
                  <Link 
                    to="/" 
                    className="text-decoration-none text-muted"
                    style={{fontFamily: 'Quicksand, sans-serif', fontSize: '0.9rem'}}
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    Volver a la tienda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;