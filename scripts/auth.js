// scripts/auth.js

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'gabriela@gmail.com' && password === '12345') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').textContent = 'E-mail ou senha incorretos.';
    }
});

// Logout (deve ser chamado em todas as páginas)
function setupLogout() {
    document.getElementById('logout')?.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
}

// Verificação de login (proteção de rotas)
function checkAuth() {
    if (!localStorage.getItem('isLoggedIn') && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
    }
}