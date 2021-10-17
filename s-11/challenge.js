/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Escribe un algoritmo que recibe un arreglo con elementos y mueva todos los ceros al final, preservando el orden de los otros elementos que no sean cero.

Ejemplo

Entrada: [false,1,0,1,2,0,1,3,"a"]
Salida: [false,1,1,2,1,3,"a",0,0]
Importante ❗

Considera el tipo de dato
¡No olvides retornar el arreglo con los ceros al final!
*/

var moveZeros = function (arr) {
    const ceros = [] 
    const otros = []
    arr.filter(x =>{
      if(x === 0){
        ceros.push(x)
      }else{
        otros.push(x)
      }
    })
    const total = otros.concat(ceros)
    console.log(total)
    return total
  }