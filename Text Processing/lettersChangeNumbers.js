function solve(input) {
    let alhpabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let totalSum = 0;
    input=input.split(" ").map(x=> x.trim()).filter(x => x)
    

    for (const el of input) {
        let info = el.split('');
        let firstLetter = info.shift();
        let lastLetter = info.pop();
        let number = Number(info.join(''));
        let res = 0;

        if(firstLetter === firstLetter.toUpperCase()) { 
            let indexOfLetter = alhpabet.indexOf(firstLetter.toLowerCase()) + 1;
            res += number / indexOfLetter;
            
            
        }else if(firstLetter === firstLetter.toLowerCase()) { 
            let indexOfLetter = alhpabet.indexOf(firstLetter.toLowerCase()) + 1;
            res += number * indexOfLetter;

        }
         if(lastLetter === lastLetter.toUpperCase()) { 
            let indexOfLetter = alhpabet.indexOf(lastLetter.toLowerCase()) + 1;
            res -= indexOfLetter;
            

        }else if(lastLetter === lastLetter.toLowerCase()) { 
            let indexOfLetter = alhpabet.indexOf(lastLetter.toLowerCase()) + 1;
             res +=indexOfLetter

        }
        totalSum += res;
    }

    console.log(totalSum.toFixed(2));
}
