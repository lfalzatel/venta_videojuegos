# 🔧 Documentación Técnica - LUGX Gaming

## Tabla de Contenidos
1. [Arquitectura del Sistema](#arquitectura-del-sistema)
2. [Componentes Principales](#componentes-principales)
3. [Estructura HTML](#estructura-html)
4. [Sistema de Estilos CSS](#sistema-de-estilos-css)
5. [Lógica JavaScript](#lógica-javascript)
6. [Gestión de Datos](#gestión-de-datos)
7. [Sistema de Eventos](#sistema-de-eventos)
8. [Optimizaciones](#optimizaciones)
9. [Buenas Prácticas](#buenas-prácticas)
10. [Guía de Desarrollo](#guía-de-desarrollo)

---

## Arquitectura del Sistema

### Stack Tecnológico

```
┌─────────────────────────────────────┐
│         LUGX Gaming Platform        │
├─────────────────────────────────────┤
│  Frontend Layer                     │
│  ├─ HTML5 (Estructura)              │
│  ├─ CSS3 (Presentación)             │
│  └─ Vanilla JavaScript (Lógica)     │
├─────────────────────────────────────┤
│  Data Layer                         │
│  └─ CSV File (games_dataset.csv)    │
├─────────────────────────────────────┤
│  External Dependencies              │
│  └─ Font Awesome 6.4.0 (Icons)      │
└─────────────────────────────────────┘
```

### Patrón de Diseño

**Arquitectura MVC Simplificada**:
- **Model**: Datos de juegos (CSV, arrays JavaScript)
- **View**: DOM HTML + CSS
- **Controller**: Event handlers y lógica JavaScript

**Paradigma**: Event-Driven Architecture
- Basado en eventos del usuario
- Listeners para interacciones
- Callbacks para respuestas asíncronas

---

## Componentes Principales

### 1. Sistema de Navegación

**Ubicación**: `<header>` element

**Componentes**:
```html
<header>
  ├─ Logo (imagen)
  ├─ main-nav (navegación principal)
  │  └─ ul > li > a (links de sección)
  └─ header-icons (controles de usuario)
     ├─ icon-button (búsqueda)
     ├─ icon-button (carrito con contador)
     ├─ icon-button (notificaciones)
     └─ dropdown (menú de perfil)
</header>
```

**Características técnicas**:
- `position: fixed` para header sticky
- `z-index: 1000` para estar sobre contenido
- Transición suave en `box-shadow` al scroll
- Responsive con toggle móvil

**CSS Relevante**:
```css
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}
```

### 2. Hero Banner

**Componente**: Landing section

**Estructura**:
```html
<section class="hero-banner">
  <div class="hero-content">
    <div class="hero-text">
      ├─ Subtitle
      ├─ Title
      ├─ Description
      └─ Search form
    </div>
    <div class="hero-image">
      ├─ Featured game image
      ├─ Price badge
      └─ Discount badge
    </div>
  </div>
</section>
```

**Layout**:
- Flexbox para distribución
- `justify-content: space-between`
- Responsive: cambia a column en mobile

### 3. Game Cards

**Tipos de Cards**:

#### Game Card (Vertical)
```html
<div class="game-card">
  <div class="game-image">
    <img>
    <div class="game-overlay">
      <span class="quick-view">
    </div>
  </div>
  <div class="game-info">
    <span class="game-category">
    <h3 class="game-title">
    <div class="game-price-tag">
  </div>
</div>
```

#### Game Card Horizontal
```html
<div class="game-card-horizontal">
  [similar structure but optimized for width]
</div>
```

**Efectos**:
- Transform: `translateY(-10px)` on hover
- Image zoom: `scale(1.1)` on hover
- Overlay opacity transition
- Box-shadow elevation

### 4. Sistema de Modales

**Tipos de Modales**:

#### Modal Central
```html
<div id="modalX" class="modal">
  <div class="modal-content">
    <span class="close">×</span>
    [contenido del modal]
  </div>
</div>
```

**Características**:
- `position: fixed` fullscreen
- Backdrop: `rgba(0, 0, 0, 0.7)`
- Animación: `fadeIn` y `slideIn`
- ESC key para cerrar
- Click fuera para cerrar

#### Side Modal
```html
<div id="sideModalX" class="side-modal">
  <div class="side-modal-content">
    <div class="side-modal-header">
    <div class="side-modal-body">
  </div>
</div>
```

**Características**:
- Slide desde derecha: `right: -400px` → `right: 0`
- Transición: `0.3s ease`
- Clase `.open` para control
- Width fijo: 400px

### 5. Analytics Dashboard

**Componentes de Visualización**:

#### Bar Chart
```html
<div class="bar-chart">
  <div class="bar-item">
    <div class="bar-label">
    <div class="bar-container">
      <div class="bar-fill">
    <div class="bar-value">
  </div>
</div>
```

**CSS Dinámico**:
```css
.bar-fill {
  width: [calculado dinámicamente]%;
  background: linear-gradient(...);
  transition: width 1.5s ease;
}
```

#### Pie Chart
```html
<div class="pie-chart">
  [SVG o CSS conic-gradient]
</div>
<div class="pie-legend">
  [items de leyenda]
</div>
```

**Técnica**:
```css
.pie-chart {
  background: conic-gradient(
    #008af8 0% 45%,
    #ee626b 45% 75%,
    ...
  );
}
```

#### Line/Area Charts
```html
<svg viewBox="0 0 400 200" class="line-chart-svg">
  <polyline points="..." class="line-path">
  <circle cx="..." cy="..." r="4" class="data-point">
</svg>
```

**Animación SVG**:
```css
.line-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease forwards;
}

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
```

---

## Estructura HTML

### Semántica y Accesibilidad

**Etiquetas Semánticas Utilizadas**:
- `<header>`: Navegación principal
- `<section>`: Secciones del contenido
- `<nav>`: Menú de navegación
- `<footer>`: Pie de página
- `<form>`: Formularios de contacto, búsqueda, etc.

**Atributos de Accesibilidad**:
```html
<button 
  class="icon-button" 
  title="Search" 
  aria-label="Search">
  <i class="fas fa-search"></i>
</button>
```

**Landmarks ARIA**:
- `role="navigation"` implícito en `<nav>`
- `role="main"` para contenido principal
- `role="complementary"` para sidebars

### Estructura de Secciones

```html
<!DOCTYPE html>
<html lang="es">
<head>
  [meta tags, links, title]
</head>
<body>
  <header>...</header>
  
  <!-- Hero Banner -->
  <section class="hero-banner" id="home">
  
  <!-- Features -->
  <section class="features-section">
  
  <!-- Trending Games -->
  <section class="games-section" id="trending">
  
  <!-- Most Played -->
  <section class="top-games-section" id="shop">
  
  <!-- Categories -->
  <section class="categories-section" id="categories">
  
  <!-- Analytics -->
  <section class="analytics-section" id="analytics">
  
  <!-- About -->
  <section class="about-section" id="about">
  
  <!-- Contact -->
  <section class="contact-section" id="contact">
  
  <!-- Testimonials -->
  <section class="testimonials-section">
  
  <!-- Promotions -->
  <section class="promotions">
  
  <!-- Footer -->
  <footer class="main-footer">
  
  <!-- Modals -->
  <div id="modal1" class="modal">...
  [otros modales]
  
  <!-- Side Modals -->
  <div id="loginModal" class="side-modal">...
  [otros side modals]
  
  <!-- Cart Panel -->
  <div id="cartPanel" class="cart-side-panel">
  
  <script src="script.js"></script>
</body>
</html>
```

---

## Sistema de Estilos CSS

### Metodología

**Organización**:
1. Reset y Globales
2. Header y Navegación
3. Hero Banner
4. Features
5. Secciones de Juegos
6. Categorías
7. Analytics
8. About y Contact
9. Testimonials y Promotions
10. Footer
11. Modales
12. Responsive

**Convención de Nomenclatura**: BEM-inspired
```css
.block { }
.block__element { }
.block--modifier { }

/* Ejemplos */
.game-card { }
.game-card__image { }
.game-card--horizontal { }
```

### Variables y Constantes

**Colores** (hardcoded, considerar CSS variables):
```css
/* Primarios */
#008af8 /* Azul principal */
#ee626b /* Rojo/Rosa secundario */

/* Secundarios */
#28a745 /* Verde éxito */
#ffc107 /* Amarillo advertencia */
#dc3545 /* Rojo error */

/* Neutros */
#1a1a2e /* Texto oscuro */
#f8f9fa /* Fondo claro */
#6c757d /* Gris medio */
```

**Espaciado**:
```css
/* Padding consistente */
padding: 20px, 30px, 40px, 60px, 80px, 100px, 120px

/* Gaps */
gap: 15px, 20px, 25px, 30px, 40px, 60px, 80px

/* Border radius */
border-radius: 8px, 10px, 12px, 15px, 20px, 25px, 30px
```

**Sombras**:
```css
/* Elevación baja */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Elevación media */
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);

/* Elevación alta */
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
```

### Layout System

**Grid Templates**:
```css
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.categories-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.charts-grid {
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
}
```

**Flexbox Patterns**:
```css
/* Header layout */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Hero content */
.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

/* Card info */
.game-info {
  display: flex;
  flex-direction: column;
}
```

### Animaciones y Transiciones

**Transiciones Estándar**:
```css
.element {
  transition: all 0.3s ease;
}

/* Específicas */
.game-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button {
  transition: background-color 0.3s ease, transform 0.2s;
}
```

**Keyframe Animations**:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
```

### Responsive Breakpoints

```css
/* Desktop First Approach */

@media (max-width: 1024px) {
  /* Tablet */
  .hero-content { flex-direction: column; }
  .about-container { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  /* Mobile */
  .main-nav { display: none; }
  .mobile-toggle { display: block; }
  .hero-title { font-size: 36px; }
  .games-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  /* Small Mobile */
  .game-card-horizontal { flex: 0 0 180px; }
  .chart-card { padding: 15px; }
}
```

---

## Lógica JavaScript

### Estructura del Código

```javascript
// ===== GLOBAL VARIABLES =====
let cart = [];
let cartCount = 0;
let gamesData = [];
let filteredData = [];

// ===== UTILITY FUNCTIONS =====
function updateCartCount() { }
function showNotification(message) { }

// ===== MODAL FUNCTIONS =====
function openModal(modalId) { }
function closeModal(modalId) { }
function openSideModal(modalId) { }
function closeSideModal(modalId) { }

// ===== CART FUNCTIONS =====
function addToCart(gameName, price) { }
function removeFromCart(index) { }
function updateQuantity(index, newQuantity) { }
function checkout() { }

// ===== DATA FUNCTIONS =====
function parseCSV(csvText) { }
function loadDefaultDataset() { }
function updateDataTable() { }
function applyFilters() { }

// ===== RECOMMENDATION SYSTEM =====
function calculateRecommendations(...) { }
function displayRecommendations(recommendations) { }

// ===== CHART UPDATES =====
function updateBarChart() { }
function updatePieChart() { }
function updateLineChart() { }
function updateAreaChart() { }

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() { });
window.addEventListener('scroll', function() { });

// ===== GLOBAL SCOPE EXPOSURE =====
window.openModal = openModal;
window.addToCart = addToCart;
// ... etc
```

### Sistema de Carrito

**Estructura de Datos**:
```javascript
let cart = [
  {
    name: "The Witcher 3",
    price: 39.99,
    quantity: 2
  },
  {
    name: "Cyberpunk 2077",
    price: 59.99,
    quantity: 1
  }
];
```

**Operaciones CRUD**:

**Create** (Añadir):
```javascript
function addToCart(gameName, price) {
  const existingItem = cart.find(item => item.name === gameName);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: gameName, price: price, quantity: 1 });
  }
  
  cartCount++;
  updateCartCount();
  showNotification(`${gameName} added to cart!`);
}
```

**Read** (Mostrar):
```javascript
function openCartPanel() {
  const cartItems = document.getElementById('cartItems');
  
  if (cart.length === 0) {
    // Show empty state
  } else {
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      // Render item HTML
    });
    
    document.getElementById('cartTotal').textContent = `$${total}`;
  }
}
```

**Update** (Modificar):
```javascript
function updateQuantity(index, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(index);
    return;
  }
  
  cart[index].quantity = parseInt(newQuantity);
  updateCartCount();
  openCartPanel(); // Refresh
}
```

**Delete** (Eliminar):
```javascript
function removeFromCart(index) {
  const removedItem = cart[index];
  cartCount -= removedItem.quantity;
  cart.splice(index, 1);
  updateCartCount();
  
  if (cart.length > 0) {
    openCartPanel();
  } else {
    closeCartPanel();
  }
}
```

### CSV Parser

**Función Principal**:
```javascript
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj = {};
    
    headers.forEach((header, index) => {
      let value = values[index] || '';
      
      // Type conversion
      if (['Global Sales (Millions)', 'User Rating', 
           'Price (USD)', 'Metacritic Score'].includes(header)) {
        value = parseFloat(value) || 0;
      } else if (header === 'Release Year') {
        value = parseInt(value) || 0;
      }
      
      obj[header] = value;
    });
    
    return obj;
  });
}
```

**Manejo de Comas en Valores**:
```javascript
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}
```

### Sistema de Recomendaciones

**Algoritmo**:
```javascript
function calculateRecommendations(budget, genre, platform, minRating) {
  return gamesData
    .filter(game => {
      const withinBudget = budget === 0 || game['Price (USD)'] <= budget;
      const matchesGenre = !genre || game.Genre === genre;
      const matchesPlatform = !platform || game.Platform === platform;
      const meetsRating = game['User Rating'] >= minRating;
      
      return withinBudget && matchesGenre && 
             matchesPlatform && meetsRating;
    })
    .sort((a, b) => b['User Rating'] - a['User Rating'])
    .slice(0, 5);
}
```

**Criterios de Filtrado**:
1. **Budget**: Precio <= presupuesto
2. **Genre**: Coincidencia exacta (si especificado)
3. **Platform**: Coincidencia exacta (si especificado)
4. **Rating**: Mayor o igual al mínimo

**Ordenamiento**: Por rating descendente (mejor primero)

**Límite**: Top 5 resultados

### Event System

**Event Listeners Principales**:

```javascript
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  loadDefaultDataset();
  updateCartCount();
  initializeAnimations();
  setupEventListeners();
});

