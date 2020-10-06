function solve(arr = []) { 
    let listOfPeople = [] ; 

    for (const el of arr) {
        let info = el.split(' ');
        let name = info[0];

        if(el.includes('not')) { 

            if(listOfPeople.includes(name)) { 
                let findNameIndex = listOfPeople.indexOf(name);
                let removeFromList = listOfPeople.splice(findNameIndex , 1);
            }else { 
                console.log(`${name} is not in the list!`);
            }
        }else { 
            if(listOfPeople.includes(name)) { 
                console.log(`${name} is already in the list!`);
            } else { 
                listOfPeople.push(name);
            }
            
        }
    }

    for (const people of listOfPeople) {
        console.log(people);
    }
    
}