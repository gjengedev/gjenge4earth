export const headerTemplate = `
    <nav class="main-nav">
        <div class="nav-container">
            <div class="logo">
                <a href="../../index.html" class="logo-link">
                    <img src="../../images/G4E-no-bg.png" class="logo-pic" alt="Gjenge Earth Logo">
                    <img src="../../images/Logo_words.png" class="logo-words" alt="Gjenge Earth">
                    <span></span>
                </a>
            </div>
            
            <button class="hamburger-menu" aria-label="Toggle menu" aria-expanded="false">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </button>

            <div class="nav-wrapper">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="our-work.html">Our Work</a></li>
                    <li><a href="impact.html">Impact</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="nav-cta">
                    <a href="donate.html" class="nav-button">Partner With Us</a>
                </div>
            </div>
        </div>
    </nav>
`;

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set index for staggered animations
    navLinks.forEach((link, index) => {
        link.style.setProperty('--item-index', index + 1);
    });

    // Set active link based on current page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Handle menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', 
            hamburger.classList.contains('active').toString());
        navWrapper.classList.toggle('active');
        document.body.style.overflow = 
            navWrapper.classList.contains('active') ? 'hidden' : '';
    });

    
}

export function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerTemplate;
        initializeNavigation();
    }
}