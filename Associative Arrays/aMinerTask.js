function solve(arr =[] ) { 

    let myObj = {};


    for(let i = 0; i < arr.length; i++) { 

        if(i % 2 === 0) { 
            let recourceName = arr[i];
            let quantity = arr[i + 1];
            if(myObj[recourceName] === undefined) { 
                myObj[recourceName] = [];
            }

            if(!myObj[recourceName].includes(quantity)) { 
                quantity = Number(quantity);
                myObj[recourceName].push(quantity);

                if(myObj[recourceName].length > 1) {
                    let res = 0; 
                    myObj[recourceName].forEach(x => {
                        res += x;
                    });

                    myObj[recourceName] = [];
                    myObj[recourceName].push(res);
                }
            }

            
        }
    }

    let entries = Object.entries(myObj);
    let sorting = entries.sort((a,b) => { 
        return a[0] - b[0]
    })

    
    for (const kvp of sorting) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
