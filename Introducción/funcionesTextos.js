'use strict'
//Transformacion de textos
var texto1 = "Bienvenidos al curso de Victor Robles curso";
var texto2 = "Es muy buen curso la verdad";

var busqueda = texto1.search("curso");
//.lastIndexOf() .indexOf() .search() metodos de busqueda
console.log(typeof(busqueda),busqueda);

var busqueda1 = texto1.match(/curso/g);
// .match(/any/g) => de esta manera podemos buscar todas la palabras que se repitan en una variable
console.log(busqueda1);

busqueda1 = texto1.substring(0,4); 
// .substring(x,i) se posiciona en x y duevelve la cantidad de caracteres señalados en i
console.log(busqueda1);

busqueda1 = texto1.charAt(10);
//.charAt(x) busca el caracter en x, x tiene que ser un int
console.log(busqueda1);

console.log(texto1);

busqueda1 = texto1.startsWith("Bien");
//Si la cadena de texto inicia con los caracteres dentro del metodo esto sera True
console.log("startsWith1",busqueda1);

busqueda1 = texto1.startsWith("curso");
console.log("startsWith2",busqueda1);

busqueda1 = texto1.replace("Bienvenidos al","Este es el");
//Este metodo nos permite remplazar un texto por otro
console.log("Texto cambiado :",busqueda1);

busqueda1 = texto1.split(" ");
//.split(x) separa la cadena de texto por el caracter en 'x' y los guarda en un array
console.log(busqueda1);

busqueda1 = texto1.trim();
//Este metodo limpia la cadena de texto, dejadola sin espacion al incio y al final
//Util para correos y datos delicados
console.log(busqueda1);



//Funcion recursiva que me dio curiosidad saber que hacia...
//Es como que se fuesen apilando en esta llamada a la funcion dentro de la funcion
//Al retornar la funcion principal, se imprime la recursiva de los valores en pila al final
function recursiva(i) {
    if(i < 0)return;
    console.log("Inicio? "+i);
    recursiva(i-1);
    console.log("Fin? "+i);
}
recursiva(4)
/*ejemplo:
entra 4, 3, 2, 1, 0 -- se almacena --> 0, 1, 2, 3, 4
Este seria el ejemplo de pila
           4
           3
           2
           1
           0 ---> desapila en este punto.
Siendo el ulimo que entro el numero 0; la recursividad toma el ultimo valor que entro, en este caso el 0
*/