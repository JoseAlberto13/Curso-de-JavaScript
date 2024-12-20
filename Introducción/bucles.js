'use strict'
//bucles
var numero = 10;
for (let i = 0; i <= numero; i++) {
    console.log("for iterando", i ,"veces");    
}
var x = 0;
while (x <= numero) {
    console.log("while iterando", x,"veces");
    x++;
}

do {
    alert("do while iterando en"+ numero+ "cuenta regresiva");
    numero--;
} while (numero > 0);