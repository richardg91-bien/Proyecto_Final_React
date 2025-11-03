# Script para descargar imagenes de productos
Write-Host "Iniciando descarga de imagenes..."

# Crear directorio si no existe
if (!(Test-Path "public\images\products")) {
    New-Item -ItemType Directory -Force -Path "public\images\products"
}

# Descargar imagenes una por una
try {
    Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" -OutFile "public\images\products\mochila-laptop.jpg"
    Write-Host "Imagen 1 descargada"
}
catch {
    Write-Host "Error en imagen 1"
}

try {
    Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" -OutFile "public\images\products\camiseta-hombre.jpg"
    Write-Host "Imagen 2 descargada"
}
catch {
    Write-Host "Error en imagen 2"
}

try {
    Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" -OutFile "public\images\products\chaqueta-hombre.jpg"
    Write-Host "Imagen 3 descargada"
}
catch {
    Write-Host "Error en imagen 3"
}

Write-Host "Descarga completada"