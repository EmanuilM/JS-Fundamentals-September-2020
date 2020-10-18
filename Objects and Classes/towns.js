function solve(arr = []) { 
  
    class Town  { 
        constructor(town ,latitude,longitude ) { 
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
   

    for(let i = 0; i < arr.length; i++) { 
        let info = arr[i].split(' | ');
        let cityName = info[0];
        let lat = Number(info[1]);
        let long = Number(info[2]);
        let myObject = new Town(cityName , lat , long);
        console.log(`{ town: '${myObject.town}', latitude: '${myObject.latitude.toFixed(2)}', longitude: '${myObject.longitude.toFixed(2)}' }`);
    }
}
