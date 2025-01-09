'use strict'

// Caputamos el elmento por su id e cambiamos o agregamos contenido con ayuda de innerHTML
document.getElementById("subtitulo").innerHTML = "getElementById e innetHTML";

// Podemos asignar estos elementos a variables para que la manipulación sea más sencilla
var micaja = document.getElementById("caja");
micaja.innerHTML = "Nos permite cambiar el contenido dentro de la etiqueta con JS!";

// Cambiar el estilo con CSS desde JS
micaja.style.background = "skyblue"; 
micaja.style.padding = "30px";
micaja.style.color = "green";

// Agregar o modificar las clases de nuestras etiquetas
micaja.className = "texto plano";

console.log(micaja);

// querySelector ("tag", "# = id", ". = class")
var subtitulo = document.querySelector("#subtitulo");
subtitulo.style.background = "blue";
subtitulo.style.padding = "20px"
subtitulo.style.color = "white";