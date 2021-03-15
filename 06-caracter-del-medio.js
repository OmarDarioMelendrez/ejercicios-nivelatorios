// 6. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”



//creamos string a pasar cómo argumento
const string = "Holas"

const middleCharacter = (string) => {
    //inicializamos variables de posición de corte y cantidad de caractéres a cortar.
    let posicion;
    let largo;
    //creamos condicional si el largo del string es impar
    if(string.length % 2 == 1) {
        //si el string es impar sacamos la posicion de corte dividiendo el string en 2
        posicion = string.length / 2;
        //indicamos el numero de caracteres a cortar del string
        largo = 1;
    } else {
        //si el strin es par sacamos posición de corte dividiendo en dos y restando 1 
        posicion = (string.length / 2) - 1;
        //indicamos el numero de caracteres a cortar del string
        largo = 2;
    }
    //cortamos el string indicando indice de inicio de corte y indice de final del corte.
    console.log(string.substring(posicion, posicion + largo))
}

middleCharacter(string)