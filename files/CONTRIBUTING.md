# 🤝 Guía de Contribución - LUGX Gaming

## ¡Bienvenido Contribuidor!

Gracias por tu interés en contribuir a LUGX Gaming. Esta guía te ayudará a entender cómo puedes participar en el desarrollo del proyecto.

---

## Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [Cómo Contribuir](#cómo-contribuir)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Proceso de Desarrollo](#proceso-de-desarrollo)
5. [Estándares de Código](#estándares-de-código)
6. [Proceso de Pull Request](#proceso-de-pull-request)
7. [Reportar Bugs](#reportar-bugs)
8. [Sugerir Features](#sugerir-features)
9. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Código de Conducta

### Nuestro Compromiso

Nos comprometemos a hacer de la participación en nuestro proyecto una experiencia libre de acoso para todos, independientemente de:
- Edad
- Tamaño corporal
- Discapacidad
- Etnia
- Identidad y expresión de género
- Nivel de experiencia
- Nacionalidad
- Apariencia personal
- Raza
- Religión
- Identidad u orientación sexual

### Nuestros Estándares

**Comportamientos que contribuyen a crear un ambiente positivo**:
- ✅ Usar lenguaje acogedor e inclusivo
- ✅ Ser respetuoso de diferentes puntos de vista y experiencias
- ✅ Aceptar críticas constructivas
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros

**Comportamientos inaceptables**:
- ❌ Uso de lenguaje o imágenes sexualizadas
- ❌ Trolling, comentarios insultantes/despectivos
- ❌ Acoso público o privado
- ❌ Publicar información privada de otros sin permiso
- ❌ Otras conductas que razonablemente se consideran inapropiadas

### Aplicación

Instancias de comportamiento abusivo, acosador o inaceptable pueden ser reportadas contactando al equipo del proyecto en **conduct@lugxgaming.com**.

---

## Cómo Contribuir

### Tipos de Contribuciones

Valoramos todo tipo de contribuciones:

#### 🐛 Reportar Bugs
- Lee la sección [Reportar Bugs](#reportar-bugs)
- Busca si el bug ya fue reportado
- Si no existe, crea un nuevo issue

#### ✨ Sugerir Features
- Lee la sección [Sugerir Features](#sugerir-features)
- Verifica si ya fue sugerido
- Crea un nuevo issue con template de feature

#### 📝 Mejorar Documentación
- Corregir typos
- Aclarar instrucciones confusas
- Añadir ejemplos
- Traducir a otros idiomas

#### 💻 Contribuir Código
- Arreglar bugs
- Implementar nuevas features
- Mejorar performance
- Refactorizar código

#### 🎨 Diseño y UX
- Mejorar diseño visual
- Optimizar experiencia de usuario
- Crear assets (iconos, imágenes)

#### 🧪 Testing
- Escribir tests unitarios
- Pruebas de integración
- Testing manual y reporte

---

## Configuración del Entorno

### Requisitos

- **Navegador**: Chrome, Firefox, Safari o Edge (última versión)
- **Editor**: VS Code (recomendado)
- **Git**: Versión 2.x o superior
- **Node.js**: (opcional) Para herramientas de desarrollo

### Instalación

1. **Fork del Repositorio**
```bash
# Navega a https://github.com/lugx-gaming/lugx-gaming
# Click en "Fork" en la esquina superior derecha
```

2. **Clonar tu Fork**
```bash
git clone https://github.com/TU-USUARIO/lugx-gaming.git
cd lugx-gaming
```

3. **Configurar Remotes**
```bash
# Añadir upstream
git remote add upstream https://github.com/lugx-gaming/lugx-gaming.git

# Verificar
git remote -v
# origin    https://github.com/TU-USUARIO/lugx-gaming.git (fetch)
# origin    https://github.com/TU-USUARIO/lugx-gaming.git (push)
# upstream  https://github.com/lugx-gaming/lugx-gaming.git (fetch)
# upstream  https://github.com/lugx-gaming/lugx-gaming.git (push)
```

4. **Instalar Extensiones de VS Code** (Recomendado)
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

5. **Abrir Proyecto**
```bash
# Opción 1: Live Server (VS Code)
# Click derecho en index.html > Open with Live Server

# Opción 2: Python
python -m http.server 8000

# Opción 3: Node.js
npx serve
```

---

## Proceso de Desarrollo

### Workflow

```
1. Crear Issue → 2. Fork/Clone → 3. Crear Branch → 
4. Hacer Cambios → 5. Commit → 6. Push → 7. Pull Request → 
8. Code Review → 9. Merge
```

### 1. Crear o Seleccionar Issue

**Nuevo Issue**:
```markdown
**Descripción**: Botón "Add to Cart" no funciona en mobile
**Pasos para Reproducir**:
1. Abrir sitio en dispositivo móvil
2. Click en cualquier juego
3. Click en "Add to Cart"
**Comportamiento Esperado**: Juego se añade al carrito
**Comportamiento Actual**: Nada sucede
**Browser**: Chrome Mobile 96
```

**Issue Existente**:
- Busca issues con label `good first issue` o `help wanted`
- Comenta en el issue que trabajarás en él
- Espera confirmación del maintainer

### 2. Crear Branch

```bash
# Actualizar main
git checkout main
git pull upstream main

# Crear branch descriptiva
git checkout -b fix/add-to-cart-mobile
# O
git checkout -b feature/dark-mode
# O
git checkout -b docs/update-readme
```

**Naming Convention**:
- `fix/`: Para bug fixes
- `feature/`: Para nuevas features
- `docs/`: Para documentación
- `refactor/`: Para refactorización
- `test/`: Para tests
- `chore/`: Para tareas de mantenimiento

### 3. Hacer Cambios

**Mejores Prácticas**:
- Mantén commits pequeños y enfocados
- Un commit = una tarea lógica
- Testea tu código antes de commit
- Sigue estándares de código

### 4. Commit

**Formato de Mensaje**:
```
<tipo>: <descripción corta>

<descripción detallada (opcional)>

<footer (opcional)>
```

**Tipos**:
- `feat`: Nueva feature
- `fix`: Bug fix
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan código)
- `refactor`: Refactorización
- `test`: Añadir/modificar tests
- `chore`: Mantenimiento

**Ejemplos**:
```bash
git commit -m "fix: resolve add-to-cart button on mobile devices"

git commit -m "feat: add dark mode toggle to header"

git commit -m "docs: update API reference with new functions"
```

**Commits Atómicos**:
```bash
# ✅ Bueno
git commit -m "fix: correct price calculation in cart"
git commit -m "test: add unit tests for cart calculations"

# ❌ Malo
git commit -m "fix stuff and add tests"
```

### 5. Push

```bash
# Primera vez
git push -u origin fix/add-to-cart-mobile

# Siguientes veces
git push
```

### 6. Crear Pull Request

**En GitHub**:
1. Navega a tu fork
2. Click en "Compare & pull request"
3. Rellena el template de PR

**Template de PR**:
```markdown
## Descripción
Breve descripción de los cambios

## Tipo de Cambio
- [ ] Bug fix (non-breaking change)
- [ ] Nueva feature (non-breaking change)
- [ ] Breaking change (fix o feature que causa cambios en funcionalidad existente)
- [ ] Documentación

## ¿Cómo Se Ha Probado?
Describe las pruebas realizadas

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He realizado self-review del código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He probado en diferentes navegadores
- [ ] He probado en responsive

## Screenshots (si aplica)
Añade screenshots de cambios visuales
```

### 7. Code Review

**Qué Esperar**:
- Feedback constructivo del equipo
- Solicitudes de cambios
- Discusión sobre implementación
- Aprobación final

**Responder a Feedback**:
```bash
# Hacer cambios solicitados
git add .
git commit -m "refactor: address code review comments"
git push

# El PR se actualiza automáticamente
```

### 8. Merge

Una vez aprobado:
- Maintainer hará merge
- Tu branch puede ser eliminada
- ¡Celebra! 🎉

---

## Estándares de Código

### HTML

**Estructura**:
```html
<!-- ✅ Bueno -->
<section class="games-section" id="trending">
  <div class="section-header">
    <h2 class="section-title">Trending Games</h2>
  </div>
  <div class="games-grid">
    <!-- contenido -->
  </div>
</section>

<!-- ❌ Malo -->
<div class="sec">
  <div>
    <h2>Trending Games</h2>
  </div>
  <div id="games">
    <!-- contenido -->
  </div>
</div>
```

**Accesibilidad**:
```html
<!-- ✅ Bueno -->
<button 
  class="icon-button" 
  aria-label="Add to cart"
  title="Add to cart">
  <i class="fas fa-cart-plus"></i>
</button>

<!-- ❌ Malo -->
<div onclick="addCart()">
  <i class="fas fa-cart-plus"></i>
</div>
```

### CSS

**Organización**:
```css
/* ===== SECCIÓN ===== */
.component {
  /* Layout */
  display: flex;
  
  /* Box Model */
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  
  /* Visual */
  background: white;
  border: 1px solid #eee;
  
  /* Typography */
  font-size: 16px;
  
  /* Misc */
  transition: all 0.3s ease;
}
```

**Naming**:
```css
/* ✅ Bueno */
.game-card { }
.game-card__image { }
.game-card__title { }
.game-card--featured { }

/* ❌ Malo */
.gc { }
.image1 { }
.title-text { }
```

**Responsive**:
```css
/* Desktop First */
.element {
  font-size: 20px;
}

@media (max-width: 768px) {
  .element {
    font-size: 16px;
  }
}
```

### JavaScript

**Estilo**:
```javascript
// ✅ Bueno
function calculateCartTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

// ❌ Malo
function calcTotal(i) {
  var t = 0;
  for(var x = 0; x < i.length; x++) {
    t = t + i[x].p * i[x].q;
  }
  return t;
}
```

**Comentarios**:
```javascript
// ✅ Bueno
/**
 * Calculates personalized game recommendations
 * @param {number} budget - Maximum price in USD
 * @param {string} genre - Preferred game genre
 * @param {number} minRating - Minimum user rating (0-10)
 * @returns {Array<Object>} Top 5 recommended games
 */
function calculateRecommendations(budget, genre, minRating) {
  // Implementation
}

// ❌ Malo
// This function does stuff
function doStuff(a, b, c) {
  // Code
}
```

**Error Handling**:
```javascript
// ✅ Bueno
function loadCSV(file) {
  if (!file) {
    console.error('No file provided');
    showNotification('Please select a file');
    return null;
  }
  
  try {
    const data = parseCSV(file);
    return data;
  } catch (error) {
    console.error('CSV parsing error:', error);
    showNotification('Error loading file');
    return null;
  }
}

// ❌ Malo
function loadCSV(file) {
  var data = parseCSV(file);
  return data;
}
```

**Consistencia**:
```javascript
// ✅ Bueno - usa const/let
const cart = [];
let cartCount = 0;

// ❌ Malo - usa var
var cart = [];
var cartCount = 0;
```

---

## Proceso de Pull Request

### Antes de Crear PR

**Checklist**:
- [ ] Código sigue estándares del proyecto
- [ ] Self-review completado
- [ ] Comentarios añadidos donde necesario
- [ ] Documentación actualizada
- [ ] No hay console.logs innecesarios
- [ ] Código probado en múltiples navegadores
- [ ] Responsive testado
- [ ] No hay conflictos con main

### Descripción del PR

**Template Completo**:
```markdown
## 📝 Descripción
Arregla el bug donde el botón "Add to Cart" no funcionaba en dispositivos móviles debido a un z-index incorrecto.

## 🔧 Tipo de Cambio
- [x] Bug fix (non-breaking change)
- [ ] Nueva feature (non-breaking change)
- [ ] Breaking change
- [ ] Actualización de documentación

## 🧪 Cómo Se Ha Probado
1. Pruebas en Chrome DevTools (responsive mode)
2. Pruebas en iPhone 12 real
3. Pruebas en Android Samsung Galaxy S21
4. Verificado que no afecta desktop

## 📱 Navegadores Probados
- [x] Chrome (Desktop)
- [x] Chrome (Mobile)
- [x] Firefox
- [x] Safari (iOS)
- [ ] Edge

## 📸 Screenshots
[Adjuntar screenshots de antes/después si aplica]

## ✅ Checklist
- [x] Código sigue guía de estilo
- [x] Self-review realizado
- [x] Comentarios añadidos
- [x] Documentación actualizada
- [x] Sin nuevas advertencias
- [x] Probado en responsive
- [x] Sin conflictos

## 🔗 Issue Relacionado
Closes #123

## 📌 Notas Adicionales
El problema era causado por modal overlay con z-index 2000 bloqueando clicks en mobile.
```

### Durante Code Review

**Buenas Prácticas**:
- ✅ Responde a comentarios promptamente
- ✅ Pide aclaración si no entiendes feedback
- ✅ Sé receptivo a sugerencias
- ✅ Explica tus decisiones de diseño
- ✅ Agradece el feedback

**Responder a Cambios Solicitados**:
```markdown
> Reviewer: ¿Podrías añadir comentarios explicando este algoritmo?

Buen punto! He añadido comentarios JSDoc y explicación inline. 
Commit: abc123
```

### Después del Merge

```bash
# Limpiar branches locales
git checkout main
git pull upstream main
git branch -d fix/add-to-cart-mobile

# Limpiar branches remotas
git push origin --delete fix/add-to-cart-mobile
```

---

## Reportar Bugs

### Template de Bug Report

```markdown
## 🐛 Descripción del Bug
Una descripción clara y concisa del bug.

## 📋 Pasos para Reproducir
1. Ir a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

## ✅ Comportamiento Esperado
Descripción clara de lo que esperabas que sucediera.

## ❌ Comportamiento Actual
Descripción de lo que realmente sucede.

## 📸 Screenshots
Si aplica, añade screenshots del problema.

## 🖥️ Información del Sistema
- **OS**: [ej. Windows 11]
- **Browser**: [ej. Chrome 96]
- **Versión**: [ej. 1.0.0]
- **Dispositivo**: [ej. iPhone 12]

## 📝 Contexto Adicional
Cualquier otra información relevante.

## 🔍 Posible Solución
(Opcional) Sugerencias de cómo arreglarlo.
```

### Ejemplos de Buenos Bug Reports

**Ejemplo 1**:
```markdown
## 🐛 Carrito no actualiza contador en header

## 📋 Pasos para Reproducir
1. Abrir sitio en Chrome
2. Click en "Add to Cart" en cualquier juego
3. Observar header

## ✅ Esperado
Badge de carrito muestra "1"

## ❌ Actual
Badge permanece en "0"

## 🖥️ Sistema
- OS: macOS Monterey
- Browser: Chrome 96.0.4664.110
- Versión: 1.0.0

## 📝 Contexto
El juego sí se añade al carrito (visible al abrir panel), 
solo el contador visual no actualiza.

## 🔍 Solución Posible
Verificar que updateCartCount() se llama después de addToCart()
```

---

## Sugerir Features

### Template de Feature Request

```markdown
## 💡 Feature Request

## 📝 Descripción
Descripción clara de la feature propuesta.

## 🎯 Problema que Resuelve
¿Qué problema de usuario resuelve esta feature?

## 💭 Solución Propuesta
Descripción de cómo te gustaría que funcionara.

## 🔄 Alternativas Consideradas
Otras soluciones que consideraste.

## 📊 Impacto Estimado
- **Usuarios Afectados**: [ej. todos, mobile only]
- **Prioridad Sugerida**: [baja, media, alta]
- **Esfuerzo Estimado**: [pequeño, mediano, grande]

## 📸 Mockups/Screenshots
(Opcional) Diseños visuales de la feature.

## 📝 Contexto Adicional
Cualquier otra información relevante.
```

### Ejemplos de Buenas Feature Requests

**Ejemplo 1**:
```markdown
## 💡 Modo Oscuro

## 📝 Descripción
Añadir toggle de modo oscuro en el header para mejor 
experiencia nocturna.

## 🎯 Problema que Resuelve
Usuarios que navegan de noche reportan fatiga visual 
con tema claro actual.

## 💭 Solución Propuesta
- Toggle en header (icono sol/luna)
- Paleta oscura alternativa
- Persistencia con localStorage
- Transición suave entre temas

## 🔄 Alternativas
- Detectar preferencia del sistema automáticamente
- Programar cambio automático según hora del día

## 📊 Impacto
- **Usuarios Afectados**: Todos
- **Prioridad**: Media
- **Esfuerzo**: Mediano (2-3 días)

## 📸 Mockups
[Adjuntar diseño]
```

---

## Preguntas Frecuentes

### ¿Cómo elijo qué contribuir?

**Para Principiantes**:
1. Busca issues con label `good first issue`
2. Lee la documentación completamente
3. Empieza con typos o mejoras de docs
4. Pregunta en el issue si necesitas ayuda

**Para Experimentados**:
1. Revisa roadmap del proyecto
2. Busca issues con `help wanted`
3. Propone nuevas features
4. Ayuda en code reviews

### ¿Cuánto tiempo toma el review?

- **Simple fixes**: 1-2 días
- **Features medianas**: 3-5 días
- **Features grandes**: 1-2 semanas

Depende de complejidad y disponibilidad de maintainers.

### ¿Qué hago si mi PR es rechazado?

1. Lee el feedback cuidadosamente
2. Pregunta si no entiendes
3. Considera hacer los cambios sugeridos
4. O cierra el PR si ya no es relevante

No lo tomes personal - todos hemos tenido PRs rechazados.

### ¿Puedo trabajar en múltiples issues?

Sí, pero:
- No claims más de 2-3 a la vez
- Completa uno antes de tomar otro
- Comunica si necesitas más tiempo

### ¿Necesito permiso para hacer fork?

No, GitHub forks son públicos. Solo:
1. Haz fork
2. Trabaja en tu fork
3. Crea PR cuando esté listo

---

## Recursos Adicionales

### Documentación
- [README.md](README.md) - Visión general del proyecto
- [TECHNICAL_DOCS.md](TECHNICAL_DOCS.md) - Detalles técnicos
- [API_REFERENCE.md](API_REFERENCE.md) - Referencia de API

### Herramientas
- [GitHub Desktop](https://desktop.github.com/) - GUI para Git
- [VS Code](https://code.visualstudio.com/) - Editor recomendado
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging

### Tutoriales
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [CSS Guidelines](https://cssguidelin.es/)

---

## Contacto

### Canales de Comunicación

**GitHub**:
- Issues: Para bugs y features
- Discussions: Para preguntas generales
- Pull Requests: Para contribuciones de código

**Email**:
- General: contribute@lugxgaming.com
- Técnico: dev@lugxgaming.com
- Código de Conducta: conduct@lugxgaming.com

**Social**:
- Discord: [LUGX Community](https://discord.gg/lugxgaming)
- Twitter: [@LUGXGaming](https://twitter.com/lugxgaming)

---

## Reconocimientos

### Hall of Fame

Agradecimientos especiales a nuestros top contributors:

- @contributor1 - 50+ commits
- @contributor2 - 30+ commits
- @contributor3 - 20+ commits

### Todos los Contributors

Ver [CONTRIBUTORS.md](CONTRIBUTORS.md) para lista completa.

---

## Licencia

Al contribuir a LUGX Gaming, aceptas que tus contribuciones serán licenciadas bajo la misma [MIT License](LICENSE) que cubre el proyecto.

---

**¡Gracias por contribuir a LUGX Gaming!** 🎮

*Hecho con ❤️ por la comunidad*

---

*Última actualización: Noviembre 2024*
