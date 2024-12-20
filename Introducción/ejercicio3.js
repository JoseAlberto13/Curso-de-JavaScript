'use strict'
//Funciones, se definen igual que en 'C'
function calculadora(n1,n2) {
var resultado = "La suma es = " +( n1 + n2) + "<br/>"+
                "La resta es = "+ (n1 - n2 )+ "<br/>"+
                "La multiplicación es = "+ (n1 * n2 )+"<br/>"+
                "La division es = "+ (n1 / n2)+"<br/>";
                
var resultadoCMD =  "La suma es = " +( n1 + n2) + "\n"+
                    "La resta es = "+ (n1 - n2 )+ "\n"+
                    "La multiplicación es = "+ (n1 * n2 )+"\n"+
                    "La division es = "+ (n1 / n2)+"\n";
document.write(resultado);
alert(resultadoCMD);
}

var num1 = parseInt(prompt("ingrese el primer numero: ",0));
var num2 = parseInt(prompt("ingrese el segundo numero: ",0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("ingrese el primer numero: ",0));
    num2 = parseInt(prompt("ingrese el segundo numero: ",0));
}

var calculamos = calculadora(num1,num2);