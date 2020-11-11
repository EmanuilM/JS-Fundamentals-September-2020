function solve(arr = []) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>[\d]+)\|[^|$%.]*?(?<price>[\d]+.*?[\d]*)\$/g ;

    let totalIncome = 0;

    let command = arr.shift();

    while(command !== 'end of shift') { 

        while((valid = pattern.exec(command)) !== null) { 
            let currentPrice = valid.groups.price * valid.groups.count;
            console.log(`${valid.groups.customer}: ${valid.groups.product} - ${currentPrice.toFixed(2)}`);
            totalIncome += Number(valid.groups.count) * Number(valid.groups.price);
            
        }
        

        command = arr.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}
