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

gsap.to('.milan-title', {
    x: '-100%',
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: '.container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});
