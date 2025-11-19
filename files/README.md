# 🎮 LUGX Gaming - Best Gaming Site Ever

![LUGX Gaming](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Descripción

LUGX Gaming es una plataforma web moderna e interactiva diseñada para gamers. Ofrece una experiencia completa con catálogo de juegos, sistema de análisis de datos, recomendaciones personalizadas y funcionalidades de e-commerce.

## ✨ Características Principales

### 🎯 Funcionalidades Core
- **Catálogo de Juegos**: Exploración de juegos trending, más jugados y por categorías
- **Sistema de Carrito**: Añadir, modificar y gestionar compras
- **Lista de Deseos**: Guardar juegos favoritos para compras futuras
- **Motor de Recomendaciones**: Sugerencias personalizadas basadas en preferencias
- **Analytics Dashboard**: Visualización de datos con gráficos interactivos
- **Sistema de Búsqueda**: Búsqueda avanzada con filtros múltiples

### 📊 Panel de Análisis
- **Visualizaciones Dinámicas**:
  - Gráfico de barras (Top ventas)
  - Gráfico circular (Distribución de plataformas)
  - Gráfico de líneas (Tendencias de crecimiento)
  - Gráfico de área (Tendencias de ingresos)
- **Gestión de Datasets**: 
  - Carga de CSV personalizado
  - Dataset predeterminado incluido
  - Filtros por género y plataforma
  - Búsqueda en tiempo real

### 🛒 Sistema de E-Commerce
- Carrito de compras interactivo
- Gestión de cantidades
- Cálculo de totales
- Panel lateral deslizante
- Notificaciones de acciones

### 👤 Gestión de Usuario
- Modal de inicio de sesión
- Perfil de usuario
- Sistema de notificaciones
- Estadísticas personales

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: 
  - Flexbox y Grid Layout
  - Animaciones y transiciones
  - Responsive Design
  - Gradientes y efectos visuales
- **JavaScript (ES6+)**:
  - DOM Manipulation
  - Event Handling
  - Local Storage
  - CSV Parsing
  - Data Visualization

### Librerías
- **Font Awesome 6.4.0**: Iconografía
- **Google Fonts**: Tipografías personalizadas

## 📁 Estructura del Proyecto

```
LUGX-Gaming/
│
├── index.html              # Página principal
├── style.css               # Estilos globales
├── script.js               # Lógica de aplicación
├── games_dataset.csv       # Dataset de juegos
│
├── img/                    # Recursos visuales
│   ├── logo.png
│   ├── banner-bg.jpg
│   ├── banner-image.jpg
│   ├── featured-*.png
│   ├── trending-*.jpg
│   └── [otros assets]
│
└── docs/                   # Documentación
    ├── README.md
    ├── USER_GUIDE.md
    ├── TECHNICAL_DOCS.md
    └── API_REFERENCE.md
```

## 🔧 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para desarrollo)

### Instalación Básica

1. **Clonar o descargar el repositorio**
```bash
git clone https://github.com/tu-usuario/lugx-gaming.git
cd lugx-gaming
```

2. **Abrir en navegador**
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar servidor local
python -m http.server 8000
# Visitar: http://localhost:8000

# Opción 3: Usar Live Server (VS Code)
# Click derecho en index.html > Open with Live Server
```

3. **Verificar recursos**
- Asegúrate de que la carpeta `img/` contenga todos los assets
- Verifica que `games_dataset.csv` esté presente

## 📖 Guía de Uso

### Navegación Principal

#### Header
- **Home**: Página de inicio
- **Games**: Catálogo de juegos
- **Categories**: Juegos por categoría
- **Analytics**: Panel de análisis de datos
- **About**: Información sobre LUGX
- **Contact**: Formulario de contacto

#### Iconos de Usuario
- 🔍 **Búsqueda**: Focus en barra de búsqueda
- 🛒 **Carrito**: Abre panel de compras
- 🔔 **Notificaciones**: Alertas y actualizaciones
- 👤 **Perfil**: Acceso a cuenta y configuración

### Funcionalidades Específicas

#### 1. Sistema de Carrito
```javascript
// Añadir juego al carrito
addToCart(gameName, price)

// Actualizar cantidad
updateQuantity(index, newQuantity)

// Eliminar del carrito
removeFromCart(index)

// Proceder al pago
checkout()
```

#### 2. Motor de Recomendaciones
1. Navegar a sección **Analytics**
2. Rellenar formulario de preferencias:
   - Presupuesto
   - Género preferido
   - Plataforma
   - Rating mínimo
3. Click en "Get Recommendations"
4. Revisar top 5 juegos sugeridos

#### 3. Gestión de Datos
- **Cargar dataset personalizado**:
  1. Click en botón ▶ para expandir opciones
  2. Seleccionar archivo CSV
  3. Click en "Load Custom CSV"

- **Filtrar datos**:
  - Usar dropdowns de género/plataforma
  - Escribir en barra de búsqueda
  - Los resultados se actualizan en tiempo real

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: `#008af8` (Azul)
- **Secundario**: `#ee626b` (Rojo/Rosa)
- **Éxito**: `#28a745` (Verde)
- **Advertencia**: `#ffc107` (Amarillo)
- **Fondo**: `#f8f9fa` (Gris claro)
- **Texto**: `#1a1a2e` (Oscuro)

### Responsive Design
- **Desktop**: > 1024px (Diseño completo)
- **Tablet**: 768px - 1024px (Grid adaptado)
- **Mobile**: < 768px (Layout vertical, menú hamburguesa)

### Animaciones
- Hover effects en cards
- Transiciones suaves
- Scroll animations
- Loading states
- Modal transitions

## 📊 Dataset de Juegos

### Estructura CSV
```csv
Game Title,Genre,Platform,Release Year,Global Sales (Millions),User Rating,Price (USD),Developer,Publisher,Multiplayer,ESRB Rating,Metacritic Score
```

### Campos Disponibles
- **Game Title**: Nombre del juego
- **Genre**: Género (RPG, Action, etc.)
- **Platform**: PC, PlayStation, Xbox, Nintendo
- **Release Year**: Año de lanzamiento
- **Global Sales**: Ventas en millones
- **User Rating**: Calificación (0-10)
- **Price**: Precio en USD
- **Developer**: Desarrollador
- **Publisher**: Publicador
- **Multiplayer**: Single-player/Multiplayer
- **ESRB Rating**: E, T, M
- **Metacritic Score**: Puntuación crítica

### Juegos Destacados Incluidos
- The Witcher 3: Wild Hunt
- Red Dead Redemption 2
- Elden Ring
- Cyberpunk 2077
- God of War
- Baldur's Gate 3
- Minecraft
- Fortnite
- League of Legends
- Y muchos más...

## 🔌 API Reference

### Funciones Globales

#### Sistema de Modales
```javascript
// Abrir modal central
openModal(modalId)

// Cerrar modal central
closeModal(modalId)

// Abrir modal lateral
openSideModal(modalId)

// Cerrar modal lateral
closeSideModal(modalId)
```

#### Carrito de Compras
```javascript
// Añadir producto
addToCart(gameName, price)

// Abrir panel de carrito
openCartPanel()

// Cerrar panel de carrito
closeCartPanel()

// Actualizar cantidad de producto
updateQuantity(index, newQuantity)

// Eliminar producto
removeFromCart(index)

// Procesar pago
checkout()
```

#### Sistema de Notificaciones
```javascript
// Mostrar notificación
showNotification(message)

// Parámetros:
// - message: string - Texto a mostrar
```

#### Newsletter
```javascript
// Suscribir email
subscribeNewsletter()
```

## 🧪 Testing

### Pruebas Manuales Recomendadas

1. **Funcionalidad de Carrito**
   - Añadir múltiples juegos
   - Modificar cantidades
   - Eliminar productos
   - Verificar cálculo de totales

2. **Sistema de Búsqueda**
   - Buscar por nombre de juego
   - Filtrar por género
   - Filtrar por plataforma
   - Combinar múltiples filtros

3. **Recomendaciones**
   - Probar diferentes combinaciones de filtros
   - Verificar orden por rating
   - Comprobar límite de presupuesto

4. **Responsive Design**
   - Probar en diferentes tamaños de pantalla
   - Verificar menú móvil
   - Comprobar scroll horizontal en "Most Played"

5. **Carga de Datos**
   - Cargar CSV personalizado
   - Verificar parseo correcto
   - Comprobar actualización de gráficos

## 🐛 Problemas Conocidos y Soluciones

### Problema: El CSV no se carga
**Solución**: Verifica que el archivo esté en la raíz del proyecto y tenga el formato correcto.

### Problema: Imágenes no se muestran
**Solución**: Asegúrate de que la carpeta `img/` contenga todos los recursos necesarios.

### Problema: Estilos no se aplican
**Solución**: Verifica que `style.css` esté correctamente vinculado en el HTML.

### Problema: JavaScript no funciona
**Solución**: Abre la consola del navegador (F12) y revisa errores. Verifica que `script.js` esté cargado.

## 🚀 Mejoras Futuras

### Versión 2.0 (Planificado)
- [ ] Backend con Node.js/Express
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación de usuarios
- [ ] Sistema de pagos real
- [ ] API REST completa
- [ ] Panel de administración
- [ ] Integración con APIs de juegos (Steam, Epic Games)
- [ ] Sistema de reviews y comentarios
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)

