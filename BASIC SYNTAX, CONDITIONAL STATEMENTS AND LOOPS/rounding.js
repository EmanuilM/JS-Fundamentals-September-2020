function roudning (num , precision) { 
    if(precision > 15) { 
        precision = 15;

    }
    let parsing = parseFloat(num.toFixed(precision));
    console.log(parsing);
    
}
roudning(10.5,3)