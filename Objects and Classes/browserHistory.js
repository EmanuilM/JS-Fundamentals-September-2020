function solve(myObj , arr) {

    for(let i = 0; i < arr.length; i++) { 
        let [task , stieName] = arr[i].split(' ');

        if(myObj['Open Tabs'].includes(stieName) && task === 'Close') { 

            let index = myObj['Open Tabs'].indexOf(stieName);
            if(myObj['Open Tabs'][index] !== undefined) { 
                let removedSite =  myObj['Open Tabs'].splice(index , 1 );

            }

            myObj['Recently Closed'].push(stieName);
            myObj['Browser Logs'].push(`${task} ${stieName}`);

        }else if(!myObj['Open Tabs'].includes(stieName) && task === 'Open') { 

          myObj['Open Tabs'].push(stieName);
          myObj['Browser Logs'].push(`${task} ${stieName}`);

        }else if(task === 'Clear') { 
            
            myObj['Browser Logs'] = [];
            myObj['Open Tabs'] = [];
            myObj['Recently Closed'] = [];
        }
    }

    let entries = Object.entries(myObj);
   

   
    console.log(`${entries[0][1]}`);
    console.log(`${entries[1][0]}: ${entries[1][1].join(', ')}`);
    console.log(`${entries[2][0]}: ${entries[2][1].join(', ')}`);
    console.log(`${entries[3][0]}: ${entries[3][1].join(', ')}`);
    


} 
