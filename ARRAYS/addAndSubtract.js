function solve(arr = []) {
    let modifyArray = arr.slice();
    let originalArraySum = 0;
    let modifyArrSum = 0;

   for(let index1 = 0; index1 <= modifyArray.length - 1; index1++) { 

    if(modifyArray[index1] % 2 == 0) { 
        modifyArray[index1] += index1;
    }else { 
        modifyArray[index1] -= index1
    }

    originalArraySum += arr[index1];
    modifyArrSum += modifyArray[index1];

   }

   console.log(modifyArray);
   console.log(originalArraySum);
   console.log(modifyArrSum);
}
