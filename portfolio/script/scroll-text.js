gsap.to('.malta-title', {
    x: '-130%',
    ease: 'power1.inOut',
    duration: 10,
    scrollTrigger: {
        trigger: '.malta-title',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
        onEnter: () => gsap.to('.malta-title', { duration: 0.5 }),
    },
});

gsap.to('.explore-title', {
    y: '-250%',
    ease: 'power1.inOut',
    duration: 10,
    scrollTrigger: {
        markers: true,
        trigger: '.malta-title',
        start: 'center top',
        end: 'bottom top',
        scrub: true,
        onEnter: () => gsap.to('.explore-title', { duration: 0.5 }),
    },
})
