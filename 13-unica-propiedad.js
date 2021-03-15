// 13. Única propiedad
// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

// Ejemplo: 
//  var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]


const arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]

const oneProperty = (arr, atributo) => {
    let newArray = [];
    arr.map(({name,edad}) => {
        let attr = atributo;
        let objeto = new Object();
        if (attr == 'name') {
            objeto[`${attr}`] = name;
            newArray.push(objeto)
        }
        if (attr == 'edad') {
            objeto[`${attr}`] = edad;
            newArray.push(objeto)
        }
        // newArray.push(element.edad)
    })
    console.log(newArray)
}

oneProperty(arreglo, "name")