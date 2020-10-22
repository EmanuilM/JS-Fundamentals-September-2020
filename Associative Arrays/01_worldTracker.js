function solve(arr = []) { 
   let myObj = {} ;
    let words = arr.shift().split(' ');

    words.forEach(element => {
       myObj[element] = 0; // element => key 
   });

   arr.forEach(x => {
       if(myObj.hasOwnProperty(x)) { 
        myObj[x]++;
       }
   });

   let entries = Object.entries(myObj).sort((a,b) => b[1] - a[1]);

   for (const kvp of entries) {
       console.log(`${kvp[0]} - ${kvp[1]}`);
   }
}
