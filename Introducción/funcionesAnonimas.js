'use strict'
//Funciones anonimas
//Es una funcion que no tiene nombre
var pelicula = function(nombre) {
    return "la pelicula es: " + nombre;
}

//Callback, Funciones sin nombres que pueden llamar otras funciones dentro de ellas sin nombre
function sumame(n1,n2,sumaYmuestra,sumaPorDos) {
    var sumar = n1 + n2;
    sumaYmuestra(sumar); //dato del segundo parámetro
    sumaPorDos(sumar); //dato del tercer parámetro
    return sumar;
}
//Invocando a las funciones como parametros, busca el valor dado a esta dentro de la función principal
sumame(3,3,function(dato) {
    console.log("La suma es =", dato);
},
function(dato) {
    console.log("Funcion 'callback' =",(dato *2));
});

//Intentando hacer cosas con ella en la consola, no puede, "Investigar mas sobre callbacks"