
// header 메뉴 호버시 서브메뉴 및 배경 나타남
$(function () {
    $(".header__menu").on("mouseenter", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideDown();
    });

    $(".header__menu").on("mouseleave", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideUp();
    });



    // 햄버거 버튼 클릭 시 메뉴 토글 : 모바일 전용

    $(".hamburger-btn").on("click", function () {
        $(".m-header__nav").stop().slideToggle();
        $(this).toggleClass("active");
    });


    // 모바일에서 m-nav 메뉴 클릭시 서브메뉴 등장
    $(".m-header__menu a").on("click", function (event) {
        event.preventDefault();
        $(this).next(".m-header__sub-menu-list").stop().slideToggle();
    });
});

//04 : 이미지 축소하기
const ani4 = gsap.timeline();
ani4.from("#section4 .parallax__item__img", {
    autoAlpha: 0,
    scale: 3,
    width: "100vw",
    height: "100vh"
});

ScrollTrigger.create({
    animation: ani4,
    trigger: "#section4",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});


// merit 애니메이션 테스트 
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// ★ 1) PC: 769px 이상 — 카드 1개씩
mm.add("(min-width: 769px)", () => {

    // 초기화
    gsap.set([".card02", ".card03", ".card04", ".card05"], { opacity: 0 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#pinned",
            start: "top 15%",
            end: "+=500%",
            pin: true,
            scrub: 1,
        }
    });

    tl.to(".card01", { y: -40, opacity: 0 })
        .fromTo(".card02", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card02", { y: -40, opacity: 0 })
        .fromTo(".card03", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card03", { y: -40, opacity: 0 })
        .fromTo(".card04", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card04", { y: -40, opacity: 0 })
        .fromTo(".card05", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

});



// ★ 2) Tablet: 768px 이하 ~ 542px 이상 — 카드 2개씩
mm.add("(max-width: 768px) and (min-width: 542px)", () => {

    // 초기화 (대신 01,02는 보이게)
    gsap.set([".card01", ".card02"], { opacity: 1 });
    gsap.set([".card03", ".card04", ".card05"], { opacity: 0 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#pinned",
            start: "top 15%",
            end: "+=500%",
            pin: true,
            scrub: 1,
        }
    });

    // 01+02 → 사라지고 03+04 등장
    tl.to([".card01", ".card02"], { y: -40, opacity: 0 })
        .fromTo([".card03", ".card04"],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
        )

        // 03+04 → 사라지고 05 등장
        .to([".card03", ".card04"], { y: -40, opacity: 0 })
        .fromTo(".card05",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
        );
});



// ★ 3) Mobile: 541px 이하 — 다시 카드 1개씩
mm.add("(max-width: 541px)", () => {

    // 초기화
    gsap.set([".card02", ".card03", ".card04", ".card05"], { opacity: 0 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#pinned",
            start: "top 15%",
            end: "+=500%",
            pin: true,
            scrub: 1,
        }
    });

    tl.to(".card01", { y: -40, opacity: 0 })
        .fromTo(".card02", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card02", { y: -40, opacity: 0 })
        .fromTo(".card03", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card03", { y: -40, opacity: 0 })
        .fromTo(".card04", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })

        .to(".card04", { y: -40, opacity: 0 })
        .fromTo(".card05", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });

});

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#pinned",
//         start: "top 15%",
//         end: () => "+=600%",
//         pin: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//     }
// });

// // 카드 배열
// const cards = [".card01", ".card02", ".card03", ".card04", ".card05"];

// cards.forEach((card, i) => {


//     // 첫 번째 카드 제외한 나머지 → 등장 애니메이션
//     if (i !== 0) {
//         tl.fromTo(card,
//             { y: 40, opacity: 0 },
//             { y: 0, opacity: 1 }
//         );
//     }

//     // 마지막 카드 제외한 모든 카드 → 사라지는 애니메이션
//     if (i !== cards.length - 1) {
//         tl.to(card,
//             { y: -40, opacity: 0 }
//         );
//     }

// });


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
var newsSwiper = new Swiper(".newsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
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
        769: {
            slidesPerView: 1.2
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


$(".inquiry__btn").addClass("active");
$(".inquiry__btn").removeClass("active");


