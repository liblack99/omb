const tagTematica = document.querySelectorAll(
  ".omb-tag-card--variante-font-size"
);
const tituloResultado = document.getElementById("tituloResultado");
const tarjetas = document.querySelectorAll("#resultadoCard");
const selectTipoContenido = document.getElementById("selectTipoContenido");
const paginacion = document.getElementById("paginacion");
const sinResultados = document.getElementById("sinResultados");
const selectFecha = document.getElementById("fecha");
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

// Estado actual de los filtros
let tematicaSeleccionada = null;
let tipoContenidoSeleccionado = "";
let fechaSeleccionada = "";

function filtrarResultados() {
  let hayResultados = false;

  tarjetas.forEach((card) => {
    const tematica = card.dataset.tematica;
    const tipo = card.dataset.tipo;
    const fecha = card.dataset.fecha;

    const coincideFecha = !fechaSeleccionada || fecha === fechaSeleccionada;
    const coincideTipo =
      !tipoContenidoSeleccionado || tipo === tipoContenidoSeleccionado;

    // Si la temática seleccionada es "todas" o null, siempre coincide
    const coincideTematica =
      !tematicaSeleccionada ||
      tematicaSeleccionada === "todas" ||
      tematica === tematicaSeleccionada;

    if (coincideTematica && coincideTipo && coincideFecha) {
      card.classList.remove("hidden");
      hayResultados = true;
    } else {
      card.classList.add("hidden");
    }
  });

  if (tematicaSeleccionada === "todas") {
    tituloResultado.textContent = `Tematicas`;
  }

  if (hayResultados) {
    sinResultados.classList.add("hidden");

    paginacion.classList.remove("hidden");
  } else {
    sinResultados.classList.remove("hidden");
    paginacion.classList.add("hidden");
  }
}

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
      const fecha = document.querySelector('[data-select="fecha"]').dataset
        .value;
      const tipo = document.querySelector('[data-select="contenido"]').dataset
        .value;

      // ✅ Si ambos son "Todos" o están vacíos, mostrar todo
      const mostrarTodo =
        (!fecha || fecha === "Cualquiera") && (!tipo || tipo === "Todos");

      tarjetas.forEach((card) => {
        const cardFecha = card.dataset.fecha;
        const cardTipo = card.dataset.tipo;

        if (mostrarTodo) {
          card.classList.remove("hidden");
        } else {
          const coincideFecha = !fecha || fecha === "" || cardFecha === fecha;
          const coincideTipo = !tipo || tipo === "Todos" || cardTipo === tipo;

          if (coincideFecha && coincideTipo) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });
});

tagTematica.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("click");
    tematicaSeleccionada = card.dataset.tematica;
    tituloResultado.textContent = `Tematica: ${tematicaSeleccionada}`;

    filtrarResultados();
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
