/*
Palindromo (Diana/Ana Sofia/Ana Karina)
Crea una función que identifique si un string es un palíndromo (esto es, se lee igual al derecho o al revés), retornando true si lo es o false si no.

isPalindrome('ana') // returns true
isPalindrome('holo') // returns false
isPalindrome('neveroddoreven') // returns true
isPalindrome('stresseddesserts') // returns true

*/
function isPalindrome(word){
    const sep = word.split('').reverse().join('');
       if(word == sep){
         console.log('yes')
         return true
    }else{
      console.log('nop')
      return false}}
    
    isPalindrome('stresseddesserts')