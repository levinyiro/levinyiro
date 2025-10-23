var frameNumber = 0,
    playbackConst = 500,
    videoFrame = document.querySelector('.video-frame'),
    video = document.querySelector('.video');

// vid.addEventListener('loadedmetadata', function () {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var mainSection = document.querySelector('.main');
    
    var distance = window.scrollY + header.offsetHeight - window.innerHeight + 650;

    if (distance > 0 && window.scrollY + window.innerHeight < mainSection.offsetTop - 50) {
        videoFrame.style.transform = 'translateY(' + distance + 'px)';
    }
});

function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    video.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

gsap.registerPlugin(ScrollTrigger);

window.requestAnimationFrame(scrollPlay);