### Features Adicionales
- [ ] Wishlist persistente
- [ ] Historial de compras
- [ ] Comparador de precios
- [ ] Alertas de ofertas
- [ ] Integración con redes sociales
- [ ] Chat de soporte en vivo
- [ ] Sistema de puntos/recompensas
- [ ] Gamificación del sitio

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Sigue las convenciones de código existentes
- Comenta código complejo
- Actualiza la documentación según sea necesario
- Prueba exhaustivamente antes de hacer PR

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autores

- **Equipo LUGX** - *Desarrollo inicial* - [LUGX Gaming](https://github.com/lugx-gaming)

## 🙏 Agradecimientos

- Font Awesome por los iconos
- Unsplash/Pexels por las imágenes
- Comunidad de desarrolladores web
- Template inspiration: TemplateMo

## 📞 Contacto

- **Website**: [lugxgaming.com](https://lugxgaming.com)
- **Email**: support@lugxgaming.com
- **Twitter**: [@LUGXGaming](https://twitter.com/lugxgaming)
- **Discord**: [LUGX Community](https://discord.gg/lugxgaming)

## 📸 Screenshots

### Página Principal
![Home Page](docs/screenshots/home.png)

### Catálogo de Juegos
![Games Catalog](docs/screenshots/catalog.png)

### Panel de Analytics
![Analytics Dashboard](docs/screenshots/analytics.png)

### Carrito de Compras
![Shopping Cart](docs/screenshots/cart.png)

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!**

*Hecho con ❤️ por el equipo LUGX Gaming*
