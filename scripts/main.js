// Utility function for number animation
function animateValue(element, target, duration = 2000) {
    const startTime = Date.now();

    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        element.textContent = Math.floor(progress * target);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    };
    
    requestAnimationFrame(update);
}

// Scroll and Animation Observers are in animations and metrics

// Parallax Effect
const handleParallax = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }, { passive: true });
};

// Mobile Navigation
const initMobileNav = () => {
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS library
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize observers
    const observer = createObserver();
    document.querySelectorAll('.metric-card').forEach(card => observer.observe(card));

    // Initialize other features
    initMobileNav();
    handleParallax();
});