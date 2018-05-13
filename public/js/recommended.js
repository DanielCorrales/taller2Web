// filtro con min y max
console.log('hola cliente');
var slider = document.querySelector('#slider');
document.querySelector('.minMax').addEventListener('click', function (e) {
    e.preventDefault();
    location.href = '/?min=' + slider.value;
});


console.log('hola cliente');
var sliderUno = document.querySelector('#sliderUno');
document.querySelector('.minMaxUno').addEventListener('click', function (e) {
    e.preventDefault();
    location.href = '/?minUno=' + sliderUno.value;
});

var mov;

var sliderDos = document.getElementById("slider");
var outputDos = document.getElementById("demo");
var sliderTres = document.getElementById("sliderUno");
var outputTres = document.getElementById("demoDos");

outputDos.innerHTML = slider.value;
outputTres.innerHTML = slider.value;

sliderDos.oninput = function () {
    outputDos.innerHTML = this.value;
    mov = this.value;
}

sliderTres.oninput = function () {
    outputTres.innerHTML = this.value;
    mov = this.value;
}

function myFunction() {
    alert("Juego agregado al carrito");
}
