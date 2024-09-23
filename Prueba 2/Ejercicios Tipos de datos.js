//Ejercicios Tipos de datos

//1
/*
let variable1 = 1357;
let variable2 = 135.7;
let variable3 = 135e7;
let variable4 = 0b1010;
let variable5 = 0o1357;
let variable6 = 0x1A57;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);
*/
//2
/*
let promptimput =  parseInt(prompt());


console.log(promptimput, typeof promptimput);
*/
//3
/*
let nombre = prompt();
let apellidos = prompt();
let edad = parseInt(prompt());
let numero = parseInt(prompt());

alert(`Hola, me llamo ${nombre}, ${apellidos} y tengo ${edad} años`);

document.write(`Hola, me llamo ${nombre}, ${apellidos} y tengo ${edad} años`);

alert(`Dentor de ${numero} años tendras ${edad+numero} años`);

*/
//4
/*
let string = prompt();

if(string.indexOf("a")){
    let posicion = string.indexOf("a")
    alert(`La posicion de la primera a es ${posicion+1} letra`)
}
*/
//5
/*
let frase1 = prompt('Frase 1');
let frase2 = prompt('Frase 2');
let frase3 = prompt('Frase 3');

let result = undefined;

let result = frase1.replace(frase2,frase3)
console.log(result)

*/
//6
/*
let frase1 = prompt('Frase 1');
let frase2 = prompt('Frase 2');
let frase3 = prompt('Frase 3');

let result = undefined;

let result = frase1.replaceAll(frase2,frase3)
console.log(result)

*/
// 7

let frase1 = prompt('Frase 1');
let frase2 = prompt('Frase 2');


if(frase1.indexOf(frase2)){
    
}