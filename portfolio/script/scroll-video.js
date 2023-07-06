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

    if (window.scrollY + window.innerHeight > mainSection.offsetTop + 30) {
        videoFrame.style.position = '';
        videoFrame.style.alignItems = 'flex-end';
        video.style.marginBottom = '5vh'
    } else if (window.scrollY < header.offsetHeight - 40) {
        videoFrame.style.position = '';
        videoFrame.style.alignItems = 'flex-start';
        video.style.marginTop = '5vh'
    } else {
        videoFrame.style.position = 'fixed';
        videoFrame.style.alignItems = 'center';
        video.style.marginBottom = '20vh';
        video.style.marginTop = '0';
    }
});

function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    video.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

gsap.registerPlugin(ScrollTrigger);

window.requestAnimationFrame(scrollPlay);