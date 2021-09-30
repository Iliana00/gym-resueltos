/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

Considera un arreglo/lista de ovejas donde algunas ovejas pueden estar perdidas. Necesitamos a una función que cuente el numero de ovejas presentes en un arreglo (true significa presente)
*/


function countSheeps(arrayOfSheep) {

     const sheeps = arrayOfSheep.filter(x => x === true)
     const totalSheeps = sheeps.length
     //console.log(totalSheeps)
     return totalSheeps
    }
  
    //console.log(countSheeps())
  
    countSheeps([true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true])