// Dynamic Sparkle Follow
document.querySelectorAll('.pledge-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Donation Step Flow
let currentStep = 1;
const steps = document.querySelectorAll('.step-indicator');

function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index < currentStep);
        gsap.to(step, {
            scale: index === currentStep - 1 ? 1.2 : 1,
            duration: 0.3
        });
    });
}

// Tier Progress Animation
document.querySelectorAll('.tier-card').forEach(tier => {
    ScrollTrigger.create({
        trigger: tier,
        start: "top center",
        onEnter: () => {
            const progress = tier.dataset.progress || 100;
            tier.style.setProperty('--progress', `${progress}%`);
        }
    });
});

// Impact Simulator
const slider = document.querySelector('.donation-slider');
const plasticCounter = document.querySelector('.plastic-counter');
const treeEquivalent = document.querySelector('.tree-equivalent');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    plasticCounter.textContent = value;
    treeEquivalent.textContent = `= ${Math.round(value/10)} Trees`;
    
    gsap.to('.simulator-visual', {
        '--plastic-scale': value/1000,
        duration: 0.5
    });
});