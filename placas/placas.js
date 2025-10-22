validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtIngresePlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==null){
        mostrarTexto("lblPlaca", " Estructura valida ")
    }
    else{
        mostrarTexto("lblPlaca", " Estructura Incorrecta ");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}