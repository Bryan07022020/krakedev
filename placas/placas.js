validarPlaca=function(){
    let placa;
    let erroresEstructura;
    placa=recuperarTexto("txtIngresePlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==null){
        mostrarTexto("lblPlaca", " Estructura valida ")
    
    let provincia;
    provincia=obtenerProvincia(placa)
    if(provincia==null){
        mostrarTexto("lblProvincia", "Provincia Incorrecta")

    }else{
        mostrarTexto("lblProvincia", " La placa pertenece a la provincia de: "+provincia);
    }
    }else{
        mostrarTexto("lblPlaca", " Estructura Incorrecta ");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia", "");
    }
}