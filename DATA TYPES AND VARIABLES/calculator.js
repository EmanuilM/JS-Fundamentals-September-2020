function solve(num1,operator,num2) {
    let result = 0;

    if(operator === '+') { 
        result = Math.abs(num1 + num2);
        console.log(result.toFixed(2));
    }else if (operator === '-') { 
        result = Math.abs(num1 - num2);
        console.log(result.toFixed(2))
    } else if(operator === '/') { 
        result = Math.abs(num1 / num2);
        console.log(result.toFixed(2))
    }else {
        result = Math.abs(num1 * num2);
        console.log(result.toFixed(2));
    }
}