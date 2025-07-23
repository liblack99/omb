const buttons = document.querySelectorAll(".omb-boton-sidebar");
const cards = document.querySelectorAll(".omb-card");

buttons[0].classList.add("omb-boton-sidebar--activo");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-boton-sidebar--activo"));
    button.classList.add("omb-boton-sidebar--activo");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todos los indicadores" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "flex"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
});

const botonTablerosMobile = document.getElementById("botonTablerosMobile");
const iconoFlecha = document.querySelector(".icono-flecha");

const sidebar = document.querySelector(".omb-sidebar-container");

botonTablerosMobile.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
  iconoFlecha.classList.toggle("activo");
});
const sidebarContent = document.getElementById("sidebar");
const contenedorPadre = document.querySelector(".omb-movilidad-container");

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
