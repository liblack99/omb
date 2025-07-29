document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".omb-acordion-boton");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const content = boton.nextElementSibling;

      boton.classList.toggle("activo");
      content.classList.toggle("abierto");

      // Si quieres cerrar los hermanos (opcional)
      const item = boton.closest(".omb-acordion-item");
      const hermanos =
        item?.parentElement?.querySelectorAll(":scope > .omb-acordion-item") ||
        [];

      hermanos.forEach((hermano) => {
        const otroContenido = hermano.querySelector(".omb-acordion-content");
        if (otroContenido && otroContenido !== content) {
          otroContenido.classList.remove("abierto");
        }
      });
    });
  });
});
