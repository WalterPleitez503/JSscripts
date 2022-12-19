'use strict';
//OBJETOS LITERALES ANIDADOS Y NO ANIDADOS

const objetoA = {
    nombre: "Walter",
    edad: 27,
    estado: false,
              objetoA1: {
              nombre2: "Oswaldo",
              edad2: 22,
                       objetoA2 : {
                       nombre3 : "Pleitez",
                       edad3 : 20
                       }
              }
}
//Anidados Con Destructuring
const {nombre, objetoA1 : {nombre2}, objetoA1 : {objetoA2 : {nombre3}}} = objetoA;
console.log("Primer nombre: "+nombre+", Segundo nombre: "+nombre2+", Tercer nombre: "+nombre3);

/*ACCEDIENDO A VALORES DE LAS PROPIEDADES DE LOS OBJETOS ANIDADOS 
//Anidados de Forma Básica
const objetoAnidado = objetoA.objetoA1.objetoA2.nombre;
document.write(objetoAnidado);
console.log(objetoAnidado); 
*/


/*ACCEDIENDO A VALORES DE LAS PROPIEDADES DEL OBJETO NO ANIDADOS - MÁS FÁCILES
const objetoA = {
    nombre: "Walter",
    edad: 27,
    estado: false
}

//Forma Básica
const valorPropiedad = objeto1.nombre;
document.writeln(valorPropiedad);
document.write("<br>");

//Destructuring
const {nombre, edad} = objeto1;
document.writeln(nombre +" "+ edad);
*/