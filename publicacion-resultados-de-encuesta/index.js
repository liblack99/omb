const swiper = new Swiper(".categoriaSlideSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
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
    1280: {slidesPerView: 4},
  },
});

const opcionSeleccionada = document.querySelectorAll(".omb-opcion-selecionada");
const listasDeOpciones = document.querySelectorAll(".omb-opciones");
const flechaSelect = document.querySelector(".icono-flecha-select");

// Al cambiar el select de tipo de contenido

opcionSeleccionada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valorSeleccionado = boton.dataset.select;

    listasDeOpciones.forEach((lista) => {
      if (lista.dataset.select === valorSeleccionado) {
        // Toggle SOLO en la lista correspondiente
        lista.classList.toggle("hidden");
        flechaSelect.classList.toggle("activo");
      } else {
        // Oculta las otras listas
        lista.classList.add("hidden");
      }
    });
  });
});
document.addEventListener("click", (e) => {
  const hizoClickEnSelect = [...opcionSeleccionada].some((boton) =>
    boton.contains(e.target)
  );

  const hizoClickEnLista = [...listasDeOpciones].some((lista) =>
    lista.contains(e.target)
  );

  // Si el clic fue FUERA de los botones y de las listas → oculta todas las listas
  if (!hizoClickEnSelect && !hizoClickEnLista) {
    listasDeOpciones.forEach((lista) => {
      lista.classList.add("hidden");
    });
  }
});
