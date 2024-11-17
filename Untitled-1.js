// JavaScript para o menu hambúrguer
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Alternar o estado do menu
    hamburger.addEventListener('click', () => {
        const isExpanded = navMenu.getAttribute('aria-expanded') === 'true';
        navMenu.setAttribute('aria-expanded', !isExpanded);
    });

    // Fechar o menu quando um item for clicado
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.setAttribute('aria-expanded', 'false');
        });
    });
});
