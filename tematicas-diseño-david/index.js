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

const tarjetas = document.querySelectorAll("#resultadoCard"); // Las cards que se deben filtrar

listasDeOpciones.forEach((lista) => {
  const opciones = lista.querySelectorAll("li");

  opciones.forEach((option) => {
    option.addEventListener("click", () => {
      const valorSelect = option.dataset.select;
      const valorFiltro = option.dataset.value;

      // Actualiza el texto del select visual
      const select = [...opcionSeleccionada].find(
        (el) => el.dataset.select === valorSelect
      );

      if (select) {
        select.textContent = option.textContent;
        select.dataset.value = valorFiltro;
      }

      lista.classList.add("hidden");

      // 🔍 Leer valores de ambos filtros
      const categoria = document.querySelector('[data-select="categoria"]')
        .dataset.value;
      const tipo = document.querySelector('[data-select="contenido"]').dataset
        .value;

      // ✅ Si ambos son "Todos" o están vacíos, mostrar todo
      const mostrarTodo =
        (!categoria || categoria === "Todos") && (!tipo || tipo === "Todos");

      tarjetas.forEach((card) => {
        const cardCategoria = card.dataset.tematica;
        const cardTipo = card.dataset.tipo;

        if (mostrarTodo) {
          card.classList.remove("hidden");
        } else {
          const coincideCategoria =
            !categoria || categoria === "Todos" || cardCategoria === categoria;
          const coincideTipo = !tipo || tipo === "Todos" || cardTipo === tipo;

          if (coincideCategoria && coincideTipo) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });
});
const botonReset = document.getElementById("btnResetfiltros");

botonReset.addEventListener("click", () => {
  // 1. Resetear los selects visualmente
  opcionSeleccionada.forEach((select) => {
    if (select.dataset.select === "categoria") {
      select.textContent = "Todas";
      select.dataset.value = "Todos";
    } else if (select.dataset.select === "contenido") {
      select.textContent = "Todos";
      select.dataset.value = "Todos";
    }
  });

  // 2. Mostrar Todos las tarjetas
  tarjetas.forEach((card) => {
    card.classList.remove("hidden");
  });
});
document.addEventListener("click", (e) => {
  const hizoClickEnSelect = [...opcionSeleccionada].some((boton) =>
    boton.contains(e.target)
  );

  const hizoClickEnLista = [...listasDeOpciones].some((lista) =>
    lista.contains(e.target)
  );

  // Si el clic fue FUERA de los botones y de las listas → oculta todas las listas
  if (!hizoClickEnSelect && !hizoClickEnLista) {
    listasDeOpciones.forEach((lista) => {
      lista.classList.add("hidden");
    });
  }
});
