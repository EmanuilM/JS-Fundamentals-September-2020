function solve(arr = []) {
    let result = {}
   
    for (const el of arr) {
        let myObj = JSON.parse(el);
        let key = Object.keys(myObj);
        let values = Object.values(myObj);
        result[key] = values;
        
    }

    result = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let i = 0; i < result.length; i++) { 
        console.log(`Term: ${result[i][0]} => Definition: ${result[i][1]}`);
    }


}
