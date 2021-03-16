// 17. Palindromo
// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

// Definición de palíndromo aquí.

// Ejemplo: 

// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false


const input = "hola";

const palindromo = (input) => {
    let inputLower = input.toLowerCase()
    strReverse = inputLower.split('').reverse().join('')
    if (strReverse === inputLower) {
        console.log(true)
    } else {
        console.log(false)
    }
}

palindromo(input)