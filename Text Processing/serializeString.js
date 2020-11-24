function solve(input) {
    let text = input.shift().split('');
    let result = {};
    
   for (const index in text) {
      
        let char = text[index];
        if(!result.hasOwnProperty(char)) { 

            if(Number(index) !== - 1) { 
                result[char] = [Number(index)];

            }
        }else { 

            if(Number(index) !== -1) { 
                result[char].push(Number(index));
            }
        }

   }
   
   let entries = Object.entries(result);
   

   entries.forEach(element => {
       console.log(`${element[0]}:${element[1].join('/')}`);
   });
   
   
    
}
