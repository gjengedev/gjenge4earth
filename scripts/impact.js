document.addEventListener('DOMContentLoaded', () => {
    // Yearly Impact Chart
    const yearlyCtx = document.getElementById('yearlyImpactChart').getContext('2d');
    new Chart(yearlyCtx, {
        type: 'bar', // Changed from 'line' to 'bar'
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Waste Recycled (tons)',
                data: [10, 25, 45, 75, 100],
                backgroundColor: '#2E8B57', // Changed from borderColor and set to green
                // tension: 0.4 // Not applicable for bar charts
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
                backgroundColor: '#0965c2'
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

    // SDG Interaction Logic
    // --- SDG Interaction Elements ---
    const sdgGrid = document.querySelector('.sdg-grid');
    const sdgIcons = Array.from(sdgGrid.querySelectorAll('.sdg-icon')); // Convert NodeList to Array
    const detailWrapper = document.getElementById('sdg-detail-wrapper');
    const detailCard = detailWrapper.querySelector('.sdg-detail-card'); // Card inside wrapper
    const detailImage = detailWrapper.querySelector('.sdg-detail-image');
    const detailTitle = detailWrapper.querySelector('.sdg-detail-title');
    const detailText = detailWrapper.querySelector('.sdg-detail-text p');
    const sdgSectionContainer = document.querySelector('.sdg-focus-section .container'); // Parent container
    const overlay = document.getElementById('sdg-overlay');
    const closeBtn = document.getElementById('sdg-close-btn');
    const prevBtn = document.getElementById('sdg-prev-btn');
    const nextBtn = document.getElementById('sdg-next-btn');

    // --- SDG Content ---
    const sdgContent = {
        '1': {
            title: 'SDG 1: No Poverty',
            text: 'Our initiatives have helped lift over 500 families out of extreme poverty through job creation in waste collection and processing. We provide fair wages and skill development opportunities, contributing directly to economic empowerment in vulnerable communities.',
            image: 'images/SDGs/sdg1.png'
        },
        '5': {
            title: 'SDG 5: Gender Equality',
            text: 'We prioritize gender equality, with over 60% of our workforce being women. We provide equal opportunities, leadership training, and support programs ensuring women play a crucial role in environmental sustainability and economic growth.',
            image: 'images/SDGs/sdg5.png'
        },
        '8': {
            title: 'SDG 8: Decent Work and Economic Growth',
            text: 'Creating sustainable livelihoods is key. We\'ve generated over 200 direct and indirect jobs with fair wages, safe working conditions, and growth prospects, fostering local economic development through the circular economy.',
            image: 'images/SDGs/sdg8.png'
        },
        '11': {
            title: 'SDG 11: Sustainable Cities and Communities',
            text: 'By recycling over 100 tons of plastic waste annually, we reduce landfill burden and create durable, affordable building materials. This contributes to cleaner urban environments and more resilient community infrastructure.',
            image: 'images/SDGs/sdg11.png'
        },
        '12': {
            title: 'SDG 12: Responsible Consumption and Production',
            text: 'Our model promotes a circular economy, turning waste into valuable resources. We educate communities and businesses on responsible consumption, diverting waste from landfills and promoting sustainable production patterns.',
            image: 'images/SDGs/sdg12.png'
        }
    };
    const sdgOrder = ['1', '5', '8', '11', '12']; // Define the order for prev/next

    // --- State Variables ---
    let activeSdgIcon = null;
    let currentSdgIndex = -1;
    const mobileBreakpoint = 767; // Matches the CSS media query max-width

    // --- Helper Functions ---

    // Function to check if on mobile view
    const isMobileView = () => window.innerWidth <= mobileBreakpoint;

    // Function to update the card content
    const updateCardContent = (sdgNumber) => {
        const content = sdgContent[sdgNumber];
        if (!content) return;

        detailImage.src = content.image;
        detailImage.alt = content.title;
        detailTitle.textContent = content.title;
        detailText.textContent = content.text;
        currentSdgIndex = sdgOrder.indexOf(sdgNumber);

        // Update active icon state
        if (activeSdgIcon) activeSdgIcon.classList.remove('active');
        activeSdgIcon = sdgIcons.find(icon => icon.dataset.sdg === sdgNumber);
        if (activeSdgIcon) activeSdgIcon.classList.add('active');
    };

    // Function to show the detail view (popup or inline)
    const showDetailView = (sdgNumber) => {
        updateCardContent(sdgNumber);

        // Always add active class to detailWrapper to control visibility via CSS
        detailWrapper.classList.add('active');

        if (!isMobileView()) {
            // Desktop inline logic - position the wrapper
            positionDetailWrapper(activeSdgIcon);
        }
        // No overlay or body scroll manipulation needed for inline display
    };

    // Function to hide the detail view
    const hideDetailView = () => {
        if (activeSdgIcon) activeSdgIcon.classList.remove('active');
        activeSdgIcon = null;
        currentSdgIndex = -1;

        detailWrapper.classList.remove('active');
        // No overlay or body scroll manipulation needed for inline display
    };

    // Function to move the detail wrapper (Desktop only)
    const positionDetailWrapper = (clickedIcon) => {
        if (isMobileView() || !clickedIcon) return; // Only run on desktop

        const getNumColumns = () => {
            const gridStyle = window.getComputedStyle(sdgGrid);
            // Basic check based on common grid template column counts
            const columnCount = gridStyle.gridTemplateColumns.split(' ').length;
            if (columnCount >= 5) return 5;
            if (columnCount >= 3) return 3;
            return 1; // Default to 1 column on desktop now
        };

        const numColumns = getNumColumns();
        const iconIndex = sdgIcons.indexOf(clickedIcon);

        // On desktop, always place wrapper after the grid
        if (detailWrapper.previousElementSibling !== sdgGrid) {
            sdgGrid.parentNode.insertBefore(detailWrapper, sdgGrid.nextSibling);
        }
    };

    // --- Event Listeners ---

    // SDG Icon Clicks
    sdgIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const sdgNumber = icon.dataset.sdg;
            const isCurrentlyActive = icon === activeSdgIcon;

            if (isCurrentlyActive) {
                // If clicking the active icon, hide it (consistent behavior)
                hideDetailView();
            } else {
                // Show the new one
                showDetailView(sdgNumber);
            }
        });
    });

    // Close Button (Mobile - still needed for the card itself)
    closeBtn.addEventListener('click', hideDetailView);

    // Overlay Click (Overlay is hidden by CSS on desktop, but keep listener for mobile)
    overlay.addEventListener('click', hideDetailView);

    // Previous Button (Mobile - still needed for the card itself)
    prevBtn.addEventListener('click', () => {
        if (currentSdgIndex > 0) {
            const prevSdgNumber = sdgOrder[currentSdgIndex - 1];
            updateCardContent(prevSdgNumber);
        } else {
             // Wrap around to the last SDG
            const lastSdgNumber = sdgOrder[sdgOrder.length - 1];
            updateCardContent(lastSdgNumber);
        }
    });

    // Next Button (Mobile - still needed for the card itself)
    nextBtn.addEventListener('click', () => {
        if (currentSdgIndex < sdgOrder.length - 1) {
            const nextSdgNumber = sdgOrder[currentSdgIndex + 1];
            updateCardContent(nextSdgNumber);
        } else {
            // Wrap around to the first SDG
            const firstSdgNumber = sdgOrder[0];
            updateCardContent(firstSdgNumber);
        }
    });

    // Window Resize Listener (Handle switching between mobile/desktop view)
    window.addEventListener('resize', () => {
        // If the detail view is active when resizing across the breakpoint, hide it to reset state
        if (detailWrapper.classList.contains('active')) {
             // Check if the view mode actually changed
             const wasMobile = window.innerWidth + (isMobileView() ? 1 : -1) <= mobileBreakpoint; // Check previous state
             const isNowMobile = isMobileView();
             if (wasMobile !== isNowMobile) {
                 hideDetailView();
                 // Ensure wrapper is back at the end for desktop if resizing larger
                 if (!isNowMobile) {
                     sdgSectionContainer.appendChild(detailWrapper);
                 }
             }
        } else {
             // Ensure wrapper is at the end if resizing to desktop and it's hidden
             if (!isMobileView()) {
                 sdgSectionContainer.appendChild(detailWrapper);
             }
        }
    });

    // Initial position check on load for desktop
    if (!isMobileView()) {
        sdgSectionContainer.appendChild(detailWrapper);
    }
});
