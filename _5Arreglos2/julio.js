
var amigos = ["Carlos", "Cesar", "Alex",4,true]

//Método len

//Agregar elemento al final del arreglo
amigos[amigos.length] = "GOKU";

//Funció para agregar elementos al final de un arreglo
amigos.push("Chivas","Zarates");

var longitud = amigos.length;
document.writeln("Tienes " + longitud + " amigos");


//Eliminar el último elemento de un arreglo
amigos.pop();

var longitud = amigos.length;
document.write("Tienes " + longitud + " amigos");


//Concatenar arreglo

var amigos2 = [1,2,3,4,5]

var amigos3 = amigos.concat(amigos2);

document.writeln(amigos3);


//join Obtenemos nuestro arreglo y lo dividimos con lo que le pasemos de argumento a la función

var separar = amigos2.join(" : ");
document.writeln(separar);



//Ordenar elementos

var miArreglo = [77,9,6,7,8,112];
ordenar = miArreglo.sort();

document.writeln(ordenar);


//reverse ordenarlos al revés
var miArreglo2 = ["Carlos", "Julio", "Cesar"];

var reversas =miArreglo2.reverse();

document.writeln(reversas);

