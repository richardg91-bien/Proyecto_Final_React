import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import CartContext from '../../context/CartContext';
import { DEFAULT_PRODUCT_IMAGE } from '../../utils/placeholder';
import {
  ProductCard as Card,
  ProductImageContainer,
  ProductImage,
  ProductBadge,
  FavoriteButton,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductDescription,
  ProductPrice,
  Price,
  OldPrice,
  Discount,
  AddToCartButton,
  Rating,
  RatingText,
  StockIndicator,
} from './StyledComponents';

const ProductCard = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.img);
  const [imgError, setImgError] = useState(false);

  // Manejar error de carga de imagen
  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(DEFAULT_PRODUCT_IMAGE);
    }
  };

  const addToCart = () => {
    const existingProduct = cartProducts.find(p => p.id === product.id);

    if (existingProduct) {
      setCartProducts(
        cartProducts.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
      toast.success(`Se agregó otra unidad de ${product.name}`, {
        position: 'bottom-right',
        autoClose: 2000,
      });
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      toast.success(`${product.name} agregado al carrito`, {
        position: 'bottom-right',
        autoClose: 2000,
        icon: <FiShoppingCart />,
      });
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.info(`${product.name} agregado a favoritos`, {
        position: 'bottom-right',
        autoClose: 2000,
        icon: <FiHeart />,
      });
    }
  };

  // Calcular descuento si existe oldPrice
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  // Determinar badge
  const getBadge = () => {
    if (product.isNew) return { type: 'new', text: 'Nuevo' };
    if (hasDiscount) return { type: 'sale', text: `${discountPercentage}% OFF` };
    if (product.isFeatured) return { type: 'featured', text: 'Destacado' };
    return null;
  };

  const badge = getBadge();

  // Stock (puede venir del producto o usar un valor predeterminado)
  const stock = product.stock !== undefined ? product.stock : 10;

  return (
    <Card>
      <ProductImageContainer>
        <ProductImage 
          src={imgSrc} 
          alt={product.name}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          fetchpriority={product.isFeatured ? "high" : "low"}
        />
        
        {badge && (
          <ProductBadge type={badge.type}>
            {badge.text}
          </ProductBadge>
        )}
        
        <FavoriteButton
          onClick={toggleFavorite}
          $isFavorite={isFavorite}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <FiHeart />
        </FavoriteButton>
      </ProductImageContainer>

      <ProductInfo>
        {product.category && (
          <ProductCategory>{product.category}</ProductCategory>
        )}
        
        <ProductName>{product.name}</ProductName>
        
        {product.description && (
          <ProductDescription>{product.description}</ProductDescription>
        )}

        {/* Rating si está disponible */}
        {product.rating && (
          <Rating>
            {[...Array(5)].map((_, index) => (
              <FiStar
                key={index}
                fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <RatingText>({product.rating.toFixed(1)})</RatingText>
          </Rating>
        )}

        <ProductPrice>
          <Price>${product.price.toFixed(2)}</Price>
          {hasDiscount && (
            <>
              <OldPrice>${product.oldPrice.toFixed(2)}</OldPrice>
              <Discount>-{discountPercentage}%</Discount>
            </>
          )}
        </ProductPrice>

        {/* Stock indicator */}
        <StockIndicator $stock={stock}>
          {stock === 0 ? 'Sin stock' : stock < 5 ? `Últimas ${stock} unidades` : 'En stock'}
        </StockIndicator>

        <AddToCartButton
          onClick={addToCart}
          disabled={stock === 0}
        >
          <FiShoppingCart />
          {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
