const swiperPublicacionesInteres = new Swiper(
  ".publicacionesInteresSlideSwiper",
  {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: ".omb-boton-publicaciones-interes-next",
      prevEl: ".omb-boton-publicaciones-interes-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteration: false,
    },
    breakpoints: {
      640: {slidesPerView: 2},
      1024: {slidesPerView: 3},
      1280: {slidesPerView: 3},
    },
  }
);

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
