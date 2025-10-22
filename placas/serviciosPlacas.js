validarEstructura=function(placa){
    let cantidadDeCaracteres;
    cantidadDeCaracteres = placa.length;
    let errores = "";

        if (cantidadDeCaracteres < 7 || cantidadDeCaracteres > 8) {
        errores= errores+ " La placa debe tener entre 7 u ocho caracteres.\n "
        }

        //VALIDACION DE LAS LETRAS
        if (esMayuscula(placa.charAt(0))==false) {
            errores = errores + "El primer caracter debe ser una letra mayuscula.\n"; 
        }
         if (esMayuscula(placa.charAt(1))==false) {
            errores = errores + "El segundo caracter debe ser una letra mayuscula. \n"; 
        }
         if (esMayuscula(placa.charAt(2))==false) {
            errores = errores + "El tercer caracter debe ser una letra mayuscula. \n"; 
        }

        // VALIDACION DEL GUION
         if (esGuion(placa.charAt(3))==false) {
            errores = errores + "El cuarto caracter debe ser un guion. \n";
        }

        // VALIDACION DE LOS NUMEROS
        if (esDigito(placa.charAt(4))==false) {
            errores = errores + "El quinto caracter debe ser un numero. \n";
        }
        if (esDigito(placa.charAt(5))==false) {
            errores = errores + "El sexto caracter debe ser un numero. \n";
        }
        if (esDigito(placa.charAt(6))==false) {
            errores = errores + "El septimo caracter debe ser un numero. \n";
        }

        // VALIDACION SI TIENE 8 CARACTERES DEBE SER UN DIGITO
        if (cantidadDeCaracteres==8) {
            if(!esDigito(placa.charAt(7))){
            errores = errores + "El optavo caracter debe ser un numero";
            }    
        }
    

        if(errores== ""){
            return null;
        }else{
            return errores;
        }
    }

obtenerProvincia=function(placa){
    let provincia;
    if(placa.charAt(0) == "A"){
        provincia= "Azuay";
    }
    else if(placa.charAt(0) == "B"){
        provincia= "Bolivar";
    }
    else if(placa.charAt(0) == "U"){
        provincia= "Canar";
    }
    else if(placa.charAt(0) == "C"){
        provincia= "Carchi";
    }
    else if (placa.charAt(0) == "X"){
    provincia = "Cotopaxi";
    } 
    else if (placa.charAt(0) == "H"){
    provincia = "Chimborazo";
    } 
    else if (placa.charAt(0) == "O"){
    provincia = "El Oro";
    } 
    else if (placa.charAt(0) == "E"){
    provincia = "Esmeraldas";
    } 
    else if (placa.charAt(0) == "W"){
    provincia = "Galapagos";
    } 
    else if (placa.charAt(0) == "G"){
    provincia = "Guayas";
    } 
    else if (placa.charAt(0) == "I"){
    provincia = "Imbabura"
    } 
    else if (placa.charAt(0) == "L"){
    provincia = "Loja";
    } 
    else if (placa.charAt(0) == "R"){
    provincia = "Los Rios";
    } 
    else if (placa.charAt(0) == "M"){
    provincia = "Manabi";
    } 
    else if (placa.charAt(0) == "V"){
    provincia = "Morona Santiago";
    } 
    else if (placa.charAt(0) == "N"){
    provincia = "Napo";
    } 
    else if (placa.charAt(0) == "S"){
    provincia = "Pastaza";
    } 
    else if (placa.charAt(0) == "P"){
    provincia = "Pichincha";
    } 
    else if (placa.charAt(0) == "K"){
    provincia = "Sucumbios";
    } 
    else if (placa.charAt(0) == "Q"){
    provincia = "Orellana";
    } 
    else if (placa.charAt(0) == "T"){
    provincia = "Tungurahua"; 
    } 
    else if (placa.charAt(0) == "Z"){
    provincia = "Zamora Chinchipe";
    } 
    else if (placa.charAt(0) == "Y"){
    provincia = "Santa Elena";
    } 
    else if (placa.charAt(0) == "J"){
    provincia = "Santo Domingo de los Tsachilas";
    }
    else{
        provincia= null;
    }
    return provincia;
    
}

obtenerTipoVehiculo=function(placa){
    let tipo;
    if(placa.charAt(1) =="A" || placa.charAt(1)=="Z") {
        tipo= "Vehiculos Comerciales";
    }
    else if(placa.charAt(1) == "E"){
        tipo= "Vehiculos Gubernamentales ";
    }
    else if(placa.charAt(1) == "X"){
        tipo= "Vehiculos de uso oficial ";
    }
    else if(placa.charAt(1) == "S"){
        tipo= "Vehiculos del Gobierno Provincial ";
    }
    else if(placa.charAt(1) == "M"){
        tipo= "Vehiculos Municipal ";

    }else{
        tipo= "Vehiculo Particular"
    }
    return tipo;
}