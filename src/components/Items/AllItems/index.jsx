// Dependencies
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useProducts } from '../../../hooks/useProducts';
import ProductCard from '../../ProductCard';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';

// Styled Components
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2c3e50);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProductsGrid = styled(Row)`
  margin: 0 auto;
  max-width: 1400px;
`;

const AllItems = () => {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return <Spinner message="Cargando productos..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <>
      <Helmet>
        <title>Todos los Productos - Indumentaria Agat</title>
        <meta 
          name="description" 
          content="Explora todos nuestros productos de moda: ropa para hombre, mujer, accesorios y más. Encuentra tu estilo en Indumentaria Agat." 
        />
        <meta 
          name="keywords" 
          content="productos, catálogo, ropa, moda, indumentaria, comprar online" 
        />
      </Helmet>

      <Container fluid className="py-5">
        <SectionTitle>Todos Nuestros Productos</SectionTitle>
        <ProductsGrid xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </ProductsGrid>
      </Container>
    </>
  );
};

export default AllItems;