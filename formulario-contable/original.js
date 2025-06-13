(function ($, Drupal) {
  Drupal.behaviors.miComportamiento = {
    attach: function (context, settings) {
      once("mi-comportamiento", ".fidu-select-linea", context).forEach(
        function (element) {
          const lineaSelect = document.getElementsByName("linea_de_negocio")[0];
          const valor = lineaSelect?.value?.trim();

          const municipioSelect =
            document.getElementsByName("select_municipio")[0];

          municipioSelect.style.pointerEvents = "none";

          const tipoAnexo = document.getElementsByName(
            "seleccione_un_tipo_de_anexo"
          )[0];
          const representanteLegal = document.getElementsByName(
            "el_anexo_esta_firmado_por_representante_legal_contador_publico_o"
          )[0];
          document.getElementsByName(
            "el_gasto_de_publicidad_no_hace_de_los_costos_sino_del_gasto_vali"
          )[0].style.display = "none";
          //const gastoPuclicidad = document.getElementsByName("el_gasto_de_publicidad_no_hace_de_los_costos_sino_del_gasto_vali")[0];
          const fechaFactura = document.getElementsByName(
            "las_fechas_de_factura_de_venta_no_son_anteriores_al_mes_de_cierr"
          )[0];
          const registroInmuebles = document.getElementsByName(
            "en_el_campo_de_resgistro_de_inmuebles_se_encuentra_relacionado_s"
          )[0];
          const conceptoAbono = document.getElementsByName(
            "paracadaitemregistradoseencuentra"
          )[0];
          const existenProrratas = document.getElementsByName(
            "si_existes_prorratas_y_subrogaciones_estan_diligenciados_los_cam"
          )[0];
          const botonEnviar = document.querySelector('[name="op"]');

          let camposRequeridos = [];

          const inputValorAnexo = document.getElementById("edit-valor-anexo");
          const fileInput = document.getElementById("edit-adjuntar-pdf");
          const excelInput = document.getElementById("edit-adjuntar-excel");
          const campoAnexo = document.querySelector("[name=valor_sin_decimal]");

          fileInput.addEventListener("change", validarCampos);
          excelInput.addEventListener("change", validarCampos);

          $("#edit-valor-anexo").on("input", validarCampos);

          function validarCampos() {
            // Obtener el valor del input
            const valorAnexo = inputValorAnexo.value.trim();
            const limpio = valorAnexo
              .replace(/\$/g, "")
              .replace(/\s/g, "")
              .replace(/\.00$/, "")
              .replace(/,/g, "")
              .replace(/\./g, "");

            const entero = parseInt(limpio, 10);
            const valorValido = !isNaN(entero) && entero > 0;

            campoAnexo.value = entero;

            console.log("Valor anexo:", valorAnexo);
            console.log("Limpio:", limpio);
            console.log("Entero:", entero);
            console.log("Valor válido:", valorValido);
            console.log("campo anexo", campoAnexo.value);

            ////

            (function ($) {
              // Función reutilizable: retorna true si hay uno o más archivos cargados
              function tieneArchivos(campo) {
                const $fids = $(`input[name^="${campo}"][name*="[fids]"]`);
                return (
                  $fids.length > 0 &&
                  $fids.filter((_, el) => $(el).val()).length > 0
                );
              }

              // Función adicional: retorna un array con los FIDs cargados
              function obtenerFIDs(campo) {
                return $(`input[name^="${campo}"][name*="[fids]"]`)
                  .map((_, el) => $(el).val())
                  .get()
                  .filter((fid) => fid); // Elimina vacíos
              }

              // Ejecuta al cargar la página
              $(function () {
                if (tieneArchivos("adjuntar_pdf")) {
                  const fids = obtenerFIDs("adjuntar_pdf");
                  console.log("Archivos precargados:", fids);
                } else {
                  console.log("No hay archivos al cargar sm");
                }
              });

              // Detecta cuando se suben archivos vía AJAX
              $(document).on("ajaxComplete", function () {
                if (tieneArchivos("adjuntar_pdf")) {
                  const fids = obtenerFIDs("adjuntar_pdf");
                  console.log("Archivos cargados vía AJAX:", fids);
                } else {
                  console.log("Campo aún sin archivos sm");
                }
              });
            })(jQuery);

            ////

            const pdfAdjunto = fileInput?.files?.length > 0;
            const excelAdjunto = excelInput?.files?.length > 0;

            console.log("PDF adjunto:", pdfAdjunto);
            console.log("Excel adjunto:", excelAdjunto);

            const todosRequeridos = camposRequeridos.every(
              (campo) => campo?.checked
            );
            console.log(
              "Todos los campos requeridos marcados:",
              todosRequeridos
            );

            const todoValido =
              valorValido && pdfAdjunto && excelAdjunto && todosRequeridos;
            console.log("¿Todo válido?:", todoValido);

            botonEnviar.disabled = !todoValido;
          }

          function actualizarCamposSegunAnexo(valor) {
            if (valor === "3" || valor === "6") {
              camposRequeridos = [representanteLegal];
            } else if (valor === "4" || valor === "8") {
              camposRequeridos = [
                representanteLegal,
                fechaFactura,
                registroInmuebles,
              ];
            } else if (valor === "5") {
              camposRequeridos = [
                representanteLegal,
                conceptoAbono,
                existenProrratas,
              ];
            } else {
              camposRequeridos = [];
            }
            validarCampos();
          }

          if (tipoAnexo) {
            tipoAnexo.addEventListener("change", function () {
              actualizarCamposSegunAnexo(this.value);
            });
          }

          // Añadir listeners a todos los checkboxes implicados para que al cambiar se vuelva a validar
          [
            representanteLegal,
            //gastoPuclicidad,
            fechaFactura,
            registroInmuebles,
            conceptoAbono,
            existenProrratas,
          ].forEach((checkbox) => {
            checkbox?.addEventListener("change", validarCampos);
          });

          if (valor === "2 - INMOBILIARIO") {
            let selectedNegocio = "";
            let selectedMunicipio = "";

            const negocioSelect =
              document.getElementsByName("select_negocio")[0];
            const municipioSelect =
              document.getElementsByName("select_municipio")[0];

            municipioSelect.style.pointerEvents = "none";

            if (negocioSelect) selectedNegocio = negocioSelect.value;
            if (municipioSelect) selectedMunicipio = municipioSelect.value;

            let productoDataRaw =
              document.getElementsByName("producto_data")[0];
            let municipiosDataRaw =
              document.getElementsByName("municipios_data")[0];

            let productoData = [];
            let municipiosData = [];

            if (productoDataRaw) {
              const parsedProducto = JSON.parse(productoDataRaw.value);
              productoData = parsedProducto[0].var.data; // <- acceder al array interno
              console.log("Producto Data:", productoData);
            }

            if (municipiosDataRaw) {
              parsedmunicipios = JSON.parse(municipiosDataRaw.value);
              municipiosData = parsedmunicipios[0].var; // <- acceder al array interno
              console.log("Municipios Data:", municipiosData);
            }

            const cruceNegocioRaw =
              document.getElementsByName("cruce_negocio")[0];
            let negociosPermitidos = [];

            if (cruceNegocioRaw && cruceNegocioRaw.value) {
              try {
                // Convertir texto con &quot; a JSON válido
                const jsonText = cruceNegocioRaw.value.replace(/&quot;/g, '"');
                const cruceData = JSON.parse(jsonText);
                negociosPermitidos =
                  cruceData?.data?.lineaNegocio?.[0]?.negocios || [];
              } catch (e) {
                console.error("Error al parsear cruce_negocio:", e);
              }
            }

            // Llenar select de negocios filtrando por negociosPermitidos
            negocioSelect.innerHTML = `<option value="" selected>Seleccione una opción</option>`;
            const negociosUnicos = new Set();

            productoData.forEach((item) => {
              if (
                negociosPermitidos.includes(item.numeroNegocio) && // Solo mostrar si está permitido
                !negociosUnicos.has(item.numeroNegocio)
              ) {
                negociosUnicos.add(item.numeroNegocio);

                const option = document.createElement("option");
                option.value = item.numeroNegocio;
                option.text = item.nombreNegocio;

                if (item.numeroNegocio === selectedNegocio) {
                  option.selected = true;
                }

                negocioSelect.appendChild(option);
              }
            });

            // Listener: al cambiar negocio, llenar municipios
            negocioSelect.addEventListener("change", function () {
              const negocioSeleccionado = this.value;
              municipioSelect.innerHTML = `<option value="" selected>Seleccione municipio</option>`;

              // Guardar el nombre del negocio en el campo oculto
              const selectedOption =
                negocioSelect.options[negocioSelect.selectedIndex];
              const inputNombreNegocio =
                document.getElementsByName("nombre_negocio")[0];
              if (inputNombreNegocio && selectedOption) {
                inputNombreNegocio.value = selectedOption.text;
              }

              const municipiosFiltrados = municipiosData.filter(
                (m) => (m.negocio || "").trim() === negocioSeleccionado.trim()
              );

              municipiosFiltrados.forEach((m, index) => {
                const option = document.createElement("option");
                option.value = m.municipio;
                option.text = m.municipio;

                if (index === 0) {
                  option.selected = true;
                }

                municipioSelect.appendChild(option);
              });

              municipioSelect.dispatchEvent(new Event("change"));
            });
          }

          const selectMes = document.querySelector('[name="select_mes"]');
          const targetDivTabla = document.querySelector(
            ".webform-submission-form > div:nth-child(6)"
          );

          const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ];

          const mesActualIndex = new Date().getMonth(); // 0 a 11
          const mesActualNombre = meses[mesActualIndex];

          // Ocultar meses posteriores al actual
          Array.from(selectMes.options).forEach((option) => {
            const indexMes = meses.indexOf(option.value);
            if (indexMes > mesActualIndex) {
              option.style.display = "none";
            }
          });

          // Listener: advertir si selecciona mes anterior
          selectMes.addEventListener("change", function () {
            const mesSeleccionadoIndex = meses.indexOf(this.value);
            if (mesSeleccionadoIndex < mesActualIndex) {
              mensajeAlerta(
                targetDivTabla,
                "Recuerde que la información enviada quedará contabilizada de forma extemporánea."
              );
            }
            /////////////////////////////////////////////////////////////////////////
            function obtenerTercerDiaHabilDelMesActual(festivos) {
              const fecha = new Date();
              const anio = fecha.getFullYear();
              const mes = fecha.getMonth();

              let contadorDiasHabiles = 0;
              let dia = 1;
              let tercerDiaHabil = null;

              while (contadorDiasHabiles < 3) {
                const fechaIterada = new Date(anio, mes, dia);
                const esFinDeSemana =
                  fechaIterada.getDay() === 0 || fechaIterada.getDay() === 6;

                const esFestivo = festivos.some((f) => {
                  const festivoDate = new Date(f.fecha);
                  return (
                    festivoDate.toDateString() === fechaIterada.toDateString()
                  );
                });

                if (!esFinDeSemana && !esFestivo) {
                  contadorDiasHabiles++;
                  if (contadorDiasHabiles === 3) {
                    tercerDiaHabil = fechaIterada;
                  }
                }

                dia++;
              }

              return tercerDiaHabil;
            }

            // Obtener y parsear los festivos desde el campo oculto
            const festivosRaw = document.getElementsByName("festivos_data")[0];
            let festivos = [];

            if (festivosRaw) {
              try {
                const parsed = JSON.parse(festivosRaw.value);
                festivos = parsed[0]?.var || [];
              } catch (e) {
                console.error("Error al parsear festivos_data", e);
              }
            }

            const hoy = new Date();
            const tercerDiaHabil = obtenerTercerDiaHabilDelMesActual(festivos);

            if (hoy > tercerDiaHabil) {
              const targetDivTabla = document.querySelector(
                ".webform-submission-form > div:nth-child(6)"
              );
              mensajeAlerta(
                targetDivTabla,
                "Recuerde que la información enviada quedará contabilizada de forma extemporánea."
              );
            }
            ////////////////////////////////////////////////////////////////////////////////
          });

          // Seleccionar por defecto el mes actual
          //selectMes.value = mesActualNombre;

          // Función para mostrar mensaje tipo alerta bootstrap
          function mensajeAlerta(targetElement, mensaje) {
            // Evitar mensajes repetidos
            const nextSibling = targetElement.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains("alert-warning"))
              return;

            const alerta = document.createElement("div");
            alerta.setAttribute("aria-label", ".");
            alerta.setAttribute("data-component-id", "bootstrap_barrio:alert");
            alerta.className =
              "alert alert-dismissible d-flex align-items-center fade show col-12 alert-warning mt-2";
            alerta.setAttribute("data-drupal-selector", "messages");
            alerta.setAttribute("role", "alert");

            alerta.innerHTML = `
      <div>
        <h2 class="alert-heading"></h2>
        ${mensaje}
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

            targetElement.insertAdjacentElement("afterend", alerta);

            setTimeout(() => {
              alerta.classList.remove("show");
              alerta.classList.add("fade");
              setTimeout(() => alerta.remove(), 100000);
            }, 100000);
          }

          //   (function ($) {
          //     $(document).ready(function () {
          //       // Solo valida si el usuario escribió algo y luego salió del campo
          //       $(campos.join(",")).each(function () {
          //         let inputElement = $(this);

          //         inputElement.data("touched", false);

          //         inputElement.on("input", function () {
          //           inputElement.data("touched", true);
          //         });

          //         inputElement.on("blur", function () {
          //           let touched = inputElement.data("touched");
          //           let value = inputElement.val().trim();

          //           if (!touched || value === "") return; // si no tocó o está vacío, no valida

          //           const input = document.getElementById("edit-valor-anexo");

          //           // Obtener el valor del input
          //           let valorAnexo = input.value;
          //           let campoAnexo =
          //             document.getElementsByName("valor_sin_decimal")[0];

          //           // Quitar símbolo $, espacios, puntos y decimales
          //           let limpio = valorAnexo
          //             .replace(/\$/g, "") // Quita el símbolo $
          //             .replace(/\s/g, "") // Quita espacios
          //             .replace(/\.00$/, "") // Quita decimales .00 si están
          //             .replace(/,/g, "") // Quita comas si existieran
          //             .replace(/\./g, ""); // Quita puntos de miles

          //           // Convertir a entero
          //           let entero = parseInt(limpio, 10);

          //           campoAnexo.value = entero;

          //           console.log("campoAnexo valor es", campoAnexo.value);

          //           // Resultado
          //           console.log(entero); // Ej: 1000000

          //           //if (!/^-?[1-9]\d*$/.test(value)) {
          //           //inputElement.val('');
          //           //mensajeAlerta(targetDivValor, 'Por favor, ingrese un valor de anexo válido (entero distinto de 0).');
          //           //}
          //         });
          //       });
          //     });
          //   })(jQuery);

          let pdfFiles = [];
          console.log(pdfFiles);

          jQuery(document).ajaxSuccess(function (event, xhr, settings) {
            (function ($) {
              $(document).ready(function () {
                const fileInput = document.querySelector(
                  '[id^="edit-adjuntar-pdf"]'
                );
                const excelInput = document.querySelector(
                  '[id^="edit-adjuntar-excel"]'
                );
                const form = document.querySelector(
                  '[id^="webform-submission-14-anexos-contables2-add-form"]'
                );
                const tamanio_excel =
                  document.getElementsByName("tamanio_excel")[0];
                const tamanio_pdf =
                  document.getElementsByName("tamanio_pdf")[0];

                if (!fileInput || !excelInput || !form) {
                  console.warn("Faltan elementos clave en el DOM.");
                  return;
                }
                console.log(pdfFiles);
                const hiddenInputs = [
                  document.querySelector('input[name="adjuntar_pdf_1"]'),
                  document.querySelector('input[name="adjuntar_pdf_2"]'),
                  document.querySelector('input[name="adjuntar_pdf_3"]'),
                  document.querySelector('input[name="adjuntar_pdf_4"]'),
                  document.querySelector('input[name="adjuntar_pdf_5"]'),
                  document.querySelector('input[name="adjuntar_pdf_6"]'),
                  document.querySelector('input[name="adjuntar_pdf_7"]'),
                  document.querySelector('input[name="adjuntar_pdf_8"]'),
                  document.querySelector('input[name="adjuntar_pdf_9"]'),
                  document.querySelector('input[name="adjuntar_pdf_10"]'),
                ];

                let pdfSizeMB = 0;
                let excelSizeMB = 0;

                // Excel
                excelInput.addEventListener("change", function (event) {
                  const file = event.target.files[0];
                  if (file) {
                    excelSizeMB = file.size / (1024 * 1024);
                    console.log(
                      `Tamaño del Excel: ${excelSizeMB.toFixed(2)} MB`
                    );
                    tamanio_pdf.value = 25 - excelSizeMB;
                    console.log(
                      "Tamaño disponible para PDF:",
                      tamanio_pdf.value
                    );
                    checkTotalSize();
                  }
                });

                // PDFs (acumulativo)
                fileInput.addEventListener("change", function (event) {
                  const newFiles = Array.from(event.target.files);
                  const combinedFiles = [...pdfFiles, ...newFiles];

                  const uniqueFiles = [];
                  const fileMap = new Set();

                  for (const file of combinedFiles) {
                    const identifier = file.name + Date.now();
                    if (!fileMap.has(identifier) && uniqueFiles.length < 10) {
                      fileMap.add(identifier);
                      uniqueFiles.push(file);
                    }
                  }

                  pdfFiles = uniqueFiles;
                  pdfSizeMB = 0;

                  // Limpiar campos ocultos
                  hiddenInputs.forEach((input) => {
                    if (input) input.value = "";
                  });

                  pdfFiles.forEach((file, index) => {
                    pdfSizeMB += file.size / (1024 * 1024);
                    const reader = new FileReader();
                    const currentIndex = index;

                    reader.onload = function (e) {
                      const base64 = e.target.result.split(",")[1];
                      if (hiddenInputs[currentIndex]) {
                        hiddenInputs[currentIndex].value = base64;
                        console.log(
                          `PDF ${currentIndex + 1} convertido y guardado`
                        );
                      }
                    };

                    reader.onerror = function (e) {
                      console.error(`Error leyendo archivo ${file.name}:`, e);
                    };

                    reader.readAsDataURL(file);
                  });

                  setTimeout(checkTotalSize, 500);
                });

                function checkTotalSize() {
                  const totalMB = pdfSizeMB + excelSizeMB;
                  console.log(`Tamaño combinado: ${totalMB.toFixed(2)} MB`);

                  const totalSizeInput = document.querySelector(
                    'input[name="tamaño_file"]'
                  );
                  if (totalSizeInput) {
                    totalSizeInput.value = totalMB.toFixed(2);
                    console.log(
                      `Campo "tamaño_file" actualizado: ${totalSizeInput.value} MB`
                    );
                  }
                }
              });
            })(jQuery);
          });
        }
      );
    },
  };
})(jQuery, Drupal);
