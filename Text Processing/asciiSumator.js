function solve(arr = []) {

    let firstElement = arr.shift().charCodeAt();
    let secondElement = arr.shift().charCodeAt();
    let text = arr.shift().split('');
    let sum = 0;

    

    text.forEach(element => {

        if(firstElement > element.charCodeAt() && secondElement < element.charCodeAt()) { 
            sum += element.charCodeAt();
        }else if(element.charCodeAt() > firstElement && element.charCodeAt() < secondElement) { 
            sum += element.charCodeAt()
        }

    });

    console.log(sum);


        

}
