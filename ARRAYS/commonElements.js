function solve (firstArr = [] , secondArr = []) { 
    for(let index1 = 0; index1 <= firstArr.length - 1; index1++) { 
        let firstArrEl = firstArr[index1];

        for(let index2 = 0; index2 <= secondArr.length - 1; index2++) { 
            let secondArrEl = secondArr[index2];

            if(firstArrEl === secondArrEl) { 
                console.log(firstArrEl);
            }
        }
    } 
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)