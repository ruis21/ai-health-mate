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
        transformOrigin: "center center",
        ease: "power2.out"
    });

    ScrollTrigger.create({
        animation: ani4,
        trigger: "#introduce-sec",
        start: "top 12%",
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

gsap.to(".txt01", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".txt01",
        start: "center 40%",
        end: "60% 20%",
        scrub: true,
    }
});

gsap.to(".img01", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt01",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


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


gsap.to(".img02", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt02",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


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

// img03: text03과 함께 사라짐
gsap.to(".img03", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt03",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


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

// img04: txt04과 함께 사라짐
gsap.to(".img04", {
    height: 0,
    scrollTrigger: {
        trigger: ".txt04",
        start: "top -10%",
        end: "bottom 10%",
        scrub: 1,
    }
});


gsap.fromTo(".txt05",
    { opacity: 0 },
    {
        opacity: 1,
        scrollTrigger: {
            trigger: ".txt05",
            start: "40% 80%",
            end: "center 60%",
            scrub: true
        }
    }
);


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


// ask section =======================================================
(function () {
    const askSection = document.querySelector('.ask');
    if (!askSection) return;

    const typingLines = gsap.utils.toArray('.ask .typing-line');
    if (!typingLines.length) return;

    console.log('ask typing animation init', typingLines.length, 'lines');

    ScrollTrigger.create({
        trigger: '.ask',
        start: 'top 60%',
        onEnter: () => {
            console.log('ask section entered - animation start');

            // 초기 상태 강제 설정
            gsap.set(typingLines, { width: 0 });

            const tl = gsap.timeline();

            // 1번째 줄: 타이핑 (0 ~ 1.2s)
            tl.to(typingLines[0], {
                width: '100%',
                duration: 1.2,
                ease: 'steps(12, end)'
            }, 0)
                // 1번째 줄 커서 제거 (1.2s)
                .to(typingLines[0], {
                    borderRightColor: 'transparent',
                    duration: 0.1
                }, 1.2);

            // 2번째 줄: 타이핑 (1.3s ~ 3.1s)
            if (typingLines[1]) {
                tl.to(typingLines[1], {
                    width: '100%',
                    duration: 1.8,
                    ease: 'steps(18, end)'
                }, 1.3) // 1번째 줄 끝난 직후(0.1초 후) 시작
                    // 2번째 줄 커서 깜빡임 시작 (3.1s부터 무한 반복)
                    .to(typingLines[1], {
                        borderRightColor: 'rgba(255, 255, 255, 0)',
                        duration: 0.375,
                        ease: 'none',
                        repeat: -1,
                        yoyo: true
                    }, 3.1);
            }
        },
        once: true
    });
})();






