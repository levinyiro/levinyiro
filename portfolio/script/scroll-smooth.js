const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })é

function raf(time) {
    lenis.raf(time * 0.6)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)