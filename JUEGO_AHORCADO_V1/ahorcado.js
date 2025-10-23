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

validar = function(letra){

letrasEncontradas = 0;

for (i = 0 ; i < palabraSecreta.length ; i++ ){
    let caracter = palabraSecreta.charAt(i);
    if (caracter == letra){
        mostrarLetra(letra,i);
        letrasEncontradas++;
        coincidencias +=1;
    } 
}
if (letrasEncontradas == 0) {
        alert("La letra No es parte de la palabra");
        errores+=1;
        mostrarAhorcado();
}
}

    let intentos = 0;
    let coincidencias = 0;
    let errores = 0;

ingresarLetra = function(){
    let letra = recuperarTexto ("txtLetra");

    if (letra.length == 0){
        alert("Debe ingresar una letra Mayuscula");
        return;
    }
    intentos += 1;

    if (esMayuscula(letra)){
        validar(letra);

        if (coincidencias == 5){
            alert("Ha Ganado")
            mostrarImagen("ahorcadoImagen","./ganador.gif")
        } else if (intentos == 10) {
            alert("Ha Perdido")
            mostrarImagen("ahorcadoImagen","./gameOver.gif")
        }
        
    } else {
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS")
    }
}
