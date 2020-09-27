function solve(arr = [] , rotations) { 
   for(let index1 = 0; index1 < rotations; index1++) { 
       let removeEl = arr.shift();
       let addElToTheEnd = arr.push(removeEl);
   }
   console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2);

