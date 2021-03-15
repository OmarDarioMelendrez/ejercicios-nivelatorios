// 9. Mezclando arreglos I
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo:
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = ["h", "o", "l", "a"];

const mezclarArreglos = (arr1, arr2) => {
  let arrLarge;
  let arrShort;
  const arrMezclados = [];
  if (arr1.length >= arr2.length) {
    arrLarge = arr1;
    arrShort = arr2;
    arrLarge.map((e, i) => {
      arrMezclados.push(e);
      if (arrShort.length > i) {
        arrMezclados.push(arrShort[i]);
      }
    });
  } else if (arr1.length < arr2.length) {
    arrLarge = arr2;
    arrShort = arr1;
    arrLarge.map((e, i) => {
      if (arrShort.length > i) {
        arrMezclados.push(arrShort[i]);
      }
      arrMezclados.push(e);
    });
  }
  console.log(arrMezclados);
};

mezclarArreglos(array1, array2);
