function solve(arr = []) { 
    let myObj = {};

    for (const element of arr) {

        let [companyName , userID] = element.split(' -> ');
        
        if(myObj[companyName] === undefined) { 
            myObj[companyName] = []
           
        }

        if(!myObj[companyName].includes(userID)) { 
            myObj[companyName].push(userID);
        }

}
    let entries = Object.entries(myObj);
    let sorting = entries.sort((a,b) => { 
        return a[0].localeCompare(b[0]);
    })


    for (const kvp of sorting) {
        console.log(kvp[0]);
        
        kvp[1].forEach(x => {
            console.log(`-- ${x}`);
        });
    }

}
