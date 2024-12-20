'use strict'

/* Programa que pida dos números y que muestre el mayor y el menor de ellos, o si son iguales.
Extra: Si el dato ingresado no es un número o si son menores o iguales a cero, vuelva a hacer la petición*/


var numero1 = parseInt(prompt("Ingrese el primer número:", 0));
var numero2 = parseInt(prompt("Ingrese el segundo número:", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("Ingrese el primer número:", 0));
    var numero2 = parseInt(prompt("Ingrese el segundo número:", 0));
}

if (numero1 == numero2) {
    alert("Los número son iguales");
}else if(numero1 > numero2) {
    alert("El número mayor es: "+ numero1 + "\n" +
        "El número menor es: "+ numero2);
}else if(numero2 > numero1) {
    alert("El número mayor es: "+ numero2 + "\n" +
        "El número menor es: "+ numero1);
}