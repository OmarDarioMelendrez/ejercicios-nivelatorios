// 10. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

// Ejemplo: 
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9


const array = [1, 10, 43, 900, 20, 8];

const minSum = (arr) => {
    let min1 = Math.min(...arr)
    let newArr = arr.filter(element => element !== min1)
    let min2 = Math.min(...newArr)
    let result = min1 + min2;
    console.log(result)
}

minSum(array);