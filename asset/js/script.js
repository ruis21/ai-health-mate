
// header 메뉴 호버시 서브메뉴 및 배경 나타남 =====================
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
    $(".m-header__menu > a").on("click", function (event) {
        // 서브메뉴가 있는 경우만 토글
        if ($(this).next(".m-header__sub-menu-list").length > 0) {
            event.preventDefault();
            $(this).next(".m-header__sub-menu-list").stop().slideToggle();
        }
        // 서브메뉴가 없으면 그냥 페이지 이동
    });
});


// kv영역 =====================================================
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();

const tl1 = gsap.timeline();

tl1.from(".kv__text-wrap .line .ai,.kv__title, h3, .kv__btn", 1.8, {
    y: 150,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
        amount: 0.3
    }
})


// introduce 영역 ==============================

// PC (769px 이상)
mm.add("(min-width: 769px)", () => {
    const ani4 = gsap.timeline();
    ani4.from("#introduce-sec .introduce__conts", {
        autoAlpha: 0,
        scale: 0.5,
        transformOrigin: "center top",
        ease: "power2.out"
    });

    ScrollTrigger.create({
        animation: ani4,
        trigger: "#introduce-sec",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
    });
});

// Tablet & Mobile (768px 이하)
mm.add("(max-width: 768px)", () => {
    const ani4 = gsap.timeline();
    ani4.from("#introduce-sec .introduce__conts", {
        autoAlpha: 0,
        scale: 0.7,
        transformOrigin: "center center",
        ease: "power1.out"
    });

    ScrollTrigger.create({
        animation: ani4,
        trigger: "#introduce-sec",
        start: "top 15%",
        end: "+=1200",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
    });
});


// merit 영역 =================================

// gsap.registerPlugin(ScrollTrigger);

gsap.set(".merit__img-wrap .img", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray(".merit__img-wrap .img:not(:last-of-type)");

images.forEach((image, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".merit__card-wrap",
            start: () => "top -" + window.innerHeight * (i + 0.5),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true
        }
    });

    tl.to(image, { height: 0 });
});

gsap.set(".merit__txt-wrap .txt", { zIndex: (i, target, targets) => targets.length - i });

var texts = gsap.utils.toArray(".merit__txt-wrap .txt");

texts.forEach((text, i) => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".merit__card-wrap",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true
        }
    });

    tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
    );
});

ScrollTrigger.create({
    trigger: ".merit__card-wrap",
    scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true
});

// PC (769px 이상)
// mm.add("(min-width: 769px)", () => {
//     gsap.set([".card02", ".card03", ".card04", ".card05"], { opacity: 0 });

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#pinned",
//             start: "top 15%",
//             end: "+=500%",
//             pin: true,
//             scrub: 1,
//         }
//     });

//     tl.to(".card01", { y: -40, opacity: 0 })
//         .fromTo(".card02", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card02", { y: -40, opacity: 0 })
//         .fromTo(".card03", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card03", { y: -40, opacity: 0 })
//         .fromTo(".card04", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card04", { y: -40, opacity: 0 })
//         .fromTo(".card05", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
// });

// // Tablet (768~542px)
// mm.add("(max-width: 768px) and (min-width: 542px)", () => {
//     gsap.set([".card01", ".card02"], { opacity: 1 });
//     gsap.set([".card03", ".card04", ".card05"], { opacity: 0 });

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#pinned",
//             start: "top 10%",
//             end: "+=600%",
//             pin: true,
//             scrub: 1,
//         }
//     });

//     tl.to([".card01", ".card02"], { y: -40, opacity: 0 })
//         .fromTo([".card03", ".card04"], { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to({}, { duration: 0.8 }) // 잠깐 유지
//         .to([".card03", ".card04"], { y: -40, opacity: 0 })
//         .fromTo(".card05", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
// });

// // Mobile (541px 이하)
// mm.add("(max-width: 541px)", () => {
//     gsap.set([".card02", ".card03", ".card04", ".card05"], { opacity: 0 });

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#pinned",
//             start: "top 15%",
//             end: "+=500%",
//             pin: true,
//             scrub: 1,
//         }
//     });

//     tl.to(".card01", { y: -40, opacity: 0 })
//         .fromTo(".card02", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card02", { y: -40, opacity: 0 })
//         .fromTo(".card03", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card03", { y: -40, opacity: 0 })
//         .fromTo(".card04", { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
//         .to(".card04", { y: -40, opacity: 0 })
//         .fromTo(".card05", { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
// });

// preview Swiper ==============================================
var previewSwiper = new Swiper(".previewSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    // centeredSlides: true,
    navigation: {
        nextEl: ".preview-btn-next",
        prevEl: ".preview-btn-prev",
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


// about text 등장효과 ================================

const tl = gsap.timeline();

tl.from(".about__text-wrap .line span", 1.5, {
    y: 100,
    ease: "power4.out",
    // delay: 1,
    skewY: 7,
    stagger: {
        amount: 0.3
    }
})

// history gsap =============================
// gsap.set(".history__grid", {
//     opacity: 0,
//     y: 50
// });

// const historyItems = gsap.utils.toArray(".history__grid");

// // 전체 스크롤 길이만큼 pin
// ScrollTrigger.create({
//     trigger: "#history-sec",
//     start: "top top",
//     end: "+=" + historyItems.length * window.innerHeight,
//     scrub: true,
//     pin: true,
// });

// // 각 history 블록을 순서대로 등장/퇴장 처리
// historyItems.forEach((item, i) => {

//     gsap.timeline({
//         scrollTrigger: {
//             trigger: "#history-sec",
//             start: () => "top -" + window.innerHeight * i,
//             end: () => "+=" + window.innerHeight,
//             scrub: true,
//         }
//     })
//         .to(item, { opacity: 1, y: 0 })         // 등장
//         .to(item, { opacity: 0, y: -50 });      // 사라짐
// });

// history__wrap: 스크롤에 따라 서서히 등장했다가 사라지게 함

const items = gsap.utils.toArray('.history__grid');
if (!items.length) return;

// 초기 상태
gsap.set(items, { autoAlpha: 0, y: 50 });

items.forEach((el) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top 80%",  // 화면에 들어올 때
            end: "bottom 20%",  // 화면을 벗어날 때
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true, // 디버그용
        }
    });

    // 0 -> 0.5 : fade in, 0.5 -> 1 : fade out
    tl.to(el, { autoAlpha: 1, y: 0, ease: "none" }, 0)
        .to(el, { autoAlpha: 0, y: -50, ease: "none" }, 0.5);
});

// partners Swiper =============================================
var partnersSwiper = new Swiper(".partnersSwiper", {
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



// news Swiper ================================================
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
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {

        769: {
            slidesPerView: 1.2
        },
    }
});

// faq__menu 클릭시 faq__board 내용이 등장 ======================
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



