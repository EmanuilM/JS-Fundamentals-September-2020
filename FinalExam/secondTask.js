function solve(arr = []) {
    let lines = Number(arr.shift());
    let pattern = /^([$%])(?<cmd>[A-Z][a-z]{2,})\1: \[(?<n1>[0-9]+)\]\|\[(?<n2>[0-9]+)\]\|\[(?<n3>[0-9]+)\]\|$/ ; 



    for(let i = 0; i < lines; i++) { 
        let text = '' ; 
        let str = pattern.exec(arr.shift());
        
        if(str) { 
           text = `${str.groups.cmd}: ${String.fromCharCode(str.groups.n1) + String.fromCharCode(str.groups.n2) + String.fromCharCode(str.groups.n3)}`;
           
        }else { 
            text = `Valid message not found!`
            
        }
        console.log(text);

    }

}
