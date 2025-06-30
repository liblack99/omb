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
