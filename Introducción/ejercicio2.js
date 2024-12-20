'use strict'

var num1 = parseInt(prompt("Ingrese el primer numero:",0));
var num2 = parseInt(prompt("Ingrese el segundo numero:",0));
document.write("<h1>De ",num1," a ",num2," estan estos numeros:</h1>")
for (let i = num1; i <= num2; i++) {
    console.log(i);
    document.write(i,"<br>");
}