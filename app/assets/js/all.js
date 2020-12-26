$(function() {
  console.log('Hello Bootstrap4');
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 767px
    767: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
    }
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});