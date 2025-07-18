const swiperPublicacionesInteres = new Swiper(".infografiasSwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".omb-button-infografia-next",
    prevEl: ".omb-button-infografia-prev",
  },
  pagination: {
    el: ".omb-paginacion",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteration: false,
  },
  breakpoints: {
    480: {slidesPerView: 1, spaceBetween: 20},
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1024: {slidesPerView: 2},
    1440: {slidesPerView: 3},
  },
});

let isPlayingPublicacionesInteres = true;
const pauseButtonPublicacionesInteres = document.getElementById(
  "controlCarrucelPublicaionesInteres"
);
if (pauseButtonPublicacionesInteres) {
  pauseButtonPublicacionesInteres.addEventListener("click", () => {
    pauseButtonPublicacionesInteres.innerHTML = "";
    if (isPlayingPublicacionesInteres) {
      swiperPublicacionesInteres.autoplay.stop();
      pauseButtonPublicacionesInteres.innerHTML = botonReproducir;
    } else {
      swiperPublicacionesInteres.autoplay.start();
      pauseButtonPublicacionesInteres.innerHTML = botonPausar;
    }
    isPlayingPublicacionesInteres = !isPlayingPublicacionesInteres;
  });
}
