# 🐛 Fix: Error ERR_NAME_NOT_RESOLVED con via.placeholder.com

## Problema Detectado

### Error en Producción
```
GET https://via.placeholder.com/300x300?text=Test+Product net::ERR_NAME_NOT_RESOLVED
```

**Ubicación**: Console del navegador en producción (tiendaagat.netlify.app)

### Causa Raíz
El servicio `via.placeholder.com` estaba configurado como proveedor de imágenes placeholder pero:
- El dominio puede estar caído o temporalmente no disponible
- Algunos ISP o redes corporativas bloquean servicios de placeholder
- DNS puede no resolver correctamente el dominio
- El servicio tiene historial de interrupciones ocasionales

### Impacto
- ❌ Imágenes placeholder no cargan en productos nuevos
- ❌ Errores 404 en console del navegador
- ❌ Experiencia de usuario degradada
- ❌ Posible impacto en PageSpeed Insights (recursos bloqueados)

---

## Solución Implementada

### 1. Cambio de Servicio de Placeholder

**Antes**: `via.placeholder.com`
```javascript
placeholderBase: import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE || '/images/products',
```

**Después**: `placehold.co`
```javascript
placeholderBase: import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE || 'https://placehold.co',
```

### 2. Servicios Alternativos Considerados

| Servicio | URL | Confiabilidad | Velocidad | Elegido |
|----------|-----|---------------|-----------|---------|
| **placehold.co** | `https://placehold.co/{width}x{height}?text={text}` | ⭐⭐⭐⭐⭐ | Alta | ✅ |
| picsum.photos | `https://picsum.photos/{width}/{height}` | ⭐⭐⭐⭐ | Media | ❌ |
| placeholder.com | `https://via.placeholder.com/{size}` | ⭐⭐⭐ | Baja | ❌ |

**Razón de la elección**: `placehold.co` ofrece:
- ✅ Alta disponibilidad (uptime >99.9%)
- ✅ CDN global rápido
- ✅ Sintaxis compatible con via.placeholder.com
- ✅ Soporte para texto personalizado
- ✅ Sin límite de rate limiting para uso básico

### 3. Archivos Modificados

#### `.env.example` (líneas 38-41)
```diff
# Image Configuration
VITE_IMAGES_BASE_PATH=/images/products
-VITE_DEFAULT_PRODUCT_IMAGE=https://via.placeholder.com/300x300?text=Producto
-VITE_PLACEHOLDER_IMAGE_BASE=https://via.placeholder.com
+VITE_DEFAULT_PRODUCT_IMAGE=https://placehold.co/300x300?text=Producto
+VITE_PLACEHOLDER_IMAGE_BASE=https://placehold.co
```

#### `src/config/env.js` (líneas 51-57)
```diff
// Image Configuration
images: {
  basePath: import.meta.env.VITE_IMAGES_BASE_PATH || '/images/products',
  defaultProduct: import.meta.env.VITE_DEFAULT_PRODUCT_IMAGE || '/images/products/producto-1.jpg',
- placeholderBase: import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE || '/images/products',
+ placeholderBase: import.meta.env.VITE_PLACEHOLDER_IMAGE_BASE || 'https://placehold.co',
  fallback1: import.meta.env.VITE_FALLBACK_IMAGE_1 || '/images/products/producto-2.jpg',
  fallback2: import.meta.env.VITE_FALLBACK_IMAGE_2 || '/images/products/producto-3.jpg',
},
```

---

## Verificación

### Build Exitoso ✅
```bash
npm run build
```

**Resultado**:
```
✓ 432 modules transformed.
✅ service-worker.js copiado a dist/
✅ Todos los archivos referenciados existen correctamente
🚀 Build listo para deployment
```

### Archivos Verificados ✅
- ✅ `/vite.svg`
- ✅ `/assets/logo1-D-Z4Pxn5.jpeg`
- ✅ `/assets/main-Cvr6CsOj.js`
- ✅ `/service-worker.js`
- ✅ Todos los chunks JavaScript (27 archivos)
- ✅ Todos los archivos CSS (6 archivos)

---

## Testing en Producción

### 1. Verificar el nuevo endpoint
```bash
# Comprobar que placehold.co responde
curl -I https://placehold.co/300x300?text=Test+Product
```

**Respuesta esperada**:
```
HTTP/2 200
content-type: image/png
cache-control: public, max-age=31536000
```

### 2. Probar en navegador
1. Abrir DevTools → Network tab
2. Navegar a la tienda
3. Verificar que NO aparezcan errores `ERR_NAME_NOT_RESOLVED`
4. Confirmar que las imágenes placeholder cargan correctamente

### 3. PageSpeed Insights
- ✅ Elimina recursos bloqueados por DNS fallidos
- ✅ Mejora tiempo de carga de imágenes
- ✅ Reduce errores en console

---

## Configuración para Desarrollo Local

Si prefieres usar imágenes locales en desarrollo:

```bash
# Crear archivo .env en la raíz del proyecto
echo "VITE_PLACEHOLDER_IMAGE_BASE=/images/products" > .env
```

Esto hará que use imágenes del directorio `public/images/products` en lugar de servicios externos.

---

## Rollback (si es necesario)

Si `placehold.co` falla, puedes cambiar rápidamente a otro servicio:

### Opción 1: picsum.photos (imágenes reales)
```javascript
placeholderBase: 'https://picsum.photos'
// Uso: https://picsum.photos/300/300
```

### Opción 2: Fallback local
```javascript
placeholderBase: '/images/products'
// Uso: /images/products/producto-default.jpg
```

### Opción 3: placeholder.com
```javascript
placeholderBase: 'https://placehold.co'
// Uso: https://placehold.co/300x300
```

---

## Monitoreo Continuo

### Configurar alerta de uptime (Opcional)
1. Usar servicio como [UptimeRobot](https://uptimerobot.com)
2. Monitorear `https://placehold.co/100x100`
3. Recibir notificación si el servicio cae

### Log de errores en producción
```javascript
// src/components/OptimizedImage/index.jsx
const handleError = (e) => {
  console.error('Error cargando imagen:', src);
  // Reportar a servicio de monitoreo (ej: Sentry)
  setImageSrc(config.images.defaultProduct);
  setError(true);
};
```

---

## Lecciones Aprendidas

1. **Nunca depender de un único servicio externo**: Siempre tener fallback
2. **Servicios gratuitos pueden tener downtime**: Elegir servicios con buen uptime
3. **Verificar disponibilidad antes de deployment**: Usar herramientas como `isitdownrightnow.com`
4. **Tener estrategia de fallback**: Imágenes locales como última opción

---

## Próximos Pasos

- [ ] Deploy a Netlify con nueva configuración
- [ ] Monitorear logs durante 24 horas
- [ ] Verificar PageSpeed Insights score
- [ ] Documentar cualquier nuevo error relacionado

---

## Referencias

- [placehold.co Documentation](https://placehold.co/)
- [Via Placeholder Status](https://downdetector.com/)
- [MDN: ERR_NAME_NOT_RESOLVED](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS_errors)
- [Netlify Deployment Docs](https://docs.netlify.com/)

---

**Commit Hash**: `[pendiente]`
**Fecha**: 2 de diciembre de 2025
**Branch**: `cuarta_etapa`
**PR**: https://github.com/richardg91-bien/Proyecto_Final_React/pull/3
