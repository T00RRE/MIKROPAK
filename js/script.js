// Oczekiwanie na pełne załadowanie DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. OBSŁUGA INTRO ANIMACJI ---
    const preloader = document.getElementById('preloader');
    const introLogo = document.querySelector('.intro-logo');
    const header = document.getElementById('main-header');
    const heroSection = document.getElementById('hero');

    // Ustawienie czasów animacji (zgodnie z CSS)
    const animationDuration = 3300; // 3s total
    const waitDuration = 1000;      // 1s (33% of 3s) - czas na pojawienie się i pauzę

    // Krok 1: Wystartuj animację w CSS
    setTimeout(() => {
        introLogo.classList.add('start-animation'); 
    }, 50);

    // Krok 2: Pokaż resztę strony, gdy logo zaczyna się przesuwać
    setTimeout(() => {
        header.classList.remove('hidden-on-load');
        heroSection.classList.remove('hidden-on-load');
    }, waitDuration);

    // Krok 3: Usuń preloader po zakończeniu całej animacji
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 1200); // Czas na zniknięcie
    }, animationDuration);

    
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