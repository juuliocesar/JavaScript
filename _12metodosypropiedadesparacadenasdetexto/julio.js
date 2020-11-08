//Métodos para cadenas de texto

var texto = "Julio César";

//Para obtener la longitud de una cadena de texto
var numerodecaracteres = texto.length;

//Imprimir un número determinado de caracteres
var cadena2 = texto.substring(5);

//Imprimir caracteres a partir de una posición (inicio, número de caracteres)
var cadena3 = texto.substr(6, 3);

//Devolver la posición de un caracter
var posicion = texto.indexOf("o");

//Podemos indicarles desde que posición iniciar aquí tenemos dos o's
var nombre = "Juolio";
var texto1 = nombre.indexOf("o"); //Me va a dar la posición de la primera

var texto2 = nombre.indexOf("o", texto1+1); //Para que empiece a buscar a partir de la otra posición 

//Buscar posición de una letra desde atras hacia adelante
var goku = "Nauruto";
var posicion2 = goku.lastIndexOf("u");

//Remplazar una cadena de texto por otra
var nombre = "Julio Cesar"

var reemplazar = nombre.replace("u", "The goat");

//Pasar todo el texto a mayúsculas
var apellido = "Bernal"
var mayus = apellido.toUpperCase()

document.write(mayus);


//Pasar todo el texto a minúsculas

document.writeln("JULIO".toLowerCase());








