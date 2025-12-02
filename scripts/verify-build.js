#!/usr/bin/env node

/**
 * Script de verificación post-build
 * Verifica que todos los archivos referenciados en index.html existan
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');

console.log('🔍 Verificando archivos post-build...\n');

if (!fs.existsSync(indexHtml)) {
  console.error('❌ Error: index.html no encontrado en dist/');
  process.exit(1);
}

const html = fs.readFileSync(indexHtml, 'utf-8');

// Extraer referencias a archivos
const assetPatterns = [
  /href="([^"]+\.(js|css|jpeg|jpg|png|svg|ico|woff|woff2))"/g,
  /src="([^"]+\.(js|css|jpeg|jpg|png|svg|ico))"/g,
];

const referencedFiles = new Set();
let match;

assetPatterns.forEach(pattern => {
  while ((match = pattern.exec(html)) !== null) {
    const file = match[1];
    // Solo verificar archivos locales (no URLs externas)
    if (!file.startsWith('http') && !file.startsWith('//')) {
      referencedFiles.add(file);
    }
  }
});

console.log(`📋 Archivos referenciados encontrados: ${referencedFiles.size}\n`);

let allFilesExist = true;

referencedFiles.forEach(file => {
  const filePath = path.join(distDir, file.replace(/^\//, ''));
  const exists = fs.existsSync(filePath);
  
  const status = exists ? '✅' : '❌';
  const color = exists ? '\x1b[32m' : '\x1b[31m';
  const reset = '\x1b[0m';
  
  console.log(`${color}${status} ${file}${reset}`);
  
  if (!exists) {
    allFilesExist = false;
  }
});

console.log('\n');

// Verificación adicional: archivos críticos en la raíz
const criticalRootFiles = [
  'service-worker.js',
  'robots.txt',
  'vite.svg'
];

console.log('🔍 Verificando archivos críticos en raíz...\n');

criticalRootFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  const exists = fs.existsSync(filePath);
  
  const status = exists ? '✅' : '⚠️ ';
  const color = exists ? '\x1b[32m' : '\x1b[33m';
  const reset = '\x1b[0m';
  
  console.log(`${color}${status} /${file}${reset}`);
  
  if (!exists && file === 'service-worker.js') {
    console.log(`   ${color}→ Nota: service-worker.js faltante causará error 404 en navegador${reset}`);
  }
});

console.log('\n');

if (allFilesExist) {
  console.log('✅ Todos los archivos referenciados existen correctamente');
  console.log('🚀 Build listo para deployment\n');
  process.exit(0);
} else {
  console.error('❌ Algunos archivos referenciados no existen');
  console.error('⚠️  Esto causará errores 404 en producción\n');
  process.exit(1);
}
