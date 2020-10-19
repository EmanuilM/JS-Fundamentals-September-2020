function solve(firstArr  = [] , secondArr = []) {   

  function checker(arr , myObj) {  
     for(let i = 0; i < arr.length; i+=2) { 
         let stockName = arr[i];
         let quantity = Number(arr[i + 1]);
         if(!myObj.hasOwnProperty(stockName)) { 
             myObj[stockName] = quantity;

         }else { 
            myObj[stockName] += quantity;
         }
     }
     return myObj;
  }

  let result = checker(firstArr , {});
  let output = checker(secondArr, result);

  for (const key in output) {
    console.log(`${key} -> ${output[key]}`);
  }
  
}
