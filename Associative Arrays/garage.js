function solve(arr =[]) {
    let garage = new Map();
    arr.forEach(element => {
        let [garNumber , car] = element.split(' - ')
        if(!garage.has(garNumber)) { 
            
            garage.set(garNumber , [car]);

        }else { 
           let oldCar =  garage.get(garNumber)
           oldCar.push(car)
        
        }


    });

   let sorting = Array.from(garage.entries()).forEach(x => { 
       console.log(`Garage № ${x[0]}`);
    x[1].map(y => y.split(': ').join(' - ')).forEach(x => console.log(`--- ${x}`))

   })

}
