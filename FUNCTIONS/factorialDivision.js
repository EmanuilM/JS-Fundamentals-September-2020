function solve(n1 , n2) {
    let res = [n1 , n2]
    let result = []
    res.forEach((x, z) => {
        for (let j = x; j > 0; j--) {
            result[z] = j * (result[z] || 1)
        }
    })

    console.log((result[0] / result[1]).toFixed(2))
}
solve(5,2)