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
// --- ANIMACJA FADE-IN DLA SEKCJI O NAS ---

// Funkcja obserwująca elementy przy scrollowaniu
function initScrollAnimations() {
    const aboutStory = document.querySelector('.about-story');
    const aboutFeatures = document.querySelector('.about-features');
    
    if (!aboutStory || !aboutFeatures) return;
    
    // Opcje dla Intersection Observer
    const observerOptions = {
        threshold: 0.2, // Element musi być widoczny w 20%
        rootMargin: '0px 0px -100px 0px' // Trigger trochę wcześniej
    };
    
    // Callback gdy element wchodzi w viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Przestań obserwować po animacji
            }
        });
    };
    
    // Stwórz observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Obserwuj elementy
    observer.observe(aboutStory);
    observer.observe(aboutFeatures);
}

// Uruchom po załadowaniu DOM
document.addEventListener('DOMContentLoaded', initScrollAnimations);