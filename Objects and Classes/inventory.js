function solve(arr = []) { 
   let heroes = [] ; 

    for (const el of arr) {
        let heroInfo = [name , level , items]  = el.split(' / ');
        
        items = items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ')
        let myObj = { 
            Hero: name , 
            level: level,
            items: items,
        }

        heroes.push(myObj);

    }

    heroes.sort((a,b) => a.level - b.level);

    heroes.forEach(x => {
        console.log(`Hero: ${x.Hero}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);


    });
    

}
