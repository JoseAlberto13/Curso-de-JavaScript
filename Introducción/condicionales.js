'use strict'
var edad1 = 40;
var edad2 = 23;
if (edad1 > edad2) {2
    console.log("la edad1 es mayor, tiene", edad1);
} else if (edad1 == edad2) {
    console.log("Tienen la misma edad");
} else {
    console.log("la edad2 es mayor, tiene", edad2);
}

switch (edad1) { //Solo expirimente con la sintaxis, es un mal ejemplo la verdad
    case 10:
        console.log("es menor de edad");
        break;
    case 20:
        console.log("es un adolencete");
        break;
    case 30:
        console.log("un adulto trenton");
        break;
    case 40:
        console.log("un adulto cuarenton");
        break;
    default:
        console.log("No termina en cero");
        break;
}