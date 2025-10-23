ejecutarValidacion=function(){
    let contrasena=recuperarTexto("txtPassword");
    let errores=validarPassword(contrasena);

    if(errores==""){
        mostrarTexto("lblResultado", "Password correcto")
    }
    else{
       mostrarTexto("lblResultado",errores);
    }
}



validarPassword=function(password){
    let longitud;
    longitud=password.length;
    let errores="";
    let tieneMayuscula= false;
    let tieneDigito= false;
    let tieneCaracter= false;


    if(longitud<8 || longitud>16){
        errores=errores + "la longitud debe estar entre 8 y 16 caracteres. \n"
        return errores;
    }else{
        for(let posicion=0;posicion<password.length;posicion++){
            let caracter=password.charAt(posicion);

            if(esMayuscula(caracter)){
                tieneMayuscula= true;
            }
            if(esDigito(caracter)){
                tieneDigito= true;
            }
            if(esCaracter(caracter)){
                tieneCaracter=true;
            }
            
        }

    }
    if(tieneMayuscula==false){
        errores=errores+ "Debe tener al menos una letra Mayuscula. \n"
    }

    if(tieneDigito==false){
        errores=errores+ "Debe tener al menos un Digito. \n"
    }
    
    if(tieneCaracter==false){
        errores=errores+ "Debe tener al menos un caracter especial (* - _). \n"
    }
    return errores;

    
}
