'use strict'

var catergorias = ['Acción','Terror', 'Comedia','Drama'];
var peliculas = ['Misión Imposible', 'Espejismo', 'Mr Tusk', 'Vainilla Sky'];

var cine = [catergorias,peliculas];//Esto es un arreglo multidimensional

console.log(cine[0][2]); //El primer valor elige el arreglo y el segundo el indice de este
console.log(cine[1][2]);

peliculas.push("Vaca Loca");
console.log(peliculas);