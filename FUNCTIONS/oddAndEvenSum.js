function solve(input) { 
    let returnToString  = input.toString();
    let arr = returnToString.split('').map(Number);
    
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i <= arr.length - 1; i++) { 
        let currentNum = arr[i];

        if(currentNum % 2 == 0) { 
            evenSum += currentNum;
        }else { 
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
