//ACCESO A LOS ATRIBUTOS DEL DOM (DOCUMENT OBJECT MODEL)

//vamos a crear un nuevo elemento

var elemento = document.createElement("div");

//Para ponerle algun atributo
elemento.setAttribute("class","azul");


//Contenedor section padre

var padre = document.getElementById("contenedor");

var referencia = document.getElementById("section2");

padre.insertBefore(elemento, referencia);


//Para cambiar atributo se utiliza el setAtribute
elemento.setAttribute("class","rojo");
elemento.setAttribute("id","section4");

//Acceder a elementos directamente para cambiarlos

elemento.id = "section80";

//Para una clase elemento.className



//Si quisieramos cambiar atributos especificos

var enlace = document.getElementById("facebook")

enlace.href = "https://twitter.com/";

