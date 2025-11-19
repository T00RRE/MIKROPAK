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

// --- OBSŁUGA ZAKŁADEK PRODUKTÓW ---

function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (!tabButtons.length || !tabContents.length) return;
    
    // Funkcja przełączania zakładek
    function switchTab(targetTab) {
        // Usuń active ze wszystkich buttonów i contentu
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Dodaj active do klikniętego buttona
        const clickedButton = document.querySelector(`.tab-button[data-tab="${targetTab}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
        
        // Pokaż odpowiednią zawartość
        const targetContent = document.querySelector(`.tab-content[data-tab="${targetTab}"]`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }
    
    // Dodaj event listenery do buttonów
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    // Obsługa URL hash (opcjonalne - jeśli ktoś wejdzie z linkiem #products-cut)
    function checkUrlHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#products-')) {
            const tabName = hash.replace('#products-', '');
            switchTab(tabName);
        }
    }
    
    // Sprawdź hash przy załadowaniu
    checkUrlHash();
    
    // Sprawdź hash przy zmianie (np. cofnięcie w przeglądarce)
    window.addEventListener('hashchange', checkUrlHash);
}

// Uruchom po załadowaniu DOM
document.addEventListener('DOMContentLoaded', initProductTabs);
// --- ANIMACJA SEKCJI KONTAKT ---

function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    const contactMap = document.querySelector('.contact-map');
    
    if (!contactItems.length) return;
    
    // Opcje dla Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Callback dla animacji
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                
                // Dodaj opóźnienie dla każdego elementu
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, entry.target.dataset.delay || 0);
                
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Obserwuj każdy element kontaktowy z opóźnieniem
    contactItems.forEach((item, index) => {
        item.dataset.delay = index * 100; // 100ms opóźnienia między elementami
        observer.observe(item);
    });
    
    // Obserwuj mapę
    if (contactMap) {
        contactMap.dataset.delay = contactItems.length * 100;
        observer.observe(contactMap);
    }
}

// Uruchom po załadowaniu DOM
document.addEventListener('DOMContentLoaded', initContactAnimations);


