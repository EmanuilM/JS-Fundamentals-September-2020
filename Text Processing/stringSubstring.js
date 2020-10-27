function solve(word , sentance) {
   sentance = sentance.toLowerCase().split(' ');

  for (const x of sentance) {
      
    if(sentance.includes(word)) { 
       console.log(`${word}`);
      break;
       
    }else { 
        console.log(`${word} not found!`);
        break;
    }
  }
   

}
