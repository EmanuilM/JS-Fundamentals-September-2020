function solve(input) {
    let racers = input.shift().split(', ');
    input = input.splice(0 , input.indexOf('end of race'));
    let specialSymbolsPattern = /[^a-zA-Z0-9]/g ; 
    let numbersPetter =/[0-9]/g ;

    let storePlayers = {} ; 


    for (const x of input) {
        let cleanText = x.replace(/[^a-zA-Z0-9\s]+/g, '')
        let distanceInKm = cleanText.replace(/[^0-9]/g , '').split('').map(Number).reduce((acc ,  num) => acc + num);
        let racerName = cleanText.replace(/[0-9]/g , '');
        

        if(racers.includes(racerName)) { 
            
            if(storePlayers.hasOwnProperty(racerName)) { 
                storePlayers[racerName] += distanceInKm;
                
            }else { 
                storePlayers[racerName] = distanceInKm;

            }

        }

        
    }

    

  
    let sorting = Object.entries(storePlayers).sort((a,b) => b[1] - a[1]);
    sorting = sorting.splice(0 , 3);
   
    console.log(`1st place: ${sorting[0][0]}`);
    console.log(`2nd place: ${sorting[1][0]}`);
    console.log(`3rd place: ${sorting[2][0]}`);
   
}
