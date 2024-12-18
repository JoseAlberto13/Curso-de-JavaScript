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