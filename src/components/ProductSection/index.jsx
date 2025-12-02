import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  background: white;
  border-top: 4px solid #333;
  min-height: 70vh;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin: 2rem 0 3rem;
  font-size: 2rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
    margin: 1rem 0 1.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const ProductSection = ({ title, children }) => {
  return (
    <SectionWrapper>
      <div className="container-fluid">
        <SectionTitle>{title}</SectionTitle>
        <ProductsGrid>{children}</ProductsGrid>
      </div>
    </SectionWrapper>
  );
};

export default ProductSection;
