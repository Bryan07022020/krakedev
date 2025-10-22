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
    let tipo;
    tipo=obtenerTipoVehiculo(placa);
    if(tipo==null){
        mostrarTexto("lblTipo", " Tipo de Vehiculo incorrecto ");

    }else{
        mostrarTexto("lblTipo", " Tipo de Vehiculo es: " +tipo);
    }

    let picoYPlaca;
    picoYPlaca=obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblDiaPicoYPlaca", " EL dia de Pico Y Placa es: " +picoYPlaca);
    }else{
        mostrarTexto("lblPlaca", " Estructura Incorrecta ");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipo", "");
        mostrarTexto("lblDiaPicoYPlaca", "");

    }
}

limpiar=function(){
     mostrarTextoEnCaja("txtIngresePlaca","")    
    mostrarTexto("lblPlaca", "");
        mostrarTexto("lblErrores","");
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipo", "");
        mostrarTexto("lblDiaPicoYPlaca", "");

}