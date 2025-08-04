const buttons = document.querySelectorAll(".omb-boton-sidebar");
const cards = document.querySelectorAll(".omb-card-infografia");

buttons[0].classList.add("omb-boton-sidebar--active");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-boton-sidebar--active"));
    button.classList.add("omb-boton-sidebar--active");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todas las infografias" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "flex"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
});

const botonTablerosMobile = document.getElementById("botonTablerosMobile");
const iconoFlecha = document.querySelector(".icono-flecha");

const sidebar = document.querySelector(".omb-sidebar-container");

botonTablerosMobile.addEventListener("click", () => {
  sidebar.classList.toggle("activo");
  iconoFlecha.classList.toggle("activo");
});
const sidebarContent = document.getElementById("sidebar");

function handleScroll() {
  const scrollStart = 150;
  const scrollEnd = 620;

  if (window.innerWidth >= 1024) {
    if (window.scrollY >= scrollStart && window.scrollY < scrollEnd) {
      sidebarContent.style.position = "fixed";
      sidebarContent.style.top = "20px";
    } else if (window.scrollY >= scrollEnd) {
      sidebarContent.style.position = "relative";
      sidebarContent.style.top = `${scrollEnd - scrollStart + 20}px`; // Ajusta para que se quede en el lugar
    } else {
      sidebarContent.style.position = "static";
      sidebarContent.style.top = "";
    }
  } else {
    sidebarContent.style.position = "static";
    sidebarContent.style.top = "";
  }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

const opcionSeleccionada = document.querySelectorAll(".omb-opcion-selecionada");
const listasDeOpciones = document.querySelectorAll(".omb-opciones");
const flechaSelect = document.querySelector(".icono-flecha-select");

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
