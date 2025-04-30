        const carousel = document.getElementById('productCarousel');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -340, behavior:'smooth' }); });
                nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });
