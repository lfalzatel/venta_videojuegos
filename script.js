// ===== SISTEMA DE CARRITO =====
let cart = [];
let cartCount = 0;

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function addToCart(gameName, price) {
    // Buscar si el juego ya está en el carrito
    const existingItem = cart.find(item => item.name === gameName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: gameName,
            price: price,
            quantity: 1
        });
    }
    
    cartCount++;
    updateCartCount();
    
    // Cerrar el modal actual
    const openModal = document.querySelector('.modal[style*="display: block"]');
    if (openModal) {
        openModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Mostrar confirmación
    showNotification(`${gameName} added to cart!`);
}

function showNotification(message) {
    // Crear notificación temporal
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
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== FUNCIONES DE MODALES =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Cerrar modal al hacer click fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            if (modal.style.display === "block") {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
        // Cerrar side modals
        closeAllSideModals();
        closeCartPanel();
    }
});

// ===== FUNCIONES PARA SIDE MODALS =====
function openSideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeSideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

function closeAllSideModals() {
    const sideModals = document.querySelectorAll('.side-modal');
    sideModals.forEach(modal => {
        modal.classList.remove('open');
    });
    document.body.style.overflow = 'auto';
}

// Cerrar side modals al hacer click fuera
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('side-modal')) {
        closeAllSideModals();
    }
});

// ===== SMOOTH SCROLL PARA NAVEGACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar si es solo "#" o enlaces especiales
            if (href === '#' || href === '#search' || href === '#user' || href === '#cart' || href === '#signin') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== BÚSQUEDA =====
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            showNotification(`Searching for: ${searchTerm}`);
            // Aquí puedes agregar lógica de búsqueda real
        } else {
            showNotification('Please enter a search term');
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// ===== NEWSLETTER =====
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showNotification('Please enter your email address');
    } else if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address');
    } else {
        showNotification(`Thanks for subscribing! Confirmation sent to ${email}`);
        emailInput.value = '';
        // Aquí puedes agregar lógica para guardar el email
    }
}

// ===== HEADER STICKY CON EFECTO =====
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
        mainNav.classList.toggle('mobile-active');
    });
}

// ===== ANIMACIONES AL HACER SCROLL =====
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const animatedElements = document.querySelectorAll('.game-card, .game-card-horizontal, .category-card, .feature-box');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animaciones
window.addEventListener('load', function() {
    const animatedElements = document.querySelectorAll('.game-card, .game-card-horizontal, .category-card, .feature-box');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    handleScrollAnimation();
});

window.addEventListener('scroll', handleScrollAnimation);

// ===== ICONOS DEL HEADER =====
document.addEventListener('DOMContentLoaded', function() {
    // Icono de búsqueda
    const searchIcon = document.querySelector('.icon-button[title="Search"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Icono de login
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSideModal('loginModal');
        });
    }

    // Icono de notificaciones
    const notificationsBtn = document.querySelector('.notifications-btn');
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSideModal('notificationsModal');
        });
    }

    // Icono de carrito
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            openCartPanel();
        });
    }
});

// ===== CART SIDE PANEL =====
function openCartPanel() {
    const cartPanel = document.getElementById('cartPanel');
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        emptyCart.style.display = 'block';
        cartTotal.textContent = '$0.00';
    } else {
        cartItems.style.display = 'flex';
        emptyCart.style.display = 'none';

        let total = 0;
        cartItems.innerHTML = '';

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="./img/trending-01.jpg" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `$${total}`;
    }

    cartPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartPanel() {
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }

    cart[index].quantity = parseInt(newQuantity);
    updateCartCount();
    openCartPanel(); // Refresh the panel
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cartCount -= removedItem.quantity;
    cart.splice(index, 1);
    updateCartCount();

    if (cart.length > 0) {
        openCartPanel(); // Refresh the panel
    } else {
        closeCartPanel();
        showNotification('El carrito está vacío');
    }
}

