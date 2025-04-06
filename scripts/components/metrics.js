export function initializeMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    const animatedMetrics = new WeakSet();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedMetrics.has(entry.target)) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.count);
                animatedMetrics.add(target);
                animateValue(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    metricValues.forEach(value => observer.observe(value));
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}