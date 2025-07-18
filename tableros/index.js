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
    buttons.forEach((btn) => btn.classList.remove("omb-boton-sidebar--active"));
    button.classList.add("omb-boton-sidebar--active");

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

const sidebarContent = document.getElementById("sidebar");

function handleScroll() {
  const scrollStart = 150;
  const scrollEnd = 740;

  if (window.innerWidth >= 1024) {
    if (window.scrollY >= scrollStart && window.scrollY < scrollEnd) {
      sidebarContent.style.position = "fixed";
      sidebarContent.style.top = "20px";
    } else if (window.scrollY >= scrollEnd) {
      sidebarContent.style.position = "relative";
      sidebarContent.style.top = `${scrollEnd - scrollStart + 20}px`; // Ajusta para que se quede en el lugar
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
window.addEventListener("scroll", () => {
  console.log(window.scrollY); // Número de píxeles desplazados verticalmente
});
