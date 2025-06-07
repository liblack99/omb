const buttons = document.querySelectorAll(".omb-button");
const cards = document.querySelectorAll(".omb-map-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-content-button-active"));
    button.classList.add("omb-content-button-active");

    const categoriaSeleccionada = button.textContent.trim().toLocaleLowerCase();
    console.log(categoriaSeleccionada);

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria.toLocaleLowerCase();

      if (
        categoriaSeleccionada === "todos los mapas" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
