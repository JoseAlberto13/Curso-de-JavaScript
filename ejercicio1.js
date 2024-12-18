'use strict'
var n1 = parseInt(prompt("Ingresa el primer numero",0));
var n2 = parseInt(prompt('Ingresa el segundo numero',0));
if (n1 == n2) {
    console.log("Los numero son iguales");
}else if(n1 > n2){
    console.log(n1, "El 1er ingreso es el numero mayor y", n2, "2do es el menor");
} else {
    console.log(n2, "El 2do ingreso es el numero mayor y", n1, "1ro es el menor");
}