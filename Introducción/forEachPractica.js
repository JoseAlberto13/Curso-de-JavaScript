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

document.write('<br><lu>Usando el for in para la lista');
for(let lenguaje in lenguajes){
    document.write(`<li>${lenguajes[lenguaje]}</li>`);
}
document.write('</lu>');


// Busquedas

//búsqueda funcion anónima normal
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});
document.write(`<h2>${busqueda}</h2>`);

//busqueda con arrow function
var busqueda2 = lenguajes.find(lenguaje => lenguaje == "Python");
document.write(`<h2>${busqueda2}</h2>`);

var edades = [10, 32, 22, 40, 50];
var busquedaE = edades.some(edad => edad < 18); // el método some busca una condición concreta y nos devuelve un valor booleano.
console.log(busquedaE); // si el elemento fue encontrado True o de lo contario mostraría False