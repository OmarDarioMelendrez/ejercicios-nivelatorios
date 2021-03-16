// 15. Prefijos Telefónicos
// 	Utils:
// 	var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo : 

// {
// 	54: “Argentina”,
// 	55: ”Brasil”,
// 	56: ”Ecuador”,
// 	57: ”Bolivia”
// }


// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

// Ejemplo: 
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”




const prefijos = [54,55,56,57];

const paises = ["argentina","brasil","ecuador","bolivia"];

const validarPrefijo = (number) => {
    let objetoPrefijos = {};
    let start = false;
    prefijos.map((e,i) => {
        objetoPrefijos[e] = paises[i];
    })
    start = prefijos.filter(e => number.startsWith(`${e}`))
    if (Object.entries(start).length == 0) {
        console.log("El número no pertenece a nuestros países")
    } else {
        console.log(`El número pertenece a ${objetoPrefijos[start]}`)
    }
}

validarPrefijo("55412345678")