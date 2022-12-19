'use strict';
//4)Funciones en objeto (metodos de propiedad)
const reproductor = {
    reproducir : function(){
        console.log(`Reproduciendo...`);
    },
    pausa : function(){
        console.log(`pausando...`);
    }
}


/*FUNCIONES CON PARAMETROS 
//3) Funcion con parametros más compleja
let compras=0;
function agregarCarrito(precio){
    return compras+=precio;   // totalCompra = totalCompra + precio;
}
function calculoIVA(compras){ 
    return compras * 0.13;
}
compras = agregarCarrito(10);
compras = agregarCarrito(10);
compras = agregarCarrito(20);

const impuesto = calculoIVA(compras);
const totalPagar = impuesto + compras;

console.log("La monto a cancelar sin impuestos es: "+compras);
console.log("La cantidad total a pagar es: "+totalPagar);

//2) Funcion con Parametros
function sumar3(num1, num2){
    console.log(num1+num2);
}
sumar3(26,27);
*/

/*1) SINTAXIS DE DECLARATIVE FUNCTION Y FUNCTION EXPRESSION
//Declarative function
function suma(){
    console.log(2+2);
}
suma();
//Function Expression
const sumar2 = function(){
    console.log(3+3);
}
sumar2();
*/