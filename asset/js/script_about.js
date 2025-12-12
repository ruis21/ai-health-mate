// about text 등장효과 ================================

gsap.registerPlugin(ScrollTrigger);

// about영역 conts 페이드인효과
const tl01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        end: "+=1000px",
        // scrub: 2,
        // trigger: ".about",
        // start: "top center",  // 화면의 80% 지점에서 시작
        toggleActions: "play none none none"  // 한 번만 실행
    }
})
    .to(".about__title", { opacity: 1, y: 0, duration: 0.6 })
    .to(".about__txt > p:first-child", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
    .to(".about__text-wrap", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
    .to(".about__txt > p:last-child", { opacity: 1, y: 0, duration: 0.6, delay: 2 }, "-=0.3")
    .to(".about img", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");



// Create timeline for text animations
const tl02 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true
    }
});

// 텍스트 강조 애니메이션
tl02.to(".about__text-wrap .line:nth-child(1)", { opacity: 1, y: 0, duration: 1 })
    .to(".about__text-wrap .line:nth-child(2)", { opacity: 1, y: 0, duration: 1 }, "+=0.5")
    .to(".about__text-wrap .line:nth-child(3)", { opacity: 1, y: 0, duration: 1 }, "+=0.5");



// history gsap =============================

let boxes = gsap.utils.toArray(".history__right"),
    container = document.querySelector(".history__left-wrap"),
    text = document.querySelector(".history__left h3"),
    padding = gsap.getProperty(container, "paddingTop", "px"),
    years = ["2025년", "2024년", "2023년", "2022년"], // 년도 배열

    snapTriggers = boxes.map((box) =>
        ScrollTrigger.create({
            trigger: box,
            start: "top " + padding + "px"
        })
    ),
    snaps = []; // where we'll store the progress value for each box's ScrollTrigger (start)

ScrollTrigger.create({
    trigger: ".history__wrap",
    markers: true,
    pin: ".history__left-wrap",  // ← wrap을 pin
    pinSpacing: false,
    start: "top 20%",
    // end: "bottom 80%",
    end: () =>
        "+=" +
        (boxes[boxes.length - 1].getBoundingClientRect().top -
            boxes[0].getBoundingClientRect().top),
    onRefresh: (self) => {
        // re-populate the "snaps" Array with the progress values for where each box hits the target spot.
        let distance = self.end - self.start;
        snapTriggers.forEach(
            (trigger, i) => (snaps[i] = (trigger.start - self.start) / distance)
        );
    },
    snap: snaps
});


// for swapping in the text for each section
boxes.forEach((box, i) => {
    ScrollTrigger.create({
        trigger: box,
        start: "top 10%",
        end: "bottom top",
        onToggle: (self) => {
            if (self.isActive) {
                // 년도 배열에서 가져오기
                text.innerText = years[i];
            }
        }
    });
});

// 처음 셋팅
gsap.set('.left01 h5', { opacity: 1 });  // ← 첫 번째는 보이게
gsap.set('.left02 h5', { opacity: 0 });
gsap.set('.left03 h5', { opacity: 0 });
gsap.set('.left04 h5', { opacity: 0 });

const tl03 = gsap.timeline({
    scrollTrigger: {
        trigger: '.history__wrap',
        markers: true,
        start: 'top top',   //section 화면 상단에 
        end: 'bottom bottom',   //section 끝까지 스크롤되면 끝
        scrub: 1
    }
});

tl03
    // 첫번째 content 사라짐
    .to('.left01', { opacity: 0 })
    //첫번째 content h5 사라짐
    .to('.left01 h5', { opacity: 0 }, '<')


    // 두번째 content 나타남
    .to('.left02', { opacity: 1 }, '<')   //이전 애니메이션과 동시 시작
    .to('.left02 h5', { opacity: 1 }, '<')


    // 두번째 content 사라짐
    .to('.left02', { opacity: 0 })
    //두번째 content h5 위로 움직이면서 사라짐
    .to('.left02 h5', { opacity: 0 }, '<')

    // 세번째 content 나타남
    .to('.left03', { opacity: 1 }, '<')   //이전 애니메이션과 동시 시작
    .to('.left03 h5', { opacity: 1 }, '<')

    // 세번째 content 사라짐
    .to('.left03', { opacity: 0 })
    //세 번째 content h5 위로 움직이면서 사라짐
    .to('.left03 h5', { opacity: 0 }, '<')

    // 네번째 content 나타남
    .to('.left04', { opacity: 1 }, '<')   //이전 애니메이션과 동시 시작
    .to('.left04 h5', { opacity: 1 }, '<')



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
