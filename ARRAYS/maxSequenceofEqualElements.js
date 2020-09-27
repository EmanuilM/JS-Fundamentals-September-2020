function solve(arr = []) { 
  let counter = 1;
  let maxCount = 1;
  let longestMatch = [];
  let result = [];

  for(let i = 0; i <= arr.length - 1; i++) { 
      let currentDigit = arr[i];
      let nextDigit = arr[i + 1];

      if(counter === 1) { 
        result.push(currentDigit)
      }

      if(currentDigit === nextDigit) { 
          counter++;
          result.push(currentDigit);

          if(counter > maxCount) { 
            longestMatch = result;
            maxCount = counter;
      }
      
    }else { 
        result = [];
        counter = 1;
    }
  }
  console.log(longestMatch.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);