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
            trigger: ".merit",
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








