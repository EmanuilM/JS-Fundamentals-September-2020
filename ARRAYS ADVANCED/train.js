function solve(arr = []) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacityOfEveryWagon = Number(arr.shift());

    for(let i = 0; i < arr.length; i++) { 
       let currentInfo = arr[i];
       let command = currentInfo.split(' ');
       let task = command[0];

       if(task == 'Add') { 
           let num = Number(command[1]);
           wagons.push(num);
       }else { 
           for(let j = 0; j < wagons.length; j++) { 

               if(wagons[j] + Number(task) <= maxCapacityOfEveryWagon) { 
                wagons[j] += Number(task);
                break;
               }
           }
       }
    }

    console.log(wagons.join(' '));

   
}
