# 📘 Guía de Styled Components - Mejores Prácticas

## ⚠️ Problema Resuelto: Props Transientes

### El Problema

Cuando pasas props personalizadas a styled-components que no son atributos HTML válidos, React muestra warnings:

```
React does not recognize the `isFavorite` prop on a DOM element
```

### La Solución: Transient Props

Styled-components v5.1+ introduce **transient props** con el prefijo `$`:

```jsx
// ❌ INCORRECTO - La prop se pasa al DOM
<StyledButton isFavorite={true}>Click</StyledButton>

// ✅ CORRECTO - La prop NO se pasa al DOM
<StyledButton $isFavorite={true}>Click</StyledButton>
```

---

## 🎯 Reglas de Transient Props

### Cuándo usar el prefijo `$`

✅ **USA `$` cuando:**
- La prop es solo para estilos (no es un atributo HTML válido)
- La prop controla el estilo del componente
- La prop es booleana o de tipo personalizado

```jsx
// Props de estilo - SIEMPRE con $
<Button $variant="primary" $size="large" $loading={true}>
<Card $elevated={true} $color="blue">
<Input $error={true} $touched={true}>
```

❌ **NO USES `$` cuando:**
- Es un atributo HTML estándar
- Es un evento handler
- Es una prop de React

```jsx
// Atributos HTML válidos - SIN $
<button disabled={true} type="submit" onClick={handleClick}>
<input placeholder="Email" value={email} onChange={handleChange}>
<img src={url} alt="Description">
```

---

## 📝 Ejemplos del Proyecto

### Antes (Con Warnings)

```jsx
// ❌ StyledComponents.js
export const FavoriteButton = styled.button`
  color: ${props => props.isFavorite ? 'red' : 'gray'};
  // isFavorite se pasa al DOM → Warning
`;

// ❌ index.jsx
<FavoriteButton isFavorite={isFavorite}>
```

### Después (Sin Warnings)

```jsx
// ✅ StyledComponents.js
export const FavoriteButton = styled.button`
  color: ${props => props.$isFavorite ? 'red' : 'gray'};
  // $isFavorite NO se pasa al DOM → Sin Warning
`;

// ✅ index.jsx
<FavoriteButton $isFavorite={isFavorite}>
```

---

## 🔧 Correcciones Aplicadas

### 1. FavoriteButton

```jsx
// Antes
<FavoriteButton isFavorite={isFavorite}>

// Después
<FavoriteButton $isFavorite={isFavorite}>
```

**En el styled-component:**
```js
color: ${props => props.$isFavorite ? theme.danger : theme.textLight};
fill: ${props => props.$isFavorite ? 'currentColor' : 'none'};
```

### 2. StockIndicator

```jsx
// Antes
<StockIndicator stock={stock}>

// Después
<StockIndicator $stock={stock}>
```

**En el styled-component:**
```js
background: ${props => {
  if (props.$stock === 0) return `${theme.danger}15`;
  if (props.$stock < 5) return `${theme.warning}15`;
  return `${theme.success}15`;
}};
```

---

## 📚 Cheatsheet de Props

### Props HTML Válidas (Sin `$`)

```jsx
// Elementos de formulario
<input 
  type="text"
  value={value}
  placeholder="Texto"
  disabled={false}
  required={true}
  onChange={handler}
/>

// Botones
<button
  type="submit"
  disabled={false}
  onClick={handler}
>

// Imágenes
<img
  src={url}
  alt="Descripción"
  loading="lazy"
/>

// Links
<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
```

### Props de Estilo (Con `$`)

```jsx
// Props booleanas de estilo
$active={true}
$disabled={false}
$loading={true}
$error={false}
$success={true}

// Props de variante/tema
$variant="primary"
$size="large"
$color="blue"
$theme="dark"

// Props numéricas de estilo
$width={300}
$height={200}
$columns={4}
$gap={16}

// Props de estado visual
$hover={true}
$focused={false}
$visible={true}
$expanded={false}
```

---

## 🎨 Patrones Comunes

### 1. Variantes de Botón

