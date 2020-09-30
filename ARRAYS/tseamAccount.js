function solve(arr = []) {

    let firstGames = arr.shift();
    let gamesInAccount = firstGames.split(' ') 
    let currentGame = '' ;
    let Expansion = '';

    let command = arr.shift();

    while(command !== 'Play!') { 

        if(command.includes('Install')) { 
            let findGame = command.split(' ');
            currentGame = findGame[1];

            if(gamesInAccount.includes(currentGame)) { 

            }else{
                let addGame = gamesInAccount.push(currentGame);
            } 
        } 

        if(command.includes('Uninstall')) { 

            let findGame = command.split(' ');
            currentGame = findGame[1];

            if(gamesInAccount.includes(currentGame)) {

          
            let findIndex = gamesInAccount.indexOf(currentGame);
            let removeGame = gamesInAccount.splice(findIndex , 1);

            }
           
        } 

        if(command.includes('Update')) { 

            let findGame = command.split(' ');
            currentGame = findGame[1];


            if(gamesInAccount.includes(currentGame)) { 
                let findIndex = gamesInAccount.indexOf(currentGame);
                let removeGame = gamesInAccount.splice(findIndex , 1);
                let addGameToEndOfArray = gamesInAccount.push(currentGame);
            }
        } 


        if(command.includes('Expansion')) {
            let findGame = command.split(' ');
            let findExpansion = findGame[1];
            Expansion = findExpansion.split('-');
            currentGame = Expansion[0];
            

            if(gamesInAccount.includes(currentGame)) { 
                let fixExpansion  = Expansion.join(':');
                let findIndex = gamesInAccount.indexOf(currentGame);
                let addGame = gamesInAccount.splice(findIndex + 1  , 0 , fixExpansion);
            }
        } 

        command = arr.shift();

    }


   console.log(gamesInAccount.join(' '))
    
}