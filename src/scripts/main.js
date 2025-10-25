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
});
