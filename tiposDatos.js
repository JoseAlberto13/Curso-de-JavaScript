'use strict'
var n1 = 4;
var n2 = 20;
console.log(typeof n1, typeof n2); //vemos el tipo de dato con typeof
console.log(n2);
var resultado = n1 + n2;
console.log(resultado)
console.log(parseInt(resultado)); //parseamos el resultado con parseInt para que redondee el resultado
if (n1 != n2) {
    console.log(true);
} else {
    console.log(false);
}