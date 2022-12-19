'use strict';

/* 2)ARROW CON PARAMETROS*/
//Sintaxis larga con parametros
const aprendiendo = (tecnologia1, tecnologia2) => {
    console.log(`Aprendiendo ${tecnologia1} y ${tecnologia2}`);
}
aprendiendo("JavaScript", "Java");
//Sintaxis corta con parametros
const aprendiendo2 = (tecnologia3, tecnologia4) => `Tambien aprendiendo ${tecnologia3} y ${tecnologia4}`;
console.log(aprendiendo2("MongoDB", "MySQL"));  

const aprendiendo3 = tecnologia => `Esta es una tecnologia: ${tecnologia}`;
console.log(aprendiendo3("NodeJS"));

/* 1)SINTAXIS 
//Sintaxis Larga
const aprendiendo = () => {
    console.log("Aprendiendo arrows de forma larga");
}
aprendiendo();

//Sintaxis Corta
const aprendiendoCorto = () => "Aprendiendo Arrow de forma corta";
console.log(aprendiendoCorto());
*/
