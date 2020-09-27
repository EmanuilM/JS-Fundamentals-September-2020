function solve(arr = [] , magicNum) { 
    let result = [] ; 

    for(let index1 = 0; index1 <= arr.length - 1; index1++) { 
        let currentDigit = arr[index1];

        for(let index2 = index1; index2 <= arr.length - 1; index2++) { 
            let secondDigit = arr[index2 + 1];
            let sum = currentDigit + secondDigit;
            if(sum === magicNum) { 
                result.push(currentDigit , secondDigit);
                console.log(result.join(' '));
                result = [] ;
               
            }
        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8],
    27
    )