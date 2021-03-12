// 2. Loop de impares con palabra
// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.


const numero = 2;
const palabra = "Pato";

const loopDeImpares  = (numero, palabra) => {
    for (let i = 0; i <= 100; i++) {
        //realizamos la suma del parametro + la iteración
        const suma = numero + i;
        //realizamos comprobación de que el número no es par
        if (suma % 2 !== 0) {
            console.log(palabra)
        } else {
            console.log(i);
        }
        
    }
}

loopDeImpares(numero, palabra);