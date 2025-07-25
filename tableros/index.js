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

opcionSeleccionada.forEach((boton) => {
  const manejarEvento = () => {
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
  };

  boton.addEventListener("click", manejarEvento);

  boton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // evita que la página se desplace con la barra espaciadora
      manejarEvento();
    }
  });
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
