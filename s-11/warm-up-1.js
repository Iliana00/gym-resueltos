/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Trolls están atacando tu sección de comentarios!

Una forma común de lidiar con esta situación es remover todas las vocales de los comentarios de trolls para neutralizar el hilo de comentarios.

Tu tarea es escribir una función que reciba un string y retorne un nuevo string con todas las vocales removidas.
*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
  }