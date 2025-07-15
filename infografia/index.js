const buttons = document.querySelectorAll(".omb-boton-sidebar");
const cards = document.querySelectorAll(".omb-card-infografia");

buttons[0].classList.add("omb-boton-sidebar--active");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-boton-sidebar--active"));
    button.classList.add("omb-boton-sidebar--active");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todas las infografias" ||
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
  const scrollLimit = 150;

  if (window.innerWidth >= 1024) {
    if (window.scrollY >= scrollLimit) {
      sidebarContent.style.position = "fixed";
      sidebarContent.style.top = "20px";
    } else {
      sidebarContent.style.position = "static";
    }
  } else {
    sidebarContent.style.position = "static";
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
