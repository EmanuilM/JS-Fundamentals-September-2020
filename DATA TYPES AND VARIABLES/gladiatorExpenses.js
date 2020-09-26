function solve (lostFightCount , helmetPrice , swordPrice, shieldPrice, armourPrice) {

    let sumToPay = 0;
    let counter = 0;

    for(let i = 1; i <= lostFightCount; i++) { 
        let bHelmet = '' ; 
        let bSword = '' ;

        if(i % 2 == 0) { 
            sumToPay += helmetPrice; 
            bHelmet = 'broken'
        }
         if(i % 3 == 0) { 
            sumToPay += swordPrice; 
            bSword = 'broken'
        }

        if(i % 2 == 0 && i % 3 == 0) { 
            sumToPay += shieldPrice; 
            counter++;

            if(counter % 2 == 0) { 
                sumToPay += armourPrice;
            }

        }


    }
    console.log(`Gladiator expenses: ${sumToPay.toFixed(2)} aureus`)
}
solve(7,2,3,4,5);
