import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 18rem;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background: white;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const ImageWrapper = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${ImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 200px;
`;

export const ProductTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  height: 2.6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  font-family: 'Lato', sans-serif;
  
  &:hover {
    color: #007bff;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 1rem;
  height: 3em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  font-family: 'Quicksand', sans-serif;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #28a745;
  font-family: 'Lato', sans-serif;
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Quicksand', sans-serif;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const StockBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${props => props.inStock ? '#28a745' : '#dc3545'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
