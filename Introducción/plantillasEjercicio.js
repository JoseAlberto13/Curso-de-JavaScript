'use strict'
//Plantillas de texto
var n4me = prompt("Ingresa tu Nombre");
var lastname = prompt("Ingresa tus Apellidos");
// var nombreCompleto = "Mi nombre es: "+ n4me + " mis apellidos: " + lastname; //No eficiente

//De la siguiente manera podemos mostrar un mensaje usando HTML con JavaScript, gracias a Ecmascript 6
//El uso de las comillas invertidas es clave `:D `
var fullName =`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${n4me}</h3>
    <h3>Mis Apellidos son: ${lastname}</h3>
`;
document.write(fullName)
