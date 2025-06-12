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

function createObserver() {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
}

// Scroll and Animation Observers are in animations and metrics

// Parallax Effect
const handleParallax = () => {
    // Select all hero sections
    const heroes = document.querySelectorAll('.hero, .about-hero, .contact-hero, .projects-hero, .impact-hero');
    if (!heroes.length) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroes.forEach(hero => {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }, { passive: true });
};

// Smooth scroll to next section when scroll indicator is clicked
function initScrollIndicators() {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');
    
    scrollIndicators.forEach(indicator => {
        indicator.style.cursor = 'pointer';
        indicator.addEventListener('click', () => {
            // Find the hero section
            const heroSection = indicator.closest('header, section');
            if (heroSection) {
                // Find the next section after the hero
                const nextSection = heroSection.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
          // Add hover effect
        indicator.addEventListener('mouseenter', () => {
            indicator.style.transform = 'scale(1.2)';
            indicator.style.transition = 'transform 0.3s ease';
        });
        
        indicator.addEventListener('mouseleave', () => {
            indicator.style.transform = 'scale(1)';
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS library
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Reveal on scroll observer
    const observer = createObserver();
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // Initialize other features
    handleParallax();
    initScrollIndicators();
});
