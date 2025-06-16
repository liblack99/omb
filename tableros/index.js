const articulos = [
  {
    categoria: "Movilidad sostenible",
    titulo: "Política motorizada de cero y bajas emisiones",
    descripcion:
      "¿Sabías que el Sistema Integrado de Transporte de Bogotá cuenta con más de 1.485 buses eléctricos?",
    imagen: "./assets/movilidad-sostenible/omb-tableros-pcbe.jpg",
  },
  {
    categoria: "Movilidad sostenible",
    titulo: "Día sin carro y sin moto",
    descripcion:
      "¿Sabías que en el día sin carro y sin moto se aumenta en un 90% los viajes en el sistema de bicicletas compartidas respecto a un día típico?",
    imagen: "./assets/movilidad-sostenible/omb-tableros-diasincarro-min.jpg",
  },
  {
    categoria: "Movilidad sostenible",
    titulo: "Ciclista",
    descripcion:
      "¿Sabías que en Bogotá hay más de 630 km de cicloinfraestructura?",
    imagen: "./assets/movilidad-sostenible/omb-tableros-ciclista-min.jpg",
  },
  {
    categoria: "Transporte público",
    titulo: "Sistema Integrado de Transporte Público (SITP)",
    descripcion:
      "¿Sabías que el SITP moviliza aproximadamente a 4 millones de personas en un día típico?",
    imagen: "./assets/transporte-publico/omb-tableros-sitp-min.jpg",
  },
  {
    categoria: "Transporte público",
    titulo: "Transporte intermunicipal",
    descripcion:
      "¿Sabías que se realizan 144.288 viajes diarios hacia Bogotá en transporte público provenientes de los municipios vecinos, con motivo trabajo o estudio?",
    imagen:
      "./assets/transporte-publico/omb-tableros-transporte-intermunicipal-min.jpg",
  },
  {
    categoria: "Transporte público",
    titulo: "Transporte público individual (Taxi)",
    descripcion:
      "¿Sabías que solo dos empresas, tienen la mitad del total de vehículos que prestan el servicio de Taxi en Bogotá?",
    imagen: "./assets/transporte-publico/omb-tableros-taxi-min.jpg",
  },
  {
    categoria: "Comportamiento en vía",
    titulo: "Comparendos",
    descripcion:
      "¿Sabías que las infracciones de tránsito se clasifican por categorías que establecen el valor de las multas, ligado a la gravedad de la infracción",
    imagen: "./assets/comportamiento-vial/omb-tableros-comparendos-min.jpg",
  },
  {
    categoria: "Comportamiento en vía",
    titulo: "Siniestralidad vial",
    descripcion:
      "¿Sabías que aproximadamente uno de cada tres lesionados en siniestro viales son motociclistas?",
    imagen:
      "./assets/comportamiento-vial/omb-tableros-siniestralidad-vial-min.jpg",
  },
  {
    categoria: "Comportamiento en vía",
    titulo: "Velocidades",
    descripcion:
      "¿Sabías que el límite de velocidad en la zona urbana de Bogotá es de 50 kilómetros por hora?",
    imagen: "./assets/comportamiento-vial/omb-tableros-velocidades-min.jpg",
  },
  {
    categoria: "Viajes y volúmenes",
    titulo: "Volúmenes de carga",
    descripcion:
      "¿Sabías que el periodo máximo de flujo vehicular de carga en Bogotá es entre las 10 am y las 12 m?",
    imagen: "./assets/viaje-volumen/omb-tableros-vol-carga-min.jpg",
  },
  {
    categoria: "Viajes y volúmenes",
    titulo: "Encuestas de movilidad",
    descripcion:
      "¿Sabías que la primera Encuesta de Movilidad fue realizada en el año 1995 por el Instituto de Desarrollo Urbano IDU?",
    imagen: "./assets/viaje-volumen/omb-tableros-encuestas-movilidad-min.jpg",
  },
  {
    categoria: "Viajes y volúmenes",
    titulo: "Registro Distrital Automotor",
    descripcion:
      "¿Sabías que el rango de edad en el que hay la mayor cantidad de vehículos registrados en Bogotá es entre 10 y 20 años?",
    imagen: "./assets/viaje-volumen/omb-tableros-reg-distrital-automotor.jpg",
  },
  {
    categoria: "Enfoque de género",
    titulo: "Movilidad y mujer",
    descripcion:
      "¿Sabías que el 42% de los viajes diarios de las mujeres se realizan a pie?",
    imagen: "./assets/enfoque-genero/omb-tableros-movilidad-mujer-min.jpg",
  },
  {
    categoria: "Transparencia",
    titulo: "Participación ciudadana",
    descripcion:
      "¿Sabías que el Sistema de Semaforización Inteligente de Bogotá - SSIB actualmente cuenta con más de 1605 semáforos en intersecciones viales?",
    imagen:
      "./assets/transparencia/omb-tableros-participacion-ciudadana-min.jpg",
  },
  {
    categoria: "Transparencia",
    titulo: "Ejecución presupuestal",
    descripcion:
      "¿Quieres saber cómo se está ejecutando el presupuesto de la Secretaría de movilidad en Bogotá este 2025?",
    imagen:
      "./assets/transparencia/omb-tableros-ejecucion-presupuestal-min.jpg",
  },
];

const buttons = document.querySelectorAll(".omb-button");
const cards = document.querySelectorAll(".omb-card-enlace");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("omb-content-button-active"));
    button.classList.add("omb-content-button-active");

    const categoriaSeleccionada = button.textContent.trim();

    cards.forEach((card) => {
      const categoriaCard = card.dataset.categoria;

      if (
        categoriaSeleccionada === "Todos los tableros" ||
        categoriaCard === categoriaSeleccionada
      ) {
        card.style.display = "flex"; // Mostrar
      } else {
        card.style.display = "none"; // Ocultar
      }
    });
  });
});
