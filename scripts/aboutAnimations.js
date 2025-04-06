// Text splitting animation
function splitTextElements() {
    document.querySelectorAll('.split-text').forEach(element => {
        const text = element.innerText.split(' ');
        element.innerHTML = text.map(word => 
            `<span style="animation-delay: ${Math.random() * 0.3}s">${word}</span>`
        ).join(' ');
    });
}

// Interactive process steps
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
        gsap.to(step, {
            scale: 1.1,
            y: -20,
            duration: 0.3
        });
    });
    
    step.addEventListener('mouseleave', () => {
        gsap.to(step, {
            scale: 1,
            y: 0,
            duration: 0.3
        });
    });
});

// Initialize page animations
document.addEventListener('DOMContentLoaded', () => {
    splitTextElements();
    
    // Timeline intersection observer
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.querySelector('.reveal-image').style.backgroundImage = 
                    `url(images/${entry.target.dataset.image})`;
            }
        });
    }, { threshold: 0.8 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });
});