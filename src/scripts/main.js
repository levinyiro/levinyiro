document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    gsap.fromTo(".hero-h1",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power1.out",
        }
    );

    gsap.fromTo(".hero-h2",
        {
            y: 20,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power1.out",
            delay: 0.5
        }
    );

    gsap.fromTo(".hero-img",
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power1.out",
        }
    );

    gsap.to(".hero-h1", {
        scrollTrigger: {
            trigger: "#hero",
            start: "center center",
            end: "bottom center",
            scrub: true,
        },
        yPercent: -100,
        ease: "none",
    });

    gsap.to(".hero-img", {
        scrollTrigger: {
            trigger: "#hero",
            start: "center center",
            end: "bottom center",
            scrub: true,
        },
        yPercent: -5,
        ease: "none",
    });

    gsap.to(".hero-h2", {
        scrollTrigger: {
            trigger: "#hero",
            start: "center center",
            end: "bottom center",
            scrub: true,
        },
        yPercent: -300,
        ease: "none",
    });

    gsap.to("nav", {
        scrollTrigger: {
            trigger: "#hero",
            start: "center center",
            end: "65% center",
            scrub: true,
        },
        backgroundColor: "#e1e1e178"
    })

    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.add('show');
        document.body.classList.add('menu-open');
    });

    // Close menu when clicking anywhere
    fullscreenMenu.addEventListener('click', () => {
        fullscreenMenu.classList.remove('show');
        document.body.classList.remove('menu-open');
    });
});
