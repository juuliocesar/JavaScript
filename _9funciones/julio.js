//Funciones: Fragmentos de codigo que podemos reutilizar
/*
SINTAXIS

function nombredelafuncion(){

    //Instrucciones
}

*/


function saludo(nombre){
    document.writeln("Hola, buen día, tengas " + nombre );

}


function suma(n1, n2){

    return (n1+n2); //Una vez ejecutado un return acaba la ejecución de la función

}

function numeroMax(n1,n2){

    if(n1>n2){

        return n1;

    }
    else if(n1<n2){

        return n2;

    }

    else{
        return n1;
    }

}


saludo("Arturo");
document.writeln(suma(5,6));

document.write(numeroMax(7,7));




