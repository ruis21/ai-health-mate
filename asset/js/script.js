
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



// 모바일에서 m-nav 메뉴는 hover 대신 click/touch로 서브메뉴 토글
$(function () {
    // 서브메뉴가 있는 항목 클릭 시 펼치고, 다른 항목은 닫기
    $(document).on("click touchstart", ".m-header__menu > a, .m-header__menu", function (e) {
        var $menu = $(this).closest(".m-header__menu");
        var $sub = $menu.find(".m-header__sub-menu-list");
        if ($sub.length) {
            e.preventDefault();
            // 다른 열려있는 서브메뉴 닫기
            $(".m-header__sub-menu-list").not($sub).stop().slideUp();
            $sub.stop().slideToggle();
        }
    });
});

// 모바일에서 m-nav 메뉴 클릭시 서브메뉴 등장
$(function () {
    $(".m-header__menu").on("click", function () {
        $(this).find(".m-header__sub-menu-list").stop().slideDown();
    });
});
$(function () {
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


// ask 영역 

// const text = "궁금한 점이 있으신가요?      AI Health Mate의 이야기를 들어보세요"; // 타이핑할 문구
// let index = 0;
// let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("text").textContent += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//     }
// }

// typeWriter();


// partners Swiper 

var swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    speed: 3500,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
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
        slideShadows: true,
        slidesPerView: 3
    },

    loop: true,
    breakpoints: {
        // 540: {
        //     slidesPerView: 1
        // },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1240: {
            slidesPerView: 3
        }
    }
});


// faq title 클릭 시 contents 등장
$(document).ready(function () {

    $(".faq__board-title").on("click", function () {

        // 현재 클릭한 요소 외 나머지 닫기
        $(".faq__board-conts").not($(this).next()).slideUp();

        // 현재 요소 토글
        $(this).next().slideToggle();
    });

});


