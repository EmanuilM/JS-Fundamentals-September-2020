function solve(firstArr = [] , secondArr = []) { 
    let result = [] ; 

    for(let index1 = 0; index1 <= firstArr.length - 1; index1++) { 

        if(index1 % 2 == 0) { 
           let sum = Number(firstArr[index1]) + Number(secondArr[index1]);
           result.push(sum);
        }else { 
            let concat = firstArr[index1] + secondArr[index1]
            result.push(concat);
        }
    }
    console.log(result.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);