// Scroll Events
window.addEventListener('scroll', function() {
  handleScrollAnimation();
  updateHeaderShadow();
});

// Keyboard Events
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeAllModals();
  }
});

// Click Events
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};
```

**Delegación de Eventos**:
```javascript
// Mejor que añadir listener a cada card
document.querySelector('.games-grid').addEventListener('click', (e) => {
  const card = e.target.closest('.game-card');
  if (card) {
    const modalId = card.dataset.modalId;
    openModal(modalId);
  }
});
```

---

## Gestión de Datos

### Flujo de Datos

```
CSV File
  ↓
fetch() / FileReader
  ↓
parseCSV()
  ↓
gamesData[] (Global Array)
  ↓
filteredData[] (Filtered View)
  ↓
updateDataTable()
updateChartsFromData()
updateRecommendationSelects()
```

### Estado de la Aplicación

**Variables Globales**:
```javascript
// Cart State
let cart = [];
let cartCount = 0;

// Data State
let gamesData = [];
let filteredData = [];

// UI State (no explícito, manejado via DOM/classes)
// - Modales abiertos/cerrados
// - Paneles expandidos/colapsados
// - Filtros activos
```

### Actualización de UI

**Patrón Observer Implícito**:
```javascript
// Cuando cambian los datos, actualizar múltiples vistas
function onDataLoad(newData) {
  gamesData = newData;
  filteredData = [...gamesData];
  
  // Notificar a todos los componentes
  updateDataTable();
  updateFilters();
  updateChartsFromData();
  updateRecommendationSelects();
  showNotification(`Loaded ${gamesData.length} games`);
}
```

### Caché y Performance

**Dataset Caching**:
```javascript
// Se carga una vez al inicio
let cachedDataset = null;

