function solve(num) { 

 
    let bar = new Array(10).fill('.').map((x , z) => { 

        if(z < num / 10) { 
            x = '%' ;
        }
        return x;
    })


    if(num !== 100) { 
        console.log(`${num}% [${bar.join('')}]`);
        console.log(`Still loading...`);
    }else { 
        console.log(`${num}% Complete [${bar.join('')}]`);
    }
 

}
solve(30);