

const array1 = [1,2,3,4];
const array2 =  ["h","o","l","a"];

const arrayHandler = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) { 
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`)
    }
}

arrayHandler(array1,array2);