function checkout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Pago: Total $${total}. Función de pago próximamente!`);
    closeCartPanel();
}

// ===== SCROLL HORIZONTAL SUAVE PARA MOST PLAYED =====
const mostPlayedContainer = document.querySelector('.most-played-container');
if (mostPlayedContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    mostPlayedContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - mostPlayedContainer.offsetLeft;
        scrollLeft = mostPlayedContainer.scrollLeft;
        mostPlayedContainer.style.cursor = 'grabbing';
    });

    mostPlayedContainer.addEventListener('mouseleave', () => {
        isDown = false;
        mostPlayedContainer.style.cursor = 'grab';
    });

    mostPlayedContainer.addEventListener('mouseup', () => {
        isDown = false;
        mostPlayedContainer.style.cursor = 'grab';
    });

    mostPlayedContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - mostPlayedContainer.offsetLeft;
        const walk = (x - startX) * 2;
        mostPlayedContainer.scrollLeft = scrollLeft - walk;
    });
}

// ===== DATA MANAGEMENT SYSTEM =====
let gamesData = [];
let filteredData = [];

// Toggle Upload Options
document.getElementById('toggleUploadBtn').addEventListener('click', function() {
    const uploadOptions = document.getElementById('uploadOptions');
    const toggleBtn = this;

    uploadOptions.classList.toggle('collapsed');

    // Update button text
    if (uploadOptions.classList.contains('collapsed')) {
        toggleBtn.textContent = '▶';
    } else {
        toggleBtn.textContent = '▼';
    }
});

// CSV Loading Functionality
document.getElementById('loadCsvBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    const statusDiv = document.getElementById('fileStatus');

    if (!file) {
        statusDiv.textContent = 'Please select a CSV file first';
        statusDiv.className = 'file-status error';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const csvText = e.target.result;
            gamesData = parseCSV(csvText);
            filteredData = [...gamesData];

            statusDiv.textContent = `✅ Successfully loaded ${gamesData.length} games from your CSV file!`;
            statusDiv.className = 'file-status success';

            updateDataTable();
            updateFilters();
            updateChartsFromData();
            // Update recommendation selects after custom CSV is loaded
            updateRecommendationSelects();

            // Show success notification
            showNotification(`🎉 Custom dataset loaded! ${gamesData.length} games ready for analysis.`);

        } catch (error) {
            statusDiv.textContent = 'Error parsing CSV file: ' + error.message;
            statusDiv.className = 'file-status error';
        }
    };

    reader.readAsText(file);
});

// Load default dataset on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 LUGX Gaming Website loaded successfully');
    console.log('Cart system: Ready');
    console.log('Modals: Ready');
    console.log('Smooth scroll: Active');

    // Load default dataset
    loadDefaultDataset();

    // Inicializar contador del carrito
    updateCartCount();
});

// Load the included CSV dataset
function loadDefaultDataset() {
    fetch('./games_dataset.csv')
        .then(response => response.text())
        .then(csvText => {
            gamesData = parseCSV(csvText);
            filteredData = [...gamesData];
            updateDataTable();
            updateFilters();
            updateChartsFromData();
            // Update recommendation selects after dataset is loaded
            updateRecommendationSelects();
            document.getElementById('fileStatus').textContent = `Default dataset loaded: ${gamesData.length} games`;
            document.getElementById('fileStatus').className = 'file-status success';

            // Collapse upload options by default
            const uploadOptions = document.getElementById('uploadOptions');
            const toggleBtn = document.getElementById('toggleUploadBtn');
            if (uploadOptions && toggleBtn) {
                uploadOptions.classList.add('collapsed');
                toggleBtn.textContent = '▶';
            }
        })
        .catch(error => {
            console.error('Error loading default dataset:', error);
            document.getElementById('fileStatus').textContent = 'Error loading default dataset';
            document.getElementById('fileStatus').className = 'file-status error';
        });
}

// CSV Parser
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, index) => {
            let value = values[index] || '';

            // Convert numeric fields
            if (['Global Sales (Millions)', 'User Rating', 'Price (USD)', 'Metacritic Score'].includes(header)) {
                value = parseFloat(value) || 0;
            } else if (header === 'Release Year') {
                value = parseInt(value) || 0;
            }

            obj[header] = value;
        });
        return obj;
    });
}

// Improved CSV line parser to handle commas within quotes
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

// Update Data Table
function updateDataTable() {
    const tableBody = document.getElementById('tableBody');
    const tableInfo = document.getElementById('tableInfo');

    if (filteredData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8" class="no-data">No data available</td></tr>';
        tableInfo.textContent = 'No data loaded';
        return;
    }

    tableInfo.textContent = `Showing ${filteredData.length} of ${gamesData.length} games`;

    const rows = filteredData.map(game => `
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
    `).join('');

    tableBody.innerHTML = rows;
}

// Update Filter Options
function updateFilters() {
    const genreFilter = document.getElementById('genreFilter');
    const platformFilter = document.getElementById('platformFilter');

    // Get unique genres
    const genres = [...new Set(gamesData.map(game => game.Genre))].sort();
    genreFilter.innerHTML = '<option value="">All Genres</option>' +
        genres.map(genre => `<option value="${genre}">${genre}</option>`).join('');

    // Get unique platforms
    const platforms = [...new Set(gamesData.map(game => game.Platform))].sort();
    platformFilter.innerHTML = '<option value="">All Platforms</option>' +
        platforms.map(platform => `<option value="${platform}">${platform}</option>`).join('');

    // Also update recommendation form selects
    updateRecommendationSelects();
}

// Update Recommendation Form Selects
function updateRecommendationSelects() {
    const genreSelect = document.getElementById('preferredGenre');
    const platformSelect = document.getElementById('platform');

    if (gamesData.length === 0) return;

    // Get unique genres for recommendations
    const genres = [...new Set(gamesData.map(game => game.Genre))].sort();
    genreSelect.innerHTML = '<option value="">Any genre (recommended)</option>' +
        genres.map(genre => `<option value="${genre}">${genre}</option>`).join('');

    // Get unique platforms for recommendations
    const platforms = [...new Set(gamesData.map(game => game.Platform))].sort();
    platformSelect.innerHTML = '<option value="">Any platform (recommended)</option>' +
        platforms.map(platform => `<option value="${platform}">${platform}</option>`).join('');
}

// Filter and Search Functionality
document.getElementById('genreFilter').addEventListener('change', applyFilters);
document.getElementById('platformFilter').addEventListener('change', applyFilters);
document.getElementById('searchInput').addEventListener('input', applyFilters);

function applyFilters() {
    const genreFilter = document.getElementById('genreFilter').value;
    const platformFilter = document.getElementById('platformFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredData = gamesData.filter(game => {
        const matchesGenre = !genreFilter || game.Genre === genreFilter;
        const matchesPlatform = !platformFilter || game.Platform === platformFilter;
        const matchesSearch = !searchTerm ||
            game['Game Title'].toLowerCase().includes(searchTerm) ||
            game.Genre.toLowerCase().includes(searchTerm) ||
            game.Developer.toLowerCase().includes(searchTerm);

        return matchesGenre && matchesPlatform && matchesSearch;
    });

    updateDataTable();
}

// Recommendation Calculator
document.getElementById('recommendationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const budgetValue = document.getElementById('budget').value;
    const budget = budgetValue ? parseFloat(budgetValue) : 0;
    const preferredGenre = document.getElementById('preferredGenre').value;
    const platform = document.getElementById('platform').value;
    const minRatingValue = document.getElementById('minRating').value;
    const minRating = minRatingValue ? parseFloat(minRatingValue) : 0;

    const recommendations = calculateRecommendations(budget, preferredGenre, platform, minRating);
    displayRecommendations(recommendations);
});

function calculateRecommendations(budget, preferredGenre, platform, minRating) {
    return gamesData
        .filter(game => {
            const withinBudget = budget === 0 || game['Price (USD)'] <= budget;
            const matchesGenre = !preferredGenre || game.Genre === preferredGenre;
            const matchesPlatform = !platform || game.Platform === platform;
            const meetsRating = game['User Rating'] >= minRating;

            return withinBudget && matchesGenre && matchesPlatform && meetsRating;
        })
        .sort((a, b) => b['User Rating'] - a['User Rating']) // Sort by rating descending
        .slice(0, 5); // Top 5 recommendations
}

function displayRecommendations(recommendations) {
    const resultDiv = document.getElementById('recommendationsResult');

    if (recommendations.length === 0) {
        resultDiv.innerHTML = `
            <div style="text-align: center; color: #dc3545;">
                <h4>No games found matching your criteria</h4>
                <p>Try adjusting your preferences or budget</p>
            </div>
        `;
        return;
    }

    const recommendationsHTML = recommendations.map((game, index) => `
        <div style="margin-bottom: 15px; padding: 15px; border: 1px solid #127febff; border-radius: 8px; background: white;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <h4 style="margin: 0 0 5px 0; color: #008af8;">${index + 1}. ${game['Game Title']}</h4>
                    <p style="margin: 0; color: #6c757d; font-size: 14px;">
                        ${game.Genre} • ${game.Platform} • ${game['Release Year']}
                    </p>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 18px; font-weight: bold; color: #28a745;">$${game['Price (USD)'].toFixed(2)}</div>
                    <div style="font-size: 14px; color: #ffc107;">⭐ ${game['User Rating']}/10</div>
                </div>
            </div>
            <div style="margin-top: 10px; font-size: 13px; color: #6c757d;">
                Sales: ${game['Global Sales (Millions)'].toFixed(1)}M • Developer: ${game.Developer}
            </div>
        </div>
    `).join('');

    resultDiv.innerHTML = `
        <h4 style="margin-bottom: 20px; color: #28a745;">🎮 Recommended Games for You</h4>
        ${recommendationsHTML}
    `;
}

// Update Charts from Data
function updateChartsFromData() {
    if (gamesData.length === 0) return;

    updateBarChart();
    updatePieChart();
    updateLineChart();
    updateAreaChart();
    updateStatsCards();
}

function updateBarChart() {
    // Top 5 games by sales
    const topGames = gamesData
        .sort((a, b) => b['Global Sales (Millions)'] - a['Global Sales (Millions)'])
        .slice(0, 5);

    const barItems = document.querySelectorAll('.bar-item');
    barItems.forEach((item, index) => {
        if (topGames[index]) {
            const game = topGames[index];
            const percentage = (game['Global Sales (Millions)'] / topGames[0]['Global Sales (Millions)']) * 100;

            item.querySelector('.bar-label').textContent = game['Game Title'].split(':')[0]; // Shorten title
            item.querySelector('.bar-fill').style.width = `${percentage}%`;
            item.querySelector('.bar-fill').setAttribute('data-value', `${percentage.toFixed(0)}%`);
            item.querySelector('.bar-value').textContent = `${percentage.toFixed(0)}%`;
        }
    });
}

function updatePieChart() {
    // Platform distribution
    const platformStats = {};
    gamesData.forEach(game => {
        platformStats[game.Platform] = (platformStats[game.Platform] || 0) + game['Global Sales (Millions)'];
    });

    const total = Object.values(platformStats).reduce((sum, val) => sum + val, 0);
    const platforms = Object.keys(platformStats).sort();

    // Update legend
    const legendContainer = document.querySelector('.pie-legend');
    const colors = ['#008af8', '#ee626b', '#28a745', '#ffc107'];

    legendContainer.innerHTML = platforms.map((platform, index) => {
        const percentage = ((platformStats[platform] / total) * 100).toFixed(1);
        return `
            <div class="legend-item">
                <span class="legend-color" style="background: ${colors[index % colors.length]};"></span>
                <span class="legend-text">${platform} (${percentage}%)</span>
            </div>
        `;
    }).join('');
}

function updateLineChart() {
    // Sales by year trend
    const yearStats = {};
    gamesData.forEach(game => {
        const year = game['Release Year'];
        if (year >= 2010) { // Only recent years
            yearStats[year] = (yearStats[year] || 0) + game['Global Sales (Millions)'];
        }
    });

    // This would require updating the SVG dynamically
    // For now, the static chart represents the concept
}

function updateAreaChart() {
    // Revenue by year
    const yearRevenue = {};
    gamesData.forEach(game => {
        const year = game['Release Year'];
        if (year >= 2010) {
            yearRevenue[year] = (yearRevenue[year] || 0) + (game['Price (USD)'] * game['Global Sales (Millions)']);
        }
    });

    // This would require updating the SVG dynamically
    // For now, the static chart represents the concept
}

function updateStatsCards() {
    const totalGames = gamesData.length;
    const totalSales = gamesData.reduce((sum, game) => sum + game['Global Sales (Millions)'], 0);
    const avgRating = gamesData.reduce((sum, game) => sum + game['User Rating'], 0) / totalGames;
    const totalRevenue = gamesData.reduce((sum, game) => sum + (game['Price (USD)'] * game['Global Sales (Millions)']), 0);

    // Update stats cards
    const statCards = document.querySelectorAll('.stat-card h4');
    if (statCards.length >= 4) {
        statCards[0].textContent = totalGames.toLocaleString();
        statCards[1].textContent = totalSales.toFixed(0) + 'M';
        statCards[2].textContent = '$' + (totalRevenue / 1000000).toFixed(0) + 'M';
        statCards[3].textContent = avgRating.toFixed(1);
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 LUGX Gaming Website loaded successfully');
    console.log('Cart system: Ready');
    console.log('Modals: Ready');
    console.log('Smooth scroll: Active');
    console.log('Data management: Ready');

    // Load default dataset
    loadDefaultDataset();

    // Inicializar contador del carrito
    updateCartCount();
});

// ===== DOCUMENTATION MODAL FUNCTIONS =====
function openDocModal(filename) {
    console.log('Opening doc modal for:', filename);

    const modal = document.getElementById('docModal');
    const title = document.getElementById('docModalTitle');
    const content = document.getElementById('docContent');

    if (!modal) {
        console.error('Doc modal not found!');
        return;
    }

    // Set title based on filename
    const titles = {
        'README.md': '📖 README',
        'USER_GUIDE.md': '👤 User Guide',
        'TECHNICAL_DOCS.md': '⚙️ Technical Documentation',
        'API_REFERENCE.md': '🔌 API Reference',
        'CHANGELOG.md': '📝 Changelog',
        'CONTRIBUTING.md': '🤝 Contributing Guide',
        'LICENSE': '⚖️ License'
    };

    title.textContent = titles[filename] || filename;
    console.log('Set title to:', title.textContent);

    // Load file content
    loadDocContent(filename);

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log('Modal should now be visible');
}

function closeDocModal() {
    const modal = document.getElementById('docModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function loadDocContent(filename) {
    console.log('Loading doc content for:', filename);

    const content = document.getElementById('docContent');
    content.innerHTML = '<div style="text-align: center; padding: 50px;"><div class="loading-spinner" style="border: 4px solid #f3f3f3; border-top: 4px solid #008af8; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div><p>Loading documentation...</p></div>';

    const fileUrl = `files/${filename}`;
    console.log('Fetching from URL:', fileUrl);

    fetch(fileUrl)
        .then(response => {
            console.log('Fetch response:', response);
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            console.log('Received text length:', text.length);
            console.log('First 200 chars:', text.substring(0, 200));

            // Convert markdown-like formatting to HTML
            const formattedText = formatDocContent(text);
            console.log('Formatted text length:', formattedText.length);

            content.innerHTML = formattedText;

            // Scroll to top of content
            content.scrollTop = 0;
        })
        .catch(error => {
            console.error('Error loading document:', error);
            content.innerHTML = `<div style="text-align: center; color: #ff6b6b; padding: 50px;">
                <h3>❌ Error Loading Document</h3>
                <p>Could not load ${filename}</p>
                <p style="font-size: 12px; color: #ccc;">${error.message}</p>
                <p style="font-size: 10px; color: #888;">Check console for details</p>
            </div>`;
        });
}

function formatDocContent(text) {
    try {
        // Basic markdown-like formatting
        let formatted = text
            // Headers (process in order from largest to smallest)
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
            .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
            .replace(/^###### (.*$)/gim, '<h6>$1</h6>')

            // Bold and italic
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')

            // Code blocks (process before inline code)
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')

            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')

            // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')

            // Horizontal rules
            .replace(/^---$/gm, '<hr>')

            // Tables (basic support)
            .replace(/^\|(.+)\|$/gm, '<tr><td>$1</td></tr>')
            .replace(/\|/g, '</td><td>')

            // Lists (process unordered first, then ordered)
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

        // Group consecutive list items
        formatted = formatted.replace(/(<li>.*<\/li>(\s*<li>.*<\/li>)*)/g, '<ul>$1</ul>');

        // Handle paragraphs and line breaks
        let lines = formatted.split('\n');
        let result = [];
        let currentParagraph = [];

        for (let line of lines) {
            line = line.trim();

            if (line === '' && currentParagraph.length > 0) {
                // End of paragraph
                result.push('<p>' + currentParagraph.join('<br>') + '</p>');
                currentParagraph = [];
            } else if (line.startsWith('<h') || line.startsWith('<ul') ||
                       line.startsWith('<ol') || line.startsWith('<pre') ||
                       line.startsWith('<blockquote') || line.startsWith('<hr')) {
                // Block elements - flush current paragraph first
                if (currentParagraph.length > 0) {
                    result.push('<p>' + currentParagraph.join('<br>') + '</p>');
                    currentParagraph = [];
                }
                result.push(line);
            } else if (line !== '') {
                // Regular text - add to current paragraph
                currentParagraph.push(line);
            }
        }

        // Flush remaining paragraph
        if (currentParagraph.length > 0) {
            result.push('<p>' + currentParagraph.join('<br>') + '</p>');
        }

        return result.join('\n');
    } catch (error) {
        console.error('Error formatting document:', error);
        // Return basic formatted version as fallback
        return '<pre>' + text.replace(/</g, '<').replace(/>/g, '>') + '</pre>';
    }
}

// Agregar estilos de animación para el spinner
const docStyle = document.createElement('style');
docStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(docStyle);

// Exponer funciones globalmente
window.openModal = openModal;
window.closeModal = closeModal;
window.openSideModal = openSideModal;
window.closeSideModal = closeSideModal;
window.closeAllSideModals = closeAllSideModals;
window.openCartPanel = openCartPanel;
window.closeCartPanel = closeCartPanel;
window.addToCart = addToCart;
window.subscribeNewsletter = subscribeNewsletter;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
window.openDocModal = openDocModal;
window.closeDocModal = closeDocModal;
