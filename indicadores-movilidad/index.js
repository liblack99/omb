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

function handleScroll() {
  const scrollStart = 150;
  const scrollEnd = 620;

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
