function solve(arr = []) {
    let mail = arr.shift();
   
    let commands = arr.shift();
    while(commands !== 'Complete') { 
        if(commands === 'Make Upper') { 
            mail = mail.replace(mail , mail.toUpperCase());
            console.log(mail);
        }else if(commands.includes('GetDomain 3')) { 
            domain(commands);
        }else if(commands === 'GetUsername') { 
            getUser();
        }else if(commands === 'Make Lower') { 
            mail = mail.replace(mail , mail.toLowerCase());
            console.log(mail);
        }else if(commands === 'Encrypt') { 
            encrypt();
        }else if(commands.includes('Replace')) { 
            let [task , char] = commands.split(' ');
            while(mail.includes(char)) { 
                mail = mail.replace(char , '-');
            }
            console.log(mail);
        }

        commands = arr.shift();
    }

    function domain(event) {
        let info = commands.split(' ')
        let count = Number(info[1]);
        let chars = mail.substr(-3);
        console.log(chars);
    }

    function getUser() {
        if(mail.includes('@')) { 
            console.log(mail.slice(0 , mail.indexOf('@')));
        }else { 
            console.log(`The email ${mail} doesn't contain the @ symbol.`);
        }
    }

    function encrypt() {
        let asci = [];
        mail = mail.split('').forEach(element => {
            asci.push(element.charCodeAt());
        });

        console.log(asci.join(' '));
    }

}
