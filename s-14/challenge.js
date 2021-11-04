/*
LINK: https://leetcode.com/problems/check-if-the-sentence-is-pangram/

Un pangrama es una sentencia donde cada letra del alfabeto Ingles aparece al menos una vez.

Dado un string sentence que contiene solo letras del Ingles en minúscula, retorna true si sentence es un pangrama, or false de otra forma.

Ejemplo 1

**Entrada:** sentence = "thequickbrownfoxjumpsoverthelazydog"
**Salida:** true
**Explicación**: sentence contiene al menos una de cada letra del alfabeto Ingles
Ejemplo 2

**Entrada**: sentence = "leetcode"
**Salida**: false
Importante ❗

sentence consiste solo de letras del alfabeto Ingles.
*/

var checkIfPangram = function(sentence) {
    const alphabet = "abcdefghijklmnñopqrstuvwxy";
    for(let i = 0; i < abc.length; i++){
        let currentLet = [i];
        if(sentence.includes(currentLet)){
            return true
        } else {
            return false
        }
    }
    
};