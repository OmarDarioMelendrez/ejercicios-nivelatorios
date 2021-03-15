// 11. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]


const numero = 10;

const arregloDeObjetos = (number) => {
    let newArray = [];
    for (let i = 1; i <= number; i++) {
        let objeto = {valor: i}
        newArray.push(objeto);
    }
    console.log(newArray);
}

arregloDeObjetos(numero);