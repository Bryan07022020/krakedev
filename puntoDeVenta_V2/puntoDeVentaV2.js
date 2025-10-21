calcularValorTotal = function () {
        //variables para recuperar los valores de las cajas de texto
        let nombreProducto;
        let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
        let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
        let porcentajeDescuento;

        //variables para almacenar los retornos de las funciones
        let valorSubtotal;
        let valorDescuento;
        let valorIVA;
        let valorTotal;

        //1. Recuperar el nombre del producto como String
        nombreProducto=recuperarTexto("txtProducto");
        console.log(nombreProducto);
        //2. Recuperar el precio como float
        precioProducto=recuperarFloat("txtPrecio");
        console.log(precioProducto);
        //3. Recuperar cantidad como int
        cantidad= recuperarInt("txtCantidad");
        console.log(cantidad);
        //4. Recuperar el porcentaje de descuento como int
        //porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
        //console.log(porcentajeDescuento);

        // ===============================
        // NUEVO: Validaciones antes de cálculos
        // ===============================
        let productoValido = esProductoValido(nombreProducto);
        let cantidadValida = esCantidadValida(cantidad);
        let precioValido   = esPrecioValido(precioProducto);

        if (!(productoValido && cantidadValida && precioValido)) {
            console.log("Hay errores en los campos, no se ejecutan los cálculos");
            return;
        }
        // ===============================

        //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        console.log(valorSubtotal);
        
        // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
        // los parametros cuando invoca la funcion.
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        mostrarTexto("lblSubtotal",valorSubtotal.toFixed(2));
        // Utilizar mostrarTexto

            /*
            Caso de prueba: 
                - cantidad: 10
                - precioProducto: 5.4  
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
        */
        //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
        //7. Mostrar el resultado en el componente lblDescuento
        mostrarTexto("lblDescuento",valorDescuento.toFixed(2));
        console.log(valorDescuento);
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10
                - Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
        */
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        // El IVA debe calcularse sobre el valor del subtotal menos el descuento
        let iva=valorSubtotal-valorDescuento;
        mostrarTexto("lblDescuento2",iva.toFixed(2));
        console.log(iva);
        valorIVA=calcularIva(iva);
        
        //9. Mostrar el resultado en el componente lblValorIVA  
        mostrarTexto("lblValorIVA",valorIVA.toFixed(2));
        console.log(valorIVA);  
            /*
                Caso de prueba: 
                    - cantidad: 10 
                    - precioProducto: 5.4  
                    - descuento: 10

                        - valorSubtotal: 54
                        - descuento:5.4
                        - valorSubtotal 
                        - descuento: 48.6

                    IVA esperado: 5.832

                Si el caso de prueba es exitoso, hacer un commit
            */
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        
        //11. Mostrar el resultado en el componente lblTotal
        mostrarTexto("lblTotal",valorTotal.toFixed(2));

        /*
            Caso de prueba: 
                - cantidad: 10
                - precioProducto: 5.4 
                - descuento: 10

                    --valorSubtotal: 5.4
                    --descuento: 5.4
                    --IVA: 5.832

                    Total esperado: 54.432

                    Si el caso de prueba es exitoso, hacer un commit
        */
                
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        //mostrarTexto("lblResumen","Valor a pagar por " +cantidad+" " +nombreProducto+" con "+porcentajeDescuento+" % de descuento: USD "+valorTotal);

        // ===============================
        // NUEVO: Resumen con descuento por volumen
        // ===============================
       // let porcentajeEfectivo = (valorSubtotal > 0)
          //  ? ((valorDescuento / valorSubtotal) * 100).toFixed(2)
           // : 0;

        //mostrarTexto(
           // "lblResumen",
           // "Valor a pagar por " + cantidad + " " + nombreProducto +
          //  " con descuento por volumen (" + porcentajeEfectivo + "%): USD " + valorTotal.toFixed(2)
       // );
        // ===============================

        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */

    }

    limpiar = function () {

        mostrarTextoEnCaja("txtProducto"," ");
        mostrarTextoEnCaja("txtPrecio"," ");
        mostrarTextoEnCaja("txtCantidad"," ");
    // mostrarTextoEnCaja("txtPorcentajeDescuento"," ");
        mostrarTexto("lblSubtotal", " ");
        mostrarTexto("lblDescuento", " ");
        mostrarTexto("lblDescuento2", " ");
        mostrarTexto("lblValorIVA", " ");
        mostrarTexto("lblTotal", " ");
       // mostrarTexto("lblResumen", " ");

        // =========================
        // NUEVO: limpiar mensajes de error
        // =========================
        mostrarTexto("lblError1", "");   // NUEVO
        mostrarTexto("lblError2", "");   // NUEVO
        mostrarTexto("lblError3", "");   // NUEVO

        // =========================
        // NUEVO: limpiar el resumen (mantengo tu línea original comentada)
        // =========================
        //mostrarTexto("lblResumen", "");  // NUEVO

        /*
            Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
            Dejar todos los textos de los montos con el valor 0.0
            Si funciona, hacer un commit
        */
    }

        // --- VALIDACIONES ---

    esProductoValido = function(nombre){
        let hayErrores = false;

        // Validar campo obligatorio
        if(nombre.trim() === ""){
            mostrarTexto("lblError1", " CAMPO OBLIGATORIO ");
            hayErrores = true;
        }
        // Validar longitud máxima
        if(nombre.length > 10){
            mostrarTexto("lblError1", " MAXIMO 10 CARACTERES ");
            hayErrores = true;
        }

        // Si no hay errores, limpiar mensaje
        if(hayErrores == false){
            mostrarTexto("lblError1", " ");
        }

        return !hayErrores;
    }

    esCantidadValida = function(cantidad){
        let hayErrores = false;

        // Validar si es número o está vacío
        if(isNaN(cantidad)){
            mostrarTexto("lblError2", " CAMPO OBLIGATORIO ");
            hayErrores = true;
        }

        // Validar si es entero
        else if(!Number.isInteger(cantidad)){
            mostrarTexto("lblError2", " DEBE SER UN NUMERO ENTERO ");
            hayErrores = true;
        }

        // Validar rango permitido
        else if(cantidad < 0 || cantidad > 100){
            mostrarTexto("lblError2", " EL NUMERO DEBE ESTAR ENTRE 0 Y 100 ");
            hayErrores = true;
        }

        // Si no hay errores, limpiar mensaje
        if(hayErrores == false){
            mostrarTexto("lblError2", " ");
        }

        return !hayErrores;
    }

    esPrecioValido = function(precio){
        let hayErrores = false;

        // Validar si es número o está vacío
        if(isNaN(precio)){
            mostrarTexto("lblError3", " CAMPO OBLIGATORIO ");
            hayErrores = true;
        }

        // Validar rango permitido
        else if(precio < 0 || precio > 50){
            mostrarTexto("lblError3", " EL PRECIO DEBE ESTAR ENTRE 0 Y 50 ");
            hayErrores = true;
        }

        // Si no hay errores, limpiar mensaje
        if(hayErrores == false){
            mostrarTexto("lblError3", " ");
        }

        return !hayErrores;
    }

