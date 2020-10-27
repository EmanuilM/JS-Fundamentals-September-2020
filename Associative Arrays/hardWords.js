function solve(arr = []) { 
    let text = arr[0].split(' ');
    let words = arr[1];
    
  for (const line of text) {
      
    if(line.includes('_'.repeat(line.length))) { 
        
        for (const currentWord of words) {

            if(currentWord.length === line.length) { 
              let indexOfWhiteBar = text.indexOf(line);
           
            let removeWhiteSpace = text.splice(indexOfWhiteBar , 1); 

              text.splice(indexOfWhiteBar , 0 , currentWord);
              break;

            }
        }
    }else { 
        if(line.includes(`${'_'.repeat(line.length)}.`)) { 
            for (const currentWord of words) {

                if(currentWord.length === line.length) { 
                  let indexOfWhiteBar = text.indexOf(line);
              
                let removeWhiteSpace = text.splice(indexOfWhiteBar , 1); 
    
                  text.splice(indexOfWhiteBar , 0 , currentWord);
                  break;
    
                }
            }
        }else if(line.includes(`${'_'.repeat(line.length)},`)) { 
            for (const currentWord of words) {

                if(currentWord.length === line.length) { 
                  let indexOfWhiteBar = text.indexOf(line);
               
                let removeWhiteSpace = text.splice(indexOfWhiteBar , 1); 
    
                  text.splice(indexOfWhiteBar , 0 , currentWord);
                  break;
    
                }
            }
        }
    }

  }

  console.log(text.join(' '));

}
