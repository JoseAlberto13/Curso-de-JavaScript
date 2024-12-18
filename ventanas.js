//Ventanas
'use strict'

//Sirve para mostrar errores "alertas necesarias"
alert("Mensaje invasivo");

//Para seguir la peticion del usuario, si el la desease o no.
confirm("Me da la opcion de elegir Aceptar o Cancelar"); 

//Para pedir una entrada "Ingreso" de dato, por defecto lo hace un String.
var mi_promptEdad = prompt("Que edad tienes?");
console.log(mi_promptEdad, typeof mi_promptEdad, "<-- este es el promt original");
mi_promptEdad = parseInt(mi_promptEdad); //Podemos parsear los prompts
console.log(mi_promptEdad, typeof mi_promptEdad, "<-- prompt parseado");

