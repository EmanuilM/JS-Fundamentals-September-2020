function solve(arr = []) { 
    let slicedArr = arr.slice();
    let biggestNums = arr.sort((a , b) => b - a );
    let lowerNumbers = slicedArr.sort((a , b) => a - b);
    let output = [];

   

    biggestNums.forEach((x , i) => { 
        output.push(x);
        output.push(lowerNumbers[i])
    })

    output = output.splice(output.length / 2).reverse();

    console.log(output.join(' '));
}
