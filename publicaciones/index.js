const swiper = new Swiper(".publicacionesSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {slidesPerView: 1},
    1024: {slidesPerView: 1},
    1280: {slidesPerView: 1},
  },
});

console.log("hola");
