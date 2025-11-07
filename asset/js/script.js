// Initialize Swiper

var swiper = new Swiper(".newsSwiper", {
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

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    // centeredSlides: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 1000,
        speed: 30000,
        freemode: true,
        effect: 'fade',
        disableOnInteraction: false,
    },
});



$(function () {
    $(".header__menu").on("mouseenter", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideDown();
    });
});
$(function () {
    $(".header__menu").on("mouseleave", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideUp();
    });
});