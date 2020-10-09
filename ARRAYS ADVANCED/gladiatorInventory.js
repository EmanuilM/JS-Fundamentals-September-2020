function solve(arr = []) { 
 let inventory = arr.shift().split(' ');
 
    for (const el of arr) {
        
        let info = el.split(' ');
        let item = info[1];
        
        if(info.includes('Buy')) { 
            

            if(!(inventory.includes(item))) { 
                inventory.push(item);
            }
        }else if(info.includes('Trash')) { 

            if(inventory.includes(item)) { 
                let itemIndex = inventory.indexOf(item);
                inventory.splice(itemIndex , 1);
            }
        }else if(info.includes('Repair')) { 

            if(inventory.includes(item)) { 
                let itemIndex = inventory.indexOf(item);
                let remove = inventory.splice(itemIndex , 1);
                remove = remove.toString();
                inventory.push(remove);
            }
        }else if(info.includes('Upgrade')) { 

            item = info[1].split('-')

            if(inventory.includes(item[0])) { 

                let upgradeItem = item.join(':');
                let oldItemIndex = inventory.indexOf(item[0]);
                inventory.splice(oldItemIndex + 1 , 0 , upgradeItem);
                
            }
        }
    }

    console.log(inventory.join(' '));
}
