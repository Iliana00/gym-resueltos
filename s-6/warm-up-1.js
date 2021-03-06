/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

LINK: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript */


function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }

    for(let i = 0; i < input.length; i++) {
        let suma = [0, 0]; 
        if(input[i] <= 0) {
            suma[1] += input[i];
      } else {
            suma[0] += 1;
      }
    }
    return suma;
}