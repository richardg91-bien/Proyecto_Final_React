//Dependencies
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'react-bootstrap';
//Internals

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simular envío del formulario
    console.log('Formulario enviado:', formData);
    
    // Mostrar mensaje de éxito
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Ocultar alerta después de 5 segundos
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Indumentaria Agat | Comunícate con Nosotros</title>
        <meta 
          name="description" 
          content="¿Tienes preguntas? Contáctanos. Estamos disponibles por email, teléfono y redes sociales. Atención al cliente de lunes a viernes de 9 a 18hs. ¡Esperamos tu mensaje!" 
        />
        <meta 
          name="keywords" 
          content="contacto, Indumentaria Agat, atención al cliente, email, teléfono, consultas, soporte" 
        />
        <meta property="og:title" content="Contacto - Indumentaria Agat" />
        <meta 
          property="og:description" 
          content="Comunícate con nosotros. Respondemos todas tus consultas sobre productos, envíos y más." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="contact-page bg-white min-vh-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Hero Section */}
              <div className="text-center mb-5">
                <h1 className="display-4 fw-light text-uppercase mb-4" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                  Contacto
                </h1>
              <p className="lead text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                ¿Tienes alguna pregunta? Nos encantaría escucharte
              </p>
            </div>

            {/* Alert Success */}
            {showAlert && (
              <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                ¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowAlert(false)}
                ></button>
              </div>
            )}

            <div className="row">
              {/* Contact Form */}
              <div className="col-lg-8 mb-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-5">
                    <h3 className="h4 mb-4" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                      Envíanos un mensaje
                    </h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6">
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
                            required
                            style={{fontFamily: 'Quicksand, sans-serif'}}
                            placeholder="Tu nombre"
                            autoComplete="name"
                          />
                        </div>
                        <div className="col-md-6">
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
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                          Asunto *
                        </label>
                        <select
                          className="form-select"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          style={{fontFamily: 'Quicksand, sans-serif'}}
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="consulta-producto">Consulta sobre producto</option>
                          <option value="pedido">Problema con pedido</option>
                          <option value="devolucion">Devolución/Cambio</option>
                          <option value="colaboracion">Colaboración</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label" style={{fontFamily: 'Quicksand, sans-serif', fontWeight: '600'}}>
                          Mensaje *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          style={{fontFamily: 'Quicksand, sans-serif'}}
                          placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-100"
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          borderRadius: '25px',
                          fontFamily: 'Quicksand, sans-serif',
                          fontWeight: '600'
                        }}
                      >
                        <i className="bi bi-send me-2"></i>
                        Enviar mensaje
                      </Button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4">
                <div className="contact-info">
                  <h3 className="h4 mb-4" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                    Información de contacto
                  </h3>
                  
                  <div className="contact-item mb-4 p-3 bg-light rounded-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill me-3" style={{fontSize: '1.5rem', color: '#3498db'}}></i>
                      <div>
                        <h5 className="h6 mb-1" style={{fontFamily: 'Lato, sans-serif'}}>Dirección</h5>
                        <p className="mb-0 text-muted small" style={{fontFamily: 'Quicksand, sans-serif'}}>
                          garzon 153<br />
                          Esteban Echeverria, CM 1842
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-4 p-3 bg-light rounded-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-telephone-fill me-3" style={{fontSize: '1.5rem', color: '#27ae60'}}></i>
                      <div>
                        <h5 className="h6 mb-1" style={{fontFamily: 'Lato, sans-serif'}}>Teléfono</h5>
                        <p className="mb-0 text-muted small" style={{fontFamily: 'Quicksand, sans-serif'}}>
                          +54 (11) 40691191
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-4 p-3 bg-light rounded-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-envelope-fill me-3" style={{fontSize: '1.5rem', color: '#e74c3c'}}></i>
                      <div>
                        <h5 className="h6 mb-1" style={{fontFamily: 'Lato, sans-serif'}}>Email</h5>
                        <p className="mb-0 text-muted small" style={{fontFamily: 'Quicksand, sans-serif'}}>
                          richardg91@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-4 p-3 bg-light rounded-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-clock-fill me-3" style={{fontSize: '1.5rem', color: '#f39c12'}}></i>
                      <div>
                        <h5 className="h6 mb-1" style={{fontFamily: 'Lato, sans-serif'}}>Horarios</h5>
                        <p className="mb-0 text-muted small" style={{fontFamily: 'Quicksand, sans-serif'}}>
                          Lunes - Viernes: 9:00 - 18:00<br />
                          Sábados: 10:00 - 16:00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="social-media mt-4">
                    <h5 className="h6 mb-3" style={{fontFamily: 'Lato, sans-serif'}}>Síguenos</h5>
                    <div className="d-flex gap-3">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;