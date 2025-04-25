// scripts/products.js
document.addEventListener('DOMContentLoaded', function() {
    // Lista de produtos reais com imagens
    const products = [
        {
            "id": 1,
            "name": "Smartphone Premium X1",
            "price": 4599.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "O mais avançado smartphone com câmera de 108MP"
        },
        {
            "id": 2,
            "name": "Notebook Ultrafino Pro",
            "price": 4899.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.9,
            "description": "Performance excepcional com processador i9"
        },
        {
            "id": 3,
            "name": "Relógio Inteligente Elite",
            "price": 1299.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Monitoramento avançado de saúde"
        },
        {
            "id": 4,
            "name": "Tênis Esportivo Premium",
            "price": 599.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Conforto e estilo para seus treinos"
        },
        {
            "id": 5,
            "name": "Jaqueta de Couro Legítimo",
            "price": 899.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Feita à mão com couro italiano"
        },
        {
            "id": 6,
            "name": "Sofá em tecido Nobre",
            "price": 4299.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.9,
            "description": "Design ergonômico premium"
        },
        {
            "id": 7,
            "name": "Tablet Android Pro",
            "price": 2399.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Tela de 11 polegadas com caneta digital"
        },
        {
            "id": 8,
            "name": "Fones Bluetooth Elite",
            "price": 799.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Cancelamento de ruído ativo premium"
        },
        {
            "id": 9,
            "name": "Câmera Mirrorless 4K",
            "price": 5299.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "Sensor full-frame e gravação profissional"
        },
        {
            "id": 10,
            "name": "Camiseta Premium Slim",
            "price": 199.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.4,
            "description": "Algodão pima com corte moderno"
        },
        {
            "id": 11,
            "name": "Calça Jeans Skinny",
            "price": 349.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Modelagem ajustada com elastano"
        },
        {
            "id": 12,
            "name": "Cama King Size Ortopédica",
            "price": 3299.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "Estrutura em madeira maciça"
        },
        {
            "id": 13,
            "name": "PC Gamer Ultimate",
            "price": 8999.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.9,
            "description": "RTX 4090 e processador i9 13900K"
        },
        {
            "id": 14,
            "name": "Mesa de Escritório Executiva",
            "price": 1299.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "MDF nobre com acabamento em carvalho"
        },
        {
            "id": 15,
            "name": "Blazer Social Premium",
            "price": 699.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Corte italiano em lã super 120"
        },
        {
            "id": 16,
            "name": "Monitor Profissional 32\"",
            "price": 2899.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Resolução 4K e 99% sRGB"
        },
        {
            "id": 17,
            "name": "Poltrona Reclinável Premium",
            "price": 1799.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Couro legítimo com sistema de massagem"
        },
        {
            "id": 18,
            "name": "Saia Longa Elegante",
            "price": 259.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.3,
            "description": "Tecido fluido com estampa exclusiva"
        },
        {
            "id": 19,
            "name": "Roteador Wi-Fi 6",
            "price": 899.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1600369672771-1a5b8a4a3a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Cobertura para até 300m²"
        },
        {
            "id": 20,
            "name": "Jogo de Toalhas de Banho",
            "price": 299.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1600078686889-8c42747c25fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Algodão egípcio 600g/m²"
        },
        {
            "id": 21,
            "name": "SSD NVMe 2TB",
            "price": 999.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "Leitura 7000MB/s"
        },
        {
            "id": 22,
            "name": "Cortinas Blackout",
            "price": 499.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.4,
            "description": "Tecido termoacústico premium"
        },
        {
            "id": 23,
            "name": "Terno Slim Fit",
            "price": 1299.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Lã merino com forro em seda"
        },
        {
            "id": 24,
            "name": "Home Theater 7.1",
            "price": 3599.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "Som surround Dolby Atmos"
        },
        {
            "id": 25,
            "name": "Tapete Persa",
            "price": 1599.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Feito à mão com lã natural"
        },
        {
            "id": 26,
            "name": "Moletom Comfort",
            "price": 279.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.4,
            "description": "Tecido fleece ultra macio"
        },
        {
            "id": 27,
            "name": "Projetor 4K HDR",
            "price": 4299.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "3000 lumens e Android TV"
        },
        {
            "id": 28,
            "name": "Luminária de Mesa Designer",
            "price": 399.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Ajuste de intensidade e temperatura"
        },
        {
            "id": 29,
            "name": "Shorts Jeans Masculino",
            "price": 229.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.3,
            "description": "Denim stretch com lavagem premium"
        },
        {
            "id": 30,
            "name": "Mouse Gamer Sem Fio",
            "price": 499.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "16000DPI e 50 milhões de cliques"
        },
        {
            "id": 31,
            "name": "Jogo de Copos Cristal",
            "price": 349.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "6 peças com lapidação premium"
        },
        {
            "id": 32,
            "name": "Vestido Cocktail Elegante",
            "price": 459.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Corte evasê em cetim italiano"
        },
        {
            "id": 33,
            "name": "Teclado Mecânico RGB",
            "price": 599.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.7,
            "description": "Switches Cherry MX Red"
        },
        {
            "id": 34,
            "name": "Cômoda 6 Gavetas",
            "price": 999.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "MDF com puxadores em metal"
        },
        {
            "id": 35,
            "name": "Blusa de Tricô Feminina",
            "price": 189.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.4,
            "description": "Fio 100% lã merino"
        },
        {
            "id": 36,
            "name": "Caixa de Som Bluetooth",
            "price": 699.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "30W RMS e à prova d'água"
        },
        {
            "id": 37,
            "name": "Conjunto de Lençóis 300 fios",
            "price": 429.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.6,
            "description": "Algodão peruano com acabamento premium"
        },
        {
            "id": 38,
            "name": "Cinto de Couro Legítimo",
            "price": 159.99,
            "category": "fashion",
            "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.3,
            "description": "Fivela em metal antialérgico"
        },
        {
            "id": 39,
            "name": "Monitor Curvo 34\"",
            "price": 2899.99,
            "category": "electronics",
            "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.8,
            "description": "WQHD e 144Hz"
        },
        {
            "id": 40,
            "name": "Aparador de Vidro",
            "price": 599.99,
            "category": "home",
            "image": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "rating": 4.5,
            "description": "Design moderno com prateleira inferior"
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