$(function(){
    $('[data-toogle="tooltip"]').tooltip()
})

const cantidadEntradas=document.getElementById('cantidadEntrada')

const botonCalcular=document.getElementById('botonCalcular')

const categoria=document.getElementById('InputState')

const totalCompra=document.getElementById('totalCompra')






function resumen(){

console.log(categoria.value)

console.log(cantidadEntradas.value)

var precioPorEntrada =200;
var descuento = 0;

if(categoria = estudiante) {
    descuento = precioPorEntrada * 0.8;
} 
else if(categoria = trainee){
    descuento = precioPorEntrada *0.5;
} 
else if(categoria = junioir){
    descuento = precioPorEntrada *0.15;}

    var precioSinDescuento = cantidadEntradas*precioPorEntrada;
    var precioConDescuento = precioSinDescuento -descuento;




cantidadEntradas.value


totalCompra.innerHTML=cantidadEntradas.value}


