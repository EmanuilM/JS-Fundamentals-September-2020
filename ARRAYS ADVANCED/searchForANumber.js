function solve(firstArr = [] , secondArr = []) { 
    let elemtsToTake = Number(secondArr.shift());
    let toDelete = Number(secondArr.shift());
    let lookingFor = Number(secondArr.shift());

    let counter = 0; 
    let newArray = firstArr.slice(0,elemtsToTake);
    newArray.splice(0 , toDelete);
    
    for(let i = 0; i <= newArray.length; i++) { 

        if(newArray[i] == lookingFor) { 
            counter++;
        }
    }

    console.log(`Number ${lookingFor} occurs ${counter} times.`);


}
