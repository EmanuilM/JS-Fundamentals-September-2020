function solve(input) { 
    let output = '' ;
    for(let i = 0; i < input.length; i++) { 
        let char = output[output.length - 1];
        if(char !== input[i]) { 
            output += input[i];
        }
    }

    console.log(output);
}
