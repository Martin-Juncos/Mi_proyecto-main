//Calcular edad
document.getElementById("cumple").addEventListener("change", function () {
  const fechaNacimiento = new Date(this.value);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  const dia = hoy.getDate() - fechaNacimiento.getDate();

  // calculo si aún no cumplió años este año
  if (mes < 0 || (mes === 0 && dia < 0)) {
    edad--;
  }

  document.getElementById("age").value = isNaN(edad) ? "" : edad;
});



function calcularCumple() {
  let cumple = document.getElementById("fecha").value;
  document.getElementById("calcularCumple").innerHTML = "Nombre: " + cumple;
}


