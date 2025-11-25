
// header 메뉴 호버시 서브메뉴 및 배경 나타남
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


// 햄버거 버튼 클릭 시 메뉴 토글 : 모바일 전용
$(function () {
    $(".hamburger-btn").on("click", function () {
        $(".m-header__nav").stop().slideToggle();
        $(this).toggleClass("active");
    });
});

// 모바일에서 m-nav 메뉴 클릭시 서브메뉴 등장
$(function () {
    $(".m-header__menu>a").on("click", function () {
        $(this).find(".m-header__sub-menu-list").stop().slideDown();
    });
    $(".m-header__menu>a").on("click", function () {
        $(this).find(".m-header__sub-menu-list").stop().slideUp();
    });
});


// preview Swiper
var swiper = new Swiper(".previewSwiper", {
    slidesPerView: 1,
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


// partners Swiper 

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    speed: 3500,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        540: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});



// newsSwiper

var swiper = new Swiper(".newsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        slidesPerView: 2,
    },
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1240: {
            slidesPerView: 2
        }
    }
});


// faq tab menu 효과 
$(function () {
    $(".faq__tab-menu li").on("click", function (e) {
        e.preventDefault();
        let idx = $(this).index();

        // a 태그에 on 붙이기
        $(".faq__tab-menu a").removeClass("on");
        $(this).find("a").addClass("on");

        // 게시판 영역 전환
        $(".faq__board > div").hide().removeClass("on");
        $(".faq__board > div").eq(idx).fadeIn().addClass("on");
    });
});

// faq title 클릭 시 contents 등장
$(document).ready(function () {

    $(".faq__board-title").on("click", function (e) {
        e.preventDefault();

        const cont = $(this).next(".faq__board-conts");

        // 나머지 모두 닫기
        $(".faq__board-conts").not(cont).slideUp();
        $(".faq__board-title").not(this).removeClass("active");

        // 현재 것 열기/닫기
        $(this).toggleClass("active");
        cont.stop().slideToggle();

    });
});




