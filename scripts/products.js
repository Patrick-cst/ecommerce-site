// scripts/products.js
document.addEventListener('DOMContentLoaded', function() {
    // Lista de produtos reais com imagens
    const products = [
        {
            id: 1,
            name: "Smartphone Premium X1",
            price: 4599.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.8,
            description: "O mais avançado smartphone com câmera de 108MP"
        },
        {
            id: 2,
            name: "Notebook Ultrafino Pro",
            price: 4899.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.9,
            description: "Performance excepcional com processador i9"
        },
        {
            id: 3,
            name: "Relógio Inteligente Elite",
            price: 1299.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.7,
            description: "Monitoramento avançado de saúde"
        },
        {
            id: 4,
            name: "Tênis Esportivo Premium",
            price: 599.99,
            category: "fashion",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.6,
            description: "Conforto e estilo para seus treinos"
        },
        {
            id: 5,
            name: "Jaqueta de Couro Legítimo",
            price: 899.99,
            category: "fashion",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.5,
            description: "Feita à mão com couro italiano"
        },
        {
            id: 6,
            name: "Sofá em tecido Nobre",
            price: 4299.99,
            category: "home",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            rating: 4.9,
            description: "Design ergonômico premium"
        }
    ];

    // Elementos DOM
    const productsContainer = document.getElementById('products');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceSort = document.getElementById('price-sort');
    const priceFilter = document.getElementById('price-filter');
    const priceValue = document.getElementById('price-value');

    // Atualiza o valor do filtro de preço
    priceFilter.addEventListener('input', function() {
        priceValue.textContent = `Até R$${this.value}`;
        renderProducts();
    });

    // Event listeners para filtros
    [searchInput, categoryFilter, priceSort].forEach(element => {
        element.addEventListener('change', renderProducts);
        element.addEventListener('input', renderProducts);
    });

    // Filtra e ordena produtos
    function getFilteredProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const maxPrice = parseFloat(priceFilter.value);
        const sortOrder = priceSort.value;

        // Filtra por nome, categoria e preço
        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || product.category === category;
            const matchesPrice = product.price <= maxPrice;
            
            return matchesSearch && matchesCategory && matchesPrice;
        });

        // Ordena por preço
        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }

    // Renderiza os produtos na tela
    function renderProducts() {
        const filteredProducts = getFilteredProducts();
        
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Nenhum produto encontrado</h3>
                    <p>Tente ajustar seus filtros de busca</p>
                </div>
            `;
            return;
        }
        
        productsContainer.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">${product.rating} <i class="fas fa-star"></i></div>
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">R$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        `).join('');

        // Adiciona eventos aos botões
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Retorna o nome da categoria formatado
    function getCategoryName(category) {
        const categories = {
            'electronics': 'Eletrônicos',
            'fashion': 'Moda',
            'home': 'Casa & Decoração'
        };
        return categories[category] || category;
    }

    // Adiciona produto ao carrinho
    function addToCart(e) {
        const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Feedback visual
        const button = e.target.closest('.add-to-cart');
        button.innerHTML = '<i class="fas fa-check"></i> Adicionado';
        button.classList.add('added');
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar';
            button.classList.remove('added');
        }, 2000);
    }

    // Atualiza contador do carrinho
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        document.querySelectorAll('#cart-count').forEach(element => {
            element.textContent = totalItems;
        });
    }

    // Inicializa a página
    updateCartCount();
    renderProducts();
});