<script>
    // Verificação de login e logout
    if (!localStorage.getItem('isLoggedIn') && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
    }
    document.getElementById('logout')?.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });
</script>