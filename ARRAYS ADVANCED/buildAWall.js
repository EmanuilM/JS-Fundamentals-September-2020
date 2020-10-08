function solve(arr = []) { 

    const concratePerWall = 195;
    let materialsUsedPerDay = 0;
    let output = [];
    let entireMaterial = 0;
    const oneCubicYard = 1900;

    while(arr.length) { 
        let i = 0;
        materialsUsedPerDay = 0;

       

        while(i < arr.length) {  // currentDay

           
            if(arr[i] === 30) { 
                let finxInx = arr.indexOf(arr[i]);
                let remove = arr.splice(finxInx , 1);
                continue;
              }


            if(arr[i] !== 30) { 
                materialsUsedPerDay += concratePerWall;
                entireMaterial += concratePerWall;
                arr[i] += 1;

               
            }

            i++;
        }

        if(materialsUsedPerDay !== 0) { 
            output.push(materialsUsedPerDay)
            
        }

        
    }

    console.log(output.join(', '));
    console.log(`${entireMaterial * oneCubicYard} pesos`);

    
   
}
