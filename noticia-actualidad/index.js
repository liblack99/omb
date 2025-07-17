const botonReproducir = `<button
              type="button"
              aria-label="Reproducir contenido"
              title="Reproducir contenido">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
                focusable="false">
                <!-- Font Awesome Free 5.15.2 by @fontawesome -->
                <path
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
              </svg>
              Reproducir
            </button>`;

const botonPausar = `  <button
              type="button"
              aria-label="Pausar contenido"
              title="Pausar contenido">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
                focusable="false">
                >
                <!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                <path
                  d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
              </svg>

              Pausar
            </button>`;

const swiperNoticiasInteres = new Swiper(".noticiasSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".omb-boton-noticias-next",
    prevEl: ".omb-boton-noticias-prev",
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
    1280: {slidesPerView: 4},
  },
});
let isPlayingNoticias = true;
const pauseButtonNoticiasInteres = document.getElementById(
  "controlCarrucelNoticiasInteres"
);
if (pauseButtonNoticiasInteres) {
  pauseButtonNoticiasInteres.addEventListener("click", () => {
    pauseButtonNoticiasInteres.innerHTML = "";
    if (isPlayingNoticias) {
      swiperNoticiasInteres.autoplay.stop();
      pauseButtonNoticiasInteres.innerHTML = botonReproducir;
    } else {
      swiperNoticiasInteres.autoplay.start();
      pauseButtonTablerosInteres.innerHTML = botonPausar;
    }
    isPlayingNoticias = !isPlayingNoticias;
  });
}
