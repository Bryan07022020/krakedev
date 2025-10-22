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
    

