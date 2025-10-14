calcularPromedioNotas=function(){
    let promedio;
    let promedio2;
    let n1=recuperarFloat("txtNota1");
    let n2=recuperarFloat("txtNota2");
    let n3=recuperarFloat("txtNota3");
    promedio=calcularPromedio(n1,n2,n3);
    promedio2=promedio.toFixed(2);
    console.log(promedio2);
    
}