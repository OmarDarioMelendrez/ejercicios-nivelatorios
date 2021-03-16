// 19. Consecutivos similares
// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
// Ejemplo: 
// consecutivosSimilares(“AAAA”) debe retornar 3
// consecutivosSimilares(“BBBBB”) debe retornar 4
// consecutivosSimilares(“ABABABAB”) debe retornar 0
// consecutivosSimilares(“BABABA”) debe retornar 0
// consecutivosSimilares(“AAABBB”) debe retornar 4


const input = "AAABBB";

const consecutivosSimilares = (input) => {
    let arrOfString = input.split("");
    let count = 0;
    let prevLetter = "";
    arrOfString.map(element => {
        if (prevLetter === element) {
            count += 1;
        }
        prevLetter = element
    })
    console.log(count)
}

consecutivosSimilares(input)
