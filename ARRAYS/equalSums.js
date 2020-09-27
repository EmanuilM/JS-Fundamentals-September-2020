function solve(arr = []) {
    let leftSide = 0;
    let rightSide = 0;
    let isFound = false;
    let currentIndex = 0;
    for (let i = 0; i <= arr.length-1; i++) {
          leftSide = 0;
          rightSide = 0;
        for (let left = 0; left < i; left++) {
            leftSide += arr[left];
        }
        for (let right = i + 1; right < arr.length ; right++) {
            rightSide += arr[right];
        }
        if(leftSide === rightSide){
            currentIndex = i;
            isFound = true;
        }
    
    }
 
    if(!isFound){
            console.log('no');
    }else{
        console.log(currentIndex);
        
    }
}
solve([1, 2])