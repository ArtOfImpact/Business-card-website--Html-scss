$(document).ready(function () {
    $('.menu-logo').click(function (event) {
        $('.menu-logo,.menu').toggleClass('active');
    });
});


new Swiper('.image-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3
        }
    }
});