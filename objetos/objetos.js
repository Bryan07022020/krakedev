
probarAtributos=function(){
    let persona={
        nombre: "Bryan",
        apellido: "Cadena",
        edad: 31,
        estaVivo: true
        
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log (" no esta vivo ");
    }else{
       console.log (" si esta vivo ");
    }

}

modificarAtributos=function(){
    let cuenta={
        numero:"12345",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"1221775444",
        nombre:"Bryan"
    }

    let cliente1={}
    cliente1.nombre="Bryan";
    cliente1.apellido="Cadena";
    cliente1.cedula="1234343"

}
probarIncrementoSaldo=function(){
    let cta={numero:"22323",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let per1={nombre:"MARIO",edad:30};
    let per2={nombre:"JUAN",edad:35};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor !=null){
        console.log("El mayor es: " +mayor.nombre);
    }

}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;

}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}

crearProducto=function(){
    let producto1={
        nombre:"pan",
        precio: 1.5,
        stock: 5
    }
    let producto2={
        nombre:"cola",
        precio: 3.25,
        stock:5
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log(" Producto 1 tiene mayor stock. ");


    }else if(producto1.stock<producto2.stock){
        console.log(" Producto 2 tiene mayor stock. ");

    }
    else{
        console.log(" Ambos productos tienen el mismo stock. ");
    }

}

