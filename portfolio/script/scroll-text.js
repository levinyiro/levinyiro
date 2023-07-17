gsap.to('.malta-title', {
    x: '-300%',
    ease: 'power1.inOut',
    duration: 10,
    scrollTrigger: {
        markers: true,
        trigger: '.main',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onEnter: () => gsap.to('.malta-title', { duration: 0.5 }),
    },
});
