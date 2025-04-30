        const carousel = document.getElementById('productCarousel');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -340, behavior:'smooth' }); });
                nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 340, behavior: 'smooth' });
    });

    
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    document.getElementById('whatsappButton').onclick = function() {
        window.open('https://wa.me/6288980698613', '_blank');
    };

    document.getElementById('telegramButton').onclick = function() {
        window.open('https://t.me/rujekaciw', '_blank');
    };
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
    document.getElementById('tiktokButton').onclick = function() {
        window.open('https://youtube.com/@zxruzx', '_blank');
    };
