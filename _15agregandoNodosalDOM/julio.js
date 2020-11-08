/*¿Cómo posicionar esos elementos que creamos en donde queramos etc? */

//Creamos elemento
var elemento = document.createElement("li")

texto = "julio you are the goat"

var contenido = document.createTextNode(texto);

//Agregamos el contenido y tenemos nuestro nodo
elemento.appendChild(contenido);

/*Para agregar el nodo a donde queramos necesitamos primero
tener el elemento padre al cual se va a agregar */

var padre = document.getElementById("lista"); //Es el nombre de nuestra lista en el HTML

//La otra forma es con elementos by tagname nos devuelve un arreglo que tiene todos los elementos li con parentNode le estamos diciendo que traiga su padre o sea el <ol>:
//var padre = document.getElementsByTagName("li")[0].parentNode;

//Con esto lo agregamos al final
//padre.appendChild(elemento);


//Si quisieramos querelo agregar al principio o al medio
var nelemento = document.getElementsByTagName("li")[1];

padre.insertBefore(elemento, nelemento) //Se agrega primero el nodo y luego antes de que elemento 






