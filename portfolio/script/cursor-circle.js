var circle = document.querySelector('.cursor-circle');

function moveCircle(e) {
  gsap.to(circle, 0.8, {
    left: e.pageX,
    top: e.pageY,
    ease: "power1.out"
  });
}

window.addEventListener('mousemove', moveCircle);