let lastScrollPosition = 0;
let lastTimestamp = Date.now();
let scrollSpeed = 0;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.scrollY;
    const currentTimestamp = Date.now();
    const timeDifference = currentTimestamp - lastTimestamp;

    const distance = Math.abs(currentScrollPosition - lastScrollPosition);
    scrollSpeed = distance / timeDifference;

    lastScrollPosition = currentScrollPosition;
    lastTimestamp = currentTimestamp;

    console.log('Scroll speed:', scrollSpeed);
});

// gsap.to('.milan-title', {
//     x: '-300%',
//     ease: 'power1.inOut',
//     duration: 0.000001,
//     scrollTrigger: {
//         markers: true,
//         trigger: '.main',
//         start: 'top top', // Adjust the start value to 'top center'
//         end: 'bottom top', // Adjust the end value to 'bottom center'
//         scrub: true
//     }
// });

const titleTimeline = gsap.timeline({ repeat: -1 });

// Add an animation to the timeline
titleTimeline.to('.milan-title', {
    x: '-300%',
    ease: 'power1.inOut',
    duration: 10, // Adjust the duration to control the speed of the movement
});

gsap.to('.milan-title', {
    x: '-300%',
    ease: 'power1.inOut',
    duration: 10, // Adjust the initial duration to control the speed of automatic movement
    // repeat: -1, // Repeat the animation infinitely
    // yoyo: true, // Reverse the animation on each repeat
    scrollTrigger: {
        markers: true,
        trigger: '.main',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onEnter: () => gsap.to('.milan-title', { duration: 0.5 }), // Adjust the duration to control the speed when scrolling
    },
});

