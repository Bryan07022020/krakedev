let puntos=0;
let lanzamientos=5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarIntentos();
       
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    if(puntos>20){
    cambiarTexto("lblTexto","GANASTE");
    limpiar();
    
}

}
// Si el jugador tiene mas de 20 puntos 
//Mostrar en pantalla GANASTE
//invocar a limpiar


//no recibe parametros
//resta 1 a la variable lanzamientos
// si llega a 0 mostrar en pantalla GAME OVER
// invoca a limpiar

modificarIntentos=function(){
 lanzamientos=lanzamientos-1;
 cambiarTexto("lblIntentos",lanzamientos); 
 if(lanzamientos==0){
    cambiarTexto("lblTexto","GAME OVER"); 
    }else if(lanzamientos==-1){
        limpiar();

    }

}

//COLOCAR PUNTAJE EN 0 e Intentos en 5
limpiar=function(){
    cambiarTexto("lblPuntos","0");
    cambiarTexto("lblIntentos","5");
    cambiarTexto("lblTexto","");
    cambiarImagen("imgDado", "");
    

}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    mostrarCara(valorDado);
    return valorDado;
}
// Mostrar cara recibe el numero que quiere mostrar
// muestra la imagen

mostrarCara=function(numero){

    if(numero==1){
        cambiarImagen("imgDado","./dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","./dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","./dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","./dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","./dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","./dados6.png");
    }else{
        cambiarImagen("imgDado"," ");
    }

}