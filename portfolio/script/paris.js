window.addEventListener('scroll', function () {
    var title = document.getElementById('paris-title');
    var imageContainer = document.querySelector('.image-container');
    var parisPic = this.document.querySelector('.paris-pictures');

    var scrollPosition = window.scrollY;
    var titleOffset = imageContainer.offsetTop - window.innerHeight + 300;
    var parisPicOffset = parisPic.offsetTop - window.innerHeight + 350;

    if (scrollPosition >= titleOffset && scrollPosition < parisPicOffset) {
        var distance = scrollPosition - titleOffset;
        title.style.transform = 'translateY(' + distance + 'px)';
        // title.style.filter = `brightness(${1 / (distance * 0.0009)})`;
        // console.log(1 / distance);
        
    } else {
        title.style.filter = 'brightness(1)';
    }
});
