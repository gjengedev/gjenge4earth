/* filepath: /c:/Users/user/Documents/Earth foundation/scripts/workInteractions.js */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Conveyor Belt Animation
    const items = document.querySelectorAll('.recycling-items .item');
    items.forEach(item => {
        gsap.to(item, {
            x: '100vw',
            duration: parseFloat(item.dataset.speed) * 15,
            repeat: -1,
            ease: 'none'
        });
    });

    // Mechanical Text Effect

    const mechanicalText = document.querySelector('.mechanical-text');
    if (mechanicalText) {
        const text = mechanicalText.dataset.text;
        mechanicalText.innerHTML = text.split('').map(char => 
            `<span class="char">${char}</span>`
        ).join('');

        gsap.from('.char', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.05
        });
    }

    // Process Machine Interactions
    const machines = document.querySelectorAll('.machine');
    const stepContents = document.querySelectorAll('.step-content');
    
    // Set first machine and content as active by default
    if (machines.length > 0 && stepContents.length > 0) {
        machines[0].classList.add('active');
        stepContents[0].classList.add('active');
    }

    machines.forEach(machine => {
        machine.addEventListener('click', () => {
            const step = machine.dataset.step;
            
            // Remove active class from all machines and contents
            machines.forEach(m => m.classList.remove('active'));
            stepContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked machine and corresponding content
            machine.classList.add('active');
            document.querySelector(`.step-content[data-step="${step}"]`)?.classList.add('active');

            // Animate the active machine
            gsap.to(machine, {
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1
            });
        });
    });

    // Material Cards Animation
    gsap.from('.material-card', {
        scrollTrigger: {
            trigger: '.materials-section',
            start: 'top center',
            toggleActions: 'play none none reverse'},
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Partner Cards Animation
    gsap.from('.partner-card', {
        scrollTrigger: {
            trigger: '.partner-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    });
});