//Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
//Internals

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Indumentaria Agat | Nuestra Historia</title>
        <meta 
          name="description" 
          content="Conoce la historia de Indumentaria Agat. Desde 2020 ofrecemos moda de calidad y accesible para todos. Nuestra misión es hacer la moda accesible con estilo único y diseños exclusivos." 
        />
        <meta 
          name="keywords" 
          content="sobre nosotros, Indumentaria Agat, historia, empresa, misión, visión, valores, moda argentina" 
        />
        <meta property="og:title" content="Sobre Nosotros - Indumentaria Agat" />
        <meta 
          property="og:description" 
          content="Descubre la historia detrás de Indumentaria Agat. Moda de calidad desde 2020." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="about-page bg-white min-vh-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Hero Section */}
              <div className="text-center mb-5">
                <h1 className="display-4 fw-light text-uppercase mb-4" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                  Sobre Nosotros
                </h1>
              <p className="lead text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                Descubre la historia detrás de Indumentaria Agat
              </p>
            </div>

            {/* Main Content */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <div className="about-content">
                  <h2 className="h3 mb-4" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                    Nuestra Historia
                  </h2>
                  <p className="mb-3" style={{fontFamily: 'Quicksand, sans-serif', lineHeight: '1.6'}}>
                    Indumentaria Agat nació de la pasión por ofrecer moda de calidad y accesible para todos. 
                    Desde nuestros inicios en 2020, nos hemos dedicado a curar una colección diversa 
                    de productos que combinan estilo, comodidad y tendencias actuales.
                  </p>
                  <p className="mb-4" style={{fontFamily: 'Quicksand, sans-serif', lineHeight: '1.6'}}>
                    Creemos que la moda es una forma de expresión personal, por eso ofrecemos 
                    opciones para hombres, mujeres y todo tipo de estilos. Desde ropa casual hasta 
                    accesorios únicos, cada producto es seleccionado cuidadosamente.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-image text-center">
                  <div 
                    className="rounded-3 shadow-lg d-flex align-items-center justify-content-center"
                    style={{
                      height: '300px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white'
                    }}
                  >
                    <div className="text-center">
                      <i className="bi bi-shop" style={{fontSize: '4rem'}}></i>
                      <h4 className="mt-3">Indumentaria Agat</h4>
                      <p className="mb-0">Tu tienda de confianza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="row text-center mb-5">
              <div className="col-12 mb-4">
                <h2 className="h3" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                  Nuestros Valores
                </h2>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-card h-100 p-4">
                  <div className="mb-3">
                    <i className="bi bi-heart" style={{fontSize: '3rem', color: '#e74c3c'}}></i>
                  </div>
                  <h4 className="h5 mb-3" style={{fontFamily: 'Lato, sans-serif'}}>Calidad</h4>
                  <p className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad y durabilidad.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-card h-100 p-4">
                  <div className="mb-3">
                    <i className="bi bi-people" style={{fontSize: '3rem', color: '#3498db'}}></i>
                  </div>
                  <h4 className="h5 mb-3" style={{fontFamily: 'Lato, sans-serif'}}>Comunidad</h4>
                  <p className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    Construimos una comunidad de amantes de la moda que se apoyan y se inspiran mutuamente.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="value-card h-100 p-4">
                  <div className="mb-3">
                    <i className="bi bi-lightning" style={{fontSize: '3rem', color: '#f39c12'}}></i>
                  </div>
                  <h4 className="h5 mb-3" style={{fontFamily: 'Lato, sans-serif'}}>Innovación</h4>
                  <p className="text-muted" style={{fontFamily: 'Quicksand, sans-serif'}}>
                    Siempre buscamos las últimas tendencias y nuevas formas de mejorar tu experiencia de compra.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center bg-light rounded-3 p-5">
              <h3 className="h4 mb-3" style={{color: 'rgba(0,0,0,0.8)', fontFamily: 'Lato, sans-serif'}}>
                Nuestra Misión
              </h3>
              <p className="lead text-muted mb-0" style={{fontFamily: 'Quicksand, sans-serif', maxWidth: '600px', margin: '0 auto'}}>
                "Democratizar la moda ofreciendo productos de calidad, accesibles y con estilo para que cada persona pueda expresar su personalidad única a través de lo que viste."
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;