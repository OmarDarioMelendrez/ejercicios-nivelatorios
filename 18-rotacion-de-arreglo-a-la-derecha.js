// 18. Rotación de arreglo a la derecha
// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

// Ejemplo: 
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]


const rotar = (arr, indice) => {
    let recorteFinal = arr.slice(-indice);
    let recorteInicial = arr.slice(0,-indice)
    let resultado = recorteFinal.concat(recorteInicial)
    console.log(resultado)
}

// rotar([1, 2, 3, 4, 5], 2)
rotar([1, 2, 3, 4, 5], 3)