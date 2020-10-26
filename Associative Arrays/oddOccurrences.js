function solve(input) {
   let storage = new Map();
   let word = input.split(' ');
   let output = [];
   for (const el of word) {
       if(isNaN(Number(el))) { 
           if(storage.has(el.toLocaleLowerCase())) { 
               storage.set(el.toLocaleLowerCase() , storage.get(el.toLocaleLowerCase()) + 1);
           }else { 
               storage.set(el.toLocaleLowerCase() , 1);
           }
       }else { 
           if(storage.has(el)) { 
               storage.set(el, storage.get(el) + 1);
           }else { 
               storage.set(el ,1 );

           }
       }
   }

   let entries = Array.from(storage);
   let filtering = entries.filter((x) => { 
       if(x[1] % 2 !== 0 ) { 
        output.push(x[0])
       }
   })

   console.log(output.join(' '));

}
