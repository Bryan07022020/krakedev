calcularTasaInteres=function(ingresoAnual){
    
    
    if (ingresoAnual<300000){
        
        let tasa1=ingresoAnual*0.16;
        console.log(tasa1);
        return tasa1;   
    }
    else if(ingresoAnual>=300000 && ingresoAnual<500000){
        let tasa2=ingresoAnual*0.15
        console.log(tasa2);
        return tasa2;
     }

     else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        let tasa3=ingresoAnual*0.14
        console.log(tasa3);
        return tasa3;
     }
     else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        let tasa4=ingresoAnual*0.13
        console.log(tasa4);
        return tasa4
     }

     else if(ingresoAnual>=2000000){
        let tasa5=ingresoAnual*0.12
        console.log(tasa5);
        return tasa5
     }

    }

calcularCapacidadPago=function(edad,ingresos,egresos){
        if(edad>50 ){
            let subtotal=ingresos-egresos;
            let total=subtotal*0.3;
            return total
        }
        else if(edad<=50){
           let subtotal=ingresos-egresos;
            let total=subtotal*0.4;
            return total 

        }

    }

calcularDescuento=function(precio,cantidad){
    if (cantidad<3){
        let total1=precio*cantidad
        return total1;
       
    }
    else if (cantidad>=3 && cantidad<=5){
        let subtotal2=(cantidad*precio);
        let descuento2=(subtotal2)*0.02;
        let total2=subtotal2-descuento2;
        return total2;
    }

    else if (cantidad>=6 && cantidad<=11){
        let subtotal3=(cantidad*precio);
        let descuento3=(subtotal3)*0.03;
        let total3=subtotal3-descuento3;
        return total3;
    }

    else if (cantidad>=12 ){
        let subtotal4=(cantidad*precio);
        let descuento4=(subtotal4)*0.04;
        let total4=subtotal4-descuento4;
        return total4;
    }
}

determinarColesterolLDL = function (nivelColesterol) {
    if (isNaN(nivelColesterol) || nivelColesterol < 0) {
        return "Valor inválido";
    }

    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol < 130) {           // 100–129
        return "Casi óptimo / por encima de lo óptimo";
    } else if (nivelColesterol < 160) {           // 130–159
        return "Límite alto (borderline)";
    } else if (nivelColesterol < 190) {           // 160–189
        return "Alto";
    } else {                                       // ≥ 190
        return "Muy alto";
    }
}

validarClave=function(clave){
    let cantidadDeCaracteres=clave.length;
    if(cantidadDeCaracteres>=8 && cantidadDeCaracteres<=16){
    return true;
    }else{
        return false;
    }

}

esMayuscula=function(caracter){
    let codigomayuscula=caracter.charCodeAt(0);
    if (codigomayuscula>=65 && codigomayuscula<=90){
      return true;

    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigominuscula=caracter.charCodeAt(0);
    if (codigominuscula>=97 && codigominuscula<=122){
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

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true
    }else{
        return false;
    }
    
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true;
    } else {
        return false;
    }
}
