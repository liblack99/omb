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

function cerrarListaSiPierdeFoco(boton) {
  const lista = [...listasDeOpciones].find(
    (l) => l.dataset.select === boton.dataset.select
  );

  setTimeout(() => {
    const focoActual = document.activeElement;

    const focoEnBoton = boton.contains(focoActual);
    const focoEnLista = lista && lista.contains(focoActual);

    // Si el foco NO está ni en el botón ni en la lista → cierra
    if (!focoEnBoton && !focoEnLista) {
      lista?.classList.add("hidden");
      boton.classList.remove("activo");
    }
  }, 100);
}

opcionSeleccionada.forEach((boton) => {
  const manejarEvento = () => {
    const valorSeleccionado = boton.dataset.select;

    listasDeOpciones.forEach((lista) => {
      if (lista.dataset.select === valorSeleccionado) {
        lista.classList.toggle("hidden");
        boton.classList.toggle("activo");
      } else {
        lista.classList.add("hidden");
      }
    });
  };

  boton.addEventListener("click", manejarEvento);

  boton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      manejarEvento();
    }
  });

  // Detecta si se va el foco desde el botón
  boton.addEventListener("blur", () => cerrarListaSiPierdeFoco(boton));
});

// Detecta si se va el foco desde la lista también
listasDeOpciones.forEach((lista) => {
  lista.addEventListener(
    "blur",
    (e) => {
      const boton = [...opcionSeleccionada].find(
        (b) => b.dataset.select === lista.dataset.select
      );
      cerrarListaSiPierdeFoco(boton);
    },
    true
  ); // true para capturar blur de hijos
});

// Cierra si haces clic fuera
document.addEventListener("click", (e) => {
  const hizoClickEnSelect = [...opcionSeleccionada].some((boton) =>
    boton.contains(e.target)
  );

  const hizoClickEnLista = [...listasDeOpciones].some((lista) =>
    lista.contains(e.target)
  );

  if (!hizoClickEnSelect && !hizoClickEnLista) {
    listasDeOpciones.forEach((lista) => {
      lista.classList.add("hidden");
    });
    opcionSeleccionada.forEach((boton) => {
      boton.classList.remove("activo");
    });
  }
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
