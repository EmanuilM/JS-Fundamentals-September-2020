function solve(arr = []) {
  let movieList = [];
    function directedBy(event) { 
      let splitting = event.split(' directedBy ');
      let movieName = splitting[0];
      let directorName = splitting[1];

     let film = movieList.find(x => x.name === movieName);

     if(film) { 
       film.director = directorName;
     }

    }

    function onDate(event) { 
      let splitting = event.split(' onDate ');
      let movieName = splitting[0];
      let movieDate = splitting[1];

      let film = movieList.find(x => x.name === movieName);

      if(film) { 
        film.date = movieDate;
      }

    }

    for(let i = 0; i < arr.length; i++) { 
      let splitting = arr[i];

      if(splitting.includes('addMovie')) { 
        splitting = splitting.split(' ');
        let commandIndex = splitting.indexOf('addMovie');
        splitting.splice(commandIndex , 1);
        let movieName = splitting.join(' ');
        movieList.push({name: movieName});
      }else if(splitting.includes('directedBy')) { 
        directedBy(splitting);
      }else if(splitting.includes('onDate')) { 
        onDate(splitting);
      }
      
    }

    let filteringResult = movieList.filter(x => Object.keys(x).length === 3);
    filteringResult.forEach(x => {
      console.log(JSON.stringify(x));
    });
   
}
