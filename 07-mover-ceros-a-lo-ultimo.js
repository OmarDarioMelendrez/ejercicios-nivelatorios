// 7. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]



const array = [1,2,0,1,0,1,0,3,0,1];

const moveZeros = (arr) => {
    //creo un array filtrando el array sacando los 0
    let withOutZeros = arr.filter(element => element !== 0)
    //creo otro array filtrando y dejando sólo los 0
    let withZeros = arr.filter(element => element == 0)
    //concateno ambos arrays en uno
    let resultado = withOutZeros.concat(withZeros);
    console.log(resultado)
}

moveZeros(array);