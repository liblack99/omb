const buttons = document.querySelectorAll(".omb-boton-sidebar");
const cards = document.querySelectorAll(".omb-card-tableros");

const botonTablerosMobile = document.getElementById("botonTablerosMobile");
const iconoFlecha = document.querySelector(".icono-flecha");

const sidebar = document.querySelector(".omb-sidebar-container");

botonTablerosMobile.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
  iconoFlecha.classList.toggle("activo");
});

const botonTodosTableros = buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-boton-sidebar--activo"));
    button.classList.add("omb-boton-sidebar--activo");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todos los tableros" ||
        categoriaSeleccionada === "Todos" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "block"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
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

const sidebarContent = document.getElementById("sidebar");
const contenedorPadre = document.querySelector(".omb-tableros-content");

function handleScroll() {
  const sidebarOffsetTop = 20; // margen desde arriba cuando está fixed
  const finalOffset = 74; // margen desde el final del contenedor

  const windowTop = window.scrollY;
  const containerTop = contenedorPadre.offsetTop;
  const containerHeight = contenedorPadre.offsetHeight;

  // Punto máximo hasta donde el sidebar puede estar fijo
  const maxScroll =
    containerTop + containerHeight - sidebarContent.offsetHeight - finalOffset;

  if (window.innerWidth >= 1024) {
    if (windowTop >= containerTop && windowTop < maxScroll) {
      sidebarContent.style.position = "fixed";
      sidebarContent.style.top = `${sidebarOffsetTop}px`;
    } else if (windowTop >= maxScroll) {
      sidebarContent.style.position = "absolute";
      sidebarContent.style.top = `${
        containerHeight - sidebarContent.offsetHeight - finalOffset
      }px`;
    } else {
      sidebarContent.style.position = "static";
      sidebarContent.style.top = "";
    }
  } else {
    sidebarContent.style.position = "static";
    sidebarContent.style.top = "";
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
