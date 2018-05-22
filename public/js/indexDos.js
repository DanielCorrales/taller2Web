var mov;

var slider = document.getElementById("rango");
var output = document.getElementById("demo");
var imagen = document.querySelector(".imagenJugadorInteraccion");
//imagen.style.width = slider.value + "px";
imagen.style.width = (150 + parseInt(slider.value)) + "px";
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  mov = this.value;
  imagen.style.width = (150 + parseInt(this.value)) + "px";
}