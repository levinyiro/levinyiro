window.addEventListener('scroll', function () {
    var title = document.getElementById('paris-title');
    var imageContainer = document.querySelector('.image-container');
    var imageFG = imageContainer.querySelector('img:first-child');

    var scrollPosition = window.scrollY;
    var titleOffset = imageContainer.offsetTop - window.innerHeight + 300;

    if (scrollPosition >= titleOffset) {
        var distance = scrollPosition - titleOffset;
        title.style.transform = 'translateY(' + distance + 'px)';
    } else {
        title.style.transform = 'translateY(0)';
    }
});
