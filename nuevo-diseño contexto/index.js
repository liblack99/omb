const swiperTablerosInteres = new Swiper(".tablerosSwiper", {
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
      pauseButtonTablerosInteres.innerHTML = `<button
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
      swiperTablerosInteres.autoplay.start();
      pauseButtonTablerosInteres.innerHTML = `  <button
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
