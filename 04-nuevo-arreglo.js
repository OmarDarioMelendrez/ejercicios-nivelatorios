// 4. Nuevo Arreglo

// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo: 
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]



//definimos el numero que pasamos cómo argumento a la función
const numero = 5;

const nuevoArreglo = (numero) => {
    //declaramos un array vacío
    const newArray = [];
    //ejecutamos un ciclo for por cada valor inferior al valor recibido cómo argumento
    for (let i = numero; i > 0; i--) {
        //agregamos el valor la iteración al array
        newArray.push(i);
    }
    //invertimos el orden del array
    newArray.reverse()
    //imprimimos en consola el array modificado
    console.log(newArray);
}

nuevoArreglo(numero);