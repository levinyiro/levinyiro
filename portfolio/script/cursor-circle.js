gsap.set(".cursor-circle", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor-circle", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".cursor-circle", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});
