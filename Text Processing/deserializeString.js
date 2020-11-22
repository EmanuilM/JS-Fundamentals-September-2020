function solve(input) {
   let string = []; 

   let command = input.shift();
   while(command !== 'end') { 
       let [char , indexes] = command.split(':');
       indexes = indexes.split('/').map(Number);
        
        indexes.forEach(element => {
            string[element] = char;
        });
       command = input.shift() ;
   }

   console.log(string.join(''));
}
