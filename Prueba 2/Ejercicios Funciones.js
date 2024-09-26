//20
/*
function suma1(...args){
    let suma = 0;
    for (const args of args) {
        suma +=args;
    }
    return suma;
}

const suma2 = function(...args){
    let suma = 0;
    for (const args of args) {
        suma +=args;
    }
    return suma;
};

const suma3 = () => {   let suma = 0;
    for (const args of args) {
        suma +=args;
    }
    return suma;
};
*/
    
//21

function suma(numero1,numero2){
    let sumatorio = numero1 + numero2;
    return  sumatorio;
}

function multiplicacion(numero1,numero2){
    let producto = numero1 * numero2;
    return  producto;
}

const flecha = () => {
    alert("Mensaje para el usuario")
}

function operacionesEncadenadas(numero1,numero2,suma,multiplicacion,flecha){

    console.log(suma(numero1,numero2));
    console.log(multiplicacion(numero1,numero2));

}


operacionesEncadenadas(5,10,suma,multiplicacion,flecha())