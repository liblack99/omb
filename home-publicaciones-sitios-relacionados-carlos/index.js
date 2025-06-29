const swiperSitosRelacionados = new Swiper(".sitiosRelacionadosSlideSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".omb-boton-sitios-relacionados-next",
    prevEl: ".omb-boton-sitios-relacionados-prev",
  },
  pagination: {
    el: ".omb-paginacion-sitios-relacionados",
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
});
let isPlaying = true;
const pauseButtonSitiosRelacionados = document.getElementById(
  "controlCarrucelSitiosRelacionados"
);
if (pauseButtonSitiosRelacionados) {
  pauseButtonSitiosRelacionados.addEventListener("click", () => {
    pauseButtonSitiosRelacionados.innerHTML = "";
    if (isPlaying) {
      swiperSitosRelacionados.autoplay.stop();
      pauseButtonSitiosRelacionados.innerHTML = `<button
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
    } else {
      swiperSitosRelacionados.autoplay.start();
      pauseButtonSitiosRelacionados.innerHTML = `  <button
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
    }
    isPlaying = !isPlaying;
  });
}

const swiperPublicacionesSection = new Swiper(".publicacionesSectionSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".omb-boton-next--publicaciones-home",
    prevEl: ".omb-boton-prev--publicaciones-home",
  },
  pagination: {
    el: ".omb-paginacion--publicaciones-home",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteration: false,
  },
  breakpoints: {
    640: {slidesPerView: 1},
    1024: {slidesPerView: 2},
    1280: {slidesPerView: 3},
  },
});
let isPlayingSectionPublicacion = true;
const pauseButtonSectionPublicaion = document.getElementById(
  "controlCarrucelSectionPublicacion"
);

if (pauseButtonSectionPublicaion) {
  pauseButtonSectionPublicaion.addEventListener("click", () => {
    pauseButtonSectionPublicaion.innerHTML = "";
    if (isPlayingSectionPublicacion) {
      swiperPublicacionesSection.autoplay.stop();
      pauseButtonSectionPublicaion.innerHTML = `<button
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
    } else {
      swiperPublicacionesSection.autoplay.start();
      pauseButtonSectionPublicaion.innerHTML = `  <button
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
    }
    isPlayingSectionPublicacion = !isPlayingSectionPublicacion;
  });
}
