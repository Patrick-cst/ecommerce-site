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
            <p>Data: ${pedido.data}</p>
            <p>Total: ${pedido.total}</p>
            <h3>Itens:</h3>
            <ul>
                ${pedido.itens.map(item => `<li>${item.name} - Quantidade: ${item.quantity}</li>`).join('')}
            </ul>
        `;
        lista.appendChild(div);
    });
});
