/*
El scope es lo que determina la accesibilidad de nuestro 
código 

Global - Podemos acceder a ellas desde cualquier parte del codigo.

Local - Variables creadas dentro de una función, solo pueden ser 
        accedidas desde su función o una función anidada.
*/

var variableGolbal = "Esta es global";

function miFuncion(){
    alert(variableGolbal);

    var variableLocal = "Esta es una variable local";
}


miFuncion();


//Desde dentro de una función podemos acceder a variables de afuera

//Pero desde afuera no podemos acceder a variables locales

/*PROTEGER UNA FUNCION PARA QUE NO SEA ACCEDIDA DESDE TERCEROS

(function(){
    codigo
    codigo
    codigo
}())

*/

