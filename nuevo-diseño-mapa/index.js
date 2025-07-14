document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".omb-map-card");
  const firstCard = cards[0];
  const firstDescription = firstCard.querySelector(
    ".omb-descripcion-container"
  );

  console.log("Descripción:", firstDescription);

  // Por defecto: el contenedor de descripción del primer card está .omb-descripcion-container-alzado

  cards.forEach((card) => {
    const description = card.querySelector(".omb-descripcion-container");

    card.addEventListener("mouseenter", function () {
      // Bajar todas las descripciones
      console.log("Alzando descripción");
      document
        .querySelectorAll(".omb-descripcion-container")
        .forEach((desc) => {
          desc.classList.remove("omb-descripcion-container-alzado");
        });

      // Alzar solo la del hovered
      description.classList.add("omb-descripcion-container-alzado");
    });

    card.addEventListener("mouseleave", function () {
      // Al salir del hover, solo se vuelve a alzar la del primer card
      document
        .querySelectorAll(".omb-descripcion-container")
        .forEach((desc) => {
          desc.classList.remove("omb-descripcion-container-alzado");
        });

      firstDescription.classList.add("omb-descripcion-container-alzado");
    });
  });
});
