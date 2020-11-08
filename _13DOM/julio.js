/* EL DOM que nos permite acceder y poder manipular los 
elementos de nuestro documento es decir de nuestro sitio web }

DOCUMENT OBJECT MODEL: Es la estructura de nuestro sitio web,
comformada por elementos que se llaman nodos

DOM consta de dos elementos:

1.
    <head>
        .....
    </head>

2. 
    <body>
        ...
    </body>

El head puede tener elementos como <meta></meta>, <title></title>
el body puede tener elementos como <h1></h1>, <p></p> etc, todos esos
elementos son nodos que podemos acceder en el DOM

El objetivo del DOM es poder acceder a los elementos con JS de una manera
muy fácil, como formularios para obtener un valor y después poder trabajar con ello

*/

//Se puede acceder a los elementos por etiquetas

//Queremos traer todos nuestros elementos p
//Utilizamos getElementsByTagName("nombredelaetiqueta");
var elementosP = document.getElementsByTagName("p"); //Se guardan en forma de arreglo

//podemos acceder a los elementos como elementosP[0]
//Para ver el contenido de esa etiqueta, tecleamos elementosP[0].innerHTML

//Para cambiar el contenido del elemento podemos escribir:
//elementosP[0].innerHTML = "Nuevo contenido my boy"

//Con esto podemos modificar nuestro sitio web del lado del cliente


//ACCEDER A ELEMENTOS POR SU ID

var segundoParrafo = document.getElementById("p2");

