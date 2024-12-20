'use strict'
//Parametros REST y SPREAD (en Arrays)
function listadoFrutas(fruta1, fruta2,...todasLasFrutas) {
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(todasLasFrutas);
}
listadoFrutas("manzana","naranja","coco","mandarina","lechoza");

//Podemos definir el arreglo y despues llamar a la funcion con el arreglo de esa manera
//para que sigan agregandose elementos...
var frutas = ["mango", "melon"];
listadoFrutas(...frutas,"patilla", "parchita", "toronja")


// Recorrer un array con un for

var nombres = ["José", "Alberto", "Carlos", "Andrés", "Gabriel", "Gerardo"];
nombres.push("Pedro");
document.write("<h3>" + nombres + "</h3>");
var tamanio = nombres.length;

document.write("<ul>");
for(var i = 0; i < tamanio; i++){
    document.write(`<li> ${nombres[i]} </li>`); // Template Literals "Formateo moderno ES6"
}
document.write("</ul>");

/* Recorriendo un array con forEach
Los parametros index y data son opcionales si simplemente queremos recorrer el array */

document.write("<ol>"); 
nombres.forEach((element, index, data) => {
    document.write(`<li> Elemento: ${element} --- Indice: ${index}</li>`)
    console.log(data);
});
document.write("</ol>"); 