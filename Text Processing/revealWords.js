function solve(words, template) {
    
    words = words.split(', ');
    let splitSentace = template.split(' ');

    for (const el of words) {
            if(splitSentace.includes('*'.repeat(el.length))) { 
                let index = splitSentace.indexOf('*'.repeat(el.length));
                splitSentace[index] = el;
                
            }    
    }

    console.log(splitSentace.join(' '));
}
