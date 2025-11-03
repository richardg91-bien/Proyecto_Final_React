//Dependencies
import React, { useState } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login, register, isAuthenticated } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' o 'register'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const fromCart = from === '/cart';

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
    setSuccess(''); // Limpiar mensaje de éxito al escribir
  };

  const validateForm = () => {
    if (mode === 'register') {
      if (!formData.name.trim()) {
        setError('El nombre es obligatorio');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Las contraseñas no coinciden');
        return false;
      }
      if (formData.password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres');
        return false;
      }
    }
    
    if (!formData.email || !formData.password) {
      setError('Email y contraseña son obligatorios');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      let result;
      
      if (mode === 'register') {
        result = register(formData);
        if (result.success) {
          setSuccess('¡Registro exitoso! Iniciando sesión automáticamente...');
          // El AuthProvider ya maneja el login automático
        }
      } else {
        result = login(formData);
        if (result.success) {
          setSuccess('¡Login exitoso! Redirigiendo...');
        }
      }
      
      if (!result.success) {
        setError(result.message || `Error al ${mode === 'register' ? 'registrarse' : 'iniciar sesión'}`);
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
        name: 'Administrador',
        confirmPassword: 'admin123'
      });
    } else {
      setFormData({
        email: 'usuario@shopnow.com',
        password: 'user123',
        name: 'Usuario Demo',
        confirmPassword: 'user123'
      });
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
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
                  {fromCart && (
                    <div className="alert alert-info mb-3">
                      <i className="bi bi-cart-plus me-2"></i>
                      <strong>¡Para comprar necesitas una cuenta!</strong>
                      <br />
                      <small>Regístrate o inicia sesión para acceder a tu carrito de compras</small>
                    </div>
                  )}
                  <h2 className="h3 fw-bold" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                    {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                  </h2>
                  <p className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    {fromCart ? (
                      mode === 'login' 
                        ? 'Inicia sesión para acceder a tu carrito'
                        : 'Crea tu cuenta para empezar a comprar'
                    ) : (
                      mode === 'login' 
                        ? 'Accede a tu cuenta de Indumentaria Agat'
                        : 'Regístrate en Indumentaria Agat'
                    )}
                  </p>
                </div>

                {/* Alert de error */}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Alert de éxito */}
                {success && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    {success}
                  </div>
                )}

                {/* Formulario */}
                <Form onSubmit={handleSubmit}>
                  {mode === 'register' && (
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={mode === 'register'}
                        style={{fontFamily: 'Quicksand, sans-serif'}}
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                      Correo electrónico *
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
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                      Contraseña *
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
                      placeholder={mode === 'register' ? 'Mínimo 6 caracteres' : 'Tu contraseña'}
                      autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                    />
                  </div>

                  {mode === 'register' && (
                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                        Confirmar contraseña *
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={mode === 'register'}
                        style={{fontFamily: 'Quicksand, sans-serif'}}
                        placeholder="Repite tu contraseña"
                        autoComplete="new-password"
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-100 mb-3"
                    disabled={isSubmitting}
                    style={{
                      background: mode === 'register' 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        {mode === 'register' ? 'Registrando...' : 'Iniciando sesión...'}
                      </>
                    ) : (
                      <>
                        <i className={`bi ${mode === 'register' ? 'bi-person-plus' : 'bi-box-arrow-in-right'} me-2`}></i>
                        {mode === 'register' ? 'Crear Cuenta' : 'Iniciar Sesión'}
                      </>
                    )}
                  </Button>
                </Form>

                {/* Toggle entre login y registro */}
                <div className="text-center mb-3">
                  <button 
                    type="button"
                    className="btn btn-link text-decoration-none"
                    onClick={toggleMode}
                    style={{fontFamily: 'Quicksand, sans-serif'}}
                  >
                    {mode === 'login' 
                      ? '¿No tienes cuenta? Regístrate aquí'
                      : '¿Ya tienes cuenta? Inicia sesión aquí'
                    }
                  </button>
                </div>

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