// 16. {value: key} kelue: vay

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

// 	Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”


// var prueba = {
// 	nombre: ‘santi’,
// 	edad: 22,
// 	nacionalidad: ‘de otro planeta’,
// 	documento: 44444444
	
// }
// reverseKeys(prueba) debería devolver:
// {
// santi: ‘nombre’, 
// edad: 22,
// ‘’de otro planeta”: nacionalidad,
//  documento: 44444444
// }



// const input = 33;
// const input = [];
// const input = "hola";
const input = {
    nombre: "santi",
    edad: 22,
    nacionalidad: "de otro planeta",
    documento: 444444
};

const reverseKeys = (input) => {
    switch (typeof input) {
        case 'number':
            console.log("error, input can’t be a number")
            break;
        case 'string':
            console.log("error, input can’t be a string")
            break;
        case 'function':
            console.log("error, input can’t be a function")
            break;
        case 'undefined':
            console.log("error, input can’t be a undefined")
            break;
        case 'undefined':
            console.log("error, input can’t be a undefined")
            break;
        case 'object':
            let newObject = {};
            for(const property in input) {
                if (typeof input[property] == 'string' ) {
                    newObject[`${input[property]}`] = property 
                } else {
                    newObject[property] = input[property]
                }
            }
            console.log(newObject)
            break;
    
        default:
            console.log("error, input can’t be a Array")
            break;
    }
    
}

reverseKeys(input)