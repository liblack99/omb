<!-- Carrusel de publicaciones con efecto fade --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
const swiper = new Swiper(".omb-publicaciones-swiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
