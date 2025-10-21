calcularValorDescuento=function(precioProducto,porcentajeDescuento){
    let valorDescuento=precioProducto*porcentajeDescuento/100;
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

calcularDescuentoPorVolumen = function(subtotal, cantidad) {
    let descuento = 0;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }

    return descuento;
}