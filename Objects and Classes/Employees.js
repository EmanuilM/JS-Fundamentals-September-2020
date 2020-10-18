function solve(arr = []) { 
    let employee = {} ; 

    for (const el of arr) {
        let personalNumber = el.length
        employee.Name = el;
        employee.number = personalNumber;
        
        for (const key in employee) {
            console.log(`Name: ${employee[key]} -- Personal Number: ${personalNumber}`);
            break;
        }
    }

    
}