function loadDefaultDataset() {
  if (cachedDataset) {
    useDataset(cachedDataset);
    return;
  }
  
  fetch('./games_dataset.csv')
    .then(response => response.text())
    .then(csvText => {
      cachedDataset = parseCSV(csvText);
      useDataset(cachedDataset);
    });
}
```

---

## Sistema de Eventos

### Event Flow

```
User Action
  ↓
Event Fired (click, input, submit, etc.)
  ↓
Event Listener
  ↓
Handler Function
  ↓
State Update
  ↓
UI Update
  ↓
(Optional) Notification/Feedback
```

### Ejemplos de Flujo

**Añadir al Carrito**:
```
User clicks "Add to Cart"
  ↓
onclick="addToCart('Game', 59.99)"
  ↓
addToCart() function
  ↓
Update cart array
  ↓
Increment cartCount
  ↓
updateCartCount() → Update badge
  ↓
showNotification() → Visual feedback
  ↓
closeModal() → Close detail view
```

**Filtrar Datos**:
```
User changes genre filter
  ↓
'change' event on <select>
  ↓
applyFilters() function
  ↓
Filter gamesData → filteredData
  ↓
updateDataTable()
  ↓
Render filtered rows
```

### Custom Events

**Ejemplo de Implementación**:
```javascript
// Crear evento personalizado
const cartUpdatedEvent = new CustomEvent('cartUpdated', {
  detail: { count: cartCount, total: calculateTotal() }
});

