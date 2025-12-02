# Guía de Resolución de Errores 404

## Error: "A bad HTTP response code (404) was received when fetching the script"

### 🔍 Diagnóstico

Este error ocurre cuando el navegador intenta cargar un archivo JavaScript pero el servidor responde con 404 (No encontrado).

### ✅ Verificaciones Realizadas

1. **Script de Verificación Automática**
   ```bash
   npm run verify
   ```
   Este comando verifica que todos los archivos referenciados en `index.html` existan en el directorio `dist/`.

2. **Archivos Verificados**
   - ✅ `/assets/main-Cvr6CsOj.js` (bundle principal)
   - ✅ `/assets/index-C8VuAxzx.js` (punto de entrada)
   - ✅ `/assets/react-vendor-DhwnvXGV.js` (React vendor)
   - ✅ `/assets/index-Bq4PI4P2.css` (estilos)
   - ✅ `/assets/logo1-D-Z4Pxn5.jpeg` (logo)
   - ✅ `/vite.svg` (favicon)

### 🛠️ Soluciones Implementadas

#### 1. Corrección de Extensiones de Archivo
**Problema:** Vite generaba `main.jsx` en lugar de `main.js`

**Solución en `vite.config.js`:**
```javascript
rollupOptions: {
  output: {
    entryFileNames: 'assets/[name]-[hash].js',
    chunkFileNames: 'assets/[name]-[hash].js',
    assetFileNames: (assetInfo) => {
      // Asegurar extensión .js para archivos JavaScript
      const name = assetInfo.name || '';
      if (name.endsWith('.jsx') || name.endsWith('.js')) {
        return 'assets/[name]-[hash].js';
      }
      if (name.endsWith('.css')) {
        return 'assets/[name]-[hash][extname]';
      }
      return 'assets/[name]-[hash][extname]';
    }
  }
}
```

#### 2. Redirecciones Netlify Correctas
**Archivo: `netlify.toml`**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  conditions = {path = ["!/assets/*", "!/images/*", "!/*.js", "!/*.css"]}
```

### 📋 Checklist de Troubleshooting

Si encuentras errores 404:

- [ ] **1. Ejecutar verificación de build**
  ```bash
  npm run build
  npm run verify
  ```

- [ ] **2. Verificar DevTools Network**
  1. Abrir Chrome DevTools (F12)
  2. Ir a la pestaña "Network"
  3. Recargar la página (Ctrl+R)
  4. Buscar requests con status 404
  5. Verificar la URL completa del request fallido

- [ ] **3. Verificar archivos en dist/**
  ```bash
  ls dist/assets/
  ```

- [ ] **4. Limpiar y reconstruir**
  ```bash
  Remove-Item -Path "dist" -Recurse -Force
  npm run build
  ```

- [ ] **5. Verificar cache del navegador**
  - Vaciar cache (Ctrl+Shift+Delete)
  - O usar modo incógnito

- [ ] **6. Verificar Netlify deployment**
  - Revisar logs de build en Netlify
  - Verificar que todos los archivos se hayan subido

### 🚨 Causas Comunes de 404

1. **Typo en nombres de archivo** (mayúsculas/minúsculas)
2. **Archivos no generados** en el build
3. **Cache del navegador** con referencias viejas
4. **Redirecciones incorrectas** en Netlify
5. **Service Worker cachés** obsoletos

### 🔧 Comandos Útiles

```bash
# Build limpio
npm run build:only

# Verificar archivos generados
npm run verify

# Preview local del build
npm run preview

# Limpiar todo y reconstruir
Remove-Item -Path "dist" -Recurse -Force; npm run build
```

### 📞 Debugging Avanzado

Si el problema persiste:

1. **Verificar configuración de Vite**
   - Revisar `vite.config.js`
   - Verificar `rollupOptions`

2. **Verificar paths relativos vs absolutos**
   - Todos los assets deben usar paths absolutos (`/assets/...`)

3. **Verificar extensiones de archivo**
   - JavaScript: `.js` (no `.jsx`)
   - CSS: `.css`

4. **Netlify redirects**
   - Verificar `netlify.toml`
   - Verificar `_redirects` si existe

### ✅ Estado Actual

- ✅ Build genera archivos correctamente
- ✅ Extensiones de archivo correctas (`.js`)
- ✅ Todos los archivos referenciados existen
- ✅ Script de verificación automática implementado
- ✅ Netlify redirects configurados correctamente
