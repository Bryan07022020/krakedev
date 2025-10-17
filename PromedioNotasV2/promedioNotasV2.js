calcularPromedioNotas=function(){
    let promedio;
    let promedio2;
    let n1=recuperarFloat("txtNota1");
    let n2=recuperarFloat("txtNota2");
    let n3=recuperarFloat("txtNota3");
    promedio=calcularPromedio(n1,n2,n3);
    promedio2=promedio.toFixed(2);
    console.log(promedio2);
    mostrarTexto("lblPromedio",promedio2);

    if(promedio2<5 && promedio2>0){
        mostrarImagen("imgReprobado","./imagenes/reprobado.gif");
        mostrarTexto("lblReprobado","Reprobado");
    }

    else if(promedio2>=5 && promedio2<=8){
        mostrarImagen("imgBuenTrabajo","./imagenes/buentrabajo.gif");
        mostrarTexto("lblBuenTrabajo","Buen Trabajo");

    }
    
    else if (promedio2>8 && promedio2<=10){
        mostrarImagen("imgExcelente","./imagenes/excelente.gif");
        mostrarTexto("lblExcelente","Excelente");
    }
    else{
        mostrarImagen("imgError","./imagenes/incorrecto.gif");
        mostrarTexto("lblError","DATOS INCORRECTOS");
    }

}

limpiar=function(){
   mostrarTextoEnCaja("txtNota1", " ");
}