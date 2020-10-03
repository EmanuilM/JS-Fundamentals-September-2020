function solve(n1 , n2 , n3) {
    let smallestNum = n3;

    if(n1 <= n2 && n1 <= n3) { 
        smallestNum = n1;
    }else if(n2 <= n1 && n2 <= n3) { 
        smallestNum = n2;
    }
    console.log(smallestNum);
}
