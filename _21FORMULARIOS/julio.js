var formulario = document.getElementsByName("formulario")[0]; //Accedemos al primer formulario en caso de que haya más de uno

var elementos = formulario.elements; //Accedemos a los elementos del formulario

var boton = document.getElementById("boton");

function validarNombre(e){

    if(formulario.nombre.value == 0){

        alert("Completa el campo nombre");
        e.preventDefault; //No envía los datos
    }
}

function validarRadio(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){

    }
    else{
        alert("Completa el campo sexo");
        e.preventDefault; //No envía los datos
    }
}

function validarCheckbox(e){

    if(formulario.terminos.checked == false){

        alert("Completa el campo Términos y condiciones");
        e.preventDefault; //No envía los datos

    }

}


function validar(e){

    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
}






//El evento se agrega al formulario
formulario.addEventListener("submit",validar);

