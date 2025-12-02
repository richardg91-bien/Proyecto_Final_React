# 🎯 Instrucciones para Lighthouse Audit en Producción

## ⚠️ IMPORTANTE: Diferencia entre Dev y Production

### Por qué los números del audit anterior eran altos

El audit que ejecutaste estaba analizando el servidor de **DESARROLLO** (`npm run dev` en puerto 5174), no producción. En desarrollo:

- ❌ Sin minificación
- ❌ Sin tree-shaking real
- ❌ Sin compresión Terser
- ❌ Con source maps
- ❌ Con hot reload overhead
- ❌ Código sin optimizar

**Resultado**: JavaScript de 1,123 KB sin comprimir

### Por qué ahora será diferente

El build de producción (`npm run build`) aplica:

- ✅ Minificación con Terser (2 pasadas)
- ✅ Tree-shaking real
- ✅ Code splitting efectivo
- ✅ Drop console.log
- ✅ Compresión agresiva
- ✅ CSS minificado

**Resultado esperado**: JavaScript ~238 KB (gzip: ~33 KB)

---

## 🚀 Cómo ejecutar el audit correcto

### Opción 1: Lighthouse en Servidor de Preview (RECOMENDADO)

```bash
# 1. Hacer build de producción
npm run build

# 2. Iniciar servidor de preview
npm run preview
# Servidor en: http://localhost:4173

# 3. Abrir Chrome DevTools en otra pestaña
# 4. Ir a pestaña "Lighthouse"
# 5. Seleccionar:
#    - Mode: Navigation
#    - Device: Desktop
#    - Categories: Performance, SEO, Best Practices
# 6. Click "Analyze page load"
```

### Opción 2: Lighthouse CLI en Preview

```bash
# Con servidor preview corriendo en puerto 4173
lighthouse http://localhost:4173 --view --preset=desktop
```

### Opción 3: Lighthouse en Sitio Deployado

```bash
# Después de deploy a Vercel/Netlify
lighthouse https://tu-app.vercel.app --view --preset=desktop
```

---

## 📊 Resultados Esperados del Build

### Bundle Sizes (Sin Gzip)

```
📦 Critical Path (Carga Inicial):
├─ HTML:            1.68 KB
├─ Main JS:         3.84 KB  ✅
├─ App Context:     2.85 KB  ✅
└─ Bootstrap CSS:  231 KB

Total inicial: ~240 KB

📦 Lazy Loaded (Solo cuando se necesita):
├─ React Core:    182.84 KB  (lazy)
├─ UI Libs:        41.59 KB  (lazy)
├─ Router:         31.42 KB  (lazy)
├─ Vendor:         32.29 KB  (lazy)
├─ Styled:         17.26 KB  (lazy)
├─ Bootstrap:      19.00 KB  (lazy)
├─ Icons:           6.97 KB  (lazy)
└─ Admin:          17.59 KB  (lazy)

Total lazy: ~349 KB (carga bajo demanda)
```

### Con Gzip (Lo que el navegador realmente descarga)

```
📦 Critical Path Gzipped:
├─ HTML:            0.61 KB
├─ Main JS:         1.61 KB  ⚡
├─ App Context:     1.19 KB  ⚡
└─ Bootstrap CSS:  30.69 KB

Total inicial gzip: ~33 KB ⚡⚡⚡

📦 Lazy Loaded Gzipped:
├─ React Core:     57.68 KB
├─ UI Libs:        13.22 KB
├─ Router:         11.39 KB
├─ Vendor:         11.79 KB
├─ Styled:          6.45 KB
├─ Bootstrap:       6.30 KB
├─ Icons:           1.84 KB
└─ Admin:           4.59 KB

Total lazy gzip: ~113 KB (bajo demanda)
```

---

## 🎯 Scores Esperados en Production

### Performance

| Métrica | Esperado | Razón |
|---------|----------|-------|
| **Performance Score** | **90-95** | Bundle inicial 33KB gzip |
| **LCP** | **< 1.5s** | Imagen con fetchPriority="high" |
| **FID** | **< 50ms** | JS minificado, sin bloqueos |
| **CLS** | **< 0.05** | width/height en imágenes |
| **TBT** | **< 200ms** | Code splitting, task scheduling |

### Otras Categorías

| Categoría | Score | Estado |
|-----------|-------|--------|
| **SEO** | 100 | ✅ Meta tags completos |
| **Accessibility** | 95-100 | ✅ ARIA, semantic HTML |
| **Best Practices** | 95-100 | ✅ HTTPS ready, modern JS |

---

## 📈 Comparativa: Dev vs Production

| Métrica | Dev (5174) | Production (4173) | Mejora |
|---------|------------|-------------------|--------|
| **JavaScript** | 1,123 KB | ~113 KB gzip | **↓ 90%** |
| **CSS** | 43 KB | ~33 KB gzip | **↓ 23%** |
| **Bundle Inicial** | ~250 KB | ~33 KB gzip | **↓ 87%** |
| **LCP** | ~2.5s | **~1.2s** | **↓ 52%** |
| **Performance** | 60-70 | **90-95** | **↑ 40%** |

---

## 🔍 Cómo Verificar las Optimizaciones

### 1. Verificar Code Splitting

