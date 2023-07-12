let lastScrollPosition = 0;
let lastTimestamp = Date.now();
let scrollSpeed = 0;

const titleTimeline = gsap.timeline({ repeat: -1 });

titleTimeline.to('.milan-title', {
    x: '-300%',
    ease: 'power1.inOut',
    duration: 10,
});

const TITLE = 'Milan - city of fashion\t';
let milanTitle = document.querySelector('.milan-title');
for (let i = 0; i < 5; i++) {
    milanTitle.innerHTML += TITLE;
}

// gsap.to('.milan-title', {
//     x: '-300%',
//     ease: 'power1.inOut',
//     duration: 10,
//     scrollTrigger: {
//         markers: true,
//         trigger: '.main',
//         start: 'top top',
//         end: 'bottom top',
//         scrub: true,
//         onEnter: () => gsap.to('.milan-title', { duration: 0.5 }),
//     },
// });
