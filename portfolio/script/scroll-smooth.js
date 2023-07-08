const lenis = new Lenis({
    duration: 1.5, 
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: 'vertical', 
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.5,
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
