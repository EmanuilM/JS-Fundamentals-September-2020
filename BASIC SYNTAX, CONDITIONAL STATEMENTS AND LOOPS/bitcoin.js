function bitcoin (arr = []) { 
   
   let bitcoinsCounter = 0;
   let dayofFirstPurchase = 0;
   let money = 0;
   let bitcoinPrice = 11949.16;
   let days = 0;
    
   while(arr.length - 1 >= 0 )  { 
       let currentGold = arr.shift();
       days++;
       if(days % 3 == 0) { 
        currentGold = currentGold * 0.70;
        money += currentGold * 67.51;
    }else { 
        money += currentGold * 67.51;
    }
       
       
       if(money >= bitcoinPrice) { 
           bitcoinsCounter++;
           money -= bitcoinPrice;
           dayofFirstPurchase = days;
       }

       
}
    console.log(`Bought bitcoins: ${bitcoinsCounter}`);
    console.log(`Day of the first purchased bitcoin: ${dayofFirstPurchase}`);
    console.log(`Left money: ${money.toFixed(2)}`);
}
bitcoin([100,200,300]);