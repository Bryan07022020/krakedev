let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);

}

recorrerArreglo= function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice]
        console.log(notaR);
    }
}

probarAgregarNota=function(){
    let recuperarNota;
    recuperarNota=recuperarInt("txtNotas");
    agregarNota(recuperarNota);
}

agregarNota=function(nota){
    notas.push(nota);
}

ejecutarPromedio=function(){
    let promedio;
    promedio=calcularPromedio()
    mostrarTexto("lblPromedio",promedio)
   
}


calcularPromedio=function(){
    let sumarNotas=0;
    let promedio;
    let notaS;
    for(let i=0; i<notas.length; i++){
        sumarNotas+=notas[i];
        
    }
    promedio=sumarNotas/notas.length;
    return promedio;
}