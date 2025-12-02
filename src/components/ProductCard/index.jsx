import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  CardBody,
  ProductTitle,
  ProductDescription,
  PriceContainer,
  Price,
  AddButton,
  StockBadge
} from './StyledComponents';

const ProductCard = ({ product, onAddToCart }) => {
  const hasStock = product.stock === undefined || product.stock > 0;

  return (
    <CardContainer>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ImageWrapper>
          {product.stock !== undefined && (
            <StockBadge inStock={hasStock}>
              {hasStock ? `Stock: ${product.stock}` : 'Sin stock'}
            </StockBadge>
          )}
          <ProductImage
            src={product.img}
            alt={product.name}
            loading="lazy"
          />
        </ImageWrapper>
      </Link>

      <CardBody>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
        </Link>

        <PriceContainer>
          <Price>${parseFloat(product.price).toFixed(2)}</Price>
          <AddButton
            onClick={() => onAddToCart(product)}
            disabled={!hasStock}
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <FaShoppingCart />
            Agregar
          </AddButton>
        </PriceContainer>
      </CardBody>
    </CardContainer>
  );
};

export default ProductCard;
