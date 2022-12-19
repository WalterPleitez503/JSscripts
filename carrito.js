'use strict';
//CREAR UN NUEVO ARREGLO CON SPREAD OPERATOR - EJEMPLO CARRITO - DE FORMA DECLARATIVA
const carrito = [];

const zapatos = {articulo:"zapatos", marca : "nike", precio : 70,};
const gorra = {articulo:"gorra", marca : "adidas", color : "azul", precio : 10};
const camisa = {articulo:"camisa", estilo : "playera", color : "negro", precio : 17};

let compras;
compras = [...carrito, zapatos];
compras = [...compras, gorra];
compras = [...compras, camisa];

console.table(compras);
/*Las funciones declarativas expresan la logica sin describir tanto el flujo de control.
Se añadieron a JavaScript con EcmaScript 6.
No modifica directamente el objeto original, como sí lo hace el push() y unshift()*/ 