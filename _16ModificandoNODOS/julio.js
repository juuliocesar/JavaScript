

//-----Acceder a un elemento para modificar su código

//var primerElemento = document.getElementById("pl");

//primerElemento.innerHTML = "JAJAJAJAJA <i>Cursiva</i>"; //Puede ejecutar codigo HTML en el navegador

//La otra forma de cambiar texto sin que se puedan agregar codigo HTML

// primerElemento.textContent = "Sólo puede agregar texto plano"



// ----------COMO REEMPLAZAMOS NODOS DEL DOM
var elemento =  document.createElement("li");
var contenido = document.createTextNode("Nuevo texto my dear");

elemento.appendChild(contenido); //Unimos contenido con elemento

//Supongamos que queremos reemplazar el elemento 1 de la lista
//Hacemos nuestro elemento padre

var padre = document.getElementById("lista");
var elementotdelete = document.getElementById("pl");

padre.replaceChild(elemento, elementotdelete); //Primero el elemento que queremos agregar y luego el elemento que queremos poner


//---------COMO ELIMINAMOS NODOS DEL DOM ELEMENTOS DE NUESTRO CONTENIDO DEL SITIO WEB

var elementoaeliminar = document.getElementById("sl");

padre.removeChild(elementoaeliminar);

