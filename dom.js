'use strict';
/** DOM */

//Traversing the DOM
/*
-Para trabajar elementos selecionados: .innerText() .textContent = '' .innerHTML() 
-Traversing the DOM .children[] .parentElement() .nextElementSibling() nth-Child() 
-Eliminar elementos: remove('') removeChild()
-PONIENDO PROPIEDADES DESDE JS: cards.style.fontFamily = "Times" //menos recomendable
add('') appendChild()  //mas recomendable
*/

//querySelectorAll
const caja4 = document.querySelectorAll(".optionsClass");
console.log(caja4); //se puede usar .innerText .textContent .innerHTML

//querySelector
const caja2 = document.querySelector(".optionsClass");
console.log(caja2);

const caja3 = document.querySelector("#idForm");
console.log(caja3)

//getElementByClassName('');
const caja = document.getElementsByClassName("caja");
console.log(caja);

//getElementById('');
const formulario = document.getElementsById("form");
console.log(formulario);
