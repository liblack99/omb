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

              Detener
            </button>`;

const swiperInteres = new Swiper(".sectionInteresSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
    480: {slidesPerView: 1, spaceBetween: 30},
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {slidesPerView: 3, spaceBetween: 30},
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
let isPlaying = true;
const pauseButtonTablerosInteres = document.getElementById(
  "controlCarrucelInteres"
);
if (pauseButtonTablerosInteres) {
  pauseButtonTablerosInteres.addEventListener("click", () => {
    pauseButtonTablerosInteres.innerHTML = "";
    if (isPlaying) {
      swiperInteres.autoplay.stop();
      pauseButtonTablerosInteres.innerHTML = botonReproducir;
    } else {
      swiperInteres.autoplay.start();
      pauseButtonTablerosInteres.innerHTML = botonPausar;
    }
    isPlaying = !isPlaying;
  });
}

const buttons = document.querySelectorAll(".omb-botones-lista");
const graficaContainers = document.querySelectorAll(".omb-grafica");
// Mostrar solo "Fallecidos" por defecto
const categoriaPorDefecto = "Fallecidos";

buttons.forEach((button) => {
  const categoria = button.textContent.trim();

  if (categoria === categoriaPorDefecto) {
    button.classList.add("omb-botones-lista-seleccionado");
  }

  button.addEventListener("click", () => {
    buttons.forEach((btn) =>
      btn.classList.remove("omb-botones-lista-seleccionado")
    );
    button.classList.add("omb-botones-lista-seleccionado");

    const categoriaSeleccionada = button.textContent.trim();

    graficaContainers.forEach((card) => {
      const grafica = card.dataset.grafica;

      if (grafica.toLowerCase() === categoriaSeleccionada.toLowerCase()) {
        card.style.display = "flex"; // Mostrar solo el que coincide
      } else {
        card.style.display = "none"; // Ocultar los demás
      }
    });
  });
});

// Al cargar la página, solo mostrar "Fallecidos"
graficaContainers.forEach((card) => {
  const grafica = card.dataset.grafica;
  card.style.display =
    grafica.toLowerCase() === categoriaPorDefecto.toLowerCase()
      ? "flex"
      : "none";
});

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
