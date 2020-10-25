function solve(arr =[]) { 
    let vips = [];
    let regular = [];


    let command = arr.shift();

    while(command !== 'PARTY') { 
             if(command[0] >= '0' && command[0] <= '9') { 
            vips.push(command);
        }else { 
            regular.push(command);
        }

        command = arr.shift();
    
    }

    let invitedPeople = arr.shift();

    while(invitedPeople !== undefined) { 

        if(vips.includes(invitedPeople) || regular.includes(invitedPeople)) { 
            

            if(invitedPeople[0] >= '0' && invitedPeople[0] <= '9') { 
                let index = vips.indexOf(invitedPeople);
                vips.splice(index , 1)
            }else { 
                let index = regular.indexOf(invitedPeople);
                regular.splice(index , 1);
            }
        }

        invitedPeople = arr.shift();
    }

    console.log(vips.length  + regular.length);

    vips.forEach(x => {
        console.log(x);
    });

    regular.forEach(i => {
        console.log(i);
        
    });

}
