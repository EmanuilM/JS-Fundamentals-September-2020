function solve(input = []) { 
    let health = 100;
    let coins = 0;
    let makeArrToString = input.toString();
    let dungeonRooms = makeArrToString.split('|'); // split input

    let bestRoomCounter = 0;
    let IsthroughAllRooms = false; 



    for (const el of dungeonRooms) {
      
      let currentRoomInfo = el.split(' ');
      let command = currentRoomInfo[0];
      let value = Number(currentRoomInfo[1]);
      
      if(command == 'potion') { 
        IsthroughAllRooms = true;
        bestRoomCounter++;
        if(health < 100) { 
            health += value;

            if(health > 100) { 
                let sum = health - 100;
                let givenHp = value - sum;
                health = 100;
                console.log(`You healed for ${givenHp} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else { 
                let hpGiven = value;
            
                console.log(`You healed for ${hpGiven} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
           
           
        }
      }else if(command == 'chest') { 
        IsthroughAllRooms = true;
          bestRoomCounter++;
          console.log(`You found ${value} coins.`)
          coins += value;
          
      }else{
        IsthroughAllRooms = true;
          bestRoomCounter++;
        health -= value;
        if(health <= 0) { 
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${bestRoomCounter}`);
            break;
        }else { 
            console.log(`You slayed ${command}.`);
        }
      }
   
    }
    
    if(IsthroughAllRooms == true && health >= 1) { 
       console.log(`You've made it!`);
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
    }
    


}
