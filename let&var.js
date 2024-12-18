'use strict'
 //Prueba de var y let "Diferencias"
var numero = 20;
console.log(numero); //Valor inicial (20)
if(true){
    var numero = 40;
    console.log(numero); //Cambiamos el valor a (40)
}
console.log(numero); //Mantiene el valor despues del cambio (40)

let numeroLet = 30;
console.log(numeroLet); //Valor inicial (20)
if(true){
    let numeroLet = 60;
    console.log(numeroLet); //Cambiamos el valor a (40)
}
console.log(numeroLet); //Vuelve al valor inicial (20) no mantiene el cambio a diferencia de var