esMayuscula=function(caracter){
    let codigomayuscula=caracter.charCodeAt(0);
    if (codigomayuscula>=65 && codigomayuscula<=90){
      return true;

    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigodigito=caracter.charCodeAt(0);
    if (codigodigito>=48 && codigodigito<=57){
      return true;

    }else{
        return false;
    }
}

esGuion=function(caracter){
    let codigoguion=caracter.charCodeAt(0);
    if (codigoguion==45){
        return true
    }
    else{
        return false
    }
}