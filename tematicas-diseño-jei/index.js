const botonesAcordeon = document.querySelectorAll(".omb-acordion-boton");

const tituloSection = document.getElementById("tituloSection");
const parrafoDescripcion = document.getElementById("parrafoDescripcion");
const botonVerResultados = document.querySelectorAll("#botonVerResultados");
const tituloResultadoContainer = document.getElementById(
  "tituloResultadoContainer"
);

const tituloResultado = document.getElementById("tituloResultado");
const acordion = document.getElementById("acordion");
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

const primerBoton = botonesAcordeon[0];
const primerContenido = primerBoton.nextElementSibling;
primerContenido.style.maxHeight = primerContenido.scrollHeight + "px";
primerContenido.classList.add("abierto");
primerBoton.classList.add("activo");

botonesAcordeon.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenido = boton.nextElementSibling;

    // Cerrar todos menos el actual
    document.querySelectorAll(".omb-acordion-content").forEach((el) => {
      if (el !== contenido) {
        el.style.maxHeight = null;
        el.classList.remove("abierto");
        el.previousElementSibling.classList.remove("activo");
      }
    });

    // Alternar el actual
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
      contenido.classList.remove("abierto");
      boton.classList.remove("activo");
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
      contenido.classList.add("abierto");
      boton.classList.add("activo");
    }
  });
});

btnVolver.addEventListener("click", () => {
  // Reiniciar filtros
  tematicaSeleccionada = null;
  tipoContenidoSeleccionado = "";

  // Resetear el select
  selectTipoContenido.value = "";

  // Mostrar el contenedor de temáticas y ocultar lo demás
  acordion.classList.remove("hidden");
  resultadoContainer.classList.add("hidden");
  paginacion.classList.add("hidden");
  filtros.classList.add("hidden");
  sinResultados.classList.add("hidden");
  tituloResultadoContainer.classList.add("hidden");
  tituloSection.textContent = "Temáticas";
  tituloSection.classList.remove("hidden");
  parrafoDescripcion.classList.remove("hidden");

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
botonVerResultados.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("click");
    tematicaSeleccionada = card.dataset.tematica;

    tituloSection.classList.add("hidden");
    acordion.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");
    paginacion.classList.remove("hidden");
    filtros.classList.remove("hidden");
    tituloResultadoContainer.classList.remove("hidden");
    parrafoDescripcion.classList.add("hidden");

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
