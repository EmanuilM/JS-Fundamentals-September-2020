function solve(arr = []) {
   
    let lettersArr = {};
    let myObj = {};

    let dictionary = function() { 
        for (const info of arr) {
            let letter = info[0];
            lettersArr[letter] = [];
            

        }

        return lettersArr;
    }

    myObj = dictionary();

    arr.forEach(el => {
        let letter = el[0];
        el = el.split(' : ').join(': ')
        myObj[letter].push(el)
    });

    myObj = Object.entries(myObj).sort((a,b) => a[0].localeCompare(b[0]))
    
    for (const x of myObj) {
        console.log(`${x[0]}
  ${x[1].sort((a,b) => a.localeCompare(b)).join('\n  ')}`);
    }
   

}
