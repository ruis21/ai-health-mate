
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
    $(".m-header__menu").on("click", function () {
        $(this).find(".m-header__sub-menu-list").stop().slideDown();
    });
});
$(function () {
    $(".m-header__menu").on("click", function () {
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



// news Swiper 
var swiper = new Swiper(".newsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
        slidesPerView: 3
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        // 540: {
        //     slidesPerView: 1
        // },
        768: {
            slidesPerView: 1
        },
        // 1024: {
        //     slidesPerView: 2
        // },
        // 1240: {
        //     slidesPerView: 3
        // }
    }
});

// faq__menu 클릭시 faq__board 내용이 등장
$(".faq__menu").on("click", function (e) {
    let idx = $(this).index();

    // 스크롤 튕김 방지
    e.preventDefault();
    $(".faq__menu").removeClass("on");
    $(this).addClass("on");

    $(".faq__board > div").hide();
    $(".faq__board > div").eq(idx).show();
});




// faq title 클릭 시 contents 등장

$(".faq__board-title").on("click", function (e) {
    // 스크롤 튕김 방지
    e.preventDefault();

    // 현재 클릭한 요소 외 나머지 닫기
    $(".faq__board-conts").not($(this).next()).slideUp();

    // 현재 요소 토글
    $(this).next().slideToggle();


});


