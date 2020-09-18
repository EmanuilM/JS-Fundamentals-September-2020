function multiplicationTable(num)  { 
    let output = ``
    
    for(let i = 1 ; i <= 10; i++) { 
        let sum = num * i;
        output = `${num} X ${i} = ${sum}`
        console.log(output);
    }
   
   
}

multiplicationTable(5);
