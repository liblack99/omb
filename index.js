const buttonsSideBard = document.querySelectorAll(
  ".omb-sidebar-tematicas-item"
);
const selectTematicas = document.getElementById("selectTematicas");
const cardsTematica = document.querySelectorAll(".omb-card-tematica");

document.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector(".omb-sidebar-tematicas-lista");
  const areaArriba = document.querySelector(".omb-tematica-selecionada");

  lista.addEventListener("click", function (e) {
    const clickedLink = e.target.closest(".omb-sidebar-tematicas-link");
    if (!clickedLink) return;

    e.preventDefault();

    const clickedItem = clickedLink.parentElement; // El <li> clickeado
    const itemArribaActual = areaArriba.querySelector(
      ".omb-sidebar-tematicas-link"
    );

    // 1. Mover el anterior que estaba arriba al final del ul
    if (itemArribaActual) {
      const nuevoLi = document.createElement("li");
      nuevoLi.classList.add("omb-sidebar-tematicas-item");
      nuevoLi.appendChild(itemArribaActual);
      lista.appendChild(nuevoLi);
    }

    // 2. Mover el clickeado al área de arriba
    areaArriba.innerHTML = ""; // Limpiar
    areaArriba.appendChild(clickedLink);

    // 3. Eliminar el li original de la lista
    clickedItem.remove();

    // 4. Quitar clases activas de todos
    document.querySelectorAll(".omb-sidebar-tematicas-link").forEach((link) => {
      link.classList.remove("omb-sidebar-tematicas-item--activo");
    });

    // 5. Agregar clase activa al nuevo de arriba
    clickedLink.classList.add("omb-sidebar-tematicas-item--activo");
  });
});

selectTematicas.addEventListener("change", (event) => {
  const categoriaSeleccionada = event.target.value;

  // Quitar clase activa de todos los botones
  buttonsSideBard.forEach((btn) =>
    btn.classList.remove("omb-boton-sidebar--active")
  );

  // Si el select tiene una opción que coincide con algún botón, puedes opcionalmente activar el botón correspondiente (si quieres)
  buttonsSideBard.forEach((button) => {
    if (button.textContent.trim() === categoriaSeleccionada) {
      button.classList.add("omb-boton-sidebar--active");
    }
  });

  // Mostrar/ocultar las tarjetas según la selección
  cardsTematica.forEach((card) => {
    const categoriaCard = card.dataset.tematica;

    if (
      categoriaSeleccionada === "Todas las infografias" ||
      categoriaCard === categoriaSeleccionada
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

buttonsSideBard.forEach((button) => {
  button.addEventListener("click", () => {
    buttonsSideBard.forEach((btn) =>
      btn.classList.remove("omb-boton-sidebar--active")
    );
    button.classList.add("omb-boton-sidebar--active");

    const categoriaSeleccionada = button.textContent.trim();

    cardsTematica.forEach((card) => {
      const categoriaCard = card.dataset.tematica;

      if (
        categoriaSeleccionada === "Todas las infografias" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "block"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
});
