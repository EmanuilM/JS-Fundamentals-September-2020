function solve(arr, bomb) {
    let bombNumber = bomb[0]
    let distance = bomb[1]
    let index = arr.indexOf(bombNumber)
    let sum = 0;

    while(index > -1) {
        arr.splice(Math.max((index-distance) , 0) , Math.min(distance , index))
        index=arr.indexOf(bombNumber)
        arr.splice(index , (distance + 1))
        index=arr.indexOf(bombNumber)
    }
    

   
        
        for(let el of arr) {
            sum += Number(el)
        }
        
        console.log(sum);
    
}
