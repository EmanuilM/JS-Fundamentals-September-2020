function solve(arr = []) { 

    class Employee { 
        constructor(name , personalNumber) { 
            this.name = name;
            this.personalNumber = personalNumber;
        }

         output(name , personalNumber ) {
            console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
        }
    }

    arr.forEach(el => {
        let name = el;
        let employeeNumber = el.length;
        let createObj = new Employee(name , employeeNumber);

        createObj.output(name ,employeeNumber );
    });

}
