const buttons = document.querySelectorAll(".omb-boton-sidebar");
const cards = document.querySelectorAll(".omb-card-tableros");

const botonTablerosMobile = document.getElementById("botonTablerosMobile");

const sidebar = document.querySelector(".omb-sidebar-container");

botonTablerosMobile.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
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

// Al cambiar el select de tipo de contenido

opcionSeleccionada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valorSeleccionado = boton.dataset.select;

    listasDeOpciones.forEach((lista) => {
      if (lista.dataset.select === valorSeleccionado) {
        // Toggle SOLO en la lista correspondiente
        lista.classList.toggle("hidden");
      } else {
        // Oculta las otras listas
        lista.classList.add("hidden");
      }
    });
  });
});
