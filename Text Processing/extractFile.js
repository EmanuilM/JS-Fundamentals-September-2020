function solve (input) { 
 let file = input.substring(input.lastIndexOf('\\') + 1) ; 
 let fileName = file.substring(0 , file.lastIndexOf('.'));
 let exct = file.substring(file.lastIndexOf('.') + 1);
 

 console.log(`File name: ${fileName}`);
 console.log(`File extension: ${exct}`);
}
