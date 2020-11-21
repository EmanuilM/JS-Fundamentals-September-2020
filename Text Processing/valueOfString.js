function solve(arr = []) {
    arr = arr.filter((x) => x !== '');
    let text = arr.shift();
    let command = arr.shift();
    let sum = 0;
    
    if(command === 'LOWERCASE') { 
        text = text.split('');
    
        text.forEach(element => {
            if(element === element.toLowerCase()) { 

                if(element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90 || element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) { 
                    sum += element.charCodeAt(0);

                }
            }
        });
    }else if(command === 'UPPERCASE') { 
        text = text.split('');
        text.forEach(element => {
            if(element === element.toUpperCase()) { 
                if(element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90 || element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) { 
                    sum += element.charCodeAt(0);

                }
            }
        });
    }

    console.log(`The total sum is: ${sum}`);
}
