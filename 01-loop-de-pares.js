// 1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

const param = 2;

const loopDePares = (parametro) => {
    for (let i = 0; i <= 100; i++) {
        //sumamos el parametro a el número de iteración
        let suma = parametro + i;
        //realizamos la comprobación de si la suma es divisible por 2
        if (suma % 2 == 0) {
            console.log(`El numero ${suma} es par`)
        } else {
            console.log(i);
        }


        
    }
}

loopDePares(param);