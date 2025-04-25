document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('orders-list');
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    if (pedidos.length === 0) return;

    lista.innerHTML = '';

    pedidos.reverse().forEach(pedido => {
        const div = document.createElement('div');
        div.classList.add('order-item');
        div.innerHTML = `
            <h2>Pedido #${pedido.id}</h2>
            <p class="order-date">Data: ${pedido.data}</p>
            <p class="order-total">Total: ${pedido.total}</p>
            <h3>Itens do Pedido:</h3>
            <div class="order-products">
                ${pedido.itens.map(item => `
                    <div class="product-item">
                        <img src="${item.image || 'https://via.placeholder.com/100'}" alt="${item.name}">
                        <div>
                            <p class="product-name">${item.name}</p>
                            <p>Quantidade: ${item.quantity}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        lista.appendChild(div);
    });
});
