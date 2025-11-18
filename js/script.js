// Oczekiwanie na pełne załadowanie dokumentu
document.addEventListener('DOMContentLoaded', function() {
    // Pobranie elementów DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const allNavLinks = document.querySelectorAll('.main-nav a');

    // Funkcja przełączająca klasę 'is-open' na nawigacji
    const toggleMenu = () => {
        navLeft.classList.toggle('is-open');
        navRight.classList.toggle('is-open');
    };

    // Obsługa kliknięcia w przycisk hamburgera
    menuToggle.addEventListener('click', toggleMenu);

    // Obsługa kliknięcia w link menu (po kliknięciu menu się zamyka)
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Sprawdzenie, czy menu jest otwarte, zanim je zamkniemy
            if (navLeft.classList.contains('is-open')) {
                toggleMenu(); // Zamknij menu
            }
        });
    });
});
// Oczekiwanie na pełne załadowanie DOM (ale niekoniecznie zasobów - obrazów)
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. OBSŁUGA INTRO ANIMACJI ---
    const preloader = document.getElementById('preloader');
    const introLogo = document.querySelector('.intro-logo');
    const header = document.getElementById('main-header');
    const heroSection = document.getElementById('hero');

    // Ustawienie czasów animacji
    const logoMoveDuration = 1500; // 1.5 sekundy na ruch logo
    const fadeDelay = 200; // Opóźnienie przed pojawieniem się treści
    const totalDuration = logoMoveDuration + fadeDelay;


    // Krok 1: Wystartuj animację ruchu logo
    // Używamy setTimeout, aby przeglądarka miała czas na renderowanie początkowe 
    // i mogła zastosować płynne przejście.
    setTimeout(() => {
        // Zmień klasę, by uruchomić transformacje CSS
        introLogo.classList.add('logo-animate'); 
    }, 50); // Krótkie opóźnienie, aby uniknąć problemów z renderowaniem początkowym

    
    // Krok 2: Uruchom pojawianie się treści i usunięcie preloadera
    setTimeout(() => {
        
        // Pokaż header i Hero Section (usuń klasę ukrywającą)
        header.classList.remove('hidden-on-load');
        heroSection.classList.remove('hidden-on-load');

        // Pokaż linki menu (opcjonalnie, można to też zrobić w CSS)
        const navList = document.querySelector('.main-nav ul');
        navList.style.visibility = 'visible'; // Zapewnienie widoczności

        // Usuń preloader i jego logo (usuń klasę, która go trzyma, a potem fizycznie)
        preloader.style.opacity = '0';
        
        // Czekaj na koniec znikania preloadera i usuń go z DOM
        setTimeout(() => {
            preloader.remove();
        }, 1000); // Czas równy transition: opacity 1s ease-out; z CSS

    }, logoMoveDuration); // Po zakończeniu ruchu logo

    
    // --- 2. OBSŁUGA NAWIGACJI (Istniejący kod) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a'); 

    // ... (pozostały kod JS dla menu mobilnego) ...
    // Pamiętaj, aby go skopiować/przenieść do nowego pliku script.js
    
});