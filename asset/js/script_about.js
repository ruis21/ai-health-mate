// about text 등장효과 ================================

gsap.registerPlugin(ScrollTrigger);

// Create timeline for text animations
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pinned",
        start: "top top",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
    }
});

// Animate text items one after another
tl.to(".about__text-wrap .line:nth-child(1)", { opacity: 1, y: 0, duration: 1 })
    .to(".about__text-wrap .line:nth-child(2)", { opacity: 1, y: 0, duration: 1 }, "+=0.5")
    .to(".about__text-wrap .line:nth-child(3)", { opacity: 1, y: 0, duration: 1 }, "+=0.5");



// const tl = gsap.timeline();

// tl.from(".about__text-wrap .line span", 1.5, {
//     y: 100,
//     ease: "power4.out",
//     // delay: 1,
//     skewY: 7,
//     stagger: {
//         amount: 0.3
//     }
// })



// history gsap =============================

// let boxes = gsap.utils.toArray(".history__right"),
//     container = document.querySelector(".history__wrap"),
//     text = document.querySelector(".history__left-wrap"),
//     padding = gsap.getProperty(container, "paddingTop", "px"),
//     // create a ScrollTrigger for each box that we can use to calculate snapping (we'll look at the "start" of each in the onRefresh)
//     snapTriggers = boxes.map((box) =>
//         ScrollTrigger.create({
//             trigger: box,
//             start: "top " + padding + "px"
//         })
//     ),
//     snaps = []; // where we'll store the progress value for each box's ScrollTrigger (start)

// ScrollTrigger.create({
//     trigger: ".history__wrap",
//     markers: true,
//     pin: ".history__left-wrap",
//     pinSpacing: false,
//     start: "top top",
//     end: () =>
//         "+=" +
//         (boxes[boxes.length - 1].getBoundingClientRect().top -
//             boxes[0].getBoundingClientRect().top),
//     onRefresh: (self) => {
//         // re-populate the "snaps" Array with the progress values for where each box hits the target spot.
//         let distance = self.end - self.start;
//         snapTriggers.forEach(
//             (trigger, i) => (snaps[i] = (trigger.start - self.start) / distance)
//         );
//     },
//     snap: snaps
// });

// // for swapping in the text for each section
// boxes.forEach((box, i) => {
//     ScrollTrigger.create({
//         trigger: box,
//         start: "top center",
//         end: "bottom center",
//         onToggle: (self) => {
//             if (self.isActive) {
//                 // you could animate this in (fade it or whatever)
//                 text.innerText = "202" + (i + 1);
//             }
//         }
//     });
// });



// gsap.utils.toArray(".history__grid").forEach((grid) => {

//     let left = grid.querySelector(".history__left");
//     let right = grid.querySelector(".history__right");

//     // 초기 상태 설정
//     gsap.set(left, { autoAlpha: 0, y: 30 });
//     gsap.set(right, { autoAlpha: 0, y: 50 });

//     // 왼쪽(year + title) 등장 애니메이션 (한 번만 재생)
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: grid,
//             start: "top 80%",
//             end: "top 60%",
//             scrub: true,
//             // markers: true
//         }
//     })
//         .to(left, {
//             autoAlpha: 1,
//             y: 0,
//             ease: "power1.out"
//         });

//     // 오른쪽 콘텐츠 등장 + 사라짐
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: grid,
//             start: "top 80%",
//             end: "bottom 20%",
//             scrub: true,
//             invalidateOnRefresh: true,
//         }
//     })
//         // 등장 (선명해짐)
//         .to(right, {
//             autoAlpha: 1,
//             y: 0,
//             ease: "none"
//         }, 0)
//         // 사라짐 (흐려지며 위로)
//         .to(right, {
//             autoAlpha: 0,
//             y: -50,
//             ease: "none"
//         }, 0.6);
// });




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
