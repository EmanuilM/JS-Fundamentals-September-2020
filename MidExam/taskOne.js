function solve(days , dailyPlunder ,expectedPlunder) { 
    
    let pludner = 0;

    for(let i = 1; i <=days; i++) { 
        pludner += dailyPlunder;

        if(i % 3 === 0) { 
            pludner += dailyPlunder * 0.50;
        }

        if(i % 5 === 0) { 
            pludner -= pludner * 0.30;
        }
    }

    if(pludner >= expectedPlunder) { 
        console.log(`Ahoy! ${pludner.toFixed(2)} plunder gained.`);
    }else { 
        let result =  pludner * 100 / expectedPlunder
        console.log(`Collected only ${result.toFixed(2)}% of the plunder.`);
    }
    
}