Abrir Chrome DevTools → Network → Recargar página

Deberías ver:
- ✅ Carga inicial: Solo 3-4 archivos JS (~35 KB total)
- ✅ Al navegar a /women: Se carga `index-*.js` adicional
- ✅ Al navegar a /admin: Se carga `admin-chunk-*.js`

### 2. Verificar Lazy Loading de Imágenes

Abrir Chrome DevTools → Network → Filtrar por IMG

Deberías ver:
- ✅ Solo imágenes above-the-fold se cargan inicialmente
- ✅ Al hacer scroll, imágenes se cargan on-demand
- ✅ Logo tiene `fetchPriority: high`
- ✅ Productos tienen `loading: lazy`

### 3. Verificar Minificación

Abrir cualquier archivo .js del build en `dist/assets/js/`

Deberías ver:
- ✅ Código en una sola línea
- ✅ Variables renombradas (a, b, c, etc.)
- ✅ Sin console.log
- ✅ Sin comentarios
- ✅ Sin espacios innecesarios

### 4. Verificar Gzip

En Chrome DevTools → Network → Select any JS file → Size column

Deberías ver dos tamaños:
```
57.7 KB / 182.8 KB
   ↑        ↑
 Gzip    Original
```

---

## 🚨 Problemas Comunes

### "Los números siguen altos"

**Causa**: Estás corriendo audit en `npm run dev` (puerto 5174)  
**Solución**: Usa `npm run preview` (puerto 4173) después de `npm run build`

### "No veo las optimizaciones"

**Causa**: Caché del navegador  
**Solución**: 
```
1. Abrir DevTools
2. Network tab
3. Check "Disable cache"
4. Hacer hard refresh (Ctrl+Shift+R)
```

### "Bootstrap CSS sigue siendo grande"

**Causa**: Es normal, Bootstrap base es ~230KB sin gzip  
**Mejora futura**: Implementar custom SCSS con solo módulos usados  
**Con Gzip**: Se reduce a ~31KB ✅

### "Lighthouse dice 'failed to load'"

**Causa**: Servidor no está corriendo  
**Solución**: Verificar que `npm run preview` esté corriendo en 4173

---

## 📋 Checklist Pre-Audit

Antes de ejecutar Lighthouse en producción:

- [ ] Ejecutar `npm run build` (sin errores)
- [ ] Ejecutar `npm run preview`
- [ ] Verificar que abre en `http://localhost:4173`
- [ ] Abrir la app en el navegador y verificar que funciona
- [ ] Cerrar otros tabs/apps pesadas
- [ ] Desactivar extensiones del navegador (modo incógnito)
- [ ] Ejecutar Lighthouse con:
  - [ ] Mode: Navigation
  - [ ] Device: Desktop
  - [ ] Throttling: No throttling (Applied) o Simulated
- [ ] Esperar a que termine el análisis completo

---

## 🎯 Comandos Rápidos

```bash
# Build completo
npm run build

# Preview en puerto 4173
npm run preview

# Lighthouse Desktop (otra terminal)
lighthouse http://localhost:4173 --view --preset=desktop

# Lighthouse Mobile
lighthouse http://localhost:4173 --view --preset=mobile

# Ver tamaños de archivos
ls -lh dist/assets/js/
```

---

## 📊 Análisis Post-Audit

### Si Performance es 90-95 ✅
¡Perfecto! Las optimizaciones funcionaron.

### Si Performance es 80-89 ⚠️
Revisar:
- LCP: ¿La imagen principal carga rápido?
- TBT: ¿Hay tareas largas en main thread?
- CLS: ¿Hay layout shifts?

### Si Performance es < 80 ❌
Problemas posibles:
- ¿Estás en modo dev en vez de preview?
- ¿El build falló parcialmente?
- ¿Hay errores en console del navegador?
- ¿Bootstrap CSS no está cacheado?

---

## 🚀 Next Steps Post-Audit

### Si el audit sale bien (90+)

1. **Deploy a Vercel/Netlify**
   ```bash
   # Vercel
   npm i -g vercel
   vercel --prod
   
   # Netlify
   netlify deploy --prod --dir=dist
   ```

2. **Configurar CDN**
   - Vercel/Netlify lo hacen automáticamente
   - Edge caching worldwide

3. **Setup Monitoring**
   - Google Analytics 4
   - Web Vitals monitoring
   - Error tracking (Sentry)

### Si el audit necesita mejoras (< 90)

1. **Analizar Bottlenecks**
   - Chrome DevTools → Performance
   - Identificar tareas largas
   - Verificar waterfall de Network

2. **Optimizaciones Adicionales**
   - Preload de fuentes críticas
   - Reducir Bootstrap a módulos específicos
   - Implementar Service Worker
   - HTTP/2 Server Push

---

## 📞 Soporte

Si después de seguir estos pasos los números siguen altos:

1. Verificar que estés en preview (puerto 4173)
2. Ver console del navegador para errores
3. Compartir screenshot del audit completo
4. Compartir output de `npm run build`

---

**Fecha**: 1 de diciembre de 2025  
**Proyecto**: Indumentaria Agat  
**Build**: Producción optimizado  
**Estado**: ✅ Ready para audit
