document.addEventListener('DOMContentLoaded', function () {
    const fullnameInput = document.getElementById('fullname');
    const phoneInput = document.getElementById('phone');
    const cepInput = document.getElementById('cep');
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const checkoutForm = document.getElementById('checkout-form');

    loadCartItems();

    // Formatação automática dos campos de cartão
    const cardNumberInput = document.getElementById('card-number');
    const cardExpiryInput = document.getElementById('card-expiry');
    const cardNameInput = document.getElementById('card-name');
    const cardCVVInput = document.getElementById('card-cvv');

    // Adiciona spans de erro
    function appendErrorSpan(input) {
        const span = document.createElement('span');
        span.className = 'field-error';
        span.style.color = 'red';
        span.style.fontSize = '12px';
        span.style.display = 'none';
        input.insertAdjacentElement('afterend', span);
        return span;
    }

    const errorCardNumber = appendErrorSpan(cardNumberInput);
    const errorCardName = appendErrorSpan(cardNameInput);
    const errorCardExpiry = appendErrorSpan(cardExpiryInput);
    const errorCardCVV = appendErrorSpan(cardCVVInput);

    cardNumberInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '').substring(0, 16);
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = value;
    });

    cardExpiryInput.addEventListener('input', function () {
        let value = this.value.replace(/[^\d]/g, '').substring(0, 4);
        if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        }
        this.value = value;
    });

    fullnameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, '');
        if (this.value.length > 50) {
            this.value = this.value.substring(0, 50);
        }
    });

    phoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        let formattedValue = '';
        if (value.length > 0) formattedValue = `(${value.slice(0, 2)}`;
        if (value.length > 2) formattedValue += `) ${value.slice(2, 7)}`;
        if (value.length > 7) formattedValue += `-${value.slice(7, 11)}`;

        this.value = formattedValue;
    });

    function validatePhone(phone) {
        return /^\(\d{2}\) \d{5}-\d{4}$/.test(phone);
    }

    cepInput.addEventListener('blur', function () {
        const cep = this.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('address').value = data.logradouro;
                        document.getElementById('neighborhood').value = data.bairro;
                        document.getElementById('city').value = data.localidade;
                        document.getElementById('state').value = data.uf;
                    } else {
                        alert('CEP não encontrado');
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar CEP:', error);
                    alert('Erro ao buscar CEP. Tente novamente.');
                });
        }
    });

    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            document.querySelectorAll('.payment-form').forEach(form => {
                form.classList.remove('active');
            });

            switch (this.value) {
                case 'credit':
                case 'debit':
                    document.getElementById('credit-card-form').classList.add('active');
                    break;
                case 'boleto':
                    document.getElementById('boleto-form').classList.add('active');
                    generateBoletoNumber();
                    break;
                case 'pix':
                    document.getElementById('pix-form').classList.add('active');
                    generatePixCode();
                    break;
            }
        });
    });

    function generateBoletoNumber() {
        const boletoNumber = '34191.' +
            Math.floor(10000 + Math.random() * 90000) + ' ' +
            Math.floor(10000 + Math.random() * 90000) + '.' +
            Math.floor(100000 + Math.random() * 900000) + ' ' +
            Math.floor(10000 + Math.random() * 90000) + '.' +
            Math.floor(100000 + Math.random() * 900000) + ' ' +
            Math.floor(1 + Math.random() * 9) + ' ' +
            Math.floor(10000000000000 + Math.random() * 90000000000000);

        document.getElementById('boleto-number').textContent = boletoNumber;
    }

    function generatePixCode() {
        const pixKey = '000.' +
            Math.floor(100 + Math.random() * 900) + '.' +
            Math.floor(100 + Math.random() * 900) + '-' +
            Math.floor(10 + Math.random() * 90);

        document.getElementById('pix-key').textContent = pixKey;

        const canvas = document.getElementById('pix-qrcode');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000000';
        ctx.font = '10px Arial';
        ctx.fillText('PIX QR CODE', 50, 100);
    }

    function loadCartItems() {
        const cartItemsContainer = document.getElementById('checkout-items');
        const cartSubtotal = document.getElementById('checkout-subtotal');
        const cartShipping = document.getElementById('checkout-shipping');
        const cartTotal = document.getElementById('checkout-total');

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
            cartSubtotal.textContent = 'R$0.00';
            cartShipping.textContent = 'R$0.00';
            cartTotal.textContent = 'R$0.00';
            return;
        }

        let subtotal = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';

            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.image || 'images/default-product.jpg'}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Quantidade: ${item.quantity}</p>
                    ${item.size ? `<p>Tamanho: ${item.size}</p>` : ''}
                    ${item.color ? `<p>Cor: ${item.color}</p>` : ''}
                </div>
                <div class="item-price">
                    R$ ${itemTotal.toFixed(2).replace('.', ',')}
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        const shipping = subtotal > 500 ? 0 : 15.00;
        const total = subtotal + shipping;

        cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        cartShipping.textContent = `R$ ${shipping.toFixed(2).replace('.', ',')}`;
        cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    window.copyPixKey = function () {
        const pixKey = document.getElementById('pix-key').textContent;
        navigator.clipboard.writeText(pixKey)
            .then(() => alert('Chave Pix copiada!'))
            .catch(err => console.error('Erro ao copiar:', err));
    }

    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

        // limpa mensagens de erro
        errorCardNumber.style.display = "none";
        errorCardName.style.display = "none";
        errorCardExpiry.style.display = "none";
        errorCardCVV.style.display = "none";

        if ((selectedPayment === 'credit' || selectedPayment === 'debit')) {
            const cardNumber = cardNumberInput.value.trim();
            const cardName = cardNameInput.value.trim();
            const cardExpiry = cardExpiryInput.value.trim();
            const cardCVV = cardCVVInput.value.trim();

            const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
            const cardNameRegex = /^[A-Za-zÀ-ÿ\s]{1,50}$/;
            const cardExpiryRegex = /^\d{2}\/\d{2}$/;
            const cardCVVRegex = /^\d{3}$/;

            if (!cardNumberRegex.test(cardNumber)) {
                errorCardNumber.textContent = "Número do cartão inválido. Use o formato 0000 0000 0000 0000.";
                errorCardNumber.style.display = "block";
                return;
            }
            if (!cardNameRegex.test(cardName)) {
                errorCardName.textContent = "Nome no cartão inválido. Apenas letras, até 50 caracteres.";
                errorCardName.style.display = "block";
                return;
            }
            if (!cardExpiryRegex.test(cardExpiry)) {
                errorCardExpiry.textContent = "Validade inválida. Use o formato MM/AA.";
                errorCardExpiry.style.display = "block";
                return;
            }
            if (!cardCVVRegex.test(cardCVV)) {
                errorCardCVV.textContent = "CVV inválido. Deve conter exatamente 3 dígitos.";
                errorCardCVV.style.display = "block";
                return;
            }
        }

        const orderId = Math.floor(100000 + Math.random() * 900000);
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        const pedido = {
            id: orderId,
            data: new Date().toLocaleDateString(),
            total: document.getElementById('checkout-total').textContent,
            itens: cartItems
        };

        const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosSalvos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidosSalvos));

        localStorage.removeItem('cart');
        window.location.href = `order-success.html?order=${orderId}`;
    });

    function validateFullName(name) {
        return /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{2,50}$/.test(name);
    }

    function validatePhone(phone) {
        return /^\(\d{2}\) \d{5}-\d{4}$/.test(phone);
    }
});
