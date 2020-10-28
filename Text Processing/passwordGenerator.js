function solve(arr = []) {
    let firstPass = arr[0];
    let secondPass = arr[1];
    let word = arr[2];
    let newPassword = '';
    let countOfVowels = 0;

    let conctatPass = firstPass.concat(secondPass);
    let j = 0;
    
    for(let i = 0; i < conctatPass.length; i++) { 

        if(conctatPass[i] === 'a' || conctatPass[i] === 'e' || conctatPass[i] === 'i' || conctatPass[i] === 'o'
        || conctatPass[i] === 'u') { 
            countOfVowels++;
            if(j < word.length) { 
                conctatPass =  conctatPass.replace(conctatPass[i] , word[j].toUpperCase());
            }else if(word.length < countOfVowels) { 
                j = 0;
                conctatPass =  conctatPass.replace(conctatPass[i] , word[j].toUpperCase());
            }
 

            j++;
 
        }
    }

    let myArr = Array.from(conctatPass).reverse().join('');
    console.log(`Your generated password is ${myArr}`);
    
    
}
