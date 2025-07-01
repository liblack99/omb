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

const swiperTablerosInteres = new Swiper(".tablerosSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".omb-boton-tableros-next",
    prevEl: ".omb-boton-tableros-prev",
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
let isPlaying = true;
const pauseButtonTablerosInteres = document.getElementById(
  "controlCarrucelTablerosInteres"
);
if (pauseButtonTablerosInteres) {
  pauseButtonTablerosInteres.addEventListener("click", () => {
    pauseButtonTablerosInteres.innerHTML = "";
    if (isPlaying) {
      swiperTablerosInteres.autoplay.stop();
      pauseButtonTablerosInteres.innerHTML = botonReproducir;
    } else {
      swiperTablerosInteres.autoplay.start();
      pauseButtonTablerosInteres.innerHTML = botonPausar;
    }
    isPlaying = !isPlaying;
  });
}
const swiperRecursosInteres = new Swiper(".recursosInteresSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".omb-boton-recursos-cartograficos-next",
    prevEl: ".omb-boton-recursos-cartograficos-prev",
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
let isPlayingRecursos = true;
const pauseButtonRecursosInteres = document.getElementById(
  "controlCarrucelRecursosInteres"
);
if (pauseButtonRecursosInteres) {
  pauseButtonRecursosInteres.addEventListener("click", () => {
    pauseButtonRecursosInteres.innerHTML = "";
    if (isPlayingRecursos) {
      swiperRecursosInteres.autoplay.stop();
      pauseButtonRecursosInteres.innerHTML = botonReproducir;
    } else {
      swiperRecursosInteres.autoplay.start();
      pauseButtonRecursosInteres.innerHTML = botonPausar;
    }
    isPlayingRecursos = !isPlayingRecursos;
  });
}

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
const swiperInfografiasInteres = new Swiper(".infografiasSwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".omb-button-infografia-next",
    prevEl: ".omb-button-infografia-prev",
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
});

let isPlayingInfografiaInteres = true;
const pauseButtonInfografiaInteres = document.getElementById(
  "controlCarrucelInfografia"
);
if (pauseButtonInfografiaInteres) {
  pauseButtonInfografiaInteres.addEventListener("click", () => {
    pauseButtonInfografiaInteres.innerHTML = "";
    if (isPlayingInfografiaInteres) {
      swiperInfografiasInteres.autoplay.stop();
      pauseButtonInfografiaInteres.innerHTML = botonReproducir;
    } else {
      swiperInfografiasInteres.autoplay.start();
      pauseButtonInfografiaInteres.innerHTML = botonPausar;
    }
    isPlayingInfografiaInteres = !isPlayingInfografiaInteres;
  });
}

const swiperIndicadoresInteres = new Swiper(".indicadoresSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-indicadores-next",
    prevEl: ".swiper-button-indicadores-prev",
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
let isPlayingiIndicadoresInteres = true;
const pauseButtonIndicadoresInteres = document.getElementById(
  "controlCarrucelIndicadoresInteres"
);
if (pauseButtonIndicadoresInteres) {
  pauseButtonIndicadoresInteres.addEventListener("click", () => {
    pauseButtonIndicadoresInteres.innerHTML = "";
    if (isPlaying) {
      swiperIndicadoresInteres.autoplay.stop();
      pauseButtonIndicadoresInteres.innerHTML = botonReproducir;
    } else {
      swiperIndicadoresInteres.autoplay.start();
      pauseButtonIndicadoresInteres.innerHTML = botonPausar;
    }
    isPlaying = !isPlaying;
  });
}
