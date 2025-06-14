const swiper = new Swiper(".tablerosSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {slidesPerView: 2},
    1024: {slidesPerView: 3},
    1280: {slidesPerView: 3},
  },
});

const btnVerMas = document.getElementById("btnVerMas");
const texto = document.querySelector(".omb-texto-descripcion");

const buttons = document.querySelectorAll(".omb-botones-lista");
const graficaContainers = document.querySelectorAll(".omb-grafica-container");

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
