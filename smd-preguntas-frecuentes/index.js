const opcionSeleccionada = document.querySelectorAll(".sdm-opcion-selecionada");
const listasDeOpciones = document.querySelectorAll(".sdm-opciones");

// Al cambiar el select de tipo de contenido

function cerrarListaSiPierdeFoco(boton) {
  const lista = [...listasDeOpciones].find(
    (l) => l.dataset.select === boton.dataset.select
  );

  setTimeout(() => {
    const focoActual = document.activeElement;

    const focoEnBoton = boton.contains(focoActual);
    const focoEnLista = lista && lista.contains(focoActual);

    // Si el foco NO está ni en el botón ni en la lista → cierra
    if (!focoEnBoton && !focoEnLista) {
      lista?.classList.add("hidden");
      boton.classList.remove("activo");
    }
  }, 100);
}

opcionSeleccionada.forEach((boton) => {
  const manejarEvento = () => {
    const valorSeleccionado = boton.dataset.select;

    listasDeOpciones.forEach((lista) => {
      if (lista.dataset.select === valorSeleccionado) {
        lista.classList.toggle("hidden");
        boton.classList.toggle("activo");
      } else {
        lista.classList.add("hidden");
      }
    });
  };

  boton.addEventListener("click", manejarEvento);

  boton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      manejarEvento();
    }
  });

  // Detecta si se va el foco desde el botón
  boton.addEventListener("blur", () => cerrarListaSiPierdeFoco(boton));
});

// Detecta si se va el foco desde la lista también
listasDeOpciones.forEach((lista) => {
  lista.addEventListener(
    "blur",
    (e) => {
      const boton = [...opcionSeleccionada].find(
        (b) => b.dataset.select === lista.dataset.select
      );
      cerrarListaSiPierdeFoco(boton);
    },
    true
  ); // true para capturar blur de hijos
});

// Cierra si haces clic fuera
document.addEventListener("click", (e) => {
  const hizoClickEnSelect = [...opcionSeleccionada].some((boton) =>
    boton.contains(e.target)
  );

  const hizoClickEnLista = [...listasDeOpciones].some((lista) =>
    lista.contains(e.target)
  );

  if (!hizoClickEnSelect && !hizoClickEnLista) {
    listasDeOpciones.forEach((lista) => {
      lista.classList.add("hidden");
    });
    opcionSeleccionada.forEach((boton) => {
      boton.classList.remove("activo");
    });
  }
});

const tarjetas = document.querySelectorAll("#resultadoCard"); // Las cards que se deben filtrar

listasDeOpciones.forEach((lista) => {
  const opciones = lista.querySelectorAll("li");

  opciones.forEach((option) => {
    // Asegura que cada opción sea accesible con teclado
    option.setAttribute("tabindex", "0");

    const manejarSeleccion = () => {
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

      // Leer valores de ambos filtros
      const categoria = document.querySelector('[data-select="categoria"]')
        .dataset.value;
      const tipo = document.querySelector('[data-select="contenido"]').dataset
        .value;

      const mostrarTodo =
        (!categoria || categoria === "Todos") && (!tipo || tipo === "Todos");

      tarjetas.forEach((card) => {
        const cardCategoria = card.dataset.tematica;
        const cardTipo = card.dataset.tipo;

        const coincideCategoria =
          !categoria || categoria === "Todos" || cardCategoria === categoria;
        const coincideTipo = !tipo || tipo === "Todos" || cardTipo === tipo;

        if (mostrarTodo || (coincideCategoria && coincideTipo)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    };

    // Click
    option.addEventListener("click", manejarSeleccion);

    // Teclado
    option.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Evita scroll con barra espaciadora
        manejarSeleccion();
      }
    });
  });
});

const botonReset = document.getElementById("btnResetfiltros");

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
