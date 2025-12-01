import styled from 'styled-components';

// Colores del tema
export const theme = {
  primary: '#2c3e50',
  secondary: '#34495e',
  accent: '#3498db',
  success: '#27ae60',
  warning: '#f39c12',
  danger: '#e74c3c',
  light: '#ecf0f1',
  dark: '#2c3e50',
  white: '#ffffff',
  text: '#333333',
  textLight: '#7f8c8d',
  border: '#dee2e6',
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowMedium: 'rgba(0, 0, 0, 0.15)',
  shadowHeavy: 'rgba(0, 0, 0, 0.3)',
};

// Breakpoints responsivos
export const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const device = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
};

// Contenedor principal con máximo ancho
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${device.sm} {
    max-width: 540px;
  }

  @media ${device.md} {
    max-width: 720px;
  }

  @media ${device.lg} {
    max-width: 960px;
  }

  @media ${device.xl} {
    max-width: 1140px;
  }

  @media ${device.xxl} {
    max-width: 1320px;
  }
`;

// Card estilizada
export const Card = styled.div`
  background: ${theme.white};
  border-radius: 12px;
  box-shadow: 0 4px 6px ${theme.shadow};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px ${theme.shadowMedium};
    transform: translateY(-4px);
  }
`;

// Botón estilizado
export const Button = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  background: ${props => {
    switch(props.variant) {
      case 'primary': return theme.primary;
      case 'secondary': return theme.secondary;
      case 'success': return theme.success;
      case 'warning': return theme.warning;
      case 'danger': return theme.danger;
      default: return theme.primary;
    }
  }};
  
  color: ${theme.white};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.shadowMedium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${props => props.outline && `
    background: transparent;
    border: 2px solid ${theme.primary};
    color: ${theme.primary};

    &:hover {
      background: ${theme.primary};
      color: ${theme.white};
    }
  `}

  ${props => props.fullWidth && `
    width: 100%;
    justify-content: center;
  `}

  ${props => props.size === 'small' && `
    padding: 6px 16px;
    font-size: 0.875rem;
  `}

  ${props => props.size === 'large' && `
    padding: 14px 32px;
    font-size: 1.125rem;
  `}
`;

// Badge/Insignia
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch(props.variant) {
      case 'primary': return theme.primary;
      case 'success': return theme.success;
      case 'warning': return theme.warning;
      case 'danger': return theme.danger;
      default: return theme.primary;
    }
  }};
  color: ${theme.white};
  min-width: 20px;
`;

// Grid responsivo
export const Grid = styled.div`
  display: grid;
  gap: ${props => props.gap || '24px'};
  
  grid-template-columns: repeat(1, 1fr);

  @media ${device.sm} {
    grid-template-columns: repeat(${props => props.sm || 2}, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(${props => props.md || 2}, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(${props => props.lg || 3}, 1fr);
  }

  @media ${device.xl} {
    grid-template-columns: repeat(${props => props.xl || 4}, 1fr);
  }
`;

// Flex Container
export const Flex = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || '16px'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  flex-direction: ${props => props.direction || 'row'};
`;

// Texto con estilos
export const Text = styled.p`
  margin: 0;
  color: ${props => props.color || theme.text};
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      case 'xlarge': return '1.5rem';
      default: return '1rem';
    }
  }};
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'left'};
  line-height: 1.6;
`;

// Título
export const Title = styled.h1`
  margin: 0;
  color: ${props => props.color || theme.dark};
  font-weight: ${props => props.weight || '700'};
  line-height: 1.2;
  font-size: ${props => {
    switch(props.level) {
      case 2: return '2rem';
      case 3: return '1.75rem';
      case 4: return '1.5rem';
      case 5: return '1.25rem';
      case 6: return '1rem';
      default: return '2.5rem';
    }
  }};

  @media ${device.md} {
    font-size: ${props => {
      switch(props.level) {
        case 2: return '2.5rem';
        case 3: return '2rem';
        case 4: return '1.75rem';
        case 5: return '1.5rem';
        case 6: return '1.125rem';
        default: return '3rem';
      }
    }};
  }
`;

// Input estilizado
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${theme.accent};
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: ${theme.textLight};
  }

  &:disabled {
    background: ${theme.light};
    cursor: not-allowed;
  }
`;

// Spinner/Loading
export const Spinner = styled.div`
  border: 3px solid ${theme.light};
  border-top: 3px solid ${theme.primary};
  border-radius: 50%;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  animation: spin 1s linear infinite;
  margin: ${props => props.center ? '0 auto' : '0'};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default { theme, device, Container, Card, Button, Badge, Grid, Flex, Text, Title, Input, Spinner };
