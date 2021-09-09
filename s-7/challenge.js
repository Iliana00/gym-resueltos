/*
LINK: https://leetcode.com/problems/check-if-the-sentence-is-pangram/#;

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

*/

var checkIfPangram = function(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxy";
    for(let i = 0; i < alphabet.length; i++){
        if(sentence.includes(alphabet[i])){
            return true
        } else {
            return false
        }
    }
    
};
