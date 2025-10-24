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

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla= document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td</tr>"+
    "<tr><td>DOS</td</tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas=function(){

    let cmpTabla= document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>Nota</th></tr><td>";
    let miNota;
    for(let i=0;i<notas.length;i ++){
        miNota=notas[i];
            contenidoTabla+="<tr><td>";
            contenidoTabla+= miNota;
            contenidoTabla+="</tr></td>";

    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}

probarAgregarNota=function(){
    let recuperarNota;
    recuperarNota=recuperarInt("txtNotas");
    agregarNota(recuperarNota);
}

agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
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