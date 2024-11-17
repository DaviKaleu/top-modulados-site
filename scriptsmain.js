// Função para alternar o menu de navegação em dispositivos móveis
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Alterna a visibilidade do menu
    const isExpanded = navMenu.getAttribute('aria-expanded') === 'true';
    navMenu.setAttribute('aria-expanded', !isExpanded);

    // Alterna a classe para mostrar ou esconder o menu
    navMenu.style.display = isExpanded ? 'none' : 'block';
}

// Função para iniciar o contexto de áudio
function startAudioContext() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Geração de um som simples (gerador de onda)
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frequência A4
    oscillator.connect(audioContext.destination);
    
    // Inicia o som
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1); // Duração de 1 segundo
}
