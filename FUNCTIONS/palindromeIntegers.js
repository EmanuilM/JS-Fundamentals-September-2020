function solve(arr = []) { 
  

  while(arr.length - 1 >= 0) { 
    let nums = arr.shift().toString().split('').map(Number);
    let reversedArr  = nums.slice().reverse();
  
    let isMatching = false;

    for(let i = 0; i < nums.length ; i++) { 
      

      for(let j = 0; j < reversedArr.length; j++) { 
        let firstNumArr = nums[j];
        let secondNumArr = reversedArr[j];

        if(firstNumArr == secondNumArr) { 
          isMatching = true;
         
        }else { 
          isMatching = false;
          
        }


      }

      if(isMatching) { 
        console.log(`true`);
        break;
      }else { 
        console.log(`false`);
        break;
      }


  }
 
}


}
