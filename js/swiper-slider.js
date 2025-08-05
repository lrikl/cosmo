document.addEventListener('DOMContentLoaded', () => {
    const gamesSwiperContainer = document.querySelector('.games-swiper');
    
    if (gamesSwiperContainer) {
        const swiper = new Swiper('.games-swiper', {
            loop: true,
            spaceBetween: 20,
            speed: 800,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.games-slider__btn--next',
                prevEl: '.games-slider__btn--prev',
            },
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                380: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 20 }
            }
        });
    }

});