import styled from 'styled-components';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { theme } from '../../styles/GlobalStyles';

// Card Container
export const ProductCard = styled.div`
  background: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${theme.shadow};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px ${theme.shadowMedium};
  }
`;

// Image Container
export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
  padding-bottom: 100%; /* Mantener aspect ratio 1:1 */
`;

// ProductImage ya no se usa - reemplazado por img nativo para evitar warnings con fetchPriority
// export const ProductImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;
//
//   ${ProductCard}:hover & {
//     transform: scale(1.1);
//   }
// `;

// Badge for new/sale items
export const ProductBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch(props.type) {
      case 'new': return theme.success;
      case 'sale': return theme.danger;
      case 'featured': return theme.accent;
      default: return theme.primary;
    }
  }};
  color: ${theme.white};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
`;

// Favorite Button
export const FavoriteButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${theme.white};
  color: ${props => props.$isFavorite ? theme.danger : theme.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px ${theme.shadow};
  z-index: 2;
  opacity: 0;

  ${ProductCard}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
    color: ${theme.danger};
  }

  svg {
    font-size: 18px;
    fill: ${props => props.$isFavorite ? 'currentColor' : 'none'};
  }
`;

// Quick View Button
export const QuickViewButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${theme.white};
  color: ${theme.dark};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px ${theme.shadow};
  opacity: 0;
  z-index: 2;

  ${ProductCard}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  &:hover {
    background: ${theme.dark};
    color: ${theme.white};
  }

  svg {
    font-size: 16px;
  }
`;

// Product Info
export const ProductInfo = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductCategory = styled.span`
  font-size: 0.75rem;
  color: ${theme.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.dark};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8em;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.textLight};
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.dark};
`;

export const OldPrice = styled.span`
  font-size: 1rem;
  color: ${theme.textLight};
  text-decoration: line-through;
`;

export const Discount = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  background: ${theme.danger};
  color: ${theme.white};
  font-size: 0.75rem;
  font-weight: 600;
`;

// Add to Cart Button
export const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${theme.primary};
  color: ${theme.white};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: ${theme.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.shadowMedium};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${theme.textLight};
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    font-size: 18px;
  }
`;

// Rating Component
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: ${theme.warning};
`;

export const RatingText = styled.span`
  color: ${theme.textLight};
  margin-left: 4px;
`;

// Stock Indicator
export const StockIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    if (props.$stock === 0) return `${theme.danger}15`;
    if (props.$stock < 5) return `${theme.warning}15`;
    return `${theme.success}15`;
  }};
  color: ${props => {
    if (props.$stock === 0) return theme.danger;
    if (props.$stock < 5) return theme.warning;
    return theme.success;
  }};

  &::before {
    content: '●';
    font-size: 0.6rem;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 8px;
  border: 2px solid ${theme.border};
  border-radius: 8px;
  background: ${theme.white};
  color: ${theme.dark};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.primary};
    color: ${theme.primary};
    transform: translateY(-2px);
  }

  svg {
    font-size: 16px;
  }
`;

export default {
  ProductCard,
  ProductImageContainer,
  // ProductImage - Removido (usar img nativo)
  ProductBadge,
  FavoriteButton,
  QuickViewButton,
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
  ProductActions,
  ActionButton,
  FiShoppingCart,
  FiHeart,
  FiEye,
};
