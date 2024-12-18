'use strict'

function holaMundo(texto) {
    var otroTexto = "Hola mundo soy una variable local";
    console.log(texto);
    console.log(numero); //podemos llamar variables fuera de las funciones 
    console.log(otroTexto);
}

var texto = "Hola mundo soy una variable global";
var numero = 22.2;
holaMundo(texto)
//console.log(otroTexto); ¡No se pueden llamar a la variables definidas dentro de una funcion!

//Transformacion de datos

var number = 333;
var stringM = 'MAYUSCULAS';
var string = "Hola que hace";
console.log(number,typeof(number), stringM, typeof(stringM), string, typeof(string));

var changesVAR = number.toString();
console.log(typeof(changesVAR), changesVAR);

changesVAR = string.toUpperCase();
console.log(typeof(changesVAR), changesVAR);

changesVAR = stringM.toLowerCase();
console.log(changesVAR);

numero = parseInt(numero)
console.log(typeof(numero), numero);
document.writeln(number,numero)