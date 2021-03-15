// 14. Guerra de palabras
//  	Utils: 
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”



const abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

const warWords = (word1, word2) => {
    let palabra1 = word1.split("");
    let palabra2 = word2.split("");
    let valorPalabra1 = 0;
    let valorPalabra2 = 0;
    palabra1.map(element => {
        valorPalabra1 += abc[`${element}`]
    })
    palabra2.map(element => {
        valorPalabra2 += abc[`${element}`]
    })
    if (valorPalabra1 > valorPalabra2) {
        console.log(word1)
    } else {
        console.log(word2)
    }
}

warWords("love", "friendship")