calcularValorDescuento=function(precioProducto,porcentajeDescuento){
    let valorDescuento=(precioProducto*porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIva=function(precioProducto){
    let valorIVA=precioProducto*0.12;
    return valorIVA;
}

calcularSubtotal=function(precioProducto,cantidad){
    let valorSubtotal=precioProducto*cantidad;
    return valorSubtotal;
}

calcularTotal=function(valorSubtotal,valorDescuento,valorIVA){
    let valorTotal=valorSubtotal-valorDescuento+valorIVA;
    return valorTotal; 
}