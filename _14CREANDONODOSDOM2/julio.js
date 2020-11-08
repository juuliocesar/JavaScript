/*¿Cómo agegar nodos y cómo crearlos en nuestro
código HTML?

Al crear un nodo se refiere a crear un elemento con una etiqueta
por ejemplo h2 como si lo hicieramos desde nuestro documento
HTML, en vez de crearlo en el doc de HTML lo crearemos desde 
JS

Esto es para hacer páginas dinámicas
Estos cambios se guardan temporalmente al menos que se guarden en un db

PASOS PARA CREAR UN NODO:

1.- Crear el elemento
2.- Crear un nodo de texto es decir el contenido del elemento
3.- Añadir el nodo de texto al elemento, juntar contenido con elemento
4.- Agregar atributos al elemento
5.- Agregar el elemento al documento

*/

//1 Utilizamos el método createElement("tipodeelemento")
var elemento = document.createElement("h2");

//2 Agregamos contenido
var contenido = document.createTextNode("Este es nuestro titular");

//3 Juntamos
elemento.appendChild(contenido);

//4 Podemos agregar atributos
elemento.setAttribute("id","pjs");

//Agregamos el elemento a nuestro documento
//Primero seleccionamos el elemento en donde ira en este caso el elemento que tenga la id con nombre subtitulo
// y luego agregamos el elemento que creamos

document.getElementById("subtitulo").appendChild(elemento);

//Para agregarlo al body
// document.body.appendChild(elemento);













