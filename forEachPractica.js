'use strict'
//Recorriendo un arreglo con forEach, este metodo tiene una funcion de callback
//Definimos el arreglo
var lenguajes = ["Python","JavaScript","C","C++","C#","PHP","Java"];
document.write(`
    <h1>Lenguajes de Programación</h1>
    <h2>Estos son los lenguajes dentro del arreglo:</h2>
    <h3>${lenguajes}</h3>
    `);

document.write('<lu>Usando el forEach para la lista');
lenguajes.forEach((elementos) => document.write(`<li>${elementos}</li>`));
document.write('</lu>');