function solve(input) { 
   let str = input.toString();
   let result = 0;
   for(let i = 0; i <= str.length -1; i++) { 
       let currentNumber = Number(str[i]);
       result += currentNumber
   }
   console.log(result);
}
