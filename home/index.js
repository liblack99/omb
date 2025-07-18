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

const swiperIndicadores = new Swiper(".indicadoresSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".omb-paginacion-indicadores",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteration: false,
  },
  breakpoints: {
    320: {slidesPerView: 2, spaceBetween: 8},

    480: {slidesPerView: 4, spaceBetween: 20},
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {slidesPerView: 4, spaceBetween: 24},
    1360: {slidesPerView: 5},
  },
});

let isPlaying = true;
const pauseButton = document.getElementById("controlCarrucelIndicadores");
if (pauseButton) {
  pauseButton.addEventListener("click", () => {
    pauseButton.innerHTML = "";
    if (isPlaying) {
      swiperIndicadores.autoplay.stop();
      pauseButton.innerHTML = botonReproducir;
    } else {
      swiperIndicadores.autoplay.start();
      pauseButton.innerHTML = botonPausar;
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
    480: {slidesPerView: 1, spaceBetween: 20},
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {slidesPerView: 4, spaceBetween: 30},
    1360: {slidesPerView: 4},
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
      pauseButtonSectionPublicaion.innerHTML = botonReproducir;
    } else {
      swiperPublicacionesSection.autoplay.start();
      pauseButtonSectionPublicaion.innerHTML = botonPausar;
    }
    isPlayingSectionPublicacion = !isPlayingSectionPublicacion;
  });
}

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
    480: {slidesPerView: 1, spaceBetween: 20},
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {slidesPerView: 3},
    1360: {slidesPerView: 3},
  },
});
let isPlayingSitiosRelacionados = true;
const pauseButtonSitiosRelacionados = document.getElementById(
  "controlCarrucelSitiosRelacionados"
);
if (pauseButtonSitiosRelacionados) {
  pauseButtonSitiosRelacionados.addEventListener("click", () => {
    pauseButtonSitiosRelacionados.innerHTML = "";
    if (isPlayingSitiosRelacionados) {
      swiperSitosRelacionados.autoplay.stop();
      pauseButtonSitiosRelacionados.innerHTML = botonReproducir;
    } else {
      swiperSitosRelacionados.autoplay.start();
      pauseButtonSitiosRelacionados.innerHTML = botonPausar;
    }
    isPlayingSitiosRelacionados = !isPlayingSitiosRelacionados;
  });
}
const botonMenu = document.getElementById("botonMenu");
const botonesTab = document.querySelectorAll(".omb-tabs-boton--home");
const cardsObservatorio = document.querySelectorAll(".omb-card-observatorio");
const nav = document.querySelector(".omb-nav");

const botonesAcordeon = document.querySelectorAll(".omb-acordion-boton--home");

botonesAcordeon.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenido = boton.nextElementSibling;

    // Cerrar todos menos el actual
    document.querySelectorAll(".omb-acordion-content-home").forEach((el) => {
      if (el !== contenido) {
        el.style.maxHeight = null;
        el.classList.remove("abierto");
        el.previousElementSibling.classList.remove("activo");
      }
    });

    // Alternar el actual
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
      contenido.classList.remove("abierto");
      boton.classList.remove("activo");
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
      contenido.classList.add("abierto");
      boton.classList.add("activo");
    }
  });
});

botonMenu.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});

botonesTab.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tabSeleccionado = boton.dataset.tab;

    // 🔁 Quitar clase "activo" de todos los botones
    botonesTab.forEach((btn) => btn.classList.remove("activo"));

    // ✅ Agregar clase "activo" al botón clicado
    boton.classList.add("activo");

    // 🔁 Mostrar solo la card correspondiente
    cardsObservatorio.forEach((card) => {
      if (card.dataset.tab === tabSeleccionado) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
