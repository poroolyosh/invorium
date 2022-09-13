$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
  });
});

/* Video */
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('video__picture');

videoBtn.addEventListener('click', function () {
  videoPicture.classList.add('none');
});
