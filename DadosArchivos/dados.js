jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblTexto","ES mayor a tres Ganaste");
        //console.log("Es mayor a 3");
        //console.log("GANASTE");
    

    }else{
        cambiarTexto("lblTexto","ES menor a tres Perdiste");
        //console.log("ES menor a 3")
        //console.log("PERDISTE");
    }

}
// Crear una funcion llamada lanzar dado
// No recibe parametros
// Retorna un aleatorio entre uno y seis

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // valores entre 0 y 1
    numeroMultiplicado=aleatorio*6;
   // console.log(numeroMultiplicado);
    numeroEntero=parseInt(numeroMultiplicado);
   // console.log("----->"+numeroEntero);
    valorDado=numeroEntero+1;
   // console.log("------>"+valorDado);
    return valorDado;
    
}