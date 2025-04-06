document.addEventListener('DOMContentLoaded', () => {
    // Yearly Impact Chart
    const yearlyCtx = document.getElementById('yearlyImpactChart').getContext('2d');
    new Chart(yearlyCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Waste Recycled (tons)',
                data: [10, 25, 45, 75, 100],
                borderColor: '#2E8B57',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Community Growth Chart
    const communityCtx = document.getElementById('communityGrowthChart').getContext('2d');
    new Chart(communityCtx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Community Members',
                data: [20, 45, 85, 150, 200],
                backgroundColor: '#FFD700'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});