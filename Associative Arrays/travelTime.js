function solve(arr) {

    let myObj = {};
    let result = [];

    for (const el of arr) {
        let [countryName , townName , travelConst] = el.split(' > ');

        if(myObj[countryName] === undefined) { 
            myObj[countryName] = {};
           

        }
        if(myObj[countryName][townName] === undefined) { 
            myObj[countryName][townName] = Number(travelConst);
            
        }

        if(myObj[countryName][townName] > travelConst) { 
            myObj[countryName][townName] = Number(travelConst);
        }

    
    }

    myObj = Object.entries(myObj).sort((a,b) => a[0].localeCompare(b));
    
    myObj.forEach(x => {
        let collector = [];
        let entries = Object.entries(x[1]);

        for (const kvp of entries) {
            let key = kvp[0];
            let value = kvp[1];

            collector.push(`${key} -> ${value}`);
            
        }

        result.push(collector);
    });

    
    for(let i = 0; i< myObj.length; i++) { 
        console.log(`${myObj[i][0]} -> ${result[i].join(' ')}`);
    }
}
