function solve(arr = []) { 
    let myObj = new Map();
    let words = arr.shift().split(' ')
 
    words.forEach(element => {
        myObj.set(element , 0);
   });

   arr.forEach(x => {
       if(myObj.has(x)) { 
           let oldEl = myObj.get(x);
           let newEl = myObj.set(x , oldEl + 1);
       }
   });

   let entries = Array.from(myObj.entries()).sort((a,b) => b[1] - a[1]);

   for (const kvp of entries) {
       console.log(`${kvp[0]} - ${kvp[1]}`);
   }
}
