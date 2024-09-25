//Ejecicios Operadores

//8
/*
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log("  -9  " + 5); //-9 5
console.log("  -9  " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(" \t \n" -2); //-2
*/

//9
/*
let a = parseInt(prompt("¿Primer número?",1));
let b = parseInt(prompt("Segundo número?",2));

alert (a+b)
*/

//10
/*
let a = 1; // 2
b = 1;  // 2 
let c = ++a; // 2
let d = b++; // 1
*/

//11
/*
5 > 4; //true
"apple" > "pineapple"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; // false
null === +"\n0\n"; // false
*/
//12
/*
let booleano = true;
while (booleano){
    let numero = parseInt(prompt("Dame un numero mayor o igual a 0"));
    (numero >= 0) ? booleano=false: booleano=true;
    booleano?alert("El numero no es mayor o igual que 0, vuelve a intentarlo"):alert("El numero es mayor o igual que 0")
}
*/

//13 y 14
/*
let edad = parseInt(prompt("Escribe tu edad"));
let esValido = false
while (!esValido){
    if(edad < 0){
        edad = parseInt(prompt("Escribe una edad valida"));
    }if (edad >= 0 && edad < 12) {
        alert("Eres un niño");
        esValido=true;
    } else if (edad >= 12 && edad < 26) {
        alert("Eres un Joven");
        esValido=true;
    } else if (edad >= 26 && edad < 65) {
        alert("Eres un Adulto");
        esValido=true;
    } else if (edad >= 65) {
        alert("Eres un Jubilado");
        esValido=true;
    }
}
*/

//15
/*
let numero = prompt("Dame un numero del 1 al 10");
let validar = true;
while(validar){
    if(numero < 1 || numero > 10){
        numero = prompt("Dame un numero del 1 al 10");
    }else{
        validar=false;
    }
}

console.log("--------------------");
console.log("La tabla del "+numero);
console.log("--------------------");
for(let i= 0; i <10; i++){
    let multiplicacion = (numero*i);
    console.log(numero+" por "+i+"="+multiplicacion);
}
console.log("--------------------");
*/

//16

let frutas = ["Pera","Manzana","Piña","Fresa","Naranja"];
let frutastraducidas = ["Pear","Apple","Pinapple","Strawberry","Orange"];
