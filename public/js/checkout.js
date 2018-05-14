// manda variables a carrito para mostrar esa imagen

console.log(arreglo);

fetch('http://localhost:5000/productosPorId?id='+arreglo)
.then(function(res){
    console.log('http://localhost:5000/productosPorId?id='+arreglo);
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.lista');
    res.forEach(function(elem){
        lista.innerHTML += '<li class="claseLi"><img class="imagenDeCarrito" width="260" src="'+elem.imagen+'">' + '<img class="logoDeCarrito"width= "186" src="'+elem.logo+'">' + '</li>';
    });
});

//Uso del SweetAlert
document.getElementById('botonComprar').addEventListener('click', tomarDatos);

function tomarDatos(e) {
    e.preventDefault();

    var mail = document.getElementById('cuadro').value;
    swal("Gracias por comprar", "Disfruta de tus juegos, " + mail, "success");
}