// 3. Sumatoria
// 	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

// Ejemplo: 
// sumattion(3) debe retornar 6 por que hace (1 +2 +3)
// sumattion(8) debe retornar 36

//defino la variable que pasamos por parametro a la función
const valor = 8;

const sumattion = (n) => {
    //defino una variable la cual va a almacenar la sumatoria de las iteraciones
    let sum = 0;
    //realizo un ciclo el cual se va a ejecutar hasta que se sumen todos los numeros anteriores al parametro
    for (let i = n; i > 0; i--) {
        //sumamos el valor de i a la variable sum
        sum += i
    }
    //imprimimos en consola el valor final de la suma
    console.log(sum)
}

sumattion(valor);