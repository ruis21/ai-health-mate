// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 15,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
    }
});


$(function () {
    $(".header__menu").on("mouseenter", function () {
        $(".header__menu - list").stop().slideDown();
    });
});