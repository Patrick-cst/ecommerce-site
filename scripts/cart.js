document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    
    // Função principal para renderizar o carrinho
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartCount();
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h2>Seu carrinho está vazio</h2>
                    <p>Adicione produtos para continuar</p>
                    <a href="home.html">Voltar às compras</a>
                </div>
            `;
            subtotalElement.textContent = 'R$0.00';
            shippingElement.textContent = 'R$0.00';
            totalElement.textContent = 'R$0.00';
            return;
        }
        
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div>
                        <h3 class="cart-item-title">${item.name}</h3>
                        <p class="cart-item-category">${getCategoryName(item.category)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="decrease-qty">-</button>
                            <input type="number" value="${item.quantity}" min="1">
                            <button class="increase-qty">+</button>
                        </div>
                        <button class="remove-item">
                            <i class="fas fa-trash"></i> Remover
                        </button>
                    </div>
                </div>
                <div class="cart-item-price">
                    <span class="current-price">R$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
        
        // Event listeners
        document.querySelectorAll('.decrease-qty').forEach(btn => btn.addEventListener('click', decreaseQuantity));
        document.querySelectorAll('.increase-qty').forEach(btn => btn.addEventListener('click', increaseQuantity));
        document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', removeItem));
        document.querySelectorAll('.quantity-selector input').forEach(input => input.addEventListener('change', updateQuantity));
        
        updateTotals();
    }

    // Função para salvar pedido no histórico
    function saveOrder() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) return;

        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 500 ? 0 : 30;
        const total = subtotal + shipping;

        orders.push({
            id: Date.now(),
            date: new Date().toLocaleString('pt-BR'),
            total: total,
            products: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image,
                category: item.category
            }))
        });

        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
        updateCartCount();
    }

    // Funções auxiliares (mantidas do seu original)
    function getCategoryName(category) {
        const categories = {
            'electronics': 'Eletrônicos',
            'fashion': 'Moda',
            'home': 'Casa & Decoração',
            'beauty': 'Beleza'
        };
        return categories[category] || category;
    }

    function decreaseQuantity(e) {
        const itemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.id === itemId);
        
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }

    function increaseQuantity(e) {
        const itemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.id === itemId);
        
        cart[itemIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function updateQuantity(e) {
        const newQuantity = parseInt(e.target.value);
        if (isNaN(newQuantity) || newQuantity < 1) {
            e.target.value = 1;
            return;
        }
        
        const itemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.id === itemId);
        
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function removeItem(e) {
        const itemId = parseInt(e.target.closest('.cart-item').getAttribute('data-id'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function updateTotals() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 500 ? 0 : 30;
        const total = subtotal + shipping;
        
        subtotalElement.textContent = `R$${subtotal.toFixed(2)}`;
        shippingElement.textContent = `R$${shipping.toFixed(2)}`;
        totalElement.textContent = `R$${total.toFixed(2)}`;
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('#cart-count').forEach(el => el.textContent = totalItems);
    }

    // Inicialização
    renderCart();

    // Exporta saveOrder para uso no checkout
    window.saveOrder = saveOrder;
});