function solve(char1 , char2 ) {
    let result = []
    let start = char1.charCodeAt(0)
    let end = char2.charCodeAt(0)

    function display(start, end) {
        for (let i = start + 1; i < end; i++) {
            result.push(String.fromCharCode(i))
        }
    }

    if(start < end) { 
        display(start , end)
    }else { 
        display(end , start)
    }

    

    console.log(result.join(" "))
}
