/*
LINK:https://edabit.com/challenge/zQm9YZTTFPhNtYjDr

Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.

Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.

Ejemplos

societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Importante 

El nombre de la sociedad secreta debe ser enteramente en mayúsculas.
*/

function societyName(friends) {
    let abc = friends.sort()
    let msgSecret =abc.map(x => x[0]).join('')
    //animals.map(x=>x[0]).join('');
    
   return msgSecret
	}
  
  societyName(["Adam", "Sarah", "Malcolm"])