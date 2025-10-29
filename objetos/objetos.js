
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

