// Parallax Mosaic
document.addEventListener('mousemove', (e) => {
    const mosaic = document.querySelector('.scrolling-mosaic');
    const pieces = mosaic.querySelectorAll('.mosaic-piece');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    pieces.forEach(piece => {
        const depth = parseFloat(piece.dataset.depth);
        const moveX = (e.clientX - centerX) * depth;
        const moveY = (e.clientY - centerY) * depth;
        
        gsap.to(piece, {
            x: moveX,
            y: moveY,
            duration: 2
        });
    });
});

// Animated Data Dials
document.querySelectorAll('.data-point').forEach(point => {
    ScrollTrigger.create({
        trigger: point,
        start: "top center",
        onEnter: () => {
            const value = point.dataset.value;
            point.style.setProperty('--progress', value/100);
        }
    });
});

// Story Video Interactions
document.querySelectorAll('.story-card').forEach(card => {
    const video = card.querySelector('.story-video');
    
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => video.pause());
    
    ScrollTrigger.create({
        trigger: card,
        start: "center center",
        onEnter: () => card.classList.add('active'),
        onLeaveBack: () => card.classList.remove('active')
    });
});

// Timeline Activation
document.querySelectorAll('.milestone-marker').forEach(marker => {
    ScrollTrigger.create({
        trigger: marker,
        start: "top 80%",
        onEnter: () => marker.parentElement.classList.add('active')
    });
});