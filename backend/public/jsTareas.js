// 1- Seleccionar un elemento por su tag
let titulo = document.getElementsByTagName("h2");

// 2- Seleccionar por su Id
let inputSugerencia = document.getElementById("input-sugerencia");
let mensajeError = document.getElementById("mensaje-error");
// 3- Seleccionar por su class
let btnAgregar = document.getElementsByClassName("btn-agregar")[0];

// 7- Seleccionar los span con querySelectorAll
const textoSugerencia = document.querySelectorAll(".sugerencia span");

// 8- Botones para eliminar (esto selecciona los botones existentes, los nuevos se crean dinámicamente)
const btnEliminar = document.querySelectorAll(
  "#contenedor-sugerencias .sugerencia button"
);

// 9- Contenedor general de sugerencias por Id
const contenedorSugerencias = document.getElementById("contenedor-sugerencias");

// Funcion para agregar sugerencias
function agregarSugerencia() {
  let texto = inputSugerencia.value.trim();
  console.log("Usted ingreso...", texto);
  mensajeError.style.display = "none";
  mensajeError.textContent = "";

  if (texto === "") {
    mensajeError.textContent = "⚠️ El campo no puede estar vacío.";
    mensajeError.style.display = "block";
    return;
  }

  // crear el div contenedor de la Sugerencia
  const divSugerencia = document.createElement("div");
  divSugerencia.classList.add("sugerencia");

  // crear el span
  const spanSugerencia = document.createElement("span");
  spanSugerencia.textContent = texto;

  // crear el boton de eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "❌";

  // Agregamos los elementos al div de sugerencias
  divSugerencia.appendChild(spanSugerencia);
  divSugerencia.appendChild(btnEliminar);

  // Agregamos al contenedor principal
  contenedorSugerencias.appendChild(divSugerencia);

  inputSugerencia.value = "";
}

// Escuchador de eventos para agregar una sugerencia
btnAgregar.addEventListener("click", agregarSugerencia);

// Eliminar una sugerencia
contenedorSugerencias.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const sugerenciaAEliminar = event.target.parentElement;
    sugerenciaAEliminar.remove();
  }
});

//Sumar Nota
let displayJC = 0;
const displayElement = document.getElementById("displayJC");
function actualizarDisplay() {
  document.getElementById("displayJC").innerHTML = displayJC;
}
function sumar() {
  displayJC = displayJC + 1;
  actualizarDisplay();
}
function restar() {
  displayJC = displayJC - 1;
  actualizarDisplay();
}
function reset() {
  displayJC = 0;
  actualizarDisplay();
}
// Inicializar el display al cargar la página
actualizarDisplay();
