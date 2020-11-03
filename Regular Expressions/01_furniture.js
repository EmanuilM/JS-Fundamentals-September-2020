function solve(input) {
    let pattern = />>(?<item>\w+)<<(?<price>\d*[^!]\d+)!(?<quantity>\d+)/g ;
    let line = input.slice(0 , input.indexOf('Purchase')).join('\n');
    
    let newArr = Array.from(line.matchAll(pattern));

   
    let totalSum = 0;
    let output = [];

    newArr.forEach(element => {
        totalSum += Number(element[2]) * Number(element[3]);
        output.push(element[1]);
    });

    console.log(`Bought furniture:`);
    for (const x of output) {
        console.log(x);
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}
