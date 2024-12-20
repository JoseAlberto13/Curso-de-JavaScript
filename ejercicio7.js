'use strict'

// Muestra la tabla de multiplicar de un número ingresado por el usuario

var numero = parseInt(prompt("¿De que númeor quieres la tabla de multiplicar?", 0));

document.write("<h1>Tabla de Multiplicar del ", numero, "</h1>");
for(var i = 1; i <= 10; i++){
    document.write(numero, " x ", i, " = ", i*numero, "<br/>")
}

// Extra: Muestra todas las tablas de multiplicar del 1 al 10

for(var x = 1; x <= 10; x++){
    document.write("<h1>Tabla de Multiplicar del ", x, "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(x, " x ", i, " = ", i*x, "<br/>")
    } 
}