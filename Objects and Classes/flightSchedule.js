function solve(input) {
    let fligths=input.shift()
    let statusUpdate=input.shift()
    let fligthStatus=input.shift().join()
 
    let obj={}
 
    fligths.forEach(x=> {
        let [number , destination]=x.split(" ")
        obj[number]={[destination]: "Ready to fly"}
    })
 
    statusUpdate.forEach(x=> {
        let [number , updatedStatus]=x.split(" ")
        if(obj[number] !== undefined) {
            obj[number][Object.keys(obj[number])[0]]=updatedStatus
        }
    })
 
    obj=Object.values(obj).forEach(x=> {
        if(Object.values(x)[0]===fligthStatus) {
            console.log({Destination: Object.keys(x)[0] , Status : Object.values(x)[0]});
        }
    })
    
}
