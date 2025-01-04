'use strict'

/*
Programa que pida 6 números por pantlla y los meta en un array, Muestra el array entero en el cuerpo de la página y en la consola.
Ordenalos y muestralos de forma ascedente y desendente.
Muestra cuantos elementos tiene el array.
Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
*/

function mostrarArray(array, textoCustom = "") {
    document.write(`<h2>Contenido del Array ${textoCustom}</h2>`);
    document.write("<ul>");
    array.forEach(elemento => {
        document.write(`<li>${elemento}</li>`);
    });
    document.write("</ul>");
}

var numeros = [];

for(var i = 0; i < 6; i ++){
    console.log(i);
    numeros.push(parseInt(prompt("Introduce un número: ", 0)));
}

console.log(numeros);
mostrarArray(numeros, "Números ingresados");

numeros.sort((a , b) => a - b);
mostrarArray(numeros, "Números orden ascendente");
console.log(numeros);

console.log(numeros.reverse());
mostrarArray(numeros, "Números orden descendente");

console.log(`Elementos dentro del array: ${numeros.length}`);

var busqueda = parseInt(prompt("Ingresa el número que deseas buscar en la lista:", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion != -1){
    document.write(`<hr/><h2>Número ${busqueda} encontrado en la posición ${posicion}</h2><hr/>`);
} else {
    document.write(`<hr/><h2>Número ${busqueda} no se encuentra en la lista</h2><hr/>`);
}