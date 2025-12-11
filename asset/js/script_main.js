// kv영역 =====================================================
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();

const tl1 = gsap.timeline();
tl1.from(".kv__text-wrap .line .ai,.kv__title, h3, .kv__btn", 1.8, {
    y: 150,
    ease: "power4.out",
    delay: 0.3,
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

gsap.registerPlugin(ScrollTrigger);

// ╔════════════════════════════════════════════════════════════════╗
// ║  🎬 GSAP 스크롤 애니메이션 - 텍스트 & 이미지 연동                   ║
// ╚════════════════════════════════════════════════════════════════╝
//
// 📐 구조:
// - 왼쪽: 텍스트 (스크롤됨)
// - 오른쪽: 이미지 (sticky로 고정)
//
// 🎯 동작:
// - 텍스트가 스크롤되면서 나타났다 사라짐
// - 텍스트가 사라질 때 해당 이미지도 함께 사라짐
//


// ════════════════════════════════════════════════════════════════
// 📝 txt01 애니메이션 (처음부터 보임 → 사라짐)
// ════════════════════════════════════════════════════════════════
gsap.to(".txt01", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".txt01",
        start: "center 40%",
        end: "60% 20%",
        scrub: true,
    }
});

// 🖼️ img01: text01과 함께 사라짐
gsap.to(".img01", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt01",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


// ════════════════════════════════════════════════════════════════
// 📝 txt02 애니메이션 (나타남 → 사라짐)
// ════════════════════════════════════════════════════════════════

// 나타나기
gsap.fromTo(".txt02",
    { opacity: 0 },
    {
        opacity: 1,
        scrollTrigger: {
            trigger: ".txt02",
            start: "40% 80%",
            end: "center 50%",
            scrub: true,
        }
    }
);

// 사라지기
gsap.fromTo(".txt02",
    { opacity: 1 },
    {
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: ".txt02",
            start: "center 40%",
            end: "60% 20%",
            scrub: true,
        }
    }
);

// 🖼️ img02: text02와 함께 사라짐
gsap.to(".img02", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt02",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


// ════════════════════════════════════════════════════════════════
// 📝 txt03 애니메이션 (나타남 → 사라짐)
// ════════════════════════════════════════════════════════════════

// 나타나기
gsap.fromTo(".txt03",
    { opacity: 0 },
    {
        opacity: 1,
        scrollTrigger: {
            trigger: ".txt03",
            start: "40% 80%",
            end: "center 50%",
            scrub: true,
        }
    }
);

// 사라지기
gsap.fromTo(".txt03",
    { opacity: 1 },
    {
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: ".txt03",
            start: "center 40%",
            end: "60% 20%",
            scrub: true,
        }
    }
);

// 🖼️ img03: text03과 함께 사라짐
gsap.to(".img03", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt03",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});

// ════════════════════════════════════════════════════════════════
// 📝 txt04 애니메이션 (나타남 → 사라짐)
// ════════════════════════════════════════════════════════════════

// 나타나기
gsap.fromTo(".txt04",
    { opacity: 0 },
    {
        opacity: 1,
        scrollTrigger: {
            trigger: ".txt04",
            start: "40% 80%",
            end: "center 50%",
            scrub: true,
        }
    }
);

// 사라지기
gsap.fromTo(".txt04",
    { opacity: 1 },
    {
        opacity: 0,
        immediateRender: false,
        scrollTrigger: {
            trigger: ".txt04",
            start: "center 40%",
            end: "60% 20%",
            scrub: true,
        }
    }
);

// 🖼️ img04: txt04과 함께 사라짐
gsap.to(".img04", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt04",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


// ════════════════════════════════════════════════════════════════
// 📝 txt05 애니메이션 (나타남만! 마지막이라 사라지지 않음)
// ════════════════════════════════════════════════════════════════
gsap.fromTo(".txt05",
    { opacity: 0 },
    {
        opacity: 1,
        scrollTrigger: {
            trigger: ".txt05",
            start: "40% 80%",
            end: "center 60%",
            scrub: true,
            markers: true
        }
    }
);

// 💡 img05는 마지막이라 사라지는 애니메이션 없음!


// gsap.set(".merit__img-wrap .img", { zIndex: (i, target, targets) => targets.length - i });

// var images = gsap.utils.toArray(".merit__img-wrap .img:not(:last-of-type)");

// images.forEach((image, i) => {
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".merit__card-wrap",
//             start: () => "top -" + window.innerHeight * (i + 0.5),
//             end: () => "+=" + window.innerHeight,
//             scrub: true,
//             toggleActions: "play none reverse none",
//             invalidateOnRefresh: true
//         }
//     });

//     tl.to(image, { height: 0 });
// });

// gsap.set(".merit__txt-wrap .txt", { zIndex: (i, target, targets) => targets.length - i });

// var texts = gsap.utils.toArray(".merit__txt-wrap .txt");

// texts.forEach((text, i) => {
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".merit",
//             start: () => "top -" + window.innerHeight * i,
//             end: () => "+=" + window.innerHeight,
//             scrub: true,
//             toggleActions: "play none reverse none",
//             invalidateOnRefresh: true
//         }
//     });

//     tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
//         text,
//         { duration: 0.33, opacity: 0, y: "0%" },
//         0.66
//     );
// });

// ScrollTrigger.create({
//     trigger: ".merit__card-wrap",
//     scrub: true,
//     markers: true,
//     pin: true,
//     start: () => "top top",
//     end: () => "+=" + (images.length + 1) * window.innerHeight,
//     invalidateOnRefresh: true
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