// Disparar evento
function addToCart(name, price) {
  // ... lógica de añadir
  document.dispatchEvent(cartUpdatedEvent);
}

// Escuchar evento
document.addEventListener('cartUpdated', (e) => {
  console.log('Cart updated:', e.detail);
  updateCartUI(e.detail);
});
```

---

## Optimizaciones

### Performance

**Debouncing en Búsqueda**:
```javascript
let searchTimeout;

searchInput.addEventListener('input', function(e) {
  clearTimeout(searchTimeout);
  
  searchTimeout = setTimeout(() => {
    applyFilters();
  }, 300); // Wait 300ms after user stops typing
});
```

**Throttling en Scroll**:
```javascript
let scrollThrottle;

window.addEventListener('scroll', function() {
  if (scrollThrottle) return;
  
  scrollThrottle = setTimeout(() => {
    handleScrollAnimation();
    scrollThrottle = null;
  }, 100);
});
```

**Lazy Loading de Imágenes**:
```html
<img 
  src="placeholder.jpg" 
  data-src="actual-image.jpg" 
  loading="lazy"
  alt="Game">
```

```javascript
// IntersectionObserver para lazy load
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

### CSS Performance

**Hardware Acceleration**:
```css
.game-card {
  will-change: transform;
  transform: translateZ(0); /* Force GPU */
}

.modal {
  backface-visibility: hidden;
}
```

