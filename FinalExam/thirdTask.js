function solve(arr =[]) {
    
    let mealCollection = {};
    let command = arr.shift();
    let unLikedCounter = 0;
    while(command !== 'Stop') { 
        let [task , guest , meal] = command.split('-');
        if(task === 'Like') { 

          if(!mealCollection.hasOwnProperty(guest)) { 
            mealCollection[guest] = [meal];
          }else {
            if(!mealCollection[guest].includes(meal)) { 
                mealCollection[guest].push(meal);
            }
          }
          
        }else if(task === 'Unlike') { 
            if(!mealCollection.hasOwnProperty(guest)) { 
                console.log(`${guest} is not at the party.`);
            }else if(!mealCollection[guest].includes(meal)) { 
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
            }else { 
               console.log(`${guest} doesn't like the ${meal}.`);
               let index = mealCollection[guest].indexOf(meal);
               mealCollection[guest].splice(index , 1);
               unLikedCounter++;
              
            }
        }
        command = arr.shift();
    }

   let entries = Object.entries(mealCollection);

   let sorting = entries.sort((a,b) => { 
       if(b[1].length - a[1].length !== 0) { 
           return b[1].length - a[1].length;
       }
       return a[0].localeCompare(b[0]);
   })

   sorting.forEach(element => {
       console.log(`${element[0]}: ${element[1].join(', ')}`);
   });
   console.log(`Unliked meals: ${unLikedCounter}`);
   
}
