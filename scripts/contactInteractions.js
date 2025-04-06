// Dynamic Form Field Height
document.querySelectorAll('.dynamic-height textarea').forEach(textarea => {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    });
});

// Quantum Button Sparkles
document.querySelector('.quantum-button').addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    e.target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.target.style.setProperty('--y', `${e.clientY - rect.top}px`);
});

// Channel Card Holograms
document.querySelectorAll('.channel-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        gsap.to(card.querySelector('.channel-hologram'), {
            x: x * 20,
            y: y * 20,
            duration: 0.5
        });
    });
});

// AI Assistant Interaction
const assistant = document.querySelector('.contact-assistant');
let assistantActive = false;

assistant.addEventListener('click', () => {
    assistantActive = !assistantActive;
    
    gsap.to(assistant, {
        width: assistantActive ? 300 : 60,
        height: assistantActive ? 400 : 60,
        duration: 0.5
    });
    
    gsap.to('.assistant-chat', {
        opacity: assistantActive ? 1 : 0,
        duration: 0.3
    });
});

// Ticker Animation
gsap.to('.ticker-track', {
    x: '-100%',
    duration: 20,
    repeat: -1,
    ease: 'none'
});