function solve(arr = []) { 
    let parking = new Set();

    for (const info of arr) {
        let = [direction , carNumber] = info.split(', ');

       if(direction === 'IN' && !parking.has(carNumber)) { 
          parking.add(carNumber);
          
       }else if(direction === 'OUT' && parking.has(carNumber)) { 
            parking.delete(carNumber)
       }
    }

    let entries = Array.from(parking);
    if(entries.length === 0) { 
        console.log(`Parking Lot is Empty`);
    }else { 
        let result = Array.from(parking);
        let sortingOutPut = result.sort();
        
       console.log(`${sortingOutPut.join('\n')}`);
    }
   
}
