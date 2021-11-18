/*
Nombres formateados (Alicia)
Implementa una función que recibe un arreglo de strings con nombres de personas, y retorna un nuevo arreglo de strings con los nombres formateados.

Ejemplo

Entrada: ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE']
Salida: [ 'M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride' ]
*/

function names(n){
    const names = []
    const firstName = []
    const lastName = []
    n.map(elem =>{
      firstName.push(elem[0].toUpperCase() + ".")         
            
    })
    
      console.log(firstName)
      
  }
  names(['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE'])