```jsx
const Button = styled.button`
  background: ${props => {
    switch(props.$variant) {
      case 'primary': return '#007bff';
      case 'danger': return '#dc3545';
      case 'success': return '#28a745';
      default: return '#6c757d';
    }
  }};
`;

// Uso
<Button $variant="primary">Guardar</Button>
<Button $variant="danger">Eliminar</Button>
```

### 2. Tamaños Dinámicos

```jsx
const Box = styled.div`
  width: ${props => props.$width || 100}px;
  height: ${props => props.$height || 100}px;
  padding: ${props => props.$padding || 16}px;
`;

// Uso
<Box $width={300} $height={200} $padding={24} />
```

### 3. Estados Condicionales

```jsx
const Card = styled.div`
  opacity: ${props => props.$disabled ? 0.5 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  border-color: ${props => props.$error ? 'red' : 'gray'};
  
  ${props => props.$elevated && `
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `}
`;

// Uso
<Card $disabled={false} $error={true} $elevated={true} />
```

### 4. Responsive Props

```jsx
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 1}, 1fr);
  gap: ${props => props.$gap || 16}px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => props.$md || props.$columns || 2}, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(${props => props.$lg || props.$md || 3}, 1fr);
  }
`;

// Uso
<Grid $columns={1} $md={2} $lg={4} $gap={24} />
```

---

## 🚨 Errores Comunes

### Error 1: Olvidar el `$` en el styled-component

```jsx
// ❌ INCORRECTO
const Button = styled.button`
  color: ${props => props.$variant === 'primary' ? 'blue' : 'gray'};
`;
<Button variant="primary" />  // variant sin $

// ✅ CORRECTO
const Button = styled.button`
  color: ${props => props.$variant === 'primary' ? 'blue' : 'gray'};
`;
<Button $variant="primary" />
```

### Error 2: Usar `$` en atributos HTML

```jsx
// ❌ INCORRECTO
<input $type="text" $placeholder="Email" />

// ✅ CORRECTO
<input type="text" placeholder="Email" />
```

### Error 3: Mezclar props de estilo con atributos

```jsx
// ❌ CONFUSO
<Button type="submit" variant="primary" loading={true}>

// ✅ CLARO
<Button type="submit" $variant="primary" $loading={true}>
```

---

## 🎓 Beneficios de Transient Props

### 1. **Performance**
- Props no se pasan al DOM
- Menos atributos HTML innecesarios
- Menos re-renders

### 2. **Claridad**
- Distingue props de estilo vs props HTML
- Código más legible
- Menos confusión en el equipo

### 3. **Sin Warnings**
- Consola limpia en desarrollo
- No más "React does not recognize..."
- Mejor experiencia de desarrollo

### 4. **TypeScript Friendly**
- Mejor inferencia de tipos
- Props de estilo claramente identificadas
- Menos errores de tipo

---

## 📖 Recursos Adicionales

### Documentación Oficial
- [Styled Components - Transient Props](https://styled-components.com/docs/api#transient-props)
- [React - DOM Elements](https://react.dev/reference/react-dom/components/common)

### Blog Posts
- [Styled Components v5.1 Release](https://medium.com/styled-components/announcing-styled-components-v5-1-7e2d94a48f20)
- [Understanding Transient Props](https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings)

---

## ✅ Checklist de Revisión

Antes de hacer commit, verifica:

- [ ] Todas las props de estilo usan el prefijo `$`
- [ ] Todas las props HTML NO usan el prefijo `$`
- [ ] Los styled-components acceden a props con `props.$nombre`
- [ ] No hay warnings en la consola sobre props desconocidas
- [ ] El código es consistente en todo el proyecto

---

## 🎉 Resumen

**Regla Simple:**
- **Props de estilo** → `$propName`
- **Props HTML válidas** → `propName` (sin `$`)

**Siempre pregúntate:**
> ¿Esta prop es un atributo HTML estándar?
> - **SÍ** → No uses `$`
> - **NO** → Usa `$`

---

**¡Ahora tu aplicación está libre de warnings de styled-components! 🎊**

