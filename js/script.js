// Oczekiwanie na pełne załadowanie DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. OBSŁUGA INTRO ANIMACJI ---
    const preloader = document.getElementById('preloader');
    const introLogo = document.querySelector('.intro-logo');
    const introText = document.querySelector('.intro-text');
    const header = document.getElementById('main-header');
    const heroSection = document.getElementById('hero');

    // Całkowity czas trwania animacji + opóźnienie na zniknięcie
    const totalAnimationTime = 4000; 
    const showContentDelay = 3000; // Kiedy pokazać resztę strony

    // Start animacji
    setTimeout(() => {
        introLogo.classList.add('start-animation');
        introText.classList.add('start-animation');
    }, 50);

    // Pokaż resztę strony
    setTimeout(() => {
        header.classList.remove('hidden-on-load');
        heroSection.classList.remove('hidden-on-load');
    }, showContentDelay);

    // Usuń preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 1000);
    }, totalAnimationTime);

    
    // --- 2. OBSŁUGA NAWIGACJI MOBILNEJ ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const allNavLinks = document.querySelectorAll('.main-nav a');

    const toggleMenu = () => {
        navLeft.classList.toggle('is-open');
        navRight.classList.toggle('is-open');
    };

    menuToggle.addEventListener('click', toggleMenu);

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLeft.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
});