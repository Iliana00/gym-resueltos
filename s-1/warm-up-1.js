export const printArrayStar = (num) => {
    let numbers = [];
    //for(let i = 0; i = num.length; i++){}
   numbers = num.map(function(x) {
      return x * '*';
   });
  };
  
  export default printArrayStar;