function printNelement(arr = []) {
    let nStep = arr.pop();
    let output = '' ; 

    for(let index1 = 0; index1 <= arr.length - 1; index1++) { 
        
        if(index1 % nStep == 0) { 
            output += `${arr[index1]} `
        }
    }

    console.log(output)
}