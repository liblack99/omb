const tituloResultadoContainer = document.getElementById(
  "tituloResultadoContainer"
);
const tituloResultado = document.getElementById("tituloResultado");
const tematicaContainer = document.getElementById("tematicaContainer");
const resultadoContainer = document.getElementById("resultadosContainer");
const tematicaCard = document.querySelectorAll(".omb-card-tematica");
const resultadoCards = document.querySelectorAll("#resultadoCard");
const selectTipoContenido = document.getElementById("selectTipoContenido");
const paginacion = document.getElementById("paginacion");
const filtros = document.getElementById("filtros");
const btnVolver = document.getElementById("btnVolver");
const sinResultados = document.getElementById("sinResultados");
const selectFecha = document.getElementById("fecha");
// Estado actual de los filtros
let tematicaSeleccionada = null;
let tipoContenidoSeleccionado = "";
let fechaSeleccionada = "";

btnVolver.addEventListener("click", () => {
  // Reiniciar filtros
  tematicaSeleccionada = null;
  tipoContenidoSeleccionado = "";

  // Resetear el select
  selectTipoContenido.value = "";

  // Mostrar el contenedor de temáticas y ocultar lo demás
  tematicaContainer.classList.remove("hidden");
  resultadoContainer.classList.add("hidden");
  paginacion.classList.add("hidden");
  filtros.classList.add("hidden");
  sinResultados.classList.add("hidden");
  tituloResultadoContainer.classList.add("hidden");

  // Mostrar todas las cards si estaban ocultas por algún motivo
  resultadoCards.forEach((card) => {
    card.classList.remove("hidden");
  });
});

// Función que aplica ambos filtros

function filtrarResultados() {
  let hayResultados = false;

  resultadoCards.forEach((card) => {
    const tematica = card.dataset.tematica;
    const tipo = card.dataset.tipo;
    const fecha = card.dataset.fecha;

    const coincideFecha = !fechaSeleccionada || fecha === fechaSeleccionada;

    const coincideTematica =
      !tematicaSeleccionada || tematica === tematicaSeleccionada;
    const coincideTipo =
      !tipoContenidoSeleccionado || tipo === tipoContenidoSeleccionado;

    if (coincideTematica && coincideTipo && coincideFecha) {
      card.classList.remove("hidden");
      hayResultados = true;
    } else {
      card.classList.add("hidden");
      sinResultados.classList.remove("hidden");
    }
  });

  // Mostrar u ocultar el mensaje de "no resultados"
  if (hayResultados) {
    sinResultados.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");
    paginacion.classList.remove("hidden");
  } else {
    paginacion.classList.add("hidden");
    resultadoContainer.classList.add("hidden");
  }
}

// Al hacer clic en una tarjeta temática
tematicaCard.forEach((card) => {
  card.addEventListener("click", () => {
    tematicaSeleccionada = card.dataset.tematica;

    tituloResultado.textContent = `Resultado para: ${tematicaSeleccionada}`;
    tematicaContainer.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");
    paginacion.classList.remove("hidden");
    filtros.classList.remove("hidden");
    tituloResultadoContainer.classList.remove("hidden");

    filtrarResultados();
  });
});

// Al cambiar el select de tipo de contenido
selectTipoContenido.addEventListener("change", (e) => {
  tipoContenidoSeleccionado = e.target.value;
  filtrarResultados();
});

selectFecha.addEventListener("change", (e) => {
  fechaSeleccionada = e.target.value;
  filtrarResultados();
});