**Containment**:
```css
.game-card {
  contain: layout style paint;
}

.modal-content {
  contain: layout paint;
}
```

### JavaScript Optimizations

**Event Delegation**:
```javascript
// ❌ Ineficiente
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', handleClick);
});

// ✅ Eficiente
document.querySelector('.games-grid').addEventListener('click', (e) => {
  if (e.target.closest('.game-card')) {
    handleClick(e);
  }
});
```

**DocumentFragment para DOM Updates**:
```javascript
// ✅ Mejor performance
function renderGames(games) {
  const fragment = document.createDocumentFragment();
  
  games.forEach(game => {
    const card = createGameCard(game);
    fragment.appendChild(card);
  });
  
  container.appendChild(fragment);
}
```

---

## Buenas Prácticas

### Código Limpio

**Nombres Descriptivos**:
```javascript
// ❌ Malo
function x(a, b) {
  return a + b;
}

// ✅ Bueno
function calculateCartTotal(items, taxRate) {
  return items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  ) * (1 + taxRate);
}
```

**Funciones Pequeñas**:
```javascript
// ✅ Single Responsibility
function getFilteredGames() {
  return gamesData.filter(game => 
    matchesAllFilters(game)
  );
}

function matchesAllFilters(game) {
  return matchesGenre(game) && 
         matchesPlatform(game) && 
         matchesSearch(game);
}
```

**Constantes vs Magic Numbers**:
```javascript
// ❌ Magic number
setTimeout(callback, 300);

// ✅ Constante nombrada
const DEBOUNCE_DELAY = 300;
setTimeout(callback, DEBOUNCE_DELAY);
```

### Manejo de Errores

**Try-Catch**:
```javascript
function loadCustomCSV(file) {
  try {
    const csvText = readFile(file);
    const data = parseCSV(csvText);
    
    if (!validateData(data)) {
      throw new Error('Invalid data format');
    }
    
    return data;
  } catch (error) {
    console.error('Error loading CSV:', error);
    showNotification('Error: ' + error.message);
    return null;
  }
}
```

**Validación de Datos**:
```javascript
function addToCart(gameName, price) {
  // Validate inputs
  if (!gameName || typeof gameName !== 'string') {
    console.error('Invalid game name');
    return;
  }
  
  if (price < 0 || isNaN(price)) {
    console.error('Invalid price');
    return;
  }
  
  // Proceed with operation
  // ...
}
```

### Accesibilidad

**ARIA Labels**:
```html
<button 
  aria-label="Add Cyberpunk 2077 to cart"
  aria-describedby="price-59">
  Add to Cart
</button>
<span id="price-59" class="sr-only">Price: $59.99</span>
```

**Keyboard Navigation**:
```javascript
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    trapFocus(e); // Keep focus within modal
  }
});
```

**Screen Reader Support**:
```html
<div role="status" aria-live="polite" id="cart-status">
  <span class="sr-only">
    Cart updated: 3 items, total $159.97
  </span>
</div>
```

---

## Guía de Desarrollo

### Configuración del Entorno

