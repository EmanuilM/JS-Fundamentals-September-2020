function solve(n1 , n2 , n3) { 

   function sum (n1 , n2) { 
      return n1 + n2;
   }

   function substract(a,b) { 
     return  a - b;
   }

   let sumResult = sum(n1, n2);
   let output = substract(sumResult , n3);

   console.log(output);

}
