function solve(input) {
   let firstHalf = input.substr(0 , input.length / 2);
   let secondHalf = input.substr(input.length / 2)
   let firstArray = Array.from(firstHalf).reverse().join('')
   let secondArray = Array.from(secondHalf).reverse().join('');

   console.log(firstArray);
   console.log(secondArray);

}
