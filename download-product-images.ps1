# Descargando imágenes específicas de productos
Write-Host "Descargando imágenes específicas de productos..."

# Crear directorio si no existe
if (!(Test-Path "public\images\products")) {
    New-Item -ItemType Directory -Force -Path "public\images\products"
}

# Array de URLs de imágenes reales de productos
$productos = @(
    @{url="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-1.jpg"; desc="Mochila"},
    @{url="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-2.jpg"; desc="Camiseta"},
    @{url="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-3.jpg"; desc="Chaqueta"},
    @{url="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-4.jpg"; desc="Pantalón"},
    @{url="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-5.jpg"; desc="Pulsera"},
    @{url="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-6.jpg"; desc="Anillo oro"},
    @{url="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-7.jpg"; desc="Anillo plata"},
    @{url="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-8.jpg"; desc="Aretes"},
    @{url="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-9.jpg"; desc="Disco duro"},
    @{url="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-10.jpg"; desc="SSD"},
    @{url="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-11.jpg"; desc="SSD 256GB"},
    @{url="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-12.jpg"; desc="Gaming Drive"},
    @{url="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-13.jpg"; desc="Monitor"},
    @{url="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-14.jpg"; desc="Monitor Gaming"},
    @{url="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-15.jpg"; desc="Chaqueta mujer"},
    @{url="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-16.jpg"; desc="Chaqueta cuero"},
    @{url="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-17.jpg"; desc="Impermeable"},
    @{url="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-18.jpg"; desc="Blusa mujer"},
    @{url="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-19.jpg"; desc="Camiseta deportiva"},
    @{url="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"; name="producto-20.jpg"; desc="Camiseta casual"}
)

foreach ($producto in $productos) {
    try {
        Write-Host "Descargando $($producto.desc)..."
        Invoke-WebRequest -Uri $producto.url -OutFile "public\images\products\$($producto.name)"
        Write-Host "✓ $($producto.desc) descargada"
    }
    catch {
        Write-Host "✗ Error descargando $($producto.desc)"
    }
}

Write-Host "Descarga de productos completada!"