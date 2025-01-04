'use strict'

var catergorias = ['Acción','Terror', 'Comedia','Drama'];
var peliculas = ['Misión Imposible', 'Espejismo', 'Mr Tusk', 'Vainilla Sky'];

var cine = [catergorias,peliculas];//Esto es un arreglo multidimensional

console.log(cine[0][2]); //El primer valor elige el arreglo y el segundo el indice de este
console.log(cine[1][2]);

peliculas.push("Vaca Loca");
console.log(catergorias);
console.log(peliculas);
console.log(cine);

// Agregando elementos al array con do while

// var agregarPeli = "";
// do {
//     agregarPeli = prompt("Ingresa el nombre de la Pelicula :D");
//     peliculas.push(agregarPeli);
// } while (agregarPeli != "Cerrar");

// peliculas.pop() //Eliminamos el ultimo elemento porque se agregar el cerrar
// console.log(peliculas);

// Convertir un array en string

var peliculas_String = peliculas.join();
console.log(peliculas_String);

// Convertir una cadena de texto en array

var candena_texto = "convertiremos esto en un array"
var cadena_array = candena_texto.split(" ");
console.log(`Cadena de texto: ${candena_texto}`);
console.log(cadena_array);

// Ordenar arrays
var numeros = [3, 1, 4, 2, 5];
console.log(numeros);

numeros.sort() // El método sort, ordena en orden alfabetico. En caso de que los números sean más grandes es necesario hacer una funcion anónima sort((a,b) => a-b)
catergorias.sort()
console.log(numeros);
console.log(catergorias);

catergorias.reverse() // El método reverse, invierte el orden del arreglo
numeros.reverse()
console.log(numeros);
console.log(catergorias);