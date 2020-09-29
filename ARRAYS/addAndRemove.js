function addAndRemove(arr = []) {
    let newArray = [] ; 
    let currentNumber = 0;
    let output = '' ; 

    for(let index1 = 0; index1 < arr.length   ; index1++) { 

        currentNumber ++ ; 

        if(arr[index1] == 'add') { 
            newArray.push(currentNumber);
        }

        if(arr[index1] == 'remove') { 
            let removeLastEl = newArray.pop();
        }
    }

    if(newArray.length == 0) { 
        console.log(`Empty`)
    }

    for(let index2 = 0; index2 <= newArray.length - 1; index2 ++) { 
        output += `${newArray[index2]} `
    }
    console.log(output) ; 
}