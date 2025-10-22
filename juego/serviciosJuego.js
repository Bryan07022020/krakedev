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
