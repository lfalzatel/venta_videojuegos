# 📚 API Reference - LUGX Gaming

## Tabla de Contenidos
1. [Funciones Globales](#funciones-globales)
2. [Sistema de Modales](#sistema-de-modales)
3. [Gestión de Carrito](#gestión-de-carrito)
4. [Procesamiento de Datos](#procesamiento-de-datos)
5. [Sistema de Recomendaciones](#sistema-de-recomendaciones)
6. [Actualización de UI](#actualización-de-ui)
7. [Utilidades](#utilidades)
8. [Eventos Personalizados](#eventos-personalizados)

---

## Funciones Globales

Todas las funciones están expuestas en el scope global de `window` para uso en handlers HTML.

---

## Sistema de Modales

### openModal()

Abre un modal central en pantalla completa.

**Sintaxis**:
```javascript
openModal(modalId)
```

**Parámetros**:
- `modalId` (string): ID del elemento modal a abrir

**Retorna**: `void`

**Ejemplo**:
```javascript
openModal('modal1');
// Abre el modal con id="modal1"
```

**Efectos Secundarios**:
- Establece `display: block` en el modal
- Deshabilita scroll del body (`overflow: hidden`)
- Aplica animación de entrada

**HTML Relacionado**:
```html
<div id="modal1" class="modal">
  <div class="modal-content">
    <!-- contenido -->
  </div>
</div>
```

---

### closeModal()

Cierra un modal central específico.

**Sintaxis**:
```javascript
closeModal(modalId)
```

**Parámetros**:
- `modalId` (string): ID del modal a cerrar

**Retorna**: `void`

**Ejemplo**:
```javascript
closeModal('modal1');
```

**Efectos Secundarios**:
- Establece `display: none` en el modal
- Restaura scroll del body (`overflow: auto`)

---

### openSideModal()

Abre un panel modal lateral deslizante.

**Sintaxis**:
```javascript
openSideModal(modalId)
```

**Parámetros**:
- `modalId` (string): ID del side modal

**Retorna**: `void`

**Ejemplo**:
```javascript
openSideModal('loginModal');
```

**Efectos Secundarios**:
- Añade clase `.open` al modal
- Desliza desde derecha (`right: -400px` → `right: 0`)
- Deshabilita scroll del body

**HTML Relacionado**:
```html
<div id="loginModal" class="side-modal">
  <div class="side-modal-content">
    <!-- contenido -->
  </div>
</div>
```

---

### closeSideModal()

Cierra un side modal específico.

**Sintaxis**:
```javascript
closeSideModal(modalId)
```

**Parámetros**:
- `modalId` (string): ID del side modal

**Retorna**: `void`

**Ejemplo**:
```javascript
closeSideModal('loginModal');
```

---

### closeAllSideModals()

Cierra todos los side modals abiertos.

**Sintaxis**:
```javascript
closeAllSideModals()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Ejemplo**:
```javascript
closeAllSideModals();
```

**Uso Interno**:
- Llamado al presionar ESC
- Llamado al hacer click fuera del modal

---

## Gestión de Carrito

### addToCart()

Añade un juego al carrito de compras.

**Sintaxis**:
```javascript
addToCart(gameName, price)
```

**Parámetros**:
- `gameName` (string): Nombre del juego
- `price` (number): Precio en USD

**Retorna**: `void`

**Ejemplo**:
```javascript
addToCart('Cyberpunk 2077', 59.99);
```

**Comportamiento**:
1. Busca si el juego ya existe en el carrito
2. Si existe: incrementa cantidad
3. Si no existe: añade nuevo item con cantidad 1
4. Actualiza contador global del carrito
5. Muestra notificación de éxito
6. Cierra modal activo

**Estructura de Item**:
```javascript
{
  name: "Cyberpunk 2077",
  price: 59.99,
  quantity: 1
}
```

**Efectos Secundarios**:
- Modifica array global `cart`
- Incrementa `cartCount`
- Llama a `updateCartCount()`
- Llama a `showNotification()`
- Llama a `closeModal()` si hay modal abierto

---

### removeFromCart()

Elimina un item del carrito.

**Sintaxis**:
```javascript
removeFromCart(index)
```

**Parámetros**:
- `index` (number): Índice del item en el array cart

**Retorna**: `void`

**Ejemplo**:
```javascript
removeFromCart(0); // Elimina primer item
```

**Comportamiento**:
1. Guarda referencia del item a eliminar
2. Decrementa `cartCount` por la cantidad eliminada
3. Remueve item del array con `splice`
4. Actualiza UI del carrito
5. Si cart vacío: cierra panel
6. Si cart con items: refresca panel

---

### updateQuantity()

Actualiza la cantidad de un item en el carrito.

**Sintaxis**:
```javascript
updateQuantity(index, newQuantity)
```

**Parámetros**:
- `index` (number): Índice del item
- `newQuantity` (number|string): Nueva cantidad (convertida a int)

**Retorna**: `void`

**Ejemplo**:
```javascript
updateQuantity(0, 3); // Item 1 ahora tiene cantidad 3
```

**Validación**:
- Si `newQuantity < 1`: llama a `removeFromCart(index)`
- Convierte a entero: `parseInt(newQuantity)`

**Efectos Secundarios**:
- Modifica `cart[index].quantity`
- Llama a `updateCartCount()`
- Llama a `openCartPanel()` para refrescar

---

### openCartPanel()

Abre el panel lateral del carrito y renderiza su contenido.

**Sintaxis**:
```javascript
openCartPanel()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Ejemplo**:
```javascript
openCartPanel();
```

**Comportamiento**:
1. Verifica si cart está vacío
2. Si vacío:
   - Muestra estado vacío
   - Total = $0.00
3. Si con items:
   - Renderiza cada item dinámicamente
   - Calcula total acumulado
   - Muestra total

**Template de Item**:
```javascript
const cartItem = `
  <div class="cart-item">
    <img src="./img/trending-01.jpg" alt="${item.name}">
    <div class="cart-item-details">
      <h4>${item.name}</h4>
      <div class="cart-item-price">$${item.price}</div>
      <div class="cart-item-quantity">
        <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
        <input type="number" value="${item.quantity}" 
               onchange="updateQuantity(${index}, this.value)">
        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
        <button onclick="removeFromCart(${index})">Eliminar</button>
      </div>
    </div>
  </div>
`;
```

---

### closeCartPanel()

Cierra el panel del carrito.

**Sintaxis**:
```javascript
closeCartPanel()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Ejemplo**:
```javascript
closeCartPanel();
```

---

### checkout()

Procesa el checkout (versión demo).

**Sintaxis**:
```javascript
checkout()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Ejemplo**:
```javascript
checkout();
```

**Comportamiento**:
1. Calcula total del carrito
2. Muestra notificación con total
3. Cierra panel de carrito

**Nota**: En la versión actual es solo demo. Versiones futuras integrarán pasarela de pago real.

---

### updateCartCount()

Actualiza el badge visual del contador del carrito.

**Sintaxis**:
```javascript
updateCartCount()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Uso Interno**: Llamado automáticamente después de modificar cart.

**Ejemplo**:
```javascript
updateCartCount();
```

**Efecto**:
```javascript
// Actualiza el número visible en el header
<span class="cart-count">3</span>
```

---

## Procesamiento de Datos

### parseCSV()

Parsea un string CSV y lo convierte en array de objetos.

**Sintaxis**:
```javascript
parseCSV(csvText)
```

**Parámetros**:
- `csvText` (string): Contenido del archivo CSV

**Retorna**: `Array<Object>` - Array de objetos con datos parseados

**Ejemplo**:
```javascript
const csvText = `
Game Title,Genre,Platform,Price (USD)
The Witcher 3,RPG,PC,39.99
Cyberpunk 2077,RPG,PC,59.99
`;

const data = parseCSV(csvText);
// [
//   { "Game Title": "The Witcher 3", Genre: "RPG", Platform: "PC", "Price (USD)": 39.99 },
//   { "Game Title": "Cyberpunk 2077", Genre: "RPG", Platform: "PC", "Price (USD)": 59.99 }
// ]
```

**Características**:
- Detecta headers automáticamente (primera línea)
- Convierte tipos de datos:
  - Números: `parseFloat()` para sales, rating, price, metacritic
  - Enteros: `parseInt()` para año
  - Strings: mantiene como string
- Maneja valores faltantes (defaults a 0 o "")

**Campos Numéricos Reconocidos**:
- `Global Sales (Millions)`
- `User Rating`
- `Price (USD)`
- `Metacritic Score`
- `Release Year`

---

### parseCSVLine()

Helper para parsear una línea CSV manejando comillas.

**Sintaxis**:
```javascript
parseCSVLine(line)
```

**Parámetros**:
- `line` (string): Línea individual del CSV

**Retorna**: `Array<string>` - Valores parseados

**Ejemplo**:
```javascript
const line = 'The Witcher 3,"RPG, Adventure",PC,39.99';
const values = parseCSVLine(line);
// ["The Witcher 3", "RPG, Adventure", "PC", "39.99"]
```

**Características**:
- Maneja comillas para valores con comas internas
- Trim de espacios en blanco
- State machine para tracking de comillas

---

### loadDefaultDataset()

Carga el dataset predeterminado desde archivo CSV local.

**Sintaxis**:
```javascript
loadDefaultDataset()
```

**Parámetros**: Ninguno

**Retorna**: `Promise<void>`

**Ejemplo**:
```javascript
loadDefaultDataset();
```

**Comportamiento**:
1. Hace fetch a `./games_dataset.csv`
2. Lee como texto
3. Parsea con `parseCSV()`
4. Almacena en `gamesData` y `filteredData`
5. Actualiza todas las vistas
6. Muestra notificación de éxito

**Efectos Secundarios**:
- Modifica `gamesData` global
- Modifica `filteredData` global
- Llama a `updateDataTable()`
- Llama a `updateFilters()`
- Llama a `updateChartsFromData()`
- Llama a `updateRecommendationSelects()`

---

### updateDataTable()

Renderiza la tabla de datos con el dataset filtrado.

**Sintaxis**:
```javascript
updateDataTable()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Uso Interno**: Llamado después de cargar datos o aplicar filtros.

**Ejemplo**:
```javascript
updateDataTable();
```

**Comportamiento**:
1. Verifica si hay datos en `filteredData`
2. Si vacío: muestra mensaje "No data available"
3. Si con datos:
   - Actualiza info del contador
   - Genera filas HTML
   - Inserta en tbody

**Template de Fila**:
```javascript
<tr>
  <td>${game['Game Title']}</td>
  <td>${game.Genre}</td>
  <td>${game.Platform}</td>
  <td>${game['Release Year']}</td>
  <td>${game['Global Sales (Millions)'].toFixed(1)}M</td>
  <td>${game['User Rating']}</td>
  <td>$${game['Price (USD)'].toFixed(2)}</td>
  <td>${game.Developer}</td>
</tr>
```

---

### applyFilters()

Aplica filtros activos al dataset y actualiza la tabla.

**Sintaxis**:
```javascript
applyFilters()
```

**Parámetros**: Ninguno (lee valores de inputs del DOM)

**Retorna**: `void`

**Ejemplo**:
```javascript
applyFilters(); // Aplica filtros actuales
```

**Filtros Aplicados**:
1. **Genre**: Dropdown de géneros
2. **Platform**: Dropdown de plataformas
3. **Search**: Input de texto libre

**Lógica de Filtrado**:
```javascript
filteredData = gamesData.filter(game => {
  const matchesGenre = !genreFilter || game.Genre === genreFilter;
  const matchesPlatform = !platformFilter || game.Platform === platformFilter;
  const matchesSearch = !searchTerm || 
    game['Game Title'].toLowerCase().includes(searchTerm) ||
    game.Genre.toLowerCase().includes(searchTerm) ||
    game.Developer.toLowerCase().includes(searchTerm);
  
  return matchesGenre && matchesPlatform && matchesSearch;
});
```

**Comportamiento de Búsqueda**:
- Case-insensitive
- Busca en: Title, Genre, Developer
- Búsqueda parcial (includes, no match exacto)

---

### updateFilters()

Puebla los dropdowns de filtros con opciones únicas del dataset.

**Sintaxis**:
```javascript
updateFilters()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Uso Interno**: Llamado después de cargar nuevo dataset.

**Ejemplo**:
```javascript
updateFilters();
```

**Comportamiento**:
1. Extrae valores únicos de campos Genre y Platform
2. Ordena alfabéticamente
3. Genera options HTML
4. Actualiza dropdowns de filtros
5. Llama a `updateRecommendationSelects()`

---

### updateRecommendationSelects()

Actualiza las opciones de los selects del formulario de recomendaciones.

**Sintaxis**:
```javascript
updateRecommendationSelects()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Uso Interno**: Llamado al cargar o actualizar dataset.

**Ejemplo**:
```javascript
updateRecommendationSelects();
```

---

## Sistema de Recomendaciones

### calculateRecommendations()

Calcula juegos recomendados basados en criterios del usuario.

**Sintaxis**:
```javascript
calculateRecommendations(budget, preferredGenre, platform, minRating)
```

**Parámetros**:
- `budget` (number): Presupuesto máximo en USD (0 = sin límite)
- `preferredGenre` (string): Género deseado ("" = cualquiera)
- `platform` (string): Plataforma ("" = cualquiera)
- `minRating` (number): Rating mínimo (0-10)

**Retorna**: `Array<Object>` - Top 5 juegos recomendados

**Ejemplo**:
```javascript
const recommendations = calculateRecommendations(50, "RPG", "PC", 8.0);
// Retorna máximo 5 juegos RPG para PC, precio <= $50, rating >= 8.0
```

**Algoritmo**:
1. **Filtrado**:
   - Precio <= presupuesto (si budget > 0)
   - Genre === preferredGenre (si especificado)
   - Platform === platform (si especificado)
   - Rating >= minRating
2. **Ordenamiento**: Por rating descendente
3. **Límite**: Top 5 resultados

**Criterios de Ordenamiento**:
```javascript
.sort((a, b) => b['User Rating'] - a['User Rating'])
```

---

### displayRecommendations()

Renderiza los resultados de recomendaciones en el UI.

**Sintaxis**:
```javascript
displayRecommendations(recommendations)
```

**Parámetros**:
- `recommendations` (Array<Object>): Array de juegos recomendados

**Retorna**: `void`

**Ejemplo**:
```javascript
const recs = calculateRecommendations(50, "RPG", "PC", 8.0);
displayRecommendations(recs);
```

**Comportamiento**:
- Si vacío: muestra mensaje "No games found"
- Si con resultados: renderiza cards con:
  - Posición (#1-#5)
  - Título del juego
  - Género, Plataforma, Año
  - Precio (verde)
  - Rating con estrellas
  - Ventas globales
  - Desarrollador

**Template**:
```html
<div>
  <h4>#1. The Witcher 3: Wild Hunt</h4>
  <p>RPG • PC • 2015</p>
  <div>$39.99   ⭐ 9.7/10</div>
  <div>Sales: 40.0M • Developer: CD Projekt Red</div>
</div>
```

---

## Actualización de UI

### updateChartsFromData()

Actualiza todos los gráficos con datos del dataset actual.

**Sintaxis**:
```javascript
updateChartsFromData()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Ejemplo**:
```javascript
updateChartsFromData();
```

**Comportamiento**:
Llama a las siguientes funciones en orden:
1. `updateBarChart()`
2. `updatePieChart()`
3. `updateLineChart()`
4. `updateAreaChart()`
5. `updateStatsCards()`

---

### updateBarChart()

Actualiza gráfico de barras con top 5 juegos por ventas.

**Sintaxis**:
```javascript
updateBarChart()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Comportamiento**:
1. Ordena `gamesData` por ventas descendente
2. Toma top 5
3. Calcula porcentajes relativos al líder
4. Actualiza DOM de cada barra

**Cálculo de Porcentaje**:
```javascript
const percentage = (game['Global Sales (Millions)'] / topGames[0]['Global Sales (Millions)']) * 100;
```

---

### updatePieChart()

Actualiza gráfico circular con distribución de plataformas.

**Sintaxis**:
```javascript
updatePieChart()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Comportamiento**:
1. Agrupa ventas por plataforma
2. Calcula porcentajes
3. Actualiza leyenda con datos reales

---

### updateStatsCards()

Actualiza tarjetas de estadísticas con métricas calculadas.

**Sintaxis**:
```javascript
updateStatsCards()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Métricas Calculadas**:
- Total de juegos: `gamesData.length`
- Ventas totales: `sum(Global Sales)`
- Ingresos estimados: `sum(Price * Sales)`
- Rating promedio: `avg(User Rating)`

---

## Utilidades

### showNotification()

Muestra notificación temporal en la esquina superior derecha.

**Sintaxis**:
```javascript
showNotification(message)
```

**Parámetros**:
- `message` (string): Texto de la notificación

**Retorna**: `void`

**Ejemplo**:
```javascript
showNotification('Game added to cart!');
showNotification('CSV loaded successfully');
```

**Características**:
- Posición: `fixed`, top-right
- Duración: 3 segundos
- Animación entrada: `slideInRight`
- Animación salida: `slideOutRight`
- Auto-remove del DOM

**Estilo**:
```javascript
const notification = document.createElement('div');
notification.style.cssText = `
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: #008af8;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  z-index: 3000;
`;
```

---

### subscribeNewsletter()

Procesa suscripción al newsletter.

**Sintaxis**:
```javascript
subscribeNewsletter()
```

**Parámetros**: Ninguno (lee del DOM)

**Retorna**: `void`

**Ejemplo**:
```javascript
// Llamado desde HTML
<button onclick="subscribeNewsletter()">SUBSCRIBE NOW</button>
```

**Validación**:
1. Email no vacío
2. Formato válido: `regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Comportamiento**:
- Si válido: muestra confirmación, limpia input
- Si inválido: muestra error apropiado

---

### handleScrollAnimation()

Aplica animaciones de entrada a elementos al hacer scroll.

**Sintaxis**:
```javascript
handleScrollAnimation()
```

**Parámetros**: Ninguno

**Retorna**: `void`

**Uso Interno**: Llamado en scroll event.

**Elementos Afectados**:
- `.game-card`
- `.game-card-horizontal`
- `.category-card`
- `.feature-box`

**Efecto**:
```javascript
element.style.opacity = '1';
element.style.transform = 'translateY(0)';
```

---

### isElementInViewport()

Verifica si un elemento es visible en viewport.

**Sintaxis**:
```javascript
isElementInViewport(el)
```

**Parámetros**:
- `el` (HTMLElement): Elemento a verificar

**Retorna**: `boolean` - true si visible

**Ejemplo**:
```javascript
const card = document.querySelector('.game-card');
if (isElementInViewport(card)) {
  // Aplicar animación
}
```

**Lógica**:
```javascript
const rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= window.innerHeight + 100 &&
  rect.right <= window.innerWidth
);
```

---

## Eventos Personalizados

### DOMContentLoaded

Evento principal de inicialización.

**Handler**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  loadDefaultDataset();
  updateCartCount();
  setupEventListeners();
});
```

**Acciones**:
1. Carga dataset predeterminado
2. Inicializa contador del carrito
3. Configura event listeners
4. Inicializa animaciones

---

### scroll

Evento de scroll para efectos visuales.

**Handler**:
```javascript
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
  
  handleScrollAnimation();
});
```

**Efectos**:
- Actualiza sombra del header
- Activa animaciones de scroll

---

### keydown

Manejo de atajos de teclado.

**Handler**:
```javascript
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    // Cerrar todos los modales
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    }
    closeAllSideModals();
    closeCartPanel();
  }
});
```

**Atajos**:
- `ESC`: Cierra todos los modales

---

## Variables Globales

### cart

Array de items en el carrito.

**Tipo**: `Array<Object>`

**Estructura**:
```javascript
let cart = [
  {
    name: "Game Title",
    price: 59.99,
    quantity: 2
  }
];
```

---

### cartCount

Contador total de items en carrito.

**Tipo**: `number`

**Inicialización**: `0`

**Actualización**: Incrementa/decrementa con `addToCart()` y `removeFromCart()`

---

### gamesData

Array completo de datos de juegos.

**Tipo**: `Array<Object>`

**Estructura de Objeto**:
```javascript
{
  "Game Title": "The Witcher 3: Wild Hunt",
  "Genre": "RPG",
  "Platform": "PC",
  "Release Year": 2015,
  "Global Sales (Millions)": 40.0,
  "User Rating": 9.7,
  "Price (USD)": 39.99,
  "Developer": "CD Projekt Red",
  "Publisher": "CD Projekt",
  "Multiplayer": "Single-player",
  "ESRB Rating": "M",
  "Metacritic Score": 95
}
```

---

### filteredData

Array de datos filtrados para display.

**Tipo**: `Array<Object>`

**Inicialización**: Copia de `gamesData`

**Actualización**: Cada vez que se aplican filtros

---

## Códigos de Error

### CSV Loading Errors

**Error**: "Please select a CSV file first"
- **Causa**: No se seleccionó archivo antes de load
- **Solución**: Seleccionar archivo válido

**Error**: "Error parsing CSV file: [details]"
- **Causa**: Formato CSV inválido
- **Solución**: Verificar formato del archivo

**Error**: "Invalid data format"
- **Causa**: Datos no pasan validación
- **Solución**: Revisar estructura de columnas

---

## Best Practices

### Uso de API

1. **Siempre validar inputs**:
```javascript
if (!gameName || typeof gameName !== 'string') {
  console.error('Invalid game name');
  return;
}
```

2. **Manejar casos edge**:
```javascript
if (cart.length === 0) {
  // Manejar carrito vacío
}
```

3. **Proporcionar feedback**:
```javascript
addToCart(name, price);
showNotification(`${name} added!`);
```

4. **Cleanup después de operaciones**:
```javascript
function closeModal(modalId) {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scroll
}
```

---

## Notas de Versión

### v1.0.0 (Actual)
- Sistema de carrito completo
- Carga de CSV custom
- Recomendaciones personalizadas
- 4 tipos de gráficos
- Side modals y modales centrales
- Filtros combinables
- Búsqueda en tiempo real

### Futuras Versiones

**v1.1.0** (Planificado):
- Persistencia con localStorage
- Historial de compras
- Wishlist persistente

**v2.0.0** (Planificado):
- Backend API
- Autenticación real
- Pasarela de pago

---

**Última actualización**: Noviembre 2024  
**Versión API**: 1.0.0

*Para reportar bugs o sugerir mejoras: dev@lugxgaming.com*
