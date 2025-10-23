//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter){
return (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90);
}

esMinuscula = function(caracter){
return (caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122);
}


let palabraSecreta = ""

guardarPalabra = function(){
    let palabra = recuperarTexto ("txtSecreta");
    let mensaje = validacionPalabra(palabra);

    if (mensaje == ""){
        palabraSecreta = palabra;
        console.log("Palabra secreta guardada:", palabraSecreta);
    } else {
        alert(mensaje);
    }

}

mostrarLetra = function(letra,posicion){
    mostrarTexto("div" + posicion ,letra);   
}