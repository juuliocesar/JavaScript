//---------EVENTOS-----------
//ACCIONES A EJECUTAR CUANDO EL USUARIO HAGA CIERTA ACCIÓN EN NUESTRO SITIO WEB

//MODELO DE EVENTOS ESTÁNDAR

//1 Obtenemos nuestro elemento
var button = document.getElementById("boton");
var texto1 = document.getElementById("input");
var twitter = document.getElementById("twitter");
function respuestaboton(e){

    alert("He funcionado!" + "tipo de evento:" + e.type);


}

function respuestaboton2(e){

    alert("Elemento que se accionó: " + e.target);

}


function enfocandose(){

    alert("Focus!");
}


function funciontwitter(e){

    alert("Hola perro!");
    e.preventDefault(); //Le quitamos su fnción principal
}


//2 Le agregaremos un evento
//En los botones el type es "click" que va a pasar cuándo apriete el botón
//En el listener es una función
button.addEventListener("click", respuestaboton); //Hay dos argumentos, el type y el listener
button.addEventListener("click", respuestaboton2); //Se pueden agregar los eventos que necesitemos

//texto1.addEventListener("focus",enfocandose); //focus es cuando entramos a la caja de texto
//texto1.addEventListener("blur",enfocandose); //blur es cuando salimos de la caja de texto
texto1.addEventListener("change",enfocandose); //en caso de que ingresemos a la caja se escriba algo y salgamos

//--Para eliminar un evento podemos utilizar elemento.removeEventListener("evento",funcion) a quitar


twitter.addEventListener("click",funciontwitter);

