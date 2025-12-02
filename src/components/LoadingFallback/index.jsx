import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const LoadingFallback = ({ text = 'Cargando...' }) => (
  <LoadingContainer>
    <div className="text-center">
      <Spinner role="status" aria-label="Cargando contenido" />
      <LoadingText>{text}</LoadingText>
    </div>
  </LoadingContainer>
);

export default LoadingFallback;
