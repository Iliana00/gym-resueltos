/*El objetivo es crear una función que elimine el primer y último 
carácter del string. La función tiene como parámetro un string 'str'. 
No tienes que preocuparte por cadenas con menos de dos caracteres.

Ejemplos

removeChar('eloquent') ➞ 'loquen';
removeChar('country') ➞ 'ountr'; 

url= https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
*/
function removeChar(str){
    let firstOne = str.slice(1, -1);
    return firstOne
   
   };
   
   
   