function solve(arr) {
    arr.sort((a ,b) => {
      if(a.length - b.length !==0) {
        return a.length - b.length 
      }else {
        return a.toLowerCase().localeCompare(b.toLowerCase());
       
      }
    })
    
    for(el of arr) { 
      console.log(el)
    }

  }

  
  