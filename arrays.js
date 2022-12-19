'use strict';
//Array con elementos objetos en For-Loop y ForEach
const carrito = [
    {nombre : "articulo1", precio : 10},
    {nombre : "articulo2", precio : 20},
    {nombre : "articulo3", precio : 30},
    {nombre : "articulo4", precio : 40},
    {nombre : "articulo5", precio : 50},
]
//map
carrito.map(function(producto, index){
    console.log(`Compra:\n ${producto.nombre} - Precio: ${producto.precio} - ${index}`);
})

/*3) ACCESO CON DESTRUCTURING 
//ForEach
carrito.forEach(function(producto){
    console.log(`Compra:\n ${producto.nombre} - Precio: ${producto.precio}`);
})
//For-Loop
for(let i=0; i<carrito.length; i++){
    console.log(`Compras: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
//Array con elementos variables
const nombres = ["Walter","Oswaldo","Pleitez","Torres"];
const [nombre1, ,apellido1, ,] = nombres;
console.log("Este es el 1er nombre del array: "+nombre1+" y este el 1er apellido: "+apellido1);
*/

/*2) ACCESO A ELEMENTOS DEL ARRAY
//Sin Loop
console.log("Acceso sin Loop: \n"+nombres[1]);
//Modificando ain Loop. Se puede usar push() y unShift()
nombres[1] = "Osvaldo";
//Con Loop
console.log("Acceso con For-Loop: ");
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}
*/
/*1) SINTAXIS DE ARRAYS
const numeros = [10, 20, 30];
const meses = new Array("Enero", "Febrero", "Marzo");
const arrayTodo = ["Hola", 27, {nombre:"Walter", edad:26},true, [1,2,3]];

console.log(numeros);
console.log(meses);
console.table(arrayTodo);
*/