**Herramientas Recomendadas**:
- **Editor**: VS Code con extensiones:
  - Live Server
  - ESLint
  - Prettier
  - HTML CSS Support
- **Browser**: Chrome DevTools
- **Testing**: Manual testing + console logging

**Estructura de Carpetas**:
```
project/
├── index.html
├── style.css
├── script.js
├── games_dataset.csv
├── img/
│   └── [assets]
├── docs/
│   ├── README.md
│   ├── USER_GUIDE.md
│   └── TECHNICAL_DOCS.md
└── tests/
    └── [test files]
```

### Workflow de Desarrollo

1. **Planning**
   - Definir feature/bug
   - Diseñar solución
   - Estimar tiempo

2. **Development**
   - Crear branch (si usando Git)
   - Implementar cambios
   - Probar localmente

3. **Testing**
   - Pruebas manuales
   - Cross-browser testing
   - Responsive testing
   - Performance check

4. **Review**
   - Code review
   - Refactoring si necesario
   - Documentación actualizada

5. **Deployment**
   - Merge a main
   - Deploy a producción
   - Monitor por errores

### Debugging

**Console Logging**:
```javascript
function addToCart(gameName, price) {
  console.log('Adding to cart:', { gameName, price });
  
  // ... código ...
  
  console.log('Cart after add:', cart);
  console.log('Cart count:', cartCount);
}
```

**Breakpoints**:
```javascript
function calculateRecommendations(...params) {
  debugger; // Execution pauses here in DevTools
  
  const filtered = gamesData.filter(...);
  // ...
}
```

**Error Tracking**:
```javascript
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Send to logging service in production
});
```

### Testing Checklist

**Funcionalidad**:
- [ ] Todas las cards abren modales
- [ ] Carrito añade/quita correctamente
- [ ] Filtros funcionan combinados
- [ ] Recomendaciones son precisas
- [ ] CSV custom se carga bien

**UI/UX**:
- [ ] Animaciones suaves
- [ ] Hover states visibles
- [ ] Loading states apropiados
- [ ] Notificaciones informativas
- [ ] Colores accesibles (contrast ratio)

**Performance**:
- [ ] Imágenes optimizadas
- [ ] Scroll fluido
- [ ] No lag en interacciones
- [ ] Tiempo de carga < 3s

**Compatibilidad**:
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] Mobile browsers ✓

### Git Workflow (Recomendado)

```bash
# Create feature branch
git checkout -b feature/add-wishlist-persistence

# Make changes
git add .
git commit -m "feat: Add localStorage for wishlist"

# Push and create PR
git push origin feature/add-wishlist-persistence

# After review and approval
git checkout main
git merge feature/add-wishlist-persistence
git push origin main
```

**Commit Message Convention**:
```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code formatting
refactor: Code restructure
test: Add/update tests
chore: Maintenance tasks
```

---

## Diagramas de Flujo

### Flujo de Compra
```
Start
  ↓
Browse Games
  ↓
View Game Details (Modal)
  ↓
Add to Cart
  ↓
Continue Shopping? → Yes → Browse Games
  ↓ No
Open Cart Panel
  ↓
Review Items
  ↓
Modify Quantities?
  ↓
Checkout
  ↓
Payment (Demo)
  ↓
Confirmation
  ↓
End
```

### Flujo de Datos
```
User uploads CSV
  ↓
File Reader API
  ↓
parseCSV()
  ↓
Validate Data
  ↓
Store in gamesData[]
  ↓
├─→ Update Table
├─→ Update Charts
├─→ Update Filters
└─→ Update Recommendations Form
```

---

## Próximas Mejoras Técnicas

### Backend Integration
- Node.js/Express server
- PostgreSQL/MongoDB database
- RESTful API endpoints
- JWT authentication

### State Management
- Implementar Redux/Vuex pattern
- Centralized store
- Predictable state mutations

### Build Process
- Webpack/Vite setup
- CSS preprocessing (Sass/Less)
- JavaScript transpiling (Babel)
- Code splitting

### Testing
- Unit tests (Jest)
- Integration tests
- E2E tests (Cypress/Playwright)
- Visual regression tests

### Performance
- Service Workers (PWA)
- Code splitting
- Image optimization
- CDN para assets

---

**Última actualización**: Noviembre 2024  
**Versión**: 1.0.0  
**Mantenedores**: Equipo LUGX Gaming

---

*Para preguntas técnicas, contactar: dev@lugxgaming.com*
