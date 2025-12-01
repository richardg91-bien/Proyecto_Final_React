//Dependencies
import React from 'react';
import { FiArrowDown, FiStar, FiShoppingBag, FiTruck } from 'react-icons/fi';
import styled from 'styled-components';
//Internals
import logo from '../../../../assets/logo1.jpeg';

// Styled Components
const HeaderContainer = styled.div`
  height: 40em;
  font-family: 'Lato', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 30em;
    padding: 3rem 1rem;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
  animation: fadeInDown 1s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Logo = styled.img`
  height: 150px;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  font-size: 3.5rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: fadeIn 1.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

const Slogan = styled.p`
  font-size: 1.2rem;
  font-family: 'Quicksand', sans-serif;
  max-width: 600px;
  line-height: 1.6;
  animation: fadeIn 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 2.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CallToAction = styled.div`
  margin-top: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Header = () => (
  <HeaderContainer className="d-flex flex-column align-items-center justify-content-center">
    {/* Logo Grande para Branding - Optimizado para LCP */}
    <LogoContainer>
      <Logo 
        src={logo} 
        alt="Indumentaria Agat Logo"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </LogoContainer>
    
    {/* Título de Marca */}
    <Title id="header-title">
      Indumentaria Agat
    </Title>
    
    {/* Slogan/Descripción */}
    <Slogan className="text-center text-muted mb-4">
      Moda de calidad para expresar tu personalidad única
    </Slogan>

    {/* Features destacados */}
    <FeaturesContainer>
      <Feature>
        <FiStar />
        <span>Calidad Premium</span>
      </Feature>
      <Feature>
        <FiShoppingBag />
        <span>Amplio Catálogo</span>
      </Feature>
      <Feature>
        <FiTruck />
        <span>Envíos a Todo el País</span>
      </Feature>
    </FeaturesContainer>

    {/* Call to Action */}
    <CallToAction>
      <p className="text-muted small" style={{fontFamily: 'Quicksand, sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <FiArrowDown />
        Explora nuestras colecciones
      </p>
    </CallToAction>
  </HeaderContainer>
);

export default Header;