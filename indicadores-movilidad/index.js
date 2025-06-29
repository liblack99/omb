const buttons = document.querySelectorAll(".omb-boton-sidebar--sin-icono");
const cards = document.querySelectorAll(".omb-card-enlace");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-boton--active"));
    button.classList.add("omb-boton--active");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todos los indicadores" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "block"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
});
