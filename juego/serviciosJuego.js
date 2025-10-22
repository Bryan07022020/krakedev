obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorJuego;
    aleatorio=Math.random(); // valores entre 0 y 1
    numeroMultiplicado=aleatorio*3;
    //console.log(numeroMultiplicado);
    numeroEntero=parseInt(numeroMultiplicado);
    //console.log("----->"+numeroEntero);
    valorJuego=numeroEntero+1;
    console.log("------>"+ valorJuego);
    return valorJuego;  
}

generarElemento=function(){
    let aleatorio;
    aleatorio=obtenerAleatorio();

    if(aleatorio==1){
        console.log("piedra")
        mostrarTexto("lblJuego","piedra");
        
       } 
       else if (aleatorio==2){
        console.log("papel")
        mostrarTexto("lblJuego","papel");
    }
    else{
        console.log("tijera")
        mostrarTexto("lblJuego","tijera");
    }
    return aleatorio;  
}

determinarGanador = function(eleccionJugador1,eleccionJugador2){
let resultado;
    // GANA JUGADOR UNO
if ((eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||  // GANA PAPEL
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") || // GANA PIEDRA
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")       //GANA TIJERA
    ){ resultado = 1;
    // GANA JUGADOR DOS
} else if (
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "papel") ||    //GANA PAPEL
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "piedra") ||   //GANA PIEDRA
    (eleccionJugador1 == "papel" && eleccionJugador2 == "tijera")       //GANA TIJERA
){ resultado = 2;
    // EMPATE
} else {
    resultado = 0
}
return resultado;
}

generarRuta=function(nombre){
    let rutaImagen= "./imagenes/" +nombre+ ".png";
    return rutaImagen;
}
