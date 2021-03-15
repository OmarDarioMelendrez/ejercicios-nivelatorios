// 5. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


//definimos la cadena que vamos a pasar cómo argumento a la función
const cadena = "Dario";


const split = (cadena) => {
    //inicializamos un array vacío 
    let arrayLetras = [];
    //hacemos un ciclo for que se ejecutará por el largo que tenga el string.
    for (let i = 0; i < cadena.length; i++) {
        //agregamos al array cada letra que del string individualmente
        arrayLetras.push(cadena.charAt(i))
    }
    //imprimimos en consola el array con los cambios
    console.log(arrayLetras);
}

split(cadena)