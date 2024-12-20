'use strict'

// Hacer un programa que mustre todos los numeros entre dos numeros introducimdos por el usuario

var numero1 = parseInt(prompt("Introduce el primer número ", 0));
var nuemro2 = parseInt(prompt("Introduce el segunodo númeor ", 0));

document.write("<h1>Del ", numero1, " a ", nuemro2, " están estos números:</h1>")
for (var i = numero1; i <= nuemro2; i++) {
    document.write(i,"<br/>");  
}