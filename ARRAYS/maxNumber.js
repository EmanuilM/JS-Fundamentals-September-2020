function solve(array = []) {
   let result = []; 
   for(let index1 = 0; index1 <= array.length - 1; index1++) { 
       let currentNum = array[index1];
       let isItBigget = false;
       for(let j = index1; j < array.length ; j++) { 
           

           if(currentNum <= array[j + 1]) { 
               isItBigget = true;
               break;
           }
       }

       if(!isItBigget) { 
           result.push(currentNum);
       }
   }
    console.log(result.join(' '));
}

solve([41, 41, 34